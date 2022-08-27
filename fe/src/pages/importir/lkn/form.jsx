import React, { useState, useContext } from "react";
import Context from "@context";
import { Stack, Typography, Divider, TextField } from "@mui/material";
import PaperA4 from "@component/paperA4";
import { logo } from "@ui/logo";
import Circle from "@ui/circle";
import { fdate } from "@component/helper/formating";
import InputInline from "@component/gip-useForm/inputInline";
import ProductList from "@/component/ui/productListInvoice";
import SenttoImportir from "@component/apps/senttoImportir";
import { fetcher, useNavigate } from "@component/gip-useForm/fetcher";
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
      url: `md_lkn`,
      method: "post",
      data: payload,
    });
    nav("/importir/lkn", true);
  }

  return (
    <Stack component={"form"} onSubmit={formSubmit}>
      <PaperA4>
        <Stack spacing={3}>
          <Typography variant="h6" align="center" color="initial">
            LEMBAR KERJA NEGOSIASI
          </Typography>

          <Stack>
            <Typography variant="body1" color="initial">
              Pada negosiasi eksportir dan importir dicapai hasil sebagai
              berikut :
            </Typography>
            <Typography variant="body1" color="initial">
              1. Jenis barang, jumlah dan harga
            </Typography>
            <ProductList
              initvalue={payload.product_list}
              onChange={(v) => setpayload({ ...payload, product_list: v })}
              disabled={formdisabled}
            />
          </Stack>

          <Stack spacing={1}>
            <InputInline
              lb={"2.	Jenis Incoterm  "}
              lbw={180}
              name="jenis_incoterm"
              onChange={handlePayload}
              value={payload.jenis_incoterm || ""}
              disabled={formdisabled}
            />
            <InputInline
              lb={"3.	Latest date shipment   "}
              lbw={180}
              name="latest_date_shipment"
              onChange={handlePayload}
              value={payload.latest_date_shipment || ""}
              disabled={formdisabled}
            />
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
