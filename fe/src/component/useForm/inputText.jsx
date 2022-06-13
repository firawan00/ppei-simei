import React, { useContext, useEffect, useState } from "react";
import { Stack, TextField, Typography } from "@mui/material";

export default function App({ val, setval, name = "unknown", labelHide, err }) {
  return (
    <Stack>
      <TextField
        fullWidth
        label={labelHide ? "" : name}
        name={name}
        value={val}
        onChange={setval}
        error={err ? true : false}
        className="f-capitalize"
      />
      <Typography
        variant="caption"
        color="error"
        pt={0.2}
        pl={2}
        minHeight={20}
      >
        {err}
      </Typography>
    </Stack>
  );
}
