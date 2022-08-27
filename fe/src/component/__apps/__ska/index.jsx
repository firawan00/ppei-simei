import React, { useState } from "react";

import { Stack, Typography, Divider, TextField } from "@mui/material";
import PaperA4 from "@component/paperA4";

import ListTable from "./listTable";
import NewSKA from "./new";

export default function App(props) {
  return (
    <PaperA4>
      <Typography variant="h4" color="primary.main" align="center">
        Pengajuan SKA
      </Typography>
      {/* <NewSKA /> */}
      {/* <ListTable /> */}
    </PaperA4>
  );
}
