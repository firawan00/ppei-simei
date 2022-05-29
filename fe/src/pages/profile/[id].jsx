import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Stack } from "@mui/material";

export default function App(props) {
  const { id } = useParams();

  return <Stack>profile id {id}</Stack>;
}
