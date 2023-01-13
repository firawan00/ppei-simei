import { Stack, Typography } from "@mui/material";

export default function App(props) {
  return (
    <Stack direction={"row"}>
      <Typography
        fontWeight={props.B && "bold"}
        width={props.v ? props.w || 180 : "100%"}
        variant={props.var || "caption"}
      >
        {props.t}
      </Typography>
      <Typography variant="caption">
        {props.v && ": "}
        {props.v}
      </Typography>
    </Stack>
  );
}
