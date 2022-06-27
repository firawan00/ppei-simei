import React from "react";
import { Stack, Typography } from "@mui/material";

export default function Footer(params) {
  return (
    <Stack className="center" py={2}>
      <Typography variant="caption" color="accgrey.sec">
        {import.meta.env.VITE_APPNAME} @ {new Date().getFullYear()}{" "}
      </Typography>
    </Stack>
  );
}
