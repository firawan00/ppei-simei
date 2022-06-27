import { Stack, Typography, Divider, TextField } from "@mui/material";
import PaperA4 from "@component/paperA4";
import { logo } from "@ui/logo";
import { fdate } from "@component/helper/formating";
import InputInline from "@component/gip-useForm/inputInline";
import SenttoExportir from "@/component/apps/sentto";

export default function App(props) {
  return (
    <Stack>
      <PaperA4>
        <Stack spacing={3}>
          <Header />
          <Divider />

          <Typography variant="h6" align="center" color="initial">
            OFFERING LETTER
          </Typography>

          <Stack direction={"row"} justifyContent="space-between">
            <Stack spacing={1}>
              <InputInline lb={"Our Ref"} />
              <InputInline lb={"To"} />
              <InputInline lb={"Cc"} />
            </Stack>
            <Stack>
              <Typography color="initial">
                Jakata, {fdate.format(fdate.today)}
              </Typography>
            </Stack>
          </Stack>

          <Stack>
            Dear Sir/Madam, Regarding to your inquiry no…. dated…., herewith we
            would like to submit our offers are as follows:
          </Stack>

          <Stack spacing={1}>
            <InputInline lb={"Commodity"} lbw={180} />
            <InputInline lb={"Quantity"} lbw={180} />
            <InputInline lb={"Unit FOB Price"} lbw={180} />
            <InputInline lb={"Packing"} lbw={180} />
            <InputInline lb={"Shipment"} lbw={180} />
            <InputInline lb={"Term of Payment "} lbw={180} />
            <InputInline lb={"Validity"} lbw={180} />
          </Stack>

          <Stack>
            Please be advised that we prefer to sell in FOB Basis Price. We hope
            our offers are favorable to you, if you have any question do not
            hesitate to contact us.
          </Stack>

          <Stack>
            Faithfully Yours.
            <br />
            <br />
            <br />
            <br />
            Export Manager
          </Stack>
        </Stack>
      </PaperA4>
      <SenttoExportir />
    </Stack>
  );
}

function Header(params) {
  return (
    <Stack direction={"row"} className="center" spacing={2}>
      <Stack width={96} height={96} p={1}>
        <img src={logo.e1} alt="" className="img-contain" />
      </Stack>
      <Stack>
        <Typography variant="h6" color="initial">
          PT. BAYU SEGARA
        </Typography>

        <Typography variant="subtitle1" color="initial">
          JL. TAMAN ANGGREK NO. 14
        </Typography>

        <Typography variant="subtitle1" color="initial">
          Phone 62-21-5664425, Fax. 62-21-5664430
        </Typography>
      </Stack>
    </Stack>
  );
}
