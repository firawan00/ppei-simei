import React, { useContext, useEffect, useState } from "react";
import {
  Stack,
  TextField,
  Typography,
  MenuItem,
  IconButton,
  Button,
} from "@mui/material";
import Context from "@/component/context";
import { isEmail, min } from "./helper";
import { dataFind } from "@/component/helper/objectParsing";

export default function App({ val, setval, name = "unknown", options, label }) {
  // const { isLoading } = useContext(Context);
  // const [state, setstate] = useState({
  //   val: refdata && refdata != null ? dataFind(refdata, fname) : "",
  //   err: false,
  //   isDiry: false,
  // });

  // useEffect(() => {
  //   setstate({ ...state, isDiry: true });
  // }, [isLoading]);

  // useEffect(() => {
  //   isEmail(state.val)
  //     ? setstate({ ...state, err: null })
  //     : setstate({ ...state, err: "required valid email address" });
  // }, [state.val]);

  // useEffect(() => {
  //   if (!state.err) v({ [fname]: state.val });
  // }, [state]);

  return (
    <>
      <TextField
        fullWidth
        select
        label={label || name}
        name={name}
        value={val || ""}
        onChange={setval}
        margin="normal"
        // error={state.err && state.isDiry}
      >
        {/* <MenuItem value={-1}>{`Select ${name}`}</MenuItem> */}
        {options.map((option, ix) => (
          <MenuItem key={ix} value={option.id || option.name}>
            {option.name}
          </MenuItem>
        ))}
      </TextField>

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
