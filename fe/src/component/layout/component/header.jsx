import { Stack, Typography, AppBar } from "@mui/material";

import MenuModal from "./menuModal";
import UserPopMenu from "./userPopMenu";
import Circle from "@ui/circle";
import { Link } from "react-router-dom";

export default function App(props) {
  return (
    <AppBar>
      <Stack
        height={48}
        bgcolor="secondary.main"
        direction={"row"}
        justifyContent="space-between"
        alignItems={"center"}
        px={2}
      >
        <LogoGram />
        <UserPopMenu />
      </Stack>
    </AppBar>
  );
}

function LogoGram(params) {
  return (
    <Stack
      direction={"row"}
      spacing={1}
      component={Link}
      to="/"
      alignItems={"center"}
    >
      <Circle w={24} />
      <Typography
        variant="h6"
        color="white.main"
        className="f-uppercase"
        fontWeight={"bold"}
      >
        JagoKuliner
      </Typography>
    </Stack>
  );
}
