import React from "react";

import MuiAppBar from "@mui/material/AppBar";
import { styled } from "@mui/material/styles";
import { config } from "./config";
import { IconButton, Stack, Typography } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import MenuIcon from "@mui/icons-material/Menu";

import Circle from "@ui/circle";
import { logo } from "@ui/logo";

import Context from "@context";

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
    // marginLeft: config.drawerWidth,
    // width: `calc(100% - ${config.drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export default function App({ open, setOpen }) {
  const { auth } = React.useContext(Context);
  return (
    <AppBar position="absolute" open={open}>
      <Stack
        height={config.appBarHeigt}
        direction={"row"}
        alignItems={"center"}
        justifyContent="space-between"
        width={"100%"}
        pr={3}
        bgcolor={config.appBarBGC}
        position="relative"
      >
        <Stack
          direction={"row"}
          alignItems="center"
          height={config.appBarHeigt}
          position="relative"
        >
          <Stack
            width={open ? config.drawerWidth : "64px"}
            height={64}
            direction="row"
            alignItems={"center"}
            bgcolor="red"
            overflow={"hidden"}
            p={1}
            spacing={1}
          >
            <img src={logo.S256} alt="" className="img-contain h100" />
            <Typography variant="h6" color="black" fontWeight={"bold"}>
              BAKAMLA - HCDP
            </Typography>
          </Stack>
          <Stack mx={2}>
            <IconButton color="primary" onClick={() => setOpen(!open)}>
              {!open && <MenuIcon />}
              {open && <ChevronLeftIcon />}
            </IconButton>
          </Stack>
        </Stack>

        <Stack direction={"row"} spacing={2}>
          <Stack>
            <Typography variant="overline" align="right" color="initial">
              {auth.user.name}
            </Typography>
            <Typography variant="caption" color="initial" align="right">
              {auth.user.role || "user"}
            </Typography>
          </Stack>
          <Circle w={42}>{auth.user.name[0]}</Circle>
        </Stack>
      </Stack>
    </AppBar>
  );
}
