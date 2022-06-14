import React from "react";
import Context from "@context";

import { Stack, Typography, Button } from "@mui/material";
import SocialLogin from "@component/gip-sociallogin";
import useForm, { Input } from "@/component/useForm";
import { Link, useNavigate } from "react-router-dom";
import useAxios from "@component/gip-useAxios";

export default function Login(params) {
  return <LoginForm />;
}

export function LoginForm(params) {
  let navigate = useNavigate();
  const [err, seterr] = React.useState("");
  const { auth } = React.useContext(Context);
  const form = useForm();

  async function handleSubmit(e) {
    e.preventDefault();
    let res = await auth.login(form.payload);
    res.err && seterr(res.msg);

    console.log(res);

    // if (!res.err) {
    //   navigate("/");
    //   navigate(0);
    // }
  }

  return (
    <Stack
      onSubmit={handleSubmit}
      noValidate
      autoComplete="off"
      component="form"
      spacing={2}
    >
      {/* <Input.Email val={form.payload.email} setval={form.handleInput} /> */}
      <Input.Text
        name="username"
        val={form.payload.username}
        setval={form.handleInput}
      />

      <Input.Pass val={form.payload.password} setval={form.handleInput} />
      <Input.Submit t="signin" />
      <Typography variant="caption" align="center" color="error" minHeight={24}>
        {err}
      </Typography>
    </Stack>
  );
}
