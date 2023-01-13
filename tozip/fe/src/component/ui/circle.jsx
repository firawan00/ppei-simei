import { Stack, Typography } from "@mui/material";

export default function Apps({ children, w = 32, bg = "grey.c" }) {
  return (
    <Stack
      width={w}
      height={w}
      borderRadius={"50%"}
      bgcolor={bg}
      className="center"
    >
      <Typography
        variant="h5"
        className="center f-uppercase"
        fontWeight="bold"
        color="white.main"
      >
        {children}
      </Typography>
    </Stack>
  );
}
