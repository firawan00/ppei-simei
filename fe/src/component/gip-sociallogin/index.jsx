import React, { useState } from "react";
import Context from "@context";
import { IconButton, Menu, Typography, Stack } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";

export default function SocialLogin(params) {
  return (
    <Stack>
      <Typography variant="caption" align="center" color="initial">
        Signin with your social account
      </Typography>
      <Stack direction={"row"} spacing={4} className="center">
        <IconButton>
          <GoogleIcon />
        </IconButton>
        <IconButton>
          <FacebookIcon />
        </IconButton>
      </Stack>
    </Stack>
  );
}
