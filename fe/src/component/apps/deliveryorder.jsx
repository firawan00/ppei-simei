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
          DELIVERY ORDER (D/O)
        </Typography>

        <Stack direction={"row"} justifyContent="space-between">
          <Stack spacing={1}>
            <InputInline lb={"No"} />
            <InputInline lb={"Hal"} />
          </Stack>
          <Stack>
            <Typography color="initial">
              Jakata, {fdate.format(fdate.today)}
            </Typography>
          </Stack>
        </Stack>

        <Stack>
          Mohon dapat diserahkan container kosong kepada shipper di bawah ini :
        </Stack>

        <Stack spacing={1}>
          <InputInline lb={"SHIPPER"} lbw={180} />
          <InputInline lb={"S/I NO.	"} lbw={180} />
          <InputInline lb={"TUJUAN "} lbw={180} />
          <InputInline lb={"JUMLAH CONTAINER	"} lbw={180} />
          <InputInline lb={"RENCANA KAPAL	"} lbw={180} />
          <InputInline lb={"EST"} lbw={180} />
        </Stack>

        <Stack>
          Biaya-biaya yang timbul atas penyerahan container kosong agar
          dibebankan kepada{" "}
          <span className="f-bold f-err">[EKSPORTIR/ EMKL]</span>.
        </Stack>

        <Stack>Terima kasih atas kerjasamanya</Stack>

        <Stack spacing={1}>
          <InputInline lb={"Container no"} lbw={180} />
          <InputInline lb={"Seal no"} lbw={180} />
        </Stack>

        <Stack>
          Faithfully Yours.
          <br />
          <br />
          <br />
          <br />
          Logistik Dept
        </Stack>
      </Stack>
    </PaperA4>
  );
}

function Header(params) {
  return (
    <Stack direction={"row"} className="center" spacing={2}>
      <Stack width={96} height={96} p={1}>
        <img src={logo.e2} alt="" className="img-contain" />
      </Stack>
      <Stack>
        <Typography variant="h6" color="initial">
          PT. TRIKORA LLOYD
        </Typography>

        <Typography variant="subtitle1" color="initial">
          GENERAL AGENT FOR
        </Typography>

        <Typography variant="subtitle1" color="initial">
          [NED LLOYD]
        </Typography>
      </Stack>
    </Stack>
  );
}
