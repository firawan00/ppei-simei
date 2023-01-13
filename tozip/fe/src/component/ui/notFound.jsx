import Typography from "@mui/material/Typography";

export default function App({ text }) {
  return (
    <Typography variant="overline" align="center" color="grey.b">
      No {text} found
    </Typography>
  );
}
