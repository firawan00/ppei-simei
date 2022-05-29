import { Stack } from "@mui/material";

export default function App({ children, h = 0, mt = 0 }) {
  return (
    <Stack height={h} mt={mt} width="100%" bgcolor={"red.main"}>
      <Stack
        position={"absolute"}
        left={0}
        width="calc(100% - 0px)"
        bgcolor="grey.b"
      >
        {children}
      </Stack>
    </Stack>
  );
}
