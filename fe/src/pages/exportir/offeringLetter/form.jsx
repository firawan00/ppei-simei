import React, { useState, useContext } from "react";
import Context from "@context";
import { fetcher, useNavigate } from "@component/gip-useForm/fetcher";

import { Stack, Typography, Divider, TextField } from "@mui/material";
import PaperA4 from "@component/paperA4";
import { logo } from "@ui/logo";
import { fdate } from "@component/helper/formating";
import InputInline from "@component/gip-useForm/inputInline";
import Sentto from "@/component/apps/sentto";

import Header from "../_partial/exportirHeader";
import InputDate from "@component/gip-useForm/inputDate";
import InputSelect from "@component/gip-useForm/inputSelect";

import Sign from "@component/apps/sign";

export default function App({ refdata }) {
  const { auth } = useContext(Context);
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
    // console.log(payload);
    // delete payload.from;
    let res = await fetcher({
      url: `md_offeringletter`,
      method: "post",
      data: payload,
    });
    console.log(res);
    nav("/exportir/offeringletter", true);
  }

  return (
    <Stack component={"form"} onSubmit={formSubmit}>
      <PaperA4>
        <Stack spacing={3}>
          <Header refdata={refdata} />
          <Divider />

          <Typography variant="h6" align="center" color="initial">
            OFFERING LETTER
          </Typography>

          <Stack direction={"row"} justifyContent="space-between">
            <Stack spacing={1}>
              <InputInline
                lb={"Our Ref"}
                name="doc_no"
                onChange={handlePayload}
                disabled={formdisabled}
                value={payload.doc_no || ""}
              />
              <InputInline
                lb={"To"}
                name="doc_to"
                onChange={handlePayload}
                disabled={formdisabled}
                value={payload.doc_to || ""}
              />
              <InputInline
                lb={"Cc"}
                name="doc_cc"
                onChange={handlePayload}
                disabled={formdisabled}
                value={payload.doc_cc || ""}
              />
            </Stack>
            <Stack direction={"row"}>
              <InputInline
                placeholder={fdate.format(fdate.today)}
                name="date"
                onChange={handlePayload}
                value={payload.date || ""}
                disabled={formdisabled}
              />
            </Stack>
          </Stack>

          <Stack>
            <Stack direction={"row"} spacing={1}>
              <Typography variant="body1" color="initial">
                Dear Sir/Madam, Regarding to your inquiry
              </Typography>
              <InputDate
                disabled={formdisabled}
                placeholder="No . . . Date . . . "
                label={""}
                value={payload.nodate || null}
                onChange={(v) => setpayload({ ...payload, nodate: v })}
              />
            </Stack>
            <Stack>
              herewith we would like to submit our offers are as follows:
            </Stack>
          </Stack>

          <Stack spacing={1}>
            {/* <InputInline
              lb={"Product"}
              lbw={180}
              name="commodity"
              onChange={handlePayload}
              disabled={formdisabled}
              value={payload.commodity || ""}
            /> */}

            <InputInline
              lb={"Desc. of goods "}
              name="commodity"
              lbw={180}
              onChange={handlePayload}
              value={payload.commodity || ""}
              disabled={formdisabled}
              dcol
              multiline
              prewrap
              rows={6}
            />

            <InputInline
              lb={"Quantity"}
              lbw={180}
              name="qty"
              onChange={handlePayload}
              disabled={formdisabled}
              value={payload.qty || ""}
            />

            <Stack direction={"row"} justifyContent="space-between">
              <InputSelect
                lb={""}
                name="fob"
                onChange={handlePayload}
                value={payload.fob || ""}
                disabled={formdisabled}
                options={[
                  "Unit FOB price",
                  "Unit CFR price",
                  "Unit  CIF price",
                ]}
                fullWid
              />
              <InputInline
                lb={""}
                lbw={180}
                name="fob_value"
                onChange={handlePayload}
                disabled={formdisabled}
                value={payload.qty || ""}
              />
            </Stack>

            <InputInline
              lb={"Packing"}
              lbw={180}
              name="packing"
              onChange={handlePayload}
              disabled={formdisabled}
              value={payload.packing || ""}
            />
            <InputInline
              lb={"Shipment"}
              lbw={180}
              name="shipment"
              onChange={handlePayload}
              disabled={formdisabled}
              value={payload.shipment || ""}
            />

            <InputSelect
              lb={"Shipment Method"}
              name="shipment_method"
              onChange={handlePayload}
              value={payload.shipment_method || ""}
              disabled={formdisabled}
              options={["Air Freight", "Sea Freight"]}
              jc="space-between"
            />
            <InputInline
              lb={"Term of Payment "}
              lbw={180}
              name="top"
              onChange={handlePayload}
              disabled={formdisabled}
              value={payload.top || ""}
            />
            <InputInline
              lb={"Offer valid until"}
              lbw={180}
              name="validity"
              onChange={handlePayload}
              disabled={formdisabled}
              value={payload.validity || ""}
            />
          </Stack>

          <Stack>
            Please be advised that we prefer to sell in FOB Basis Price. We hope
            our offers are favorable to you, if you have any question do not
            hesitate to contact us.
          </Stack>

          <Stack>
            Faithfully Yours.
            <Sign text="Exportir" />
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
          formdisabled={formdisabled}
          setEdit={() => setformdisabled(false)}
          filter="user-import"
        />
      )}
    </Stack>
  );
}
