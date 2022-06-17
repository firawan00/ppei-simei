import React from "react";
import Context from "@context";

import { Stack, Typography, Button, TextField, MenuItem } from "@mui/material";
import SocialLogin from "@component/gip-sociallogin";
import useForm, { Input } from "@/component/useForm";
import { Link, useNavigate } from "react-router-dom";
import useAxios from "@component/gip-useAxios";

import { useFormik } from "formik";
import * as yup from "yup";

export default function Login(params) {
  return <LoginForm />;
}

export function LoginForm(params) {
  let navigate = useNavigate();
  const [err, setErr] = React.useState();
  const { auth } = React.useContext(Context);
  const { fetcher } = useAxios();

  const userTypes = [
    { id: "user-import", name: "importir" },
    { id: "user-export", name: "exportir" },
  ];

  const formik = useFormik({
    initialValues: {
      username: "",
      role: "",
      password: "",
      passcode: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (payload) => {
      const res = await fetcher({
        method: "post",
        url: "auth/signup",
        data: payload,
      });
      console.log(res);
      if (res.error) setErr(res.error);
      else {
        await auth.update(res);
        navigate("/", true);
      }
      // alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Stack component={"form"} onSubmit={formik.handleSubmit}>
      <TextField
        fullWidth
        name="username"
        label="Username"
        value={formik.values.username}
        onChange={formik.handleChange}
        error={formik.touched.username && Boolean(formik.errors.username)}
        helperText={(formik.touched.username && formik.errors.username) || " "}
      />
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
      <TextField
        fullWidth
        name="name"
        label="Name"
        value={formik.values.name}
        onChange={formik.handleChange}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={(formik.touched.name && formik.errors.name) || " "}
      />

      <TextField
        fullWidth
        name="role"
        label="User Type"
        select
        value={formik.values.role}
        onChange={formik.handleChange}
        error={formik.touched.role && Boolean(formik.errors.role)}
        helperText={(formik.touched.role && formik.errors.role) || " "}
      >
        {userTypes.map((option, ix) => (
          <MenuItem key={ix} value={option.id || option.name}>
            {option.name}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        fullWidth
        name="passcode"
        label="passcode"
        value={formik.values.passcode}
        onChange={formik.handleChange}
        error={formik.touched.passcode && Boolean(formik.errors.passcode)}
        helperText={"please enter '1234'"}
      />

      <Button type="submit" fullWidth>
        Register
      </Button>
      <Typography
        variant="caption"
        color="error"
        component={Link}
        to="/signin"
        align="center"
        pt={1}
        minHeight={24}
      >
        {err}
      </Typography>
      <Typography
        variant="overline"
        color="primary"
        component={Link}
        to="/signin"
        align="center"
      >
        Back to signin
      </Typography>
    </Stack>
  );
}

const validationSchema = yup.object({
  role: yup.string("Enter your email").required("This field is required"),
  username: yup.string("Enter your email").required("This field is required"),
  passcode: yup.string("Enter your email").required("This field is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("This field is required"),
});
