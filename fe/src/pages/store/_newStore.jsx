import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Stack, Typography, Button } from "@mui/material";
import useAxios from "@component/gip-useAxios";
import { UserImg } from "@ui/img";
import { Loader } from "@ui/loaderFs";
import NF from "@ui/notFound";

export default function NewStore(params) {
  const [st, setst] = useState(false);
  if (st) return <StoreRegister />;

  return (
    <Stack spacing={3} height="100%" flexGrow={1} className="center">
      <Typography variant="h5" align="center" color="initial">
        You dont have a store yet
      </Typography>
      <Button variant="contained" onClick={() => setst(true)}>
        Open New Store
      </Button>
    </Stack>
  );
}

function StoreRegister(params) {
  return <Stack>New Store Form</Stack>;
}
