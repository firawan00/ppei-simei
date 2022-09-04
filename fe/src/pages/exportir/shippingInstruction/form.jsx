import React, { useState, useContext } from "react";
import Context from "@context";

import {
  Stack,
  Typography,
  Divider,
  TextField,
  MenuItem,
  Button,
} from "@mui/material";
import PaperA4 from "@component/paperA4";
import { logo } from "@ui/logo";
import Circle from "@ui/circle";
import { fdate } from "@component/helper/formating";
import InputInline from "@component/gip-useForm/inputInline";
import Sentto from "@/component/apps/sentto";

import { fetcher, useNavigate } from "@component/gip-useForm/fetcher";
import InputDate from "@component/gip-useForm/inputDate";
import Sign from "@component/apps/sign";

import BackIcon from "@/component/ui/backIcon";
import Header from "../_partial/exportirHeader";
import ProductList from "@/component/ui/productListPackingList";
import Approval from "@/component/apps/approval";

import {
  RInvoice,
  RShippingInstruction,
  RPackingList,
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
      <Stack
        alignItems={"center"}
        display={auth.user.role.includes("fasilitator") ? "none" : ""}
      >
        <Stack width={"210mm"} className="hide_on_print">
          <BackIcon />

          <RPackingList
            selected={(v) => handleRef(v, "pl")}
            value={formdata.pl}
            refvalue={refdata ? refdata.pl_id : ""}
          />
        </Stack>
      </Stack>
      {formdata.pl && (
        <Stack spacing={0}>
          <MainForm formdata={formdata} refdata={refdata} />
        </Stack>
      )}
    </Stack>
  );
}

