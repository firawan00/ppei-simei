import React from "react";

import { Box, Stack, Typography } from "@mui/material";
import Context from "@context";

import Circle from "@ui/circle";
export default function App(props) {
  const { auth } = React.useContext(Context);

  return (
    <Stack direction={"row"} spacing={2}>
      <Circle w={42}>{auth.user.name[0]}</Circle>
      <Stack>
        <Typography variant="overline" color="initial">
          {auth.user.name}
        </Typography>
        <Typography variant="caption" color="initial">
          {auth.user.role || "user"}
        </Typography>
      </Stack>
    </Stack>
  );
}
