import BackIcon from "@/component/ui/backIcon";
import { Stack, TextField } from "@mui/material";

export default function App({ children, prefix, noback = false }) {
  return (
    <Stack alignItems={"center"}>
      <Stack width={"210mm"} className="hide_on_print">
        {!noback && <BackIcon />}
        {prefix}
      </Stack>
      <Stack
        width={"210mm"}
        height="297mm"
        p={5}
        bgcolor="white.main"
        className="print-margin"
      >
        {children}
      </Stack>
    </Stack>
  );
}
