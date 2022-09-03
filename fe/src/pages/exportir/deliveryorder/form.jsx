import React, { useState, useContext } from "react";
import Context from "@context";
import { fetcher, useNavigate } from "@component/gip-useForm/fetcher";

import { Stack, Typography, Divider, TextField } from "@mui/material";
import PaperA4 from "@component/paperA4";
import { logo } from "@ui/logo";
import Circle from "@ui/circle";
import { fdate } from "@component/helper/formating";
import InputInline from "@component/gip-useForm/inputInline";
import SenttoExportir from "@/component/apps/sentto";
import InputDate from "@component/gip-useForm/inputDate";
import Sign from "@component/apps/sign";
import Sentto from "@/component/apps/sentto";
import Header from "../_partial/cargoHeader";

import BackIcon from "@/component/ui/backIcon";
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
  console.log(refdata);

  return (
    <Stack>
      <Stack
        alignItems={"center"}
        display={!auth.user.role.includes("fasilitator") ? "none" : ""}
      >
        <Stack width={"210mm"} className="hide_on_print">
          <BackIcon />
          <RShippingInstruction
            selected={(v) => handleRef(v, "si")}
            value={formdata.si}
            refvalue={refdata ? refdata.si_id : ""}
          />
        </Stack>
      </Stack>
      {formdata.si && (
        <Stack spacing={2}>
          <MainForm formdata={formdata} refdata={refdata} />
        </Stack>
      )}
    </Stack>
  );
}

function MainForm({ refdata, formdata }) {
  console.log(formdata);
  const { auth } = useContext(Context);
  const [formdisabled, setformdisabled] = useState(refdata ? true : false);
  const [payload, setpayload] = useState(
    refdata
      ? { ...refdata, to: refdata.to.id }
      : {
          si_id: formdata.si.id,
          sino: formdata.si.docref,
        }
  );
  const nav = useNavigate();

  function handlePayload(e) {
    setpayload({ ...payload, [e.target.name]: e.target.value });
  }

  async function formSubmit(e) {
    e.preventDefault();
    let res = await fetcher({
      url: `md_deliveryorder`,
      method: "post",
      data: payload,
    });
    nav("/exportir/deliveryorder", true);
  }
  return (
    <Stack component={"form"} onSubmit={formSubmit}>
      <PaperA4>
        <Stack spacing={3}>
          <Header refdata={refdata} />
          <Divider />

          <Typography variant="h6" align="center" color="initial">
            DELIVERY ORDER (D/O)
          </Typography>

          <Stack direction={"row"} justifyContent="space-between">
            <Stack spacing={1}>
              <InputInline
                lb={"No"}
                disabled={formdisabled}
                name="no"
                onChange={handlePayload}
                value={payload.no || ""}
              />
              <InputInline
                lb={"Hal"}
                disabled={formdisabled}
                name="hal"
                onChange={handlePayload}
                value={payload.hal || ""}
              />
            </Stack>
            <Stack direction={"row"}>
              <InputDate
                inputFormat="dd MMM yyyy"
                label={""}
                disabled={formdisabled}
                value={payload.date || null}
                onChange={(v) => setpayload({ ...payload, date: v })}
              />
            </Stack>
          </Stack>

          <Stack>
            Mohon dapat diserahkan container kosong kepada shipper di bawah ini
            :
          </Stack>

          <Stack spacing={1}>
            <InputInline
              lb={"SHIPPER"}
              lbw={180}
              disabled={formdisabled}
              name="shipper"
              onChange={handlePayload}
              value={payload.shipper || ""}
              jc="flex-start"
            />

            <InputInline
              lb={"S/I NO.	"}
              lbw={180}
              disabled={formdisabled}
              name="sino"
              onChange={handlePayload}
              value={payload.sino || ""}
              jc="flex-start"
            />
            <InputInline
              lb={"TUJUAN "}
              lbw={180}
              disabled={formdisabled}
              name="tujuan"
              onChange={handlePayload}
              value={payload.tujuan || ""}
              jc="flex-start"
            />
            <InputInline
              lb={"JUMLAH CONTAINER	"}
              lbw={180}
              disabled={formdisabled}
              name="juml_container"
              onChange={handlePayload}
              value={payload.juml_container || ""}
              jc="flex-start"
            />
            <InputInline
              lb={"RENCANA KAPAL	"}
              lbw={180}
              disabled={formdisabled}
              name="rencana_kapal"
              onChange={handlePayload}
              value={payload.rencana_kapal || ""}
              jc="flex-start"
            />
            {/* <InputInline
              lb={"EST"}
              lbw={180}
              disabled={formdisabled}
              name="est"
              onChange={handlePayload}
              value={payload.est || ""}
            /> */}

            <InputInline
              lb={"EST OPEN STACK"}
              lbw={180}
              disabled={formdisabled}
              name="est_openstack"
              onChange={handlePayload}
              value={payload.est_openstack || ""}
              jc="flex-start"
            />

            <InputInline
              lb={"EST CLOSING TIME"}
              lbw={180}
              disabled={formdisabled}
              name="est_closingtime"
              onChange={handlePayload}
              value={payload.est_closingtime || ""}
              jc="flex-start"
            />

            <InputInline
              lb={"UTC"}
              lbw={180}
              disabled={formdisabled}
              name="utc"
              onChange={handlePayload}
              value={payload.utc || ""}
              jc="flex-start"
            />
          </Stack>

          <Stack>
            Biaya-biaya yang timbul atas penyerahan container kosong agar
            dibebankan kepada
            <span className="f-bold f-err">[EKSPORTIR/ EMKL]</span>.
          </Stack>

          <Stack>Terima kasih atas kerjasamanya</Stack>

          <Stack spacing={1}>
            <InputInline
              lb={"Container no"}
              lbw={180}
              disabled={formdisabled}
              name="container_no"
              onChange={handlePayload}
              value={payload.container_no || ""}
              jc="flex-start"
            />
            <InputInline
              lb={"Seal no"}
              lbw={180}
              disabled={formdisabled}
              name="seal_no"
              onChange={handlePayload}
              value={payload.seal_no || ""}
              jc="flex-start"
            />
          </Stack>

          <Stack>
            Faithfully Yours. <Sign text="Cargo" /> Logistik Dept
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
          filter="user-export"
        />
      )}
    </Stack>
  );
}
