import React from "react";

import Login from "@component/auth/login";
import Context from "@context";

import { Stack, Typography, Divider } from "@mui/material";
import { logo } from "@ui/logo";
import Imgbg from "@img/auth.jpg";
import { useNavigate, useLocation, Navigate } from "react-router-dom";

export default function App(params) {
  const { auth } = React.useContext(Context);

  if (auth.user.id) return <Navigate to="/" />;

  return (
    <Stack height={"100vh"} alignItems="center" direction={"row"}>
      <Stack width={"100vw"} maxWidth={480} minWidth="40vw" className="center">
        <Stack height={200}>
          <img src={logo.S256} alt="" className="img-contain h100" />
        </Stack>

        <Stack flexGrow={1} mt={2} width="100%" p={3}>
          <Typography
            variant="h2"
            fontWeight="900"
            textAlign={"center"}
            width={"100%"}
            color="primary"
          >
            SimEI
          </Typography>
          <Typography
            variant="overline"
            fontWeight="900"
            textAlign={"center"}
            width={"100%"}
            color="primary"
          >
            Simulasi Export Import
          </Typography>
          <Login isAdminLogin={true} />
        </Stack>
      </Stack>
      <Stack height={"100vh"} display={{ xs: "none", md: "flex" }}>
        <img src={Imgbg} alt="" className="img-contain h100" />
      </Stack>
    </Stack>
  );
}
