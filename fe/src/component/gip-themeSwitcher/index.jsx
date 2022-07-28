import React from "react";

import { Stack, IconButton, Typography, ListItem } from "@mui/material";
import Context from "@context";

import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

export default function App(props) {
  const { app } = React.useContext(Context);

  function setTheme() {
    app.set({ theme: app.data.theme == "dark" ? "light" : "dark" });
  }

  return (
    <ListItem button onClick={setTheme}>
      <Stack pl={"4px"} direction={"row"} spacing={2} overflow="hidden">
        {app.data.theme === "dark" ? (
          <Brightness7Icon color="dark" />
        ) : (
          <Brightness4Icon />
        )}
        <Typography variant="body1" className="f-capitalize" color="dark.main">
          {app.data.theme} Theme
        </Typography>
      </Stack>
    </ListItem>
  );
}
