import React, { useState } from "react";
import { Stack, Button, TextField, MenuItem } from "@mui/material";
import BackIcon from "@/component/ui/backIcon";
import { meta } from "./_meta";
import { fetcher, useNavigate } from "@component/gip-useForm/fetcher";

export default function App({ refdata }) {
  const [payload, setpayload] = useState(refdata || {});
  const nav = useNavigate();

  function handlePayload(e) {
    setpayload({ ...payload, [e.target.name]: e.target.value });
  }

  async function formSubmit(e) {
    e.preventDefault();
    delete payload.token;

    let res = await fetcher({
      url: `users`,
      method: "post",
      data: payload,
    });
    nav(-1, true);
  }

  return (
    <Stack
      component={"form"}
      width="100%"
      noValidate
      autoComplete="off"
      onSubmit={formSubmit}
    >
      <BackIcon
        title={refdata ? `${meta.model} Edit` : `${meta.model} Create`}
      />
      <Stack spacing={2}>
        <TextField
          label="username"
          name="username"
          value={payload.username || ""}
          onChange={handlePayload}
          disabled
        />

        <TextField
          label="name"
          name="name"
          value={payload.name || ""}
          onChange={handlePayload}
        />

        <TextField
          label="password"
          name="password"
          value={payload.password || ""}
          onChange={handlePayload}
        />
        <TextField
          label="role"
          name="role"
          value={payload.role || ""}
          onChange={handlePayload}
          select
        >
          <MenuItem value="admin">admin</MenuItem>
          <MenuItem value="user-import">user import</MenuItem>
          <MenuItem value="user-export">user export</MenuItem>
        </TextField>

        <Button type="submit">Submit</Button>
      </Stack>
    </Stack>
  );
}
