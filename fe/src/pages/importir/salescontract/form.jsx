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
          <Typography variant="h6" align="center" color="initial">
            SALES CONTRACT
          </Typography>

          <Typography variant="body1" color="initial">
            The seller confirms having concluded this contract with the buyer
            covering the under mentioned merchandise on the terms and the
            conditions stated here under and on the reverse. The buyer is hereby
            requested to sign and return the original attached here to, and if
            any discrepancy found by the Buyer, the seller should be informed
            immediately by cable.
          </Typography>
          <ProductList />
        </Stack>
      </PaperA4>
      <PaperA4>
        <Stack spacing={2}>
          <Typography variant="body1" color="initial">
            I. Shipment
          </Typography>
          <InputInline lb={"1.1	Shipment – date  "} lbw={180} />
          <InputInline lb={"1.2	Partial – Shipment  "} lbw={180} />
          <InputInline lb={"1.3	Transshipment "} lbw={180} />
          <InputInline lb={"1.4	Destination "} lbw={180} />
          <InputInline lb={"1.5	Notify address "} lbw={180} />
          <InputInline lb={"1.6	Shipping Marks "} lbw={180} />

          <InputInline lb={"II. Payment"} lbw={180} />
        </Stack>

        <Stack direction={"row"} justifyContent="space-between" mt={5}>
          <Stack>
            Confirmed by .
            <br />
            <br />
            <br />
            Import Manager
          </Stack>

          <Stack>
            Confirmed by .
            <br />
            <br />
            <br />
            Export Manager
          </Stack>
        </Stack>
      </PaperA4>
      <SenttoImportir />
    </Stack>
  );
}
