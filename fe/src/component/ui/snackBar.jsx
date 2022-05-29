import React from "react";

import Context from "@/component/context/index";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

export default function OverlayScreen2() {
  const { snackbar } = React.useContext(Context);

  return (
    <Snackbar
      open={snackbar.data.isOpen}
      autoHideDuration={6000}
      onClose={snackbar.setClose}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
    >
      <MuiAlert
        elevation={6}
        severity={snackbar.data.severity || "info"}
        sx={{
          minWidth: "300px",
        }}
      >
        {snackbar.data.msg}
      </MuiAlert>
    </Snackbar>
  );
}
