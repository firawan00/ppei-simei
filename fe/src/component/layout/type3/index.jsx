import React from "react";
import MainNav from "./navigation";
import useMediaQuery from "@mui/material/useMediaQuery";

import { Stack } from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import AppBar from "./appBar";
import { styled } from "@mui/material/styles";
import Footer from "@ly/component/footer";
import { config } from "./config";
const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    height: "100vh",
    whiteSpace: "nowrap",
    width: config.drawerWidth,
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
        width: config.drawerWidthClosed,
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
      <AppBar open={open} setOpen={setOpen} />
      <Stack
        pl={isLarge ? (open ? `${config.drawerWidth}px` : 0) : 0}
        pt={`${config.appBarHeigt}px`}
        height="100vh"
        maxHeight={"calc(100vh)"}
        overflow={"auto"}
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
          pt={`${config.appBarHeigt}px`}
          bgcolor="background.bgdrawer"
        >
          <MainNav isOpen={(e) => setOpen(e)} parentOpen={open} />
        </Stack>
      </Drawer>
    </Stack>
  );
}
