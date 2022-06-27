import React from "react";

import { Outlet } from "react-router-dom";
import Layout from "@ly";
import Context from "@context";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useNavigate, useLocation, Navigate } from "react-router-dom";

const PrivatePath = ["/diklat", "/"];

export default function Test(params) {
  const loc = useLocation();
  const { app, auth } = React.useContext(Context);
  const isLarge = useMediaQuery((theme) => theme.breakpoints.up("md"));
  let navigate = useNavigate();

  function isPrivateRoute(path) {
    return PrivatePath.find((p) => path.includes(p));
  }

  React.useEffect(() => {
    if (isPrivateRoute(loc.pathname) && !auth.user.token) navigate("/signin");
  }, [loc]);

  React.useEffect(() => {
    app.set({ isLarge: isLarge });
    if (auth.user.nip && !auth.user.name) navigate("/signin");
  }, []);

  if (isPrivateRoute(loc.pathname) && !auth.user.token)
    <Navigate to="/signin" />;

  if (auth.user && !auth.user.id) return "";

  return (
    <Layout.Type3>
      <Outlet />
    </Layout.Type3>
  );
}
