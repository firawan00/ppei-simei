import Login from "@component/auth/login";
import { Stack, Typography, Divider } from "@mui/material";
import { logo } from "@ui/logo";

export default function App(params) {
  return (
    <Stack height={"100vh"} alignItems="center" mt={"20vh"}>
      <Stack width={"100vw"} maxWidth={480}>
        <Stack height={200}>
          <img src={logo.S256} alt="" className="img-contain h100" />
        </Stack>
        <Typography
          variant="h2"
          fontWeight="900"
          textAlign={"center"}
          width={"100%"}
          color="primary"
        >
          SimEI
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
          <Login />
        </Stack>
      </Stack>
    </Stack>
  );
}
