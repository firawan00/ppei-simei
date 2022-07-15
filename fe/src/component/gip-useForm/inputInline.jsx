import { TextField, Stack, Typography } from "@mui/material";

export default function App(props) {
  function getWidth(params) {
    if (props.dcol) return "auto";
    return props.lbw || 180;
  }
  return (
    <Stack
      direction={props.dcol ? "column" : "row"}
      alignItems={props.dcol ? "left" : "center"}
      my={props.dcol ? 0 : 0.5}
      justifyContent="space-between"
    >
      <Typography
        width={getWidth()}
        color="initial"
        variant={props.var || "body1"}
      >
        {props.lb}:
      </Typography>
      {!props.disabled && (
        <TextField
          {...props}
          name={props.name ? props.name.toLowerCase() : props.lb.toLowerCase()}
          sx={{
            input: {
              py: "1px",
            },
          }}
          color="primary"
        />
      )}
      {props.disabled && (
        <Typography
          variant={props.var}
          sx={{
            whiteSpace: props.multiLine ? "pre-wrap" : "",
          }}
        >
          {props.value}
        </Typography>
      )}
    </Stack>
  );
}