function MainForm({ refdata, formdata }) {
  const { auth } = useContext(Context);
  const [formdisabled, setformdisabled] = useState(refdata ? true : false);
  const [payload, setpayload] = useState(
    refdata
      ? { ...refdata, to: refdata.to.id }
      : {
          product_list: formdata.pl.product_list,
          pl_id: formdata.pl.id,
          gross_weight:
            formdata.pl.product_list.reduce(
              (a, b) => a + parseInt(b.gweight),
              0
            ) + " kg",
          nett_weight:
            formdata.pl.product_list.reduce(
              (a, b) => a + parseInt(b.nweight),
              0
            ) + " kg",
          lc_ref: formdata.pl.lcno,
          desc_goods: formdata.pl.product_list.reduce(
            (a, b) => a.concat(`${b.name}, `),
            ""
          ),
        }
  );

  React.useEffect(() => {
    setpayload({
      ...payload,
      gross_weight:
        formdata.pl.product_list.reduce((a, b) => a + parseInt(b.gweight), 0) +
        " kg",
      nett_weight:
        formdata.pl.product_list.reduce((a, b) => a + parseInt(b.nweight), 0) +
        " kg",
      lc_ref: formdata.pl.lcno,
      desc_goods: formdata.pl.product_list.reduce(
        (a, b) => a.concat(`${b.name}, `),
        ""
      ),
    });
  }, [formdata]);

  const nav = useNavigate();

  function handlePayload(e) {
    setpayload({ ...payload, [e.target.name]: e.target.value });
  }

  async function formSubmit(e) {
    e.preventDefault();
    delete payload.from;
    let res = await fetcher({
      url: `md_shippinginstruction`,
      method: "post",
      data: payload,
    });
    nav("/exportir/shippinginstruction", true);
  }
  return (
    <Stack component={"form"} onSubmit={formSubmit}>
      <PaperA4 noback>
        <Stack spacing={0}>
          <Header refdata={refdata} />
          <Divider />

          <Typography variant="h6" align="center" color="initial">
            SHIPPING INSTRUCTION
          </Typography>

          <Stack direction={"row"} justifyContent="space-between">
            <Stack spacing={0}>
              <InputInline
                lb={"No"}
                name="docref"
                onChange={handlePayload}
                value={payload.docref || ""}
                disabled={formdisabled}
              />
              <InputInline
                lb={"To"}
                name="docto"
                onChange={handlePayload}
                value={payload.docto || ""}
                disabled={formdisabled}
              />
            </Stack>
            <Stack direction={"row"}>
              <InputInline
                name="date"
                onChange={handlePayload}
                value={payload.date || ""}
                disabled={formdisabled}
              />

              {/* <InputDate
                inputFormat="dd MMM yyyy"
                label={""}
                value={payload.date || null}
                onChange={(v) => setpayload({ ...payload, date: v })}
                disabled={formdisabled}
              /> */}
            </Stack>
          </Stack>

          <Stack>
            We hereby request you to reserve space and kindly issue the B/L for
            our cargo with following details:
          </Stack>

          <Stack spacing={0}>
            <Stack direction={"row"} spacing={2}>
              <Stack>
                <InputInline
                  lb={"Shipper"}
                  name="shipper"
                  lbw={180}
                  onChange={handlePayload}
                  value={payload.shipper || ""}
                  disabled={formdisabled}
                />
                <InputInline
                  lb={"Consignee"}
                  name="consignee"
                  lbw={180}
                  onChange={handlePayload}
                  value={payload.consignee || ""}
                  disabled={formdisabled}
                />

                <InputInline
                  lb={"Notify Party"}
                  name="notify_party"
                  lbw={180}
                  onChange={handlePayload}
                  value={payload.notify_party || ""}
                  disabled={formdisabled}
                />
                <InputInline
                  lb={"Feeder Vessel"}
                  name="feeder_vessel"
                  lbw={180}
                  onChange={handlePayload}
                  value={payload.feeder_vessel || ""}
                  disabled={formdisabled}
                />

                <InputInline
                  lb={"Place of Receipt "}
                  name="por"
                  lbw={180}
                  onChange={handlePayload}
                  value={payload.por || ""}
                  disabled={formdisabled}
                />
                <InputInline
                  lb={"Ocean Vessel"}
                  name="ocean_vessel"
                  lbw={180}
                  onChange={handlePayload}
                  value={payload.ocean_vessel || ""}
                  disabled={formdisabled}
                />
              </Stack>
              <Stack>
                <InputInline
                  lb={"Port of Loading"}
                  name="pol"
                  lbw={180}
                  onChange={handlePayload}
                  value={payload.pol || ""}
                  disabled={formdisabled}
                />

                <InputInline
                  lb={"Port of Discharge"}
                  name="pod"
                  lbw={180}
                  onChange={handlePayload}
                  value={payload.pod || ""}
                  disabled={formdisabled}
                />

                <InputInline
                  lb={"Place OF Delivery"}
                  name="podelivery"
                  lbw={180}
                  onChange={handlePayload}
                  value={payload.podelivery || ""}
                  disabled={formdisabled}
                />

                <InputInline
                  lb={"Final Destination"}
                  name="finaldestination"
                  lbw={180}
                  onChange={handlePayload}
                  value={payload.finaldestination || ""}
                  disabled={formdisabled}
                />

                <InputInline
                  lb={"ETD"}
                  name="etd"
                  lbw={180}
                  onChange={handlePayload}
                  value={payload.etd || ""}
                  disabled={formdisabled}
                />
                <InputInline
                  lb={"ETA"}
                  name="eta"
                  lbw={180}
                  onChange={handlePayload}
                  value={payload.eta || ""}
                  disabled={formdisabled}
                />

                <InputInline
                  lb={"Quantity Of Container"}
                  name="qoc"
                  lbw={180}
                  onChange={handlePayload}
                  value={payload.qoc || ""}
                  disabled={formdisabled}
                />
              </Stack>
            </Stack>
            <Typography variant="body1" color="initial">
              Description Of Goods
            </Typography>
            <ProductList
              disabled={formdisabled}
              initvalue={payload.product_list}
              onChange={(v) => setpayload({ ...payload, product_list: v })}
              refitem={
                payload.product_list
                  ? payload.product_list
                  : formdata.invoice.product_list
              }
            />

            {/* 
            <InputInline
              lb={"To"}
              name="toname"
              lbw={180}
              onChange={handlePayload}
              value={payload.toname || ""}
              disabled={formdisabled}
            /> */}

            {/* <InputInline
              lb={"No. Of Package "}
              name="num_package"
              lbw={180}
              onChange={handlePayload}
              value={payload.num_package || ""}
              disabled={formdisabled}
            />

            <InputInline
              lb={"Description of Goods "}
              name="desc_goods"
              lbw={180}
              onChange={handlePayload}
              value={payload.desc_goods || ""}
              disabled={formdisabled}
            /> */}

            {/* <InputInline
              lb={"Shipping Marks "}
              name="shipping_marks"
              lbw={180}
              onChange={handlePayload}
              value={payload.shipping_marks || ""}
              disabled={formdisabled}
            /> */}

            <InputInline
              lb={"Gross Weight "}
              name="gross_weight"
              lbw={180}
              onChange={handlePayload}
              value={payload.gross_weight || ""}
              // disabled={formdisabled}
              disabled
            />

            <InputInline
              lb={"Nett Weight "}
              name="nett_weight"
              lbw={180}
              onChange={handlePayload}
              value={payload.nett_weight || ""}
              // disabled={formdisabled}
              disabled
            />

            <InputInline
              lb={"L/C No. "}
              name="lc_ref"
              lbw={180}
              onChange={handlePayload}
              value={payload.lc_ref || ""}
              // disabled={formdisabled}
              disabled
            />

            <InputInline
              lb={"Stuffing date"}
              name="stuffing_date"
              lbw={180}
              onChange={handlePayload}
              value={payload.stuffing_date || ""}
              disabled={formdisabled}
            />

            <InputInline
              lb={"Freight term"}
              name="freight_term"
              lbw={180}
              onChange={handlePayload}
              value={payload.freight_term || ""}
              disabled={formdisabled}
            />

            <InputInline
              lb={"Original/copy/bill of Lading"}
              name="copy_bl"
              lbw={180}
              onChange={handlePayload}
              value={payload.copy_bl || ""}
              disabled={formdisabled}
            />
          </Stack>

          <Stack pt={3}>
            Faithfully Yours. <Sign text="Exportir" /> Export Manager
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
          filter="fasilitator-cargo"
          btn_disabled={!payload.to}
        />
      )}
      {refdata && auth.user.role.includes("fasilitator") && (
        <Approval
          model="MD_shippinginstruction"
          id={refdata.id}
          callback_url="/exportir/shippinginstruction"
        />
      )}
    </Stack>
  );
}
