import BackIcon from "@/component/ui/backIcon";
import { Stack, TextField } from "@mui/material";

export default function App({ children, prefix, noback = false, nolimit }) {
  return (
    <Stack alignItems={"center"}>
      <Stack width={"210mm"} className="hide_on_print">
        {!noback && <BackIcon />}
        {prefix}
      </Stack>
      <Stack
        width={"210mm"}
        height={!nolimit ? "297mm" : "auto"}
        p={5}
        bgcolor="white.main"
        className="print-margin"
        overflow={"hidden"}
      >
        {children}
      </Stack>
    </Stack>
  );
}
