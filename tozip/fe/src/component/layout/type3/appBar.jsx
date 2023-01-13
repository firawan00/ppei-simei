import React from "react";

import MuiAppBar from "@mui/material/AppBar";
import { styled } from "@mui/material/styles";
import { config } from "./config";
import { IconButton, Stack, Typography } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import MenuIcon from "@mui/icons-material/Menu";

import { logo } from "@ui/logo";

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  bgcolor: "#ffffff",
  backgroundColor: "#fff",
  height: config.appBarHeigt,
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export default function App({ open, setOpen }) {
  return (
    <AppBar position="absolute" open={open}>
      <Stack
        height={config.appBarHeigt}
        direction={"row"}
        alignItems={"center"}
        justifyContent="space-between"
        width={"100%"}
        bgcolor={config.appBarBGC}
        position="relative"
      >
        <Stack
          direction={"row"}
          alignItems="center"
          height={config.appBarHeigt}
          position="relative"
        >
          <Stack mx={2}>
            <IconButton color="primary" onClick={() => setOpen(!open)}>
              {!open && <MenuIcon />}
              {open && <ChevronLeftIcon />}
            </IconButton>
          </Stack>
        </Stack>

        <Stack
          height={64}
          direction="row"
          alignItems={"center"}
          overflow={"hidden"}
          p={1}
          spacing={1}
        >
          <Stack textAlign={"right"}>
            <Typography variant="h6" color="primary" fontWeight={"bold"}>
              KEMENTERIAN PERDAGANGAN
            </Typography>
            <Typography variant="body" color="primary" fontWeight={"bold"}>
              {import.meta.env.VITE_APPNAME}
            </Typography>
          </Stack>
          <img src={logo.S256} alt="" className="img-contain h100" />
        </Stack>
      </Stack>
    </AppBar>
  );
}

function name(params) {
  return;
}
