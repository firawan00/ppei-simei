import { Stack, Typography, Divider, TextField } from "@mui/material";
import PaperA4 from "@component/paperA4";
import { logo } from "@ui/logo";
import Circle from "@ui/circle";
import { fdate } from "@component/helper/formating";
import InputInline from "@component/gip-useForm/inputInline";
import ProductList from "@/component/ui/productList";
import SenttoImportir from "@component/apps/senttoImportir";

export default function App(props) {
  return (
    <Stack>
      <PaperA4>
        <Stack spacing={2}>
          <Header />
          <Divider />
          <Typography variant="h6" align="center" color="initial">
            ORDERING LETTER
          </Typography>
          <Stack direction={"row"} justifyContent="space-between">
            <Stack spacing={1}>
              <InputInline lb={"Our reff"} lbw={180} />
            </Stack>
            <Stack>
              <Typography color="initial">
                Jakata, {fdate.format(fdate.today)}
              </Typography>
            </Stack>
          </Stack>
          <Typography variant="body1" color="initial">
            Dear Sir, Referring to your offer Any deviation from which will be
            at your own risk, unless authorized by us. Term and condition as
            following :
          </Typography>
          <Stack spacing={0}>
            <InputInline lb={"Time of delivery"} lbw={180} />
            <InputInline lb={"Payment"} lbw={180} />
            <InputInline lb={"Partial shipment"} lbw={180} />
            <InputInline lb={"Time of Transshipment"} lbw={180} />

            <InputInline lb={"Destination "} lbw={180} />
            <InputInline lb={"Notify "} lbw={180} />
            <InputInline lb={"Packing "} lbw={180} />
          </Stack>
          <ProductList />
          <Typography variant="body1" color="initial">
            Further more please return to us a duly signed copy of this ordering
            letter as your final confirmation, or duly signed sales contract.
          </Typography>
          <Stack>
            Faithfully Yours.
            <br />
            <br />
            <br />
            Import Manager
          </Stack>
        </Stack>
      </PaperA4>
      <SenttoImportir />
    </Stack>
  );
}

function Header(params) {
  return (
    <Stack direction={"row"} className="center" spacing={2}>
      <Stack width={96} height={96} p={1}>
        <img src={logo.e3} alt="" className="img-contain" />
      </Stack>
      <Stack>
        <Typography variant="h6" color="initial">
          MD Berreclough Limited
        </Typography>

        <Typography variant="subtitle1" color="initial">
          United Kingdom
        </Typography>

        {/* <Typography variant="subtitle1" color="initial">
          Phone 62-21-5664425, Fax. 62-21-5664430
        </Typography> */}
      </Stack>
    </Stack>
  );
}
