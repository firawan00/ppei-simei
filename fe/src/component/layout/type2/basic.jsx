import Root from "../root";
import UI from "@ly/component";
import Stack from "@mui/material/Stack";

export default function App({ children }) {
  return (
    <Root>
      <UI.Header />
      <Stack
        flexGrow={1}
        alignItems={"center"}
        maxHeight="100vh"
        sx={{ overflowY: "scroll" }}
      >
        <Stack width={"100vw"} maxWidth={1024} mt={"48px"} pt={5}>
          {children}
        </Stack>
        <UI.Footer />
      </Stack>
    </Root>
  );
}
