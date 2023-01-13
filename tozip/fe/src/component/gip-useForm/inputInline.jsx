import { TextField, Stack, Typography } from "@mui/material";

export default function App(props) {
  function getWidth(params) {
    if (props.dcol) return "auto";
    return props.lbw || 170;
  }
  return (
    <Stack
      direction={props.dcol ? "column" : "row"}
      alignItems={props.dcol ? "left" : props.ai || "flex-start"}
      my={props.dcol ? 0.2 : 0.5}
      justifyContent={props.jc ? props.jc : "space-between"}
      height="100%"
    >
      {props.lb && (
        <Stack direction={"row"}>
          <Typography
            width={getWidth()}
            color="initial"
            variant={props.var || "body1"}
          >
            {`${props.lb}`}
          </Typography>
          <Typography pr={1}>{`: `}</Typography>
        </Stack>
      )}

      {!props.disabled && (
        <TextField
          {...props}
          name={props.name ? props.name.toLowerCase() : props.lb.toLowerCase()}
          sx={{
            "&:hover": {
              fieldset: {
                borderColor: "rgba(0, 0, 0, 0.23)",
                "&.MuiOutlinedInput-notchedOutline": {
                  borderColor: "rgba(0, 0, 0, 0.23)",
                },
              },
            },

            fieldset: {
              borderColor: "rgba(0, 0, 0, 0.23)",
            },
            input: {
              py: "1px",
              color: "black",
            },
          }}
          color="secondary"
        />
      )}
      {props.disabled && (
        <Typography
          variant={props.var}
          sx={{
            whiteSpace: props.multiLine || props.prewrap ? "pre-wrap" : "",
          }}
        >
          {props.value}
        </Typography>
      )}
    </Stack>
  );
}
