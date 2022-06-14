import { Stack, Typography } from "@mui/material";

export default function Footer(params) {
  return (
    <Stack className="center" py={2}>
      <Typography variant="caption" color="accgrey.sec">
        Bakamla - HCDP @ {new Date().getFullYear()}{" "}
        {import.meta.env.VITE_APPNAME}
      </Typography>
    </Stack>
  );
}
