import React, { useState, useContext } from "react";
import Context from "@context";
import { fetcher, useNavigate } from "@component/gip-useForm/fetcher";

import { Stack, Typography, Divider, TextField } from "@mui/material";
import PaperA4 from "@component/paperA4";
import { logo } from "@ui/logo";
import Circle from "@ui/circle";
import { fdate } from "@component/helper/formating";
import InputInline from "@component/gip-useForm/inputInline";
import ProductList from "@/component/ui/productListInvoice";
import SenttoImportir from "@component/apps/senttoImportir";

import Header from "../_partial/headerImportir";
import InputDate from "@component/gip-useForm/inputDate";
import Sign from "@component/apps/sign";
import Sentto from "@component/apps/sentto";

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
    console.log(payload);
    let res = await fetcher({
      url: `md_ordering`,
      method: "post",
      data: payload,
    });
    console.log(res);
    nav("/importir/ordering", true);
  }

  return (
    <Stack component={"form"} onSubmit={formSubmit}>
      <PaperA4>
        <Stack spacing={2}>
          <Header refdata={refdata} />
          <Divider />
          <Typography variant="h6" align="center" color="initial">
            ORDERING LETTER
          </Typography>
          <Stack direction={"row"} justifyContent="space-between">
            <Stack spacing={1}>
              <InputInline lb={"Our reff"} lbw={180} />
            </Stack>
            <Stack direction={"row"}>
              {/* <Typography color="initial">Jakata,</Typography> */}
              <InputDate
                inputFormat="dd MMM yyyy"
                label={""}
                value={payload.date || null}
                onChange={(v) => setpayload({ ...payload, date: v })}
                disabled={formdisabled}
              />
            </Stack>
          </Stack>
          <Typography variant="body1" color="initial">
            Dear Sir, Referring to your offer Any deviation from which will be
            at your own risk, unless authorized by us. Term and condition as
            following :
          </Typography>
          <Stack spacing={0}>
            <InputInline
              lb={"Time of delivery"}
              lbw={180}
              name="tod"
              onChange={handlePayload}
              value={payload.tod || ""}
              disabled={formdisabled}
            />
            <InputInline
              lb={"Payment"}
              lbw={180}
              name="payment"
              onChange={handlePayload}
              value={payload.payment || ""}
              disabled={formdisabled}
            />
            <InputInline
              lb={"Partial shipment"}
              lbw={180}
              name="partial_shipment"
              onChange={handlePayload}
              value={payload.partial_shipment || ""}
              disabled={formdisabled}
            />
            <InputInline
              lb={"Time of Transshipment"}
              lbw={180}
              name="transshipment"
              onChange={handlePayload}
              value={payload.transshipment || ""}
              disabled={formdisabled}
            />

            <InputInline
              lb={"Destination "}
              lbw={180}
              name="destination"
              onChange={handlePayload}
              value={payload.destination || ""}
              disabled={formdisabled}
            />
            <InputInline
              lb={"Notify "}
              lbw={180}
              name="notify"
              onChange={handlePayload}
              value={payload.notify || ""}
              disabled={formdisabled}
            />
            <InputInline
              lb={"Packing "}
              lbw={180}
              name="packing"
              onChange={handlePayload}
              value={payload.packing || ""}
              disabled={formdisabled}
            />
          </Stack>
          <ProductList
            initvalue={payload.product_list}
            onChange={(v) => setpayload({ ...payload, product_list: v })}
            disabled={formdisabled}
          />
          <Typography variant="body1" color="initial">
            Further more please return to us a duly signed copy of this ordering
            letter as your final confirmation, or duly signed sales contract.
          </Typography>
          <Stack>
            Faithfully Yours.
            <Sign text="Import" />
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
          btn_disabled={!payload.to}
          setEdit={() => setformdisabled(false)}
          filter="user-export"
        />
      )}
    </Stack>
  );
}
