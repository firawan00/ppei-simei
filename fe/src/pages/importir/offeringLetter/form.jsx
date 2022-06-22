import { Stack, Typography, Divider, TextField } from "@mui/material";
import PaperA4 from "@component/paperA4";
import { logo } from "@ui/logo";
import Circle from "@ui/circle";
import { fdate } from "@component/helper/formating";
import InputInline from "@component/gip-useForm/inputInline";

export default function App(props) {
  return (
    <PaperA4>
      <Stack spacing={3}>
        <Header />
        <Divider />

        <Typography variant="h6" align="center" color="initial">
          Introduction Letter
        </Typography>

        <Stack direction={"row"} justifyContent="space-between">
          <Stack spacing={1}>
            <InputInline lb={"Our Ref"} />
            <InputInline lb={"To"} />
          </Stack>
          <Stack>
            <Typography color="initial">
              Jakata, {fdate.format(fdate.today)}
            </Typography>
          </Stack>
        </Stack>

        <Stack>
          Dear Sir, Allow us herewith to introduce our company as an export
          company that produce and export frozen seafood. With this letter, we
          would like to offer our best selling items as following details.
        </Stack>

        <Stack spacing={1}>
          <InputInline lb={"Desc. of goods "} lbw={180} />
          <InputInline lb={"Type"} lbw={180} />
          <InputInline lb={"Price FOB Tg Priok"} lbw={180} />
        </Stack>

        <Stack>
          Enclosed we are sending some brochure about our product, according to
          our survey that this product have a good prospect inside your market.
        </Stack>

        <Stack>
          We do hope you will be interested and we shall be pleased to have your
          inquiry and trial order in due time. In case you need information,
          please do not hesitate to contact us by fax or email. Thank you.
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
