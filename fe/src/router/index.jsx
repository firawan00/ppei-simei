import React, { Fragment } from "react";
import AppProvider from "@context/appProvider";

import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

//ref :: https://omarelhawary.me/blog/file-based-routing-with-react-router

const ROUTESLIST = import.meta.globEager("@/pages/**/[a-z[]*.jsx");
const PRESERVED = import.meta.globEager(
  "/src/pages/(_app|404|signin|signup).jsx"
);

const router = Object.keys(ROUTESLIST).map((route) => {
  const path = route
    .replace("../pages", "")
    .replace(/\/src\/pages|index|\.jsx$/g, "")
    .replace(/\[\.{3}.+\]/, "*")
    .replace(/\[(.+)\]/, ":$1");

  return { path, component: ROUTESLIST[route].default, plain: route };
});

const preserved = Object.keys(PRESERVED).reduce((preserved, file) => {
  const key = file
    .replace("../pages", "")
    .replace(/\/src\/pages\/|\.jsx$/g, "");
  return { ...preserved, [key]: PRESERVED[file].default };
}, {});

export default function App(params) {
  const App = preserved?.["_app"] || Fragment;
  const Signin = preserved?.["signin"] || Fragment;
  const Signup = preserved?.["signup"] || Fragment;

  const NotFound = preserved?.["404"] || Fragment;

  return (
    <BrowserRouter>
      <AppProvider>
        <Routes>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />

          <Route element={<App />}>
            {router.map((d, ix) => (
              <Route key={ix} path={d.path} element={<d.component />} />
            ))}
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AppProvider>
    </BrowserRouter>
  );
}
