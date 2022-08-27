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
import Sentto from "@/component/apps/sentto";

import Header from "../_partial/exportirHeader";
import Sign from "@component/apps/sign";
import InputDate from "@component/gip-useForm/inputDate";

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
    let res = await fetcher({
      url: `md_invoice`,
      method: "post",
      data: payload,
    });
    nav("/exportir/invoice", true);
  }

  return (
    <Stack component={"form"} onSubmit={formSubmit}>
      <PaperA4>
        <Stack spacing={3}>
          <Header />
          <Divider />
          <Typography variant="h6" align="center" color="initial">
            INVOICE
          </Typography>
          <Stack direction={"row"} alignItems="flex-start" spacing={2}>
            <InputInline
              lb={"Consignee"}
              name="consignee"
              onChange={handlePayload}
              disabled={formdisabled}
              value={payload.consignee || ""}
            />
            <Stack width={"50%"}>
              <InputInline
                lb={"Invoice No."}
                name="no"
                onChange={handlePayload}
                disabled={formdisabled}
                value={payload.no || ""}
              />

              <Stack direction={"row"} justifyContent="space-between">
                <Typography color="initial" width={180}>
                  Date
                </Typography>
                <InputDate
                  disabled={formdisabled}
                  inputFormat="dd MMM yyyy"
                  label={""}
                  value={payload.date || null}
                  onChange={(v) => setpayload({ ...payload, date: v })}
                />
              </Stack>

              <InputInline
                lb={"SC No."}
                name="scno"
                onChange={handlePayload}
                disabled={formdisabled}
                value={payload.scno || ""}
              />
              <InputInline
                lb={" L/C No."}
                name="lcno"
                onChange={handlePayload}
                disabled={formdisabled}
                value={payload.lcno || ""}
              />
              <InputInline
                lb={"Issuing Bank"}
                name="issuing_bank"
                onChange={handlePayload}
                disabled={formdisabled}
                value={payload.issuing_bank || ""}
              />
              <InputInline
                lb={"Terms of Delivery"}
                name="tod"
                onChange={handlePayload}
                disabled={formdisabled}
                value={payload.tod || ""}
              />
            </Stack>
          </Stack>

          <Stack>
            <InputInline
              lb={"Ship By"}
              name="ship_by"
              onChange={handlePayload}
              disabled={formdisabled}
              value={payload.ship_by || ""}
            />
            <InputInline
              lb={"Ship on date"}
              name="ship_on"
              onChange={handlePayload}
              disabled={formdisabled}
              value={payload.ship_on || ""}
            />
            <InputInline
              lb={"Destination"}
              name="destination"
              onChange={handlePayload}
              disabled={formdisabled}
              value={payload.destination || ""}
            />
            <InputInline
              lb={"Shipping Marks"}
              lbw={180}
              name="shipping_mark"
              onChange={handlePayload}
              disabled={formdisabled}
              value={payload.shipping_mark || ""}
            />
          </Stack>
          <ProductList
            disabled={formdisabled}
            initvalue={payload.product_list}
            onChange={(v) => setpayload({ ...payload, product_list: v })}
          />

          <Stack>
            Faithfully Yours.
            <Sign text="Export" />
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
