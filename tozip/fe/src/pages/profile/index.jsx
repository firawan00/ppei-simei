import React, { useState } from "react";
import { Stack, Button, TextField, MenuItem } from "@mui/material";
import BackIcon from "@/component/ui/backIcon";
import { fetcher, useNavigate } from "@component/gip-useForm/fetcher";
import { useContext } from "react";
import Context from "@context";

export default function App(props) {
  const { auth } = useContext(Context);
  const [payload, setpayload] = useState({
    id: auth.user.id,
    name: auth.user.name,
    address: auth.user.address,
  });
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
    auth.update(res);
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
      <BackIcon title={"user profile"} />
      <Stack spacing={2}>
        <TextField
          label="name"
          name="name"
          value={payload.name || ""}
          onChange={handlePayload}
        />

        <TextField
          label="address"
          name="address"
          value={payload.address || ""}
          onChange={handlePayload}
        />

        <Button type="submit">Submit</Button>
      </Stack>
    </Stack>
  );
}
