import React, { useState, useContext } from "react";
import Context from "@context";
import { fetcherMultipart, useNavigate } from "@component/gip-useForm/fetcher";

import { Stack, Typography, Divider, TextField } from "@mui/material";
import PaperA4 from "@component/paperA4";
import { logo } from "@ui/logo";
import Circle from "@ui/circle";
import { fdate } from "@component/helper/formating";
import InputInline from "@component/gip-useForm/inputInline";
import SenttoImportir from "@component/apps/senttoImportir";
import InputDate from "@component/gip-useForm/inputDate";
import Sentto from "@/component/apps/sentto";
import Approval from "@/component/apps/approval";
import File from "@ui/file";
import InputFile from "@component/gip-useForm/inputFile";

import {
  RInvoice,
  RShippingInstruction,
  RPackingList,
  RBillOfLading,
  RNPE,
  RSKAA,
  RSKAD,
} from "@component/apps/selectRef";

const blank_ws = `At . . . . . Sight . . . . . . pay this first of Exchange (of same tenor and date not paid ) to the . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . or order. . . . . . . . . . . . . . . . . . . . . . . . === US Dollar . . . . . . . . . . . . . . . . . .=== 
  Value received drawn against 
  LC No. . . . . .  Date . . . . . . 
  Issued by . . . . . .
`;

const blank_ws_footer = `. . . . . . . . . . . . . . . . . .  
 . . . . . . . . . . . . . . . . . .  
 . . . . . . . . . . . . . . . . . .  
 . . . . . . . . . . . . . . . . . .  `;

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
          <RSKAA
            selected={(v) => handleRef(v, "skaa")}
            value={formdata.skaa}
            refvalue={refdata ? refdata.skaa_id : ""}
            withview
          />

          <RSKAD
            selected={(v) => handleRef(v, "skad")}
            value={formdata.skad}
            refvalue={refdata ? refdata.skad_id : ""}
            withview
          />
        </Stack>
      </Stack>

      {formdata.invoice &&
        formdata.bl &&
        formdata.pl &&
        formdata.npe &&
        (formdata.skaa || formdata.skad) && (
          <Stack alignItems={"center"} mt={2}>
            <Stack
              width={"210mm"}
              className="print-margin"
              overflow={"hidden"}
              color="black"
            >
              <Typography variant="subtitle2" color="primary">
                Silahkan Download dan isi template pengajuan di bawah ini.
                Setelah itu, isi form dan upload kembali dokumen yang telah
                disini
              </Typography>
              <File
                path={"uploads/template/wessel-template.doc"}
                text="Form Wessel Template"
              />
            </Stack>
            <MainForm refdata={refdata} formdata={formdata} />
          </Stack>
        )}
    </Stack>
  );
}

function MainForm({ refdata, formdata }) {
  console.log(refdata);
  const { auth } = useContext(Context);

  const [formdisabled, setformdisabled] = useState(
    refdata && refdata.data ? true : false
  );
  const [payload, setpayload] = useState(
    refdata
      ? { ...refdata.data, id: refdata.id, to: refdata.to.id }
      : {
          bl_id: formdata.bl.id,
          invoice_id: formdata.invoice.id,
          npe_id: formdata.npe.id,

          pl_id: formdata.pl.id,
          skaa_id: formdata.skaa && formdata.skaa.id,
          skad_id: formdata.skad && formdata.skad.id,
        }
  );
  const nav = useNavigate();

  function handlePayload(e) {
    setpayload({ ...payload, [e.target.name]: e.target.value });
  }

  async function formSubmit(e) {
    e.preventDefault();
    delete payload.from;
    let res = await fetcherMultipart({
      url: `md_wessel`,
      method: "post",
      data: payload,
    });
    nav("/exportir/wessel", true);
  }
  return (
    <Stack component={"form"} onSubmit={formSubmit}>
      <PaperA4>
        <Stack spacing={3}>
          <Stack
            spacing={3}
            border="1px solid black"
            p={4}
            position="relative"
            height={475}
          >
            <Stack direction={"row"}>
              <InputInline
                placeholder={fdate.format(fdate.today)}
                lbw={140}
                name="datews1"
                onChange={handlePayload}
                value={payload.datews1 || ""}
                disabled={formdisabled}
              />
              {/* <InputDate
                inputFormat="dd MMM yyyy"
                label={""}
                value={payload.datews1 || null}
                onChange={(v) => setpayload({ ...payload, datews1: v })}
              /> */}
            </Stack>
            <InputInline
              lb={"Exchange for USD"}
              lbw={140}
              name="ws1_exc"
              onChange={handlePayload}
              value={payload.ws1_exc || ""}
              disabled={formdisabled}
            />
            <InputInline
              fullWidth
              dcol
              prewrap
              multiline
              rows={7}
              name="ws1"
              onChange={handlePayload}
              value={payload.ws1 || blank_ws}
              disabled={formdisabled}
            />

            <InputInline
              fullWidth
              dcol
              prewrap
              multiline
              rows={4}
              name="ws1_footer"
              onChange={handlePayload}
              value={payload.ws1_footer || blank_ws_footer}
              disabled={formdisabled}
            />

            <Stack
              sx={{
                fontSize: 256,
                opacity: 0.5,
                left: "40%",
                top: "0",
                position: "absolute",
                PointerEvent: "none",
                zIndex: 0,
              }}
            >
              1
            </Stack>
          </Stack>
          <Stack
            spacing={3}
            border="1px solid black"
            p={4}
            position="relative"
            height={475}
          >
            <Stack direction={"row"}>
              <InputInline
                value={payload.datews1 || null}
                onChange={(v) => setpayload({ ...payload, datews2: v })}
                disabled
              />
            </Stack>
            <InputInline
              lb={"Exchange for USD"}
              lbw={140}
              name="ws1_exc"
              onChange={handlePayload}
              value={payload.ws1_exc || ""}
              disabled
            />
            <InputInline
              fullWidth
              dcol
              prewrap
              multiline
              rows={7}
              name="ws1"
              onChange={handlePayload}
              value={payload.ws1 || blank_ws}
              disabled
            />

            <InputInline
              fullWidth
              dcol
              prewrap
              multiline
              rows={4}
              name="ws1_footer"
              onChange={handlePayload}
              value={payload.ws1_footer || blank_ws_footer}
              disabled
            />

            <Stack
              sx={{
                fontSize: 256,
                opacity: 0.5,
                zIndex: 0,
                left: "40%",
                top: "0",
                position: "absolute",
              }}
            >
              2
            </Stack>
          </Stack>
        </Stack>
        <Stack mt={3}>
          {!formdisabled && (
            <InputFile
              btnText="Lampirkan Doc lainnya"
              value={(v) => {
                setpayload({ ...payload, file: v });
              }}
            />
          )}
          {formdisabled && refdata.file_path && (
            <File
              path={refdata.file_path}
              text="Lampuiran Form Pengajuan LC "
            />
          )}
        </Stack>
      </PaperA4>

      {(!refdata || (refdata && refdata.from.id == auth.user.id)) && (
        <Sentto
          value={payload.to || ""}
          name={"to"}
          onChange={handlePayload}
          disabled={formdisabled}
          setEdit={() => setformdisabled(false)}
          filter="fasilitator-bank"
        />
      )}
      {auth.user.role.includes("fasilitator") && (
        <Approval
          model="MD_wessel"
          id={refdata.id}
          callback_url="/exportir/wessel"
        />
      )}
    </Stack>
  );
}
