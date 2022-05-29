import React from "react";
import { Stack, Typography, Button } from "@mui/material";
import SocialLogin from "@component/gip-sociallogin";
import useForm, { Input, fetcher } from "@/component/useForm";
import { Link } from "react-router-dom";
import Circle from "@ui/circle";

export default function App(props) {
  const form = useForm();
  const [hasRegister, sethasRegister] = React.useState(false);

  async function handleRegister(e) {
    e.preventDefault();
    const payload = form.payload;
    await fetcher({
      method: "post",
      url: `auth/signup`,
      data: payload,
    });
    sethasRegister(true);
  }

  if (hasRegister) return <RegisterResponse email={form.payload.email} />;

  return (
    <form onSubmit={handleRegister}>
      <Stack spacing={2} mt={5}>
        <Typography variant="h4" color="initial">
          Signup
        </Typography>
        <Typography variant="body1" color="initial">
          Lets join with Jago Kuliner now
        </Typography>
        <Input.Email val={form.payload.email} setval={form.handleInput} />
        <Input.Pass val={form.payload.password} setval={form.handleInput} />
        <Input.Submit t="signup" />

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
              to="/signin"
            >
              {` signin`}
            </Typography>
          </Typography>
        </Stack>
        <SocialLogin />
      </Stack>
    </form>
  );
}

function RegisterResponse({ email }) {
  const [hasResend, sethasResend] = React.useState(false);
  async function resend() {
    const payload = { email: email };
    await fetcher({
      method: "post",
      url: `auth/signup`,
      data: payload,
    });
    sethasResend(true);
  }

  return (
    <Stack flexGrow={1} className="center">
      <Stack maxWidth={600} spacing={1}>
        <Circle w={96} />
        <Stack>
          <Typography textAlign={"left"}>
            We have sent an email verification to
            <Typography color="primary" fontWeight={"bold"} component={"span"}>
              {` ${email}.`}
            </Typography>
          </Typography>
          <Typography mb={1}>
            Please check your email in order to continue the signup process
          </Typography>
          {!hasResend && (
            <Button onClick={resend} variant="contained" size="small">
              Resend Verificantion email
            </Button>
          )}
        </Stack>
      </Stack>
    </Stack>
  );
}
