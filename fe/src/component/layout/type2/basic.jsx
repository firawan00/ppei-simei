import Root from "../root";
import UI from "@ly/component";
import Stack from "@mui/material/Stack";

export default function App({ children }) {
  return (
    <Root>
      <UI.Header />
      <Stack flexGrow={1} alignItems={"center"}>
        <Stack
          width={"100vw"}
          maxWidth={800}
          mt={"48px"}
          pt={5}
          sx={{ overflowY: "scroll" }}
        >
          {children}
        </Stack>
      </Stack>
      <UI.Footer />
    </Root>
  );
}
