import { useNavigate } from "react-router-dom";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { IconButton, Stack, Typography, Button } from "@mui/material";

export default function App({ title }) {
  const r = useNavigate();
  return (
    <Stack mb={2}>
      <Stack direction={"row"} justifyContent="space-between">
        <Button startIcon={<ArrowBackIcon />} onClick={() => r(-1)}>
          back
        </Button>
      </Stack>
      <Typography variant="h2" color="primary" className="f-capitalize">
        {title}
      </Typography>
    </Stack>
  );
}
