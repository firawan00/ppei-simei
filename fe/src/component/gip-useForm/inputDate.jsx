import * as React from "react";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { fdate } from "@component/helper/formating";

export default function MaterialUIPickers(props) {
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
