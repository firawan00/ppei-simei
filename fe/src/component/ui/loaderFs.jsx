import React from "react";
import { Box, Modal, CircularProgress } from "@mui/material";
import Context from "@/component/context";

export default function OverlayScreen() {
  const { app } = React.useContext(Context);

  return (
    <Modal open={app.data.isLoading}>
      <Box
        width="100vw"
        height="100vh"
        display={"flex"}
        zIndex="tooltip"
        alignItems={"center"}
        justifyContent={"center"}
      >
        <CircularProgress color="inherit" />
      </Box>
    </Modal>
  );
}

export function Loader() {
  return (
    <Box
      width="100%"
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <CircularProgress color="inherit" />
    </Box>
  );
}
