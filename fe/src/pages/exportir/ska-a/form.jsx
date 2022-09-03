import React, { useState, useContext } from "react";
import Context from "@context";
import { fetcher, useNavigate } from "@component/gip-useForm/fetcher";

import {
  Button,
  Stack,
  Modal,
  Typography,
  TextField,
  MenuItem,
  Divider,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import File from "@ui/file";
import context from "@/component/context";
import { useFormik } from "formik";
import * as yup from "yup";

import InputFile from "@component/gip-useForm/inputFile";
import { fetcherMultipart } from "@component/gip-useForm/fetcher";
import BackIcon from "@/component/ui/backIcon";
import { meta } from "./_meta";
import PaperA4 from "@component/paperA4";
import InputInline from "@component/gip-useForm/inputInline";
import Input from "@component/gip-useForm/smallTextfield";
import { fdate } from "@/component/helper/formating";
import SenttoImportir from "@component/apps/senttoImportir";
import Sign from "@component/apps/sign";
import Sentto from "@/component/apps/sentto";
import Approval from "@/component/apps/approval";
import InputDate from "@component/gip-useForm/inputDate";

import {
  RInvoice,
  RShippingInstruction,
  RPackingList,
  RBillOfLading,
  RNPE,
  RSKAA,
  RSKAD,
} from "@component/apps/selectRef";

export default function App({ refdata }) {
  const [formdata, setformdata] = useState({});
  const { auth } = useContext(Context);

  async function handleRef(v, target) {
    let temp = formdata;
    temp[target] = v;
    setformdata({ ...temp });
  }

  return (
    <Stack>
      <Stack alignItems={"center"}>
        <Stack width={"210mm"} className="hide_on_print">
          <BackIcon />

          <RInvoice
            selected={(v) => handleRef(v, "invoice")}
            value={formdata.invoice}
            refvalue={refdata ? refdata.invoice_id : ""}
            withview
          />
          <RPackingList
            selected={(v) => handleRef(v, "pl")}
            value={formdata.pl}
            refvalue={refdata ? refdata.pl_id : ""}
            withview
          />
          <RBillOfLading
            selected={(v) => handleRef(v, "bl")}
            value={formdata.bl}
            refvalue={refdata ? refdata.bl_id : ""}
            withview
          />
          <RNPE
            selected={(v) => handleRef(v, "npe")}
            value={formdata.npe}
            refvalue={refdata ? refdata.npe_id : ""}
            withview
          />
        </Stack>
      </Stack>

      {formdata.invoice && formdata.bl && formdata.pl && formdata.npe && (
        <MainForm refdata={refdata} formdata={formdata} />
      )}
    </Stack>
  );
}

function MainForm({ refdata, formdata }) {
  const { auth } = useContext(Context);
  const [formdisabled, setformdisabled] = useState(
    refdata && refdata.data ? true : false
  );
  const [payload, setpayload] = useState(
    refdata
      ? { ...refdata.data, id: refdata.id, to: refdata.to.id }
      : {
          gcf: `${formdata.invoice.from.name},${formdata.invoice.from.address}`,
          gct: `${formdata.invoice.to.name},${formdata.invoice.to.address}`,
          f3: `SHIPPED BY : 
FROM : 
TO : 
DATE OF SHIPMENT :`,
          f7: formdata.invoice.product_list.reduce(
            (a, b) => a.concat(`${b.hs}, `),
            ""
          ),
          invoice_id: formdata.invoice.id,
          pl_id: formdata.pl.id,
          bl_id: formdata.bl.id,
          npe_id: formdata.npe.id,
        }
  );
  const nav = useNavigate();

  function handlePayload(e) {
    setpayload({ ...payload, [e.target.name]: e.target.value });
  }

  async function formSubmit(e) {
    e.preventDefault();
    let res = await fetcher({
      url: `md_ska_a`,
      method: "post",
      data: payload,
    });
    nav("/exportir/ska-a", true);
  }

  React.useEffect(() => {
    console.log(formdata.invoice);
    setpayload({
      ...payload,
      gcf: `${formdata.invoice.from.name},${formdata.invoice.from.address}`,
      gct: `${formdata.invoice.consignee},${formdata.invoice.destination}`,
      f7: formdata.invoice.product_list.reduce(
        (a, b) => a.concat(`${b.hs}, `),
        ""
      ),
      invoice_id: formdata.invoice.id,
      pl_id: formdata.pl.id,
      bl_id: formdata.bl.id,
      npe_id: formdata.npe.id,
    });
  }, [formdata]);

  return (
    <Stack spacing={3} component="form" onSubmit={formSubmit}>
      <PaperA4 noback>
        <Stack>
          <Typography variant="subtitle" color="" align="center">
            CERTIFICATE OF ORIGIN
          </Typography>
          <Divider />

          <Stack direction={"row"}>
            <Stack width={"50%"}>
              <InputInline
                dcol
                lb="1.	Goods consigned from (exporters business name, address, country)"
                disabled={formdisabled}
                name="gcf"
                onChange={handlePayload}
                value={payload.gcf || ""}
              />

              <InputInline
                dcol
                lb="2.	Goods consigned to (consigned’s name, address, country)"
                disabled={formdisabled}
                name="gct"
                onChange={handlePayload}
                value={payload.gct || ""}
              />
            </Stack>
            <Stack width={"50%"} spacing={2} className="center" p={2}>
              <InputInline
                lb="Reference No :"
                disabled={formdisabled}
                name="refno"
                onChange={handlePayload}
                value={payload.refno || ""}
              />
              <Typography variant="body1" color="initial" align="center">
                A GENERALIZED SYSTEM OF PREFERENCES CERTIFICATE OF ORIGIN
                (Combined declaration and certificate) FORM A Issued in
                Indonesia. (Country)
              </Typography>
              <Typography
                variant="caption"
                color="initial"
                align="right"
                width={"100%"}
              >
                Sea notes overleaf
              </Typography>
            </Stack>
          </Stack>
          <Stack direction={"row"} spacing={3}>
            <Stack width={"52%"}>
              <InputInline
                dcol
                multiline
                rows={5}
                lb="3.   Means of Transport and route (as far known)"
                disabled={formdisabled}
                name="f3"
                onChange={handlePayload}
                value={payload.f3 || ""}
              />
            </Stack>
            <Stack width={"50%"}>
              <InputInline
                dcol
                lb="4.  For  official use"
                disabled={formdisabled}
                name="f4"
                onChange={handlePayload}
                value={payload.f4 || ""}
              />
            </Stack>
          </Stack>

          <Stack direction={"row"} spacing={1} pt={5}>
            <InputInline
              dcol
              multiline
              rows={5}
              lb="5. Item number"
              disabled={formdisabled}
              name="f5"
              onChange={handlePayload}
              value={payload.f5 || ""}
            />
            <InputInline
              dcol
              multiline
              rows={5}
              lb="6. Marks and number of packages"
              disabled={formdisabled}
              name="f6"
              onChange={handlePayload}
              value={payload.f6 || ""}
            />
            <InputInline
              dcol
              multiline
              rows={5}
              lb="7. Number and kind of packages, description of goods"
              disabled={formdisabled}
              name="f7"
              onChange={handlePayload}
              value={payload.f7 || ""}
            />
            <InputInline
              dcol
              multiline
              rows={5}
              lb="8. Origin criterion (see notes overleaf)"
              disabled={formdisabled}
              name="f8"
              onChange={handlePayload}
              value={payload.f8 || ""}
            />
            <InputInline
              dcol
              multiline
              rows={5}
              lb="9. Gross weight or other quantity"
              disabled={formdisabled}
              name="f9"
              onChange={handlePayload}
              value={payload.f9 || ""}
            />
            <InputInline
              dcol
              lb="10. Number and date of invoice"
              multiline
              rows={5}
              disabled={formdisabled}
              name="f10"
              onChange={handlePayload}
              value={payload.f10 || ""}
            />
          </Stack>

          <Stack direction={"row"} spacing={3} pt={5}>
            <Stack width={"50%"}>
              <Typography variant="body1" color="initial">
                11. Certification
              </Typography>
              <Typography variant="caption" color="initial">
                <br />
                <br />
                It is hereby certified, on the basis of control carried out,
                that the declaration by the exporter is correct\
                <br />
                <br />
                <br />
                <br />
              </Typography>
              <Sign text="Exportir" />
              <Divider sx={{ mt: "32px" }} />
              <Typography variant="caption" color="initial">
                Place and date, signatures and stamp of certifying authority
              </Typography>
            </Stack>
            <Stack width={"50%"}>
              <Typography variant="body1" color="initial">
                12.Declaration by the exporter
              </Typography>
              <Typography variant="caption" color="initial">
                <br />
                <br />
                The undersigned hereby declare that the above details and
                statements are correct : that all the goods were
                <br />
                <br />
                Produced in Indonesia
                <br />
                <br />
                And that they comply with the origin requirements specified for
                those goods in the generalized system of preferences for goods
                exported to
                <br />
                <br />
                <br />
                <InputDate
                  disabled={formdisabled}
                  inputFormat="dd MMM yyyy"
                  label={""}
                  value={payload.date || null}
                  onChange={(v) => setpayload({ ...payload, date: v })}
                />
              </Typography>
              <Divider />

              <Typography variant="caption" color="initial">
                Place and date, signatures and stamp of certifying authority
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </PaperA4>
      {(!refdata || (refdata && refdata.from.id == auth.user.id)) && (
        <Sentto
          value={payload.to || ""}
          name={"to"}
          onChange={handlePayload}
          disabled={formdisabled}
          setEdit={() => setformdisabled(false)}
          filter="fasilitator-ska"
        />
      )}
      {auth.user.role.includes("fasilitator") && (
        <Approval
          model="MD_ska_a"
          id={refdata.id}
          callback_url="/exportir/ska-a"
        />
      )}
    </Stack>
  );
}

const validationSchema = yup.object({
  name: yup.string("Enter your email").required("This Field Required "),
  type: yup.string("Enter your password").required("Password is required"),
});
