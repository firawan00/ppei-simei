import { Button } from "@mui/material";

export default function App({ t, ...props }) {
  return (
    <Button variant="contained" color="primary" type="submit" {...props}>
      {t || "submit"}
    </Button>
  );
}
