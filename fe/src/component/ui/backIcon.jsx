import { useNavigate } from "react-router-dom";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { IconButton, Stack, Typography, Button } from "@mui/material";

export default function App({ title }) {
  const r = useNavigate();
  return (
    <Stack mb={2} direction="row">
      <Button
        startIcon={<ArrowBackIcon />}
        variant="text"
        onClick={() => r(-1)}
      >
        back
      </Button>
    </Stack>
  );
}
