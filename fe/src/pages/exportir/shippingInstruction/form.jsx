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
import context from "@/component/context";

export default function App({ refdata }) {
  const { auth } = useContext(context);
  const [formdisabled, setformdisabled] = useState(refdata ? true : false);
  const [payload, setpayload] = useState(
    refdata ? { ...refdata, to: refdata.to.id } : {}
  );
  const nav = useNavigate();

  function handlePayload(e) {
    setpayload({ ...payload, [e.target.name]: e.target.value });
  }

  async function formSubmit(e) {
    e.preventDefault();
    delete payload.from;
    let res = await fetcher({
      url: `md_introductionletter`,
      method: "post",
      data: payload,
    });
    nav("/exportir/introductionletter", true);
  }
  return (
    <Stack component={"form"} onSubmit={formSubmit}>
      <PaperA4>
        <Stack spacing={1}>
          <Header />
          <Divider />

          <Typography variant="h6" align="center" color="initial">
            SHIPPING INSTRUCTION
          </Typography>

          <Stack direction={"row"} justifyContent="space-between">
            <Stack spacing={1}>
              <InputInline
                lb={"Our Ref"}
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
            <Stack>
              <Typography color="initial">
                Jakata, {fdate.format(fdate.today)}
              </Typography>
            </Stack>
          </Stack>

          <Stack>
            We hereby request you to reserve space and kindly issue the B/L for
            our cargo with following details:
          </Stack>

          <Stack spacing={1}>
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
              lb={"Ocean Vessel"}
              name="ocean_vessel"
              lbw={180}
              onChange={handlePayload}
              value={payload.ocean_vessel || ""}
              disabled={formdisabled}
            />

            <InputInline
              lb={"To"}
              name="to"
              lbw={180}
              onChange={handlePayload}
              value={payload.to || ""}
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
            />

            <InputInline
              lb={"Shipping Marks "}
              name="shipping_marks"
              lbw={180}
              onChange={handlePayload}
              value={payload.shipping_marks || ""}
              disabled={formdisabled}
            />

            <InputInline
              lb={"Gross Weight "}
              name="gross_weight"
              lbw={180}
              onChange={handlePayload}
              value={payload.gross_weight || ""}
              disabled={formdisabled}
            />

            <InputInline
              lb={"Nett Weight "}
              name="nett_weight"
              lbw={180}
              onChange={handlePayload}
              value={payload.nett_weight || ""}
              disabled={formdisabled}
            />

            <InputInline
              lb={"L/C No. "}
              name="lc_ref"
              lbw={180}
              onChange={handlePayload}
              value={payload.lc_ref || ""}
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

          <Stack pt={5}>
            Faithfully Yours.
            <br />
            <br />
            <br />
            <br />
            Export Manager
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
        />
      )}
    </Stack>
  );
}

function Header(params) {
  return (
    <Stack direction={"row"} className="center" spacing={2}>
      <Stack width={96} height={96} p={1}>
        <img src={logo.e1} alt="" className="img-contain" />
      </Stack>
      <Stack>
        <Typography variant="h6" color="initial">
          PT. BAYU SEGARA
        </Typography>

        <Typography variant="subtitle1" color="initial">
          JL. TAMAN ANGGREK NO. 14
        </Typography>

        <Typography variant="subtitle1" color="initial">
          Phone 62-21-5664425, Fax. 62-21-5664430
        </Typography>
      </Stack>
    </Stack>
  );
}
