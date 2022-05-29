import { Stack } from "@mui/material";

export default function App({ children, h = 0, mt = 0 }) {
  return (
    <Stack height={h} mt={mt} width="100%" position={"relative"}>
      <Stack
        position={"absolute"}
        left={"calc(-50vw + 50%)"}
        width="100vw"
        bgcolor="#3e3f45"
      >
        {children}
      </Stack>
    </Stack>
  );
}
