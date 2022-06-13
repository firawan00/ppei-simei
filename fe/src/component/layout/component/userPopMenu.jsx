import React, { useState } from "react";
import Context from "@context";
import useForm, { Input, fetcher } from "@/component/useForm";
import {
  Box,
  IconButton,
  Menu,
  Typography,
  Stack,
  Button,
} from "@mui/material";

import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import Circle from "@ui/circle";
import NavigationSquare from "./navigationSquare";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import { LoginForm } from "@component/auth/login";

const menuStyle = {
  mt: 1,
  // backdropFilter: "blur(2px)",
  borderRadius: 3,
};

export default function App(params) {
  const { auth } = React.useContext(Context);
  return (
    <Stack>
      {!auth.user.id && <Login />}
      {auth.user.id && <Profile />}
    </Stack>
  );
}

function Profile() {
  const { auth } = React.useContext(Context);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <IconButton onClick={handleClick}>
        <Circle bg="primary.main">
          {auth.user.name ? auth.user.name[0] : "-"}
        </Circle>
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx={{
          "& .MuiPopover-paper": menuStyle,
        }}
      >
        <Stack p={2} spacing={2}>
          <Stack direction={"row"} spacing={2}>
            <Circle w={48} />
            <Stack>
              <Typography variant="body1" color="initial">
                {`Hi, ${auth.user.name || "-"}`}
              </Typography>
              <Typography variant="caption" color="initial">
                New born
              </Typography>
            </Stack>
          </Stack>
          <Stack>
            <NavigationSquare hasClick={(e) => setAnchorEl(null)} />
          </Stack>
          <Stack alignItems="flex-end">
            <Button
              onClick={auth.logout}
              size="small"
              sx={{
                width: 96,
                py: 0,
                fontSize: 12,
              }}
            >
              Signout
            </Button>
          </Stack>
        </Stack>
      </Menu>
    </Box>
  );
}

function Login(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { app } = React.useContext(Context);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(open ? null : event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      {app.data.isLarge && (
        <Stack direction={"row"} spacing={2}>
          <Button
            variant="outlined"
            color="primary"
            component={Link}
            to="/signup"
            size="small"
          >
            SignUp
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleClick}
            size="small"
          >
            SignIn
          </Button>
        </Stack>
      )}

      {!app.data.isLarge && (
        <IconButton color="primary" onClick={handleClick}>
          <AccountCircleIcon />
        </IconButton>
      )}

      <Menu anchorEl={anchorEl} open={open} sx={menuStyle}>
        <Stack p={2} spacing={1} minWidth={300}>
          <Stack
            direction={"row"}
            justifyContent="space-between"
            alignItems={"center"}
          >
            <Typography variant="h4" color="primary">
              Signin
            </Typography>
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Stack>
          <LoginForm />
        </Stack>
      </Menu>
    </Box>
  );
}
