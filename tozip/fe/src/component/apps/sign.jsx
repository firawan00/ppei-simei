import { Typography } from "@mui/material";

export default function App({ text = "exportir" }) {
  return (
    <Typography
      variant="h2"
      color="initial"
      className="f-sign"
      my={1}
      fontWeight={100}
    >
      {text}
    </Typography>
  );
}
