import { Stack, Typography, Divider, TextField } from "@mui/material";
import PaperA4 from "@component/paperA4";
import { logo } from "@ui/logo";
import Circle from "@ui/circle";
import { fdate } from "@component/helper/formating";
import InputInline from "@component/gip-useForm/inputInline";

import BackIcon from "@/component/ui/backIcon";
import { meta } from "./_meta";
import SenttoExportir from "@/component/apps/sentto";

export default function App(props) {
  return (
    <Stack>
      <PaperA4>
        <BackIcon />
        <Stack spacing={2}>
          <Stack direction={"row"} spacing={3}>
            <Stack width={"60%"}>
              <InputInline lb={"SHIPPER"} lbw={180} dcol />
              <InputInline lb={"CONSIGNEE"} lbw={180} dcol />
              <InputInline lb={"NOTIFY PARTY"} lbw={180} dcol />
              <Stack
                direction={"row"}
                justifyContent="space-between"
                spacing={2}
              >
                <InputInline lb={"Pre-carriage by"} lbw={180} dcol />
                <InputInline lb={"Place of Receipt"} lbw={180} dcol />
              </Stack>
            </Stack>
            <Stack width={"40%"}>
              <InputInline lb={"B/L No."} lbw={180} />
              <Header />
            </Stack>
          </Stack>

          <Stack>
            <Stack direction={"row"} justifyContent="space-between" spacing={2}>
              <InputInline lb={"Ocean Vessel"} lbw={180} dcol />
              <InputInline lb={"Voyage No"} lbw={180} dcol />
              <InputInline lb={"Flag"} lbw={180} dcol />
              <InputInline lb={"Place of Delivery"} lbw={180} dcol />
            </Stack>

            <Stack direction={"row"} justifyContent="space-between" spacing={2}>
              <InputInline lb={"Port of Loading"} lbw={180} dcol />
              <InputInline lb={"Port of Discharge"} lbw={180} dcol />
              <Stack width={"calc(50% + 96px)"}>
                <InputInline lb={"Final Destination"} lbw={180} dcol />
              </Stack>
            </Stack>
          </Stack>

          <Stack direction={"row"} justifyContent="space-between" spacing={2}>
            <Stack>
              <InputInline lb={"Container No"} lbw={180} />
              <InputInline lb={"Seal No.Marks&Nos"} lbw={180} />
              <InputInline lb={"No.of Containers or P'kgs"} lbw={180} />
            </Stack>

            <Stack>
              <InputInline lb={"Description of  Goods"} lbw={180} />
              <InputInline lb={"Gross Weight"} lbw={180} />
              <InputInline lb={"Measurement"} lbw={180} />
            </Stack>
          </Stack>

          <Stack>
            <InputInline lb={"Shipping Marks"} lbw={240} />
            <InputInline lb={"Total Number of Containers"} lbw={240} />
            <InputInline lb={"or other Packages (in words)"} lbw={240} />
          </Stack>

          <Stack>
            <Stack direction={"row"} justifyContent="space-between" spacing={2}>
              <InputInline lb={"Freight Prepaid At"} lbw={180} dcol />
              <InputInline lb={"Freight Paybale at"} lbw={180} dcol />
              <InputInline lb={"Place of Issue"} lbw={180} dcol />
            </Stack>

            <Stack direction={"row"} justifyContent="space-between" spacing={2}>
              <InputInline lb={"Total Prepaid in"} lbw={180} dcol />
              <InputInline lb={"No.of Original B/L"} lbw={180} dcol />
              <InputInline lb={"Date of Issue"} lbw={180} dcol />
            </Stack>
          </Stack>

          <Stack direction={"row"} justifyContent="space-between" spacing={2}>
            <Stack>
              Laden on Board the Vessel
              <InputInline lb={"date"} lbw={60} />
              <InputInline lb={"by"} lbw={60} />
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
      <SenttoExportir />
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
