import React from "react";

import Layout from "@ly";
import Context from "@context";

import { Button, Stack, IconButton } from "@mui/material";
import Typography from "@mui/material/Typography";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";

import CircleIcon from "@mui/icons-material/Circle";
import StarsIcon from "@mui/icons-material/Stars";
import UsePost from "@/component/usePost";
import Img from "@/component/ui/img";

import { Loader } from "@ui/loaderFs";

export default function PostList({ title = "posts" }) {
  const post = UsePost();

  return (
    <Stack>
      <Typography variant="h2" color="initial" className="f-capitalize">
        {title}
      </Typography>
      <Stack
        direction={"row"}
        justifyContent="space-between"
        sx={{
          overflowX: "scroll",
        }}
      >
        {!post.data && <Loader />}
        {post.data && post.data.map((d, ix) => <Card data={d} key={ix} />)}
      </Stack>
    </Stack>
  );
}

function Card({ data, idx }) {
  return (
    <Stack
      width={280}
      height={350}
      bgcolor="white.main"
      m={1}
      p={2}
      spacing={2}
      flexShrink={0}
      justifyContent="space-between"
      borderRadius={1}
    >
      <Stack spacing={1}>
        <Stack minHeight={24}>
          {idx % 2 == 0 && <CircleIcon color="secondary" />}
        </Stack>
        <Typography variant="body1" color="initial">
          {data.content.title}
        </Typography>
      </Stack>
      <Stack spacing={1}>
        <Stack direction={"row"} justifyContent="space-between">
          <Typography variant="body2" color="initial">
            [user name]
          </Typography>
        </Stack>
        <Img path={data.content.img_cover} className="img-contain" />
        <Stack height={18} justifyContent="center">
          <CartFoot data={idx} />
        </Stack>
      </Stack>
    </Stack>
  );
}

function CartFoot({ data }) {
  if (data == 2)
    return (
      <Stack alignItems={"center"} direction={"row"} spacing={0.5}>
        <StarsIcon sx={{ fontSize: 16 }} />
        <Typography variant="overline" color="initial" className="f-uppercase">
          Promote
        </Typography>
      </Stack>
    );
  return (
    <Stack direction={"row"} justifyContent="space-between">
      <UpVote />
      <Bookmark />
    </Stack>
  );
}

function UpVote(params) {
  return (
    <Stack direction={"row"} alignItems="center">
      <IconButton size="small" color="primary">
        <FileUploadIcon sx={{ fontSize: 16 }} />
      </IconButton>
      <Typography variant="overline" color="initial" className="f-uppercase">
        Upvoted
      </Typography>
    </Stack>
  );
}

function Bookmark(params) {
  return (
    <Stack direction={"row"} alignItems="center">
      <IconButton size="small" color="primary">
        <BookmarkAddedIcon sx={{ fontSize: 16 }} />
      </IconButton>
      <Typography variant="overline" color="initial" className="f-uppercase">
        Bookmarked
      </Typography>
    </Stack>
  );
}
