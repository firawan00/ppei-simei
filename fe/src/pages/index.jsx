import React from "react";

// import Context from "@context";
import { Stack } from "@mui/material";
import PostList from "@ui/post";
import FullWidth from "@ui/fullWidth";

export default function App(props) {
  return (
    <Stack>
      <FullWidth h={400} mt={-5}>
        <Stack width={"100%"} height={400} p={5}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus nulla
          magnam doloribus mollitia, corporis tempora expedita sed, nam tenetur
          fugit harum aspernatur dolor quo dolore commodi temporibus beatae
          ratione veniam!
        </Stack>
      </FullWidth>
      <PostList title="My Preferences" />
      <PostList title="Jago Kuliner" />
      <PostList title="Recomendation" />
      <PostList title="Upvoted" />
    </Stack>
  );
}
