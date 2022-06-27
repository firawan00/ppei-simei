import { TextField, Typography } from "@mui/material";

const inputStyle = {
  input: {
    py: "2px",
    px: "8px",
    fontSize: "14px",
  },
};

export default function App(props) {
  return (
    <TextField
      {...props}
      sx={inputStyle}
      InputLabelProps={{ shrink: true }}
      margin="dense"
    />
  );
}
