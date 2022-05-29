import React from "react";
import MainNav from "../component/navigation";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import useMediaQuery from "@mui/material/useMediaQuery";

import { IconButton, Stack, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MuiAppBar from "@mui/material/AppBar";
import MuiDrawer from "@mui/material/Drawer";

import { styled } from "@mui/material/styles";
import Footer from "@ly/component/footer";

const drawerWidth = 280;
const drawerWidthClosed = "60px";
const appBarHeigt = 64;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  height: appBarHeigt,
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    height: "100vh",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: 0,
      [theme.breakpoints.up("md")]: {
        width: drawerWidthClosed,
      },
    }),
  },
}));

export default function Dashboard({ isFull = true, children }) {
  const isLarge = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const [open, setOpen] = React.useState(isLarge);

  React.useEffect(() => {
    setOpen(isLarge);
  }, [isLarge]);

  return (
    <Stack height={"100vh"} overflow="hidden">
      <AppBar position="absolute" open={open}>
        <Stack
          height={appBarHeigt}
          direction={"row"}
          alignItems={"center"}
          justifyContent="space-between"
          width={"100%"}
          pl={1}
          pr={3}
        >
          <IconButton color="inherit" onClick={() => setOpen(!open)}>
            {!open && <MenuIcon />}
            {open && <ChevronLeftIcon />}
          </IconButton>
          <Stack
            height={appBarHeigt - 16}
            width={appBarHeigt - 16}
            bgcolor="white"
            borderRadius={"50%"}
            p={"4px"}
            className="elevate"
            flexShrink={0}
          >
            <img
              src="/assets/img/logogram.png"
              alt=""
              className="img-contain"
            />
          </Stack>
        </Stack>
      </AppBar>
      <Stack
        pl={isLarge ? (open ? `${drawerWidth}px` : "64px") : 0}
        pt={`${appBarHeigt}px`}
        height="100vh"
        maxHeight={"calc(100vh)"}
        overflow={"hidden"}
      >
        <Stack px={2} justifyContent={"space-between"} pt={3} flexGrow={1}>
          {children}
          <Footer />
        </Stack>
      </Stack>
      <Drawer
        variant={"permanent"}
        onClose={() => setOpen(!open)}
        open={open}
        sx={{ position: "absolute" }}
        left={0}
      >
        <Stack
          width={"100%"}
          height="100%"
          pt={`${appBarHeigt}px`}
          bgcolor="background.bgdrawer"
        >
          <MainNav isOpen={(e) => setOpen(e)} parentOpen={open} />
        </Stack>
      </Drawer>
    </Stack>
  );
}
