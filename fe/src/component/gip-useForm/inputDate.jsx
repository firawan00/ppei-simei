import * as React from "react";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { fdate } from "@component/helper/formating";

export default function DatePickerText({
  onChange,
  value,
  disabled,
  placeholder = `Jakarta, ${fdate.format(fdate.today)}`,
}) {
  // delete props.inputFormat;
  return (
    <>
      {!disabled && (
        <TextField
          placeholder={placeholder}
          disabled={disabled}
          sx={{
            input: {
              py: "1px",
            },
          }}
          value={value || ""}
          onChange={(v) => onChange(v.target.value)}
        />
      )}

      {/* {!props.disabled && (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <MobileDatePicker
            {...props}
            disablePast
            closeOnSelect
            renderInput={(params) => (
              <TextField
                {...params}
                disabled={props.disabled}
                sx={{
                  input: {
                    py: "1px",
                  },
                }}
              />
            )}
          />
        </LocalizationProvider>
      )} */}
      {disabled && value}
    </>
  );
}

export function MaterialUIPickers(props) {
  return (
    <>
      {!props.disabled && (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <MobileDatePicker
            {...props}
            disablePast
            closeOnSelect
            renderInput={(params) => (
              <TextField
                {...params}
                disabled={props.disabled}
                sx={{
                  input: {
                    py: "1px",
                  },
                }}
              />
            )}
          />
        </LocalizationProvider>
      )}
      {props.disabled && fdate.format(props.value)}
    </>
  );
}
