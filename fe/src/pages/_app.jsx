import React from "react";

import { Outlet } from "react-router-dom";
import Layout from "@ly";
import Context from "@context";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useNavigate } from "react-router-dom";

export default function Test(params) {
  const { app, auth } = React.useContext(Context);
  const isLarge = useMediaQuery((theme) => theme.breakpoints.up("md"));
  let navigate = useNavigate();

  React.useEffect(() => {
    app.set({ isLarge: isLarge });

    if (auth.user.id && !auth.user.name) navigate("/user/register");
  }, []);

  return (
    <Layout.Type2>
      <Outlet />
    </Layout.Type2>
  );
}
