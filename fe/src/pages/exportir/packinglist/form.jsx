import React, { useState, useContext } from "react";
import Context from "@context";
import { fetcher, useNavigate } from "@component/gip-useForm/fetcher";

import { Stack, Typography, Divider, TextField } from "@mui/material";
import PaperA4 from "@component/paperA4";
import { logo } from "@ui/logo";
import Circle from "@ui/circle";
import { fdate } from "@component/helper/formating";
import InputInline from "@component/gip-useForm/inputInline";
import ProductList from "@/component/ui/productListPackingList";
import InputDate from "@component/gip-useForm/inputDate";
import Sentto from "@/component/apps/sentto";

import Header from "../_partial/exportirHeader";
import Sign from "@component/apps/sign";
import { RInvoice } from "@component/apps/selectRef";
import BackIcon from "@/component/ui/backIcon";

export default function App({ refdata }) {
  const [formdata, setformdata] = useState({});
  function handleInvoiceChange(v) {
    setformdata({});
    let temp = formdata;
    temp.invoice = v;
    setformdata({ ...temp });
  }
  return (
    <Stack>
      {!refdata && (
        <Stack alignItems={"center"}>
          <Stack width={"210mm"} className="print-margin">
            <BackIcon />
            <RInvoice selected={handleInvoiceChange} value={formdata.invoice} />
          </Stack>
        </Stack>
      )}

      {((formdata && formdata.invoice) || refdata) && (
        <Form formdata={formdata} refdata={refdata} />
      )}
    </Stack>
  );
}

function Form({ refdata, formdata }) {
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
      url: `md_packinglist`,
      method: "post",
      data: payload,
    });
    nav("/exportir/packinglist", true);
  }

  return (
    <Stack component={"form"} onSubmit={formSubmit}>
      <PaperA4 noback={!refdata}>
        <Stack spacing={3}>
          <Header refdata={refdata} />
          <Divider />
          <Typography variant="h6" align="center" color="initial">
            PACKING LIST
          </Typography>
          <Stack
            direction={"row"}
            alignItems="flex-start"
            justifyContent={"space-between"}
            spacing={2}
          >
            <InputInline
              lb={"Consignee"}
              name="consignee"
              onChange={handlePayload}
              disabled={formdisabled}
              value={payload.consignee || ""}
            />
            <Stack width={"50%"}>
              <InputInline
                lb={"Packing List No."}
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
              value={payload.ship_by || ""}
              disabled={formdisabled}
            />
            <InputInline
              lb={"Ship On"}
              name="ship_on"
              onChange={handlePayload}
              value={payload.ship_on || ""}
              disabled={formdisabled}
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
            refitem={
              payload.product_list
                ? payload.product_list
                : formdata.invoice.product_list
            }
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
          filter="user-import"
        />
      )}
    </Stack>
  );
}
