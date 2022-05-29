import React from "react";
import Context from ".";

import ThemeProvider from "./themeProvider";

import useSnackbar from "@context/hooks/useSnackbar";
import useApp from "@context/hooks/useApp";
import useAuth from "@context/hooks/useAuth";

export default function App({ children }) {
  const snackbar = useSnackbar();
  const app = useApp();
  const auth = useAuth();

  return (
    <Context.Provider
      value={{
        setisLoading: app.setisLoading,
        auth,
        app,
        snackbar,
      }}
    >
      <ThemeProvider>{children}</ThemeProvider>
    </Context.Provider>
  );
}
