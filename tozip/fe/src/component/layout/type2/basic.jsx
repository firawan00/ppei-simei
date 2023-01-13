import Root from "../root";
import UI from "@ly/component";
import Stack from "@mui/material/Stack";
import FullWidth from "@ui/fullWidth";

export default function App({ children }) {
  return (
    <Root>
      <UI.Header />
      <Stack
        flexGrow={1}
        alignItems={"center"}
        maxHeight="100vh"
        sx={{ overflowY: "auto", overflowX: "hidden" }}
      >
        <Stack
          width={"100vw"}
          maxWidth={1024}
          mt={"48px"}
          pt={5}
          minHeight={"calc(100vh - 48px)"}
        >
          <Stack flexGrow={1} px={{ xs: 2, md: 3 }}>
            {children}
          </Stack>
          <Stack my={2}>
            <UI.Footer />
          </Stack>
        </Stack>
      </Stack>
    </Root>
  );
}
