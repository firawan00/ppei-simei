import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Stack, Typography, Button } from "@mui/material";
import useAxios from "@component/gip-useAxios";
import { UserImg } from "@ui/img";
import { Loader } from "@ui/loaderFs";
import NF from "@ui/notFound";

import NewStore from "./_newStore";

export default function App(props) {
  const { id } = useParams();
  const [user, setuser] = useState();
  const { fetcher } = useAxios();

  async function fetchuser(params) {
    const res = await fetcher({
      method: "get",
      url: `users/${id}`,
    });
    !res.error && setuser(res);
  }

  useEffect(() => {
    fetchuser();
  }, []);

  if (!user) return <Loader />;
  if (!user.store) return <NewStore />;

  return (
    <Stack spacing={3}>
      <Stack
        direction={"row"}
        spacing={3}
        width="100%"
        justifyContent="space-between"
      >
        <UserImg user={user} w={128} />
        <Typography variant="h4" color="primary">
          {user.name}
        </Typography>
      </Stack>
    </Stack>
  );
}
