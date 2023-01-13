import React, { useContext, useEffect, useState } from "react";
import { Stack, TextField, Typography, InputAdornment } from "@mui/material";
import Context from "@/component/context";
import { min } from "./helper";
import NumberFormat from "react-number-format";
import PropTypes from "prop-types";

const NumberFormatCustom = React.forwardRef(function NumberFormatCustom(
  props,
  ref
) {
  const { onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={ref}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      thousandSeparator
      isNumericString
      prefix="USD "
    />
  );
});

NumberFormatCustom.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default function App({
  v,
  refdata,
  fname = "unknown",
  intiValue = 0,
  compact = false,
  label,
}) {
  const { isLoading } = useContext(Context);
  const [state, setstate] = useState({
    val: refdata ? refdata[fname] : intiValue,
    err: false,
    isDiry: false,
  });

  // useEffect(() => {
  //   setstate({ ...state, isDiry: true });
  // }, [isLoading]);

  // useEffect(() => {
  //   setstate({ ...state, err: false });
  // }, [state.val]);

  useEffect(() => {
    if (!state.err) v({ [fname]: parseInt(state.val) });
  }, [state]);

  return (
    <Stack>
      <TextField
        fullWidth
        label={label ? label : fname}
        value={state.val}
        name={fname}
        onChange={(e) => setstate({ ...state, val: e.target.value })}
        error={state.err && state.isDiry}
        InputProps={{
          inputComponent: NumberFormatCustom,
        }}
        sx={{
          "& input": compact
            ? {
                padding: "2px 8px",
              }
            : null,
        }}
      />
      <Typography
        variant="caption"
        color="error"
        pt={0.2}
        pl={2}
        minHeight={20}
      >
        {state.isDiry ? state.err : ""}
      </Typography>
    </Stack>
  );
}
