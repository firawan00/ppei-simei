import Signup from "@component/auth/signup";
import { Stack, Typography } from "@mui/material";
import { logo } from "@ui/logo";

export default function App(params) {
  return (
    <Stack alignItems="center" mt={"20vh"} height={"100vh"}>
      <Stack width={"100vw"} maxWidth={480}>
        <Stack height={200}>
          <img src={logo.S256} alt="" className="img-contain h100" />
        </Stack>
        <Typography
          variant="h3"
          fontWeight="900"
          textAlign={"center"}
          width={"100%"}
          color="primary"
        >
          SIMEI
        </Typography>
        <Typography
          variant="overline"
          fontWeight="900"
          textAlign={"center"}
          width={"100%"}
          color="primary"
        >
          Simulasi Export Import
        </Typography>
        <Stack flexGrow={1} mt={2}>
          <Signup />
        </Stack>
      </Stack>
    </Stack>
  );
}
