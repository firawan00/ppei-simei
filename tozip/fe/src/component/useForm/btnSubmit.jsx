import { Button } from "@mui/material";

export default function App({ t }) {
  return (
    <Button variant="contained" color="primary" type="submit">
      {t || "submit"}
    </Button>
  );
}
