import { Stack } from "@mui/material";

export default function App({ children }) {
  return (
    <Stack width={"210mm"} height="297mm" p={5} bgcolor="white.main">
      {children}
    </Stack>
  );
}
