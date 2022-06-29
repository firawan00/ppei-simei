import React, { useState, useContext } from "react";
import Context from "@context";

import { Stack, Typography, Divider, TextField } from "@mui/material";
import PaperA4 from "@component/paperA4";
import { logo } from "@ui/logo";
import Circle from "@ui/circle";
import { fdate } from "@component/helper/formating";
import InputInline from "@component/gip-useForm/inputInline";

import Sentto from "@component/apps/sentto";
import { fetcher, useNavigate } from "@component/gip-useForm/fetcher";

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
      url: `md_inquiry`,
      method: "post",
      data: payload,
    });
    nav("/importir/inquiry", true);
  }

  return (
    <Stack component={"form"} onSubmit={formSubmit}>
      <PaperA4>
        <Stack spacing={3}>
          <Header />
          <Divider />

          <Typography variant="h6" align="center" color="initial">
            INQUIRY LETTER
          </Typography>

          <Stack direction={"row"} justifyContent="space-between">
            <Stack spacing={1}>
              <InputInline
                lb={"To"}
                name="docto"
                onChange={handlePayload}
                value={payload.docto || ""}
                disabled={formdisabled}
              />
              <InputInline
                lb={"TEL"}
                name="tel"
                onChange={handlePayload}
                value={payload.tel || ""}
                disabled={formdisabled}
              />
              <InputInline
                lb={"FAX"}
                name="fax"
                onChange={handlePayload}
                value={payload.fax || ""}
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
            <Typography variant="body1" color="initial">
              Dear Sir, We are very glad to note that you are exporter of :
            </Typography>
            <TextField
              multiline
              rows={5}
              name="who"
              onChange={handlePayload}
              value={payload.who || ""}
              disabled={formdisabled}
            />
            <Typography variant="body1" color="initial">
              We note that your offer is too high, so please reconsider your
              best competitive price for the following :
            </Typography>
          </Stack>

          <Stack spacing={1}>
            <InputInline
              lb={"Article"}
              lbw={120}
              onChange={handlePayload}
              value={payload.article || ""}
              disabled={formdisabled}
            />
            <InputInline
              lb={"Shipment"}
              lbw={120}
              onChange={handlePayload}
              value={payload.shipment || ""}
              disabled={formdisabled}
            />
          </Stack>

          <Stack>
            <Typography variant="body1" color="initial">
              Please also quote CFR Felixstowe, United Kingdom, if you could,
              with Freight and Insurance separately and send it to :
            </Typography>
            <TextField
              multiline
              rows={5}
              name="sentto"
              onChange={handlePayload}
              value={payload.sentto || ""}
              disabled={formdisabled}
            />
          </Stack>

          <Stack>
            Looking forward to hearing from you soon.
            <br />
            <br />
            Faithfully Yours.
            <br />
            <br />
            <br />
            <br />
            Import Manager
          </Stack>
        </Stack>
      </PaperA4>
      {(!refdata || (refdata && refdata.from.id == auth.user.id)) && (
        <Sentto
          value={payload.to || ""}
          name="to"
          onChange={handlePayload}
          disabled={formdisabled}
          setEdit={() => setformdisabled(false)}
          filter="user-export"
        />
      )}
    </Stack>
  );
}

function Header(params) {
  return (
    <Stack direction={"row"} className="center" spacing={2}>
      <Stack width={96} height={96} className="center">
        <img src={logo.e3} alt="" className="img-contain" />
      </Stack>
      <Stack>
        <Typography variant="h6" color="initial">
          MD Berreclough Limited
        </Typography>

        <Typography variant="subtitle1" color="initial">
          United Kingdom
        </Typography>
      </Stack>
    </Stack>
  );
}
