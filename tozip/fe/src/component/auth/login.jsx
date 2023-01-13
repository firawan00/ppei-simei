import React from "react";
import Context from "@context";

import {
  Stack,
  Typography,
  Button,
  TextField,
  MenuItem,
  InputAdornment,
  IconButton,
} from "@mui/material";
import SocialLogin from "@component/gip-sociallogin";
import useForm, { Input } from "@/component/useForm";
import { Link, useNavigate } from "react-router-dom";
import { fetcher } from "@component/gip-useForm/fetcher";

import { useFormik } from "formik";
import * as yup from "yup";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const userList = [
  "user-export1",
  "user-export2",
  "user-export3",
  // "user-export4",
  // "user-export5",

  "user-import1",
  "user-import2",
  "user-import3",
  // "user-import4",
  // "user-import5",

  "fasilitator-bank",
  "fasilitator-cargo",
  "fasilitator-kepabeanan",
  "fasilitator-ska",
];

export default function Login({ isAdminLogin }) {
  return <LoginForm isAdminLogin={isAdminLogin} />;
}

export function LoginForm({ isAdminLogin }) {
  let navigate = useNavigate();
  const [err, seterr] = React.useState("");
  const [pwdshow, setpwdshow] = React.useState(false);

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
      const res = await fetcher({
        method: "post",
        url: "auth/signin",
        data: payload,
      });
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
      {!isAdminLogin && (
        <TextField
          fullWidth
          name="username"
          label="Username"
          value={formik.values.username}
          onChange={formik.handleChange}
          error={formik.touched.username && Boolean(formik.errors.username)}
          helperText={
            (formik.touched.username && formik.errors.username) || " "
          }
          select
        >
          {userList.map((d) => (
            <MenuItem value={d} key={d}>
              {d}
            </MenuItem>
          ))}
        </TextField>
      )}
      {isAdminLogin && (
        <TextField
          fullWidth
          name="username"
          label="Username"
          value={formik.values.username}
          onChange={formik.handleChange}
          error={formik.touched.username && Boolean(formik.errors.username)}
          helperText={
            (formik.touched.username && formik.errors.username) || " "
          }
        />
      )}
      <TextField
        fullWidth
        name="password"
        label="Password"
        type={!pwdshow ? "password" : "text"}
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={(formik.touched.password && formik.errors.password) || " "}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => setpwdshow(!pwdshow)}
                // onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {!pwdshow ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <Stack spacing={2}>
        <Input.Submit t="sign in" />
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
