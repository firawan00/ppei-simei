import React from "react";
import noimg from "@img/logo32.png";
import { useState } from "react";
import Circle from "@ui/circle";
import { Stack, Typography } from "@mui/material";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";

export default function App({ path, text }) {
  return (
    <Stack direction={"row"} spacing={1}>
      <InsertDriveFileIcon color="primary" size="small" />
      <Typography
        variant="subtitle2"
        color="initial"
        component={"a"}
        target="_blank"
        href={`${import.meta.env.VITE_BEURL}/public/${path}`}
      >
        {text}
      </Typography>
    </Stack>
  );
}
