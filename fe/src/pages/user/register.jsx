import React, { useState } from "react";
import Context from "@context";

import { Stack, Button, Chip, Skeleton, Typography, Card } from "@mui/material";
import useForm, { Input, fetcher, fetcherMultipart } from "@/component/useForm";

export default function App(props) {
  const form = useForm();
  return (
    <Stack>
      <Typography variant="h2" color="primary">
        Register
      </Typography>
      <Input.Text
        name="name"
        val={form.payload.name}
        setval={form.handleInput}
      />
    </Stack>
  );
}
