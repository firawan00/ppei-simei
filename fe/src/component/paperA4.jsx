import BackIcon from "@/component/ui/backIcon";
import { Stack } from "@mui/material";

export default function App({ children }) {
  return (
    <Stack alignItems={"center"}>
      <Stack width={"210mm"}>
        <BackIcon />
      </Stack>
      <Stack width={"210mm"} height="297mm" p={5} bgcolor="white.main">
        {children}
      </Stack>
    </Stack>
  );
}
