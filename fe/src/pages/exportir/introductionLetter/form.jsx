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
import InputInline from "@component/gip-useForm/inputInline";
import Sentto from "@/component/apps/sentto";

import { fetcher, useNavigate } from "@component/gip-useForm/fetcher";
import context from "@/component/context";

import Header from "../_partial/exportirHeader";
import InputDate from "@component/gip-useForm/inputDate";
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
        <Stack spacing={3}>
          <Header refdata={refdata} />
          <Divider />

          <Typography variant="h6" align="center" color="initial">
            Introduction Letter
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
            <Stack direction={"row"}>
              {/* <Typography color="initial">Jakata,</Typography> */}
              <InputDate
                disabled={formdisabled}
                inputFormat="dd MMM yyyy"
                label={""}
                value={payload.date || null}
                onChange={(v) => setpayload({ ...payload, date: v })}
              />
            </Stack>
          </Stack>

          <Stack>
            Dear Sir, Allow us herewith to introduce our company as an export
            company. With this letter, we would like to offer our best selling
            items as following details.
          </Stack>

          <Stack spacing={1}>
            <InputInline
              lb={"Desc. of goods "}
              name="desc_of_goods"
              lbw={180}
              onChange={handlePayload}
              value={payload.desc_of_goods || ""}
              disabled={formdisabled}
              dcol
              multiline
              prewrap
              rows={6}
            />
            <InputInline
              lb={"Type"}
              name="type"
              lbw={180}
              onChange={handlePayload}
              value={payload.type || ""}
              disabled={formdisabled}
              jc="flex-start"
            />
            <InputInline
              lb={"Price FOB Tg Priok"}
              name="price_fob"
              lbw={180}
              onChange={handlePayload}
              value={payload.price_fob || ""}
              disabled={formdisabled}
              jc="flex-start"
            />

            <InputInline
              lb={"Production Capacity"}
              name="capacity"
              lbw={180}
              onChange={handlePayload}
              value={payload.capacity || ""}
              disabled={formdisabled}
              jc="flex-start"
            />
          </Stack>
          {/* 
          <Stack>
            Enclosed we are sending some brochure about our product, according
            to our survey that this product have a good prospect inside your
            market.
          </Stack> */}

          <Stack>
            We do hope you will be interested and we shall be pleased to have
            your inquiry and trial order in due time. In case you need
            information, please do not hesitate to contact us by fax or email.
            Thank you.
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
          setEdit={() => setformdisabled(false)}
          filter="user-import"
        />
      )}
    </Stack>
  );
}
