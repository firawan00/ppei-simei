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
import Sign from "@component/apps/sign";
import Sentto from "@component/apps/sentto";
import Header from "../_partial/headerImportir";

export default function App({ refdata }) {
  const { auth } = useContext(Context);
  const [formdisabled, setformdisabled] = useState(refdata ? true : false);
  const [payload, setpayload] = useState(refdata ? { ...refdata, to: refdata.to.id } : {});
  const nav = useNavigate();

  function handlePayload(e) {
    setpayload({ ...payload, [e.target.name]: e.target.value });
  }

  async function formSubmit(e) {
    e.preventDefault();
    console.log(payload);
    let res = await fetcher({
      url: `md_salescontract`,
      method: "post",
      data: payload,
    });
    nav("/importir/salescontract", true);
  }
  return (
    <Stack component={"form"} onSubmit={formSubmit}>
      <PaperA4>
        <Stack spacing={0}>
          <Header />
          <Divider sx={{ my: 2 }} />
          <InputInline
            lb="date"
            placeholder={fdate.format(fdate.today)}
            name="contract_date"
            onChange={handlePayload}
            value={payload.contract_date || ""}
            disabled={formdisabled}
            jc="flex-start"
          />
          <InputInline
            lb="Our Ref"
            placeholder={fdate.format(fdate.today)}
            name="contract_ref"
            onChange={handlePayload}
            value={payload.contract_ref || ""}
            disabled={formdisabled}
            jc="flex-start"
          />

          <Typography variant="h6" align="center" color="initial" mt={1}>
            SALES CONTRACT
          </Typography>
          <Stack className="center">
            <InputInline
              lb={""}
              lbw={180}
              name="contract_no"
              onChange={handlePayload}
              value={payload.contract_no || ""}
              disabled={formdisabled}
            />
          </Stack>

          <Typography variant="body1" color="initial">
            The seller confirms having concluded this contract with the buyer covering the under mentioned merchandise
            on the terms and the conditions stated here under and on the reverse. The buyer is hereby requested to sign
            and return the original attached here to, and if any discrepancy found by the Buyer, the seller should be
            informed immediately by cable.
          </Typography>
          <ProductList
            initvalue={payload.product_list}
            onChange={(v) => setpayload({ ...payload, product_list: v })}
            disabled={formdisabled}
          />
          <Typography variant="body1" color="initial">
            I. Shipment
          </Typography>
          <InputInline
            lb={"1.1	Shipment – date  "}
            lbw={180}
            name="shipment_date"
            onChange={handlePayload}
            value={payload.shipment_date || ""}
            disabled={formdisabled}
            jc="flex-start"
            sx={{
              minWidth: 320,
            }}
          />
          <InputInline
            lb={"1.2	Partial – Shipment  "}
            lbw={180}
            name="partial_shipment"
            onChange={handlePayload}
            value={payload.partial_shipment || ""}
            jc="flex-start"
            disabled={formdisabled}
            sx={{
              minWidth: 320,
            }}
          />
          <InputInline
            lb={"1.3	Transshipment "}
            lbw={180}
            name="transshipment"
            onChange={handlePayload}
            value={payload.transshipment || ""}
            jc="flex-start"
            disabled={formdisabled}
            sx={{
              minWidth: 320,
            }}
          />
          <InputInline
            lb={"1.4	Destination "}
            lbw={180}
            name="destination"
            onChange={handlePayload}
            value={payload.destination || ""}
            jc="flex-start"
            disabled={formdisabled}
            sx={{
              minWidth: 320,
            }}
          />
          <InputInline
            lb={"1.5	Notify address "}
            lbw={180}
            name="notify_address"
            onChange={handlePayload}
            value={payload.notify_address || ""}
            jc="flex-start"
            disabled={formdisabled}
            sx={{
              minWidth: 320,
            }}
          />
          <InputInline
            lb={"1.6	Shipping Marks "}
            lbw={180}
            name="shipping_marks"
            onChange={handlePayload}
            value={payload.shipping_marks || ""}
            jc="flex-start"
            disabled={formdisabled}
            sx={{
              minWidth: 320,
            }}
          />

          <InputInline
            lb={"II. Price / Payment"}
            lbw={180}
            name="payment"
            onChange={handlePayload}
            value={payload.payment || ""}
            jc="flex-start"
            disabled={formdisabled}
            placeholder="FOB Tanjung Priok $99 / L/C at Sight"
            sx={{
              minWidth: 320,
            }}
          />
        </Stack>

        <Stack direction={"row"} justifyContent="space-between" mt={1}>
          <Stack>
            Confirmed by .
            <Sign text="Importir" />
            Import Manager
          </Stack>

          <Stack>
            Confirmed by .
            <Sign text="Exportir" />
            Export Manager
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
