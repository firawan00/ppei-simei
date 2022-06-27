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
            <ProductList />
          </Stack>

          <Stack spacing={1}>
            <InputInline lb={"2.	Jenis Incoterm  "} lbw={180} />
            <InputInline lb={"3.	Latest date shipment   "} lbw={180} />
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
