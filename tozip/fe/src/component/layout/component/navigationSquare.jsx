import React from "react";

import { Stack, Grid, Typography, Icon } from "@mui/material";
import Context from "@context";
import { Link } from "react-router-dom";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import StorefrontIcon from "@mui/icons-material/Storefront";
import PostAddIcon from "@mui/icons-material/PostAdd";

export default function App({ hasClick }) {
  const { auth } = React.useContext(Context);

  const nav = [
    {
      name: "My Store",
      path: `/store/${auth.user.id}`,
      icon: StorefrontIcon,
      role: ["user"],
    },
    {
      name: "New Post ",
      path: "/post/create",
      icon: PostAddIcon,
      role: ["user"],
    },
    {
      name: "Profile",
      path: `/profile/${auth.user.id}`,
      icon: AccountCircleIcon,
      role: ["user"],
    },
  ];
  const hasRole = (item) => {
    if (item.role && !item.role.includes(auth.user.role.name)) return false;
    return true;
  };

  return (
    <Stack
      justifyContent={"space-between"}
      direction={"row"}
      flexWrap={"wrap"}
      maxWidth={280}
      m={-1}
    >
      {nav.filter(hasRole).map((d, ix) => (
        <SqButton data={d} key={ix} hasClick={hasClick} />
      ))}
    </Stack>
  );
}

function SqButton({ data, hasClick }) {
  const size = 74;
  return (
    <Stack
      alignItems={"center"}
      component={Link}
      to={`${data.path}`}
      onClick={hasClick}
    >
      <Stack
        width={size}
        height={size}
        border="1px solid"
        borderColor={"grey.c"}
        borderRadius={2}
        className="center"
        sx={{
          ":hover": {
            bgcolor: "primary.main",
            color: "white.main",
          },
        }}
        m={1}
      >
        <Icon
          component={data.icon}
          sx={{
            fontSize: 32,
          }}
        />
      </Stack>
      <Typography variant="caption" color="initial">
        {data.name}
      </Typography>
    </Stack>
  );
}
