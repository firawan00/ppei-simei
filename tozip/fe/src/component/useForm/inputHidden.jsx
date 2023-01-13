import React, { useContext, useEffect, useState } from "react";
import { Stack, TextField, Typography } from "@mui/material";
import Context from "@/component/context";
import { min } from "./helper";

export default function App({ val, setval = "id" }) {
  return <TextField type="hidden" value={val} onChange={setval} />;
}
