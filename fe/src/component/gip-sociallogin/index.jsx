import React, { useState } from "react";
import Context from "@context";
import { IconButton, Menu, Typography, Stack } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";

import GoogleLogin from "./google";

export default function SocialLogin(params) {
  return (
    <Stack>
      <Typography variant="caption" align="center" color="initial">
        Signin with your social account
      </Typography>
      <Stack direction={"row"} spacing={4} className="center">
        <GoogleLogin />
        <IconButton>
          <FacebookIcon />
        </IconButton>
      </Stack>
    </Stack>
  );
}
