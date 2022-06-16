import { TextField, Stack, Typography } from "@mui/material";

export default function App(props) {
  function getWidth(params) {
    if (props.dcol) return "auto";
    return props.lbw || 120;
  }
  return (
    <Stack
      direction={props.dcol ? "column" : "row"}
      alignItems={props.dcol ? "left" : "center"}
      my={props.dcol ? 0 : 0.5}
    >
      <Typography width={getWidth()} color="initial">
        {props.lb}
      </Typography>
      <TextField
        {...props}
        sx={{
          input: {
            py: "1px",
          },
        }}
        color="primary"
      />
    </Stack>
  );
}
