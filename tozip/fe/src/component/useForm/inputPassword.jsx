import React, { useContext, useEffect, useState } from "react";
import {
  Stack,
  TextField,
  Typography,
  InputAdornment,
  IconButton,
} from "@mui/material";
import Context from "@/component/context";
import { min } from "./helper";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export default function App({ val, setval }) {
  const [showPwd, setshowPwd] = useState(false);
  // const { isLoading } = useContext(Context);
  // const [state, setstate] = useState({
  //   val: "",
  //   err: true,
  //   isDiry: false,
  // });

  // useEffect(() => {
  //   setstate({ ...state, isDiry: true });
  // }, [isLoading]);

  // useEffect(() => {
  //   min(state.val, 6)
  //     ? setstate({ ...state, err: "min 6 char" })
  //     : setstate({ ...state, err: false });
  // }, [state.val]);

  // useEffect(() => {
  //   if (!state.err) v({ password: state.val });
  // }, [state]);
  const handleClickShowPassword = () => {
    setshowPwd(!showPwd);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <TextField
        fullWidth
        label="password"
        type={showPwd ? "text" : "password"}
        name="password"
        value={val || ""}
        onChange={setval}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {showPwd ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
        // error={state.err && state.isDiry}
      />
      {/* <Typography
        variant="caption"
        color="error"
        pt={0.2}
        pl={2}
        minHeight={20}
      >
        {state.isDiry ? state.err : ""}
      </Typography> */}
    </>
  );
}
