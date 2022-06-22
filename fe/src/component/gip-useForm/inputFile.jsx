import React from "react";
import { Stack, Button, Typography } from "@mui/material";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
  display: "flex",
};

export default function App({ value }) {
  const inputRef = React.useRef(null);
  const [file, setFile] = React.useState(null);

  React.useEffect(() => {
    value(file || null);
  }, [file]);

  return (
    <Stack>
      <input
        ref={inputRef}
        accept=".doc , .docx"
        style={{ display: "none" }}
        id="raised-button-file"
        multiple
        type="file"
        onChange={(e) => {
          setFile(e.target.files[0]);
        }}
      />
      <Stack direction={"row"} alignItems="center" spacing={2}>
        <Button onClick={() => inputRef.current.click()}>Attach Form </Button>
        <Typography variant="caption" color="initial">
          {file ? file.name : " "}
        </Typography>
      </Stack>
    </Stack>
  );
}
