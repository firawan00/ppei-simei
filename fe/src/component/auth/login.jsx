import React from "react";
import Context from "@context";

import { Stack, Typography, Button, TextField, MenuItem } from "@mui/material";
import SocialLogin from "@component/gip-sociallogin";
import useForm, { Input } from "@/component/useForm";
import { Link, useNavigate } from "react-router-dom";
import { fetcher } from "@component/gip-useForm/fetcher";

import { useFormik } from "formik";
import * as yup from "yup";

const userList = [
  "user-export1",
  "user-export2",
  "user-export3",
  "user-export4",
  "user-export5",

  "user-import1",
  "user-import2",
  "user-import3",
  "user-import4",
  "user-import5",

  "fasilitator-bank",
  "fasilitator-cargo",
  "fasilitator-kepabeanan",
  "fasilitator-ska",

  "admin",
];

export default function Login(params) {
  return <LoginForm />;
}

export function LoginForm(params) {
  let navigate = useNavigate();
  const [err, seterr] = React.useState("");
  const { auth } = React.useContext(Context);

  const formik = useFormik({
    initialValues: {
      username: "",
      role: "",
      password: "",
      passcode: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (payload) => {
      // console.log(payload);

      const res = await fetcher({
        method: "post",
        url: "auth/signin",
        data: payload,
      });
      console.log(res);
      if (res.error) seterr(res.error);
      else {
        await auth.update(res);
        navigate("/", true);
      }
    },
  });

  return (
    <Stack
      component={"form"}
      onSubmit={formik.handleSubmit}
      noValidate
      autoComplete="off"
    >
      <TextField
        fullWidth
        name="username"
        label="Username"
        value={formik.values.username}
        onChange={formik.handleChange}
        error={formik.touched.username && Boolean(formik.errors.username)}
        helperText={(formik.touched.username && formik.errors.username) || " "}
        select
      >
        {userList.map((d) => (
          <MenuItem value={d} key={d}>
            {d}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        fullWidth
        name="password"
        label="Password"
        type="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={(formik.touched.password && formik.errors.password) || " "}
      />

      <Stack spacing={2}>
        <Input.Submit t="signin" />
        {/* <Typography
          variant="overline"
          align="center"
          minHeight={24}
          component={Link}
          to="/signup"
        >
          user Register
        </Typography> */}

        <Typography
          variant="caption"
          align="center"
          color="error"
          minHeight={24}
        >
          {err}
        </Typography>
      </Stack>
    </Stack>
  );
}

const validationSchema = yup.object({
  username: yup.string("Enter your email").required("This field is required"),
  password: yup
    .string("Enter your password")
    .required("This field is required"),
});
