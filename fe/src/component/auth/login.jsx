import React from "react";
import Context from "@context";

import { Stack, Typography, Button } from "@mui/material";
import SocialLogin from "@component/gip-sociallogin";
import useForm, { Input, fetcher } from "@/component/useForm";
import { Link, useNavigate } from "react-router-dom";

export default function Login(params) {
  return (
    <Stack spacing={2} mt={5}>
      <Typography variant="h4" color="initial">
        Signup
      </Typography>
      <Typography variant="body1" color="initial">
        Lets join with Jago Kuliner now
      </Typography>
      <LoginForm />
    </Stack>
  );
}

export function LoginForm(params) {
  let navigate = useNavigate();
  const [err, seterr] = React.useState("");
  const { auth } = React.useContext(Context);
  const form = useForm();

  async function handleSubmit(e) {
    e.preventDefault();
    let res = await auth.login(form.payload);
    res.err ? seterr(res.msg) : navigate("/");
    navigate(0);
  }

  return (
    <Stack
      onSubmit={handleSubmit}
      noValidate
      autoComplete="off"
      component="form"
      spacing={2}
    >
      <Input.Email val={form.payload.email} setval={form.handleInput} />
      <Input.Pass val={form.payload.password} setval={form.handleInput} />
      <Input.Submit t="signin" />
      <Stack direction={"row"} justifyContent="space-between">
        <Typography
          variant="caption"
          align="left"
          color="primary"
          to="/reset-password"
        >
          forget password ?
          <Typography
            variant={"caption"}
            color="secondary"
            component={Link}
            to="/reset-password"
          >
            {` reset`}
          </Typography>
        </Typography>
        <Typography variant="caption" align="left" color="primary">
          have an account ?
          <Typography
            variant={"caption"}
            color="secondary"
            component={Link}
            to="/signup"
          >
            {` signup`}
          </Typography>
        </Typography>
      </Stack>
      <SocialLogin />

      <Typography variant="caption" align="center" color="error">
        {err}
      </Typography>
    </Stack>
  );
}
