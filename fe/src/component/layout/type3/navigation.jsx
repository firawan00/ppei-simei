import LogoutIcon from "@mui/icons-material/Logout";
import { Collapse, ListItem, Stack, Typography } from "@mui/material";
import Context from "@/component/context";
import React from "react";
import { Link } from "react-router-dom";
import { nav } from "@/component/layout/nav";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import Profile from "@ly/component/profile";
import Helpermodal from "@component/apps/helpermodal";
import ThemeSelect from "@/component/gip-themeSwitcher";

export default function MainNav({ isOpen, parentOpen, isWhiteColor = true }) {
  const [open, setopen] = React.useState();
  const { auth } = React.useContext(Context);

  React.useEffect(() => {
    open && isOpen(true);
    !parentOpen && isOpen(false);
  }, [open]);

  const hasRole = (role) => {
    if (role && !role.includes(auth.user.role)) return false;
    return true;
  };

  function handleNav() {
    isOpen(false);
  }

  return (
    <Stack spacing={1} py={3} height={"100vh"} justifyContent="space-between">
      <Stack>
        <Stack pl={3} mb={3}>
          <Profile />
        </Stack>
        {nav.map((d, ix) => (
          <Stack key={ix}>
            {!d.path && d.isText && hasRole(d.role) && (
              <Typography
                pl={3}
                variant="overline"
                fontWeight={"bold"}
                color="primary"
                my={2}
              >
                {d.name}
              </Typography>
            )}

            {d.path && hasRole(d.role) && (
              <Stack>
                <RenderSingle data={d} />
              </Stack>
            )}

            {!d.path && !d.isText && hasRole(d.role) && (
              <>
                <ListItem
                  button
                  onClick={() => setopen(open === d.name ? "" : d.name)}
                >
                  <Stack
                    direction={"row"}
                    spacing={2}
                    overflow="hidden"
                    color={isWhiteColor ? "white.main" : "dark.main"}
                  >
                    <d.icon />
                    <Typography variant="body1">{d.name}</Typography>
                  </Stack>
                </ListItem>
                <Collapse
                  in={open === d.name && parentOpen}
                  timeout="auto"
                  unmountOnExit
                >
                  <Stack
                    ml={7}
                    borderLeft={isOpen ? "2px solid" : null}
                    borderColor={"#a4a4a4"}
                  >
                    {d.child.map(
                      (dc, ix) =>
                        hasRole(dc.role) && (
                          <Link to={`${dc.path}` || "/"} key={ix}>
                            <ListItem button onClick={handleNav}>
                              <Typography
                                variant="body1"
                                color={
                                  isWhiteColor ? "white.main" : "dark.main"
                                }
                              >
                                {dc.name}
                              </Typography>
                            </ListItem>
                          </Link>
                        )
                    )}
                  </Stack>
                </Collapse>
              </>
            )}
          </Stack>
        ))}
      </Stack>
      <Stack>
        <Helpermodal />
        <ThemeSelect />
        <Logout />
      </Stack>
    </Stack>
  );
}

function RenderSingle({ data, isWhiteColor }) {
  return (
    <Link to={`${data.path}` || "/"}>
      <ListItem
        button
        sx={{
          py: "4px",
        }}
      >
        <Stack
          pl={"4px"}
          direction={"row"}
          spacing={2}
          overflow="hidden"
          color={isWhiteColor ? "white.main" : "dark.main"}
        >
          {data.icon ? <data.icon /> : <ArrowRightIcon />}
          <Typography variant="overline" pt={0.5}>
            {data.name}
          </Typography>
        </Stack>
      </ListItem>
    </Link>
  );
}

function Logout({ data, isWhiteColor }) {
  const { auth } = React.useContext(Context);

  return (
    <ListItem button onClick={() => auth.logout()}>
      <Stack
        pl={"4px"}
        direction={"row"}
        spacing={2}
        overflow="hidden"
        color={isWhiteColor ? "white.main" : "dark.main"}
      >
        <LogoutIcon />
        <Typography variant="body1">Logout</Typography>
      </Stack>
    </ListItem>
  );
}
