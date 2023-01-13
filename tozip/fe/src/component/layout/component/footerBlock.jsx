import { Typography } from "@mui/material";

export default function App(props) {
  return (
    <Typography variant="caption" align="center">
      Bakamla - HCDP @ {new Date().getFullYear()}
    </Typography>
  );
}
