import React, { useState, useContext } from "react";
import Context from "@context";
import { fetcher, useNavigate } from "@component/gip-useForm/fetcher";

import { Stack, Typography, Divider, TextField } from "@mui/material";
import PaperA4 from "@component/paperA4";
import { logo } from "@ui/logo";
import Circle from "@ui/circle";
import { fdate } from "@component/helper/formating";
import InputInline from "@component/gip-useForm/inputInline";

import BackIcon from "@/component/ui/backIcon";
import { meta } from "./_meta";
import SenttoExportir from "@/component/apps/sentto";
import Sentto from "@/component/apps/sentto";

export default function App({ refdata }) {
  console.log(refdata);
  const { auth } = useContext(Context);
  const [formdisabled, setformdisabled] = useState(refdata.data ? true : false);
  const [payload, setpayload] = useState(refdata.data);
  const nav = useNavigate();

  function handlePayload(e) {
    setpayload({ ...payload, [e.target.name]: e.target.value });
  }

  async function formSubmit(e) {
    e.preventDefault();
    let res = await fetcher({
      url: `md_billoflading`,
      method: "post",
      data: payload,
    });
    console.log(res);
    // nav("/exportir/invoice", true);
  }
  return (
    <Stack component={"form"} onSubmit={formSubmit}>
      <PaperA4>
        <BackIcon />
        <Stack spacing={2}>
          <Stack direction={"row"} spacing={3}>
            <Stack width={"60%"}>
              <InputInline
                lb={"SHIPPER"}
                lbw={180}
                dcol
                disabled={formdisabled}
                name="shipper"
                onChange={handlePayload}
                value={payload.shipper || ""}
              />
              <InputInline
                lb={"CONSIGNEE"}
                lbw={180}
                dcol
                disabled={formdisabled}
                name="consignee"
                onChange={handlePayload}
                value={payload.consignee || ""}
              />
              <InputInline
                lb={"NOTIFY PARTY"}
                lbw={180}
                dcol
                disabled={formdisabled}
                name="notify_party"
                onChange={handlePayload}
                value={payload.notify_party || ""}
              />
              <Stack
                direction={"row"}
                justifyContent="space-between"
                spacing={2}
              >
                <InputInline
                  lb={"Pre-carriage by"}
                  lbw={180}
                  dcol
                  disabled={formdisabled}
                  name="pre_carriage_by"
                  onChange={handlePayload}
                  value={payload.pre_carriage_by || ""}
                />
                <InputInline
                  lb={"Place of Receipt"}
                  lbw={180}
                  dcol
                  disabled={formdisabled}
                  name="place_of_receipt"
                  onChange={handlePayload}
                  value={payload.place_of_receipt || ""}
                />
              </Stack>
            </Stack>
            <Stack width={"40%"}>
              <InputInline
                lb={"B/L No."}
                lbw={180}
                disabled={formdisabled}
                name="blno"
                onChange={handlePayload}
                value={payload.blno || ""}
              />
              <Header />
            </Stack>
          </Stack>

          <Stack>
            <Stack direction={"row"} justifyContent="space-between" spacing={2}>
              <InputInline
                lb={"Ocean Vessel"}
                lbw={180}
                dcol
                disabled={formdisabled}
                name="ocean_vessel"
                onChange={handlePayload}
                value={payload.ocean_vessel || ""}
              />
              <InputInline
                lb={"Voyage No"}
                lbw={180}
                dcol
                disabled={formdisabled}
                name="voyage_no"
                onChange={handlePayload}
                value={payload.voyage_no || ""}
              />
              <InputInline
                lb={"Flag"}
                lbw={180}
                dcol
                disabled={formdisabled}
                name="flag"
                onChange={handlePayload}
                value={payload.flag || ""}
              />
              <InputInline
                lb={"Place of Delivery"}
                lbw={180}
                dcol
                disabled={formdisabled}
                name="place_of_delivery"
                onChange={handlePayload}
                value={payload.place_of_delivery || ""}
              />
            </Stack>

            <Stack direction={"row"} justifyContent="space-between" spacing={2}>
              <InputInline
                lb={"Port of Loading"}
                lbw={180}
                dcol
                disabled={formdisabled}
                name="port_of_loading"
                onChange={handlePayload}
                value={payload.port_of_loading || ""}
              />
              <InputInline
                lb={"Port of Discharge"}
                lbw={180}
                dcol
                disabled={formdisabled}
                name="port_of_discharge"
                onChange={handlePayload}
                value={payload.port_of_discharge || ""}
              />
              <Stack width={"calc(50% + 96px)"}>
                <InputInline
                  lb={"Final Destination"}
                  lbw={180}
                  dcol
                  disabled={formdisabled}
                  name="final_destination"
                  onChange={handlePayload}
                  value={payload.final_destination || ""}
                />
              </Stack>
            </Stack>
          </Stack>

          <Stack direction={"row"} justifyContent="space-between" spacing={2}>
            <Stack>
              <InputInline
                lb={"Container No"}
                lbw={180}
                disabled={formdisabled}
                name="container_no"
                onChange={handlePayload}
                value={payload.container_no || ""}
              />
              <InputInline
                lb={"Seal No.Marks&Nos"}
                lbw={180}
                disabled={formdisabled}
                name="seal_no"
                onChange={handlePayload}
                value={payload.seal_no || ""}
              />
              <InputInline
                lb={"No.of Containers or P'kgs"}
                lbw={180}
                disabled={formdisabled}
                name="container_no_or"
                onChange={handlePayload}
                value={payload.container_no_or || ""}
              />
            </Stack>

            <Stack>
              <InputInline
                lb={"Description of  Goods"}
                lbw={180}
                disabled={formdisabled}
                name="dog"
                onChange={handlePayload}
                value={payload.dog || ""}
              />
              <InputInline
                lb={"Gross Weight"}
                lbw={180}
                disabled={formdisabled}
                name="gw"
                onChange={handlePayload}
                value={payload.gw || ""}
              />
              <InputInline
                lb={"Measurement"}
                lbw={180}
                disabled={formdisabled}
                name="measurement"
                onChange={handlePayload}
                value={payload.measurement || ""}
              />
            </Stack>
          </Stack>

          <Stack>
            <InputInline
              lb={"Shipping Marks"}
              lbw={240}
              disabled={formdisabled}
              name="shipping_marks"
              onChange={handlePayload}
              value={payload.shipping_marks || ""}
            />
            <InputInline
              lb={"Total Number of Containers"}
              lbw={240}
              disabled={formdisabled}
              name="total_containers"
              onChange={handlePayload}
              value={payload.total_containers || ""}
            />
            <InputInline
              lb={"or other Packages (in words)"}
              lbw={240}
              disabled={formdisabled}
              name="other_packages"
              onChange={handlePayload}
              value={payload.other_packages || ""}
            />
          </Stack>

          <Stack>
            <Stack direction={"row"} justifyContent="space-between" spacing={2}>
              <InputInline
                lb={"Freight Prepaid At"}
                lbw={180}
                dcol
                disabled={formdisabled}
                name="freight_prepaid"
                onChange={handlePayload}
                value={payload.freight_prepaid || ""}
              />
              <InputInline
                lb={"Freight Paybale at"}
                lbw={180}
                dcol
                disabled={formdisabled}
                name="freight_paybale"
                onChange={handlePayload}
                value={payload.freight_paybale || ""}
              />
              <InputInline
                lb={"Place of Issue"}
                lbw={180}
                dcol
                disabled={formdisabled}
                name="poi"
                onChange={handlePayload}
                value={payload.poi || ""}
              />
            </Stack>

            <Stack direction={"row"} justifyContent="space-between" spacing={2}>
              <InputInline
                lb={"Total Prepaid in"}
                lbw={180}
                dcol
                disabled={formdisabled}
                name="total_prepaid"
                onChange={handlePayload}
                value={payload.total_prepaid || ""}
              />
              <InputInline
                lb={"No.of Original B/L"}
                lbw={180}
                dcol
                disabled={formdisabled}
                name="original_bl"
                onChange={handlePayload}
                value={payload.original_bl || ""}
              />
              <InputInline
                lb={"Date of Issue"}
                lbw={180}
                dcol
                disabled={formdisabled}
                name="date_issue"
                onChange={handlePayload}
                value={payload.date_issue || ""}
              />
            </Stack>
          </Stack>

          <Stack direction={"row"} justifyContent="space-between" spacing={2}>
            <Stack>
              Laden on Board the Vessel
              <InputInline
                lb={"date"}
                lbw={60}
                disabled={formdisabled}
                name="laden_date"
                onChange={handlePayload}
                value={payload.laden_date || ""}
              />
              <InputInline
                lb={"by"}
                lbw={60}
                disabled={formdisabled}
                name="laden_by"
                onChange={handlePayload}
                value={payload.laden_by || ""}
              />
            </Stack>
            <Stack className="center">
              <Typography variant="h4" color="initial">
                NED LLOYD LINE
              </Typography>
              <Typography variant="subtitle1" color="initial">
                BY : PT. TRIKORA LLOYD
              </Typography>
            </Stack>
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
    <Stack className="center" my={2}>
      <Stack width={90}>
        <img src={logo.e3} alt="" className="img-contain" />
      </Stack>{" "}
      <Typography variant="h6" color="initial">
        NED LLOYD LINE
      </Typography>
      <Typography variant="subtitle1" color="initial">
        BILL OF LANDING
      </Typography>
      <Typography variant="h1" color="initial">
        COPY
      </Typography>
    </Stack>
  );
}
