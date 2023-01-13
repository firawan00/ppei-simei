import { Stack, Typography, Divider } from "@mui/material";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function App(props) {
  return (
    <Stack className="center" height={"100vh"}>
      <Typography variant="h1" color="primary">
        404
      </Typography>
      <Typography variant="h5" color="primary">
        page not found
      </Typography>
      <Divider />
      <Stack direction={"row"} className="center" spacing={1}>
        <ArrowBackIcon fontSize="small" />
        <Typography
          variant="subtitle1"
          color="initial"
          component={Link}
          to="/"
          alignItems={"center"}
        >
          back to homepage
        </Typography>
      </Stack>
    </Stack>
  );
}
