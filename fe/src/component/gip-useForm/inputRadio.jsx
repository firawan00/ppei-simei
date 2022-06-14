import * as React from "react";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Stack,
} from "@mui/material";

export default function RadioButtonsGroup({
  label,
  options,
  onChange,
  value,
  name,
}) {
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <RadioGroup row onChange={onChange} value={value} name={name}>
        {options.map((d) => (
          <FormControlLabel key={d} value={d} control={<Radio />} label={d} />
        ))}
      </RadioGroup>
    </FormControl>
  );
}
