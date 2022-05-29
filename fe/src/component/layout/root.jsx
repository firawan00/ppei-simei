import React from "react";

import Loader from "@/component/ui/loaderFs";
import SnakBar from "@/component/ui/snackBar";
import Stack from "@mui/material/Stack";

export default function App({ children }) {
  return (
    <>
      {children}
      <Loader />
      <SnakBar />
    </>
  );
}
