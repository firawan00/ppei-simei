import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Stack, Typography, Button } from "@mui/material";
import useAxios from "@component/gip-useAxios";
import { UserImg } from "@ui/img";
import { Loader } from "@ui/loaderFs";
import NF from "@ui/notFound";

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
  console.log(user);
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
      <GetPreference data={user.preference} />
      <GetPin />
      <GetBookmark />
    </Stack>
  );
}

function GetPreference({ data }) {
  const [ref, setdata] = useState(JSON.parse(data));

  return (
    <Stack>
      <Typography variant="h4" color="primary">
        My preference
      </Typography>
      <Stack direction="row" flexWrap="wrap">
        {ref.map((d, ix) => (
          <Stack m={0.5} key={d.id}>
            <Button
              key={ix}
              variant={"contained"}
              size="small"
              sx={{ borderRadius: 4, px: 2 }}
            >
              {d}
            </Button>
          </Stack>
        ))}
      </Stack>
      {!ref.length && <NF text={"preference"} />}
    </Stack>
  );
}

function GetBookmark({ data }) {
  const [ref, setdata] = useState(data ? JSON.parse(data) : []);

  return (
    <Stack>
      <Typography variant="h4" color="primary">
        My Bookmark
      </Typography>
      {!ref.length && <NF text={"bookmark"} />}
    </Stack>
  );
}

function GetPin({ data }) {
  const [ref, setdata] = useState(data ? JSON.parse(data) : []);

  return (
    <Stack>
      <Typography variant="h4" color="primary">
        My Pinned
      </Typography>
      {!ref.length && <NF text={"pinned"} />}
    </Stack>
  );
}
