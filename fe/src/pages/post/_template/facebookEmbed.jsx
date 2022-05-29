import React from "react";
import { Stack, Button, Chip, Typography } from "@mui/material";
import useForm, { Input, fetcher } from "@/component/useForm";
import { meta } from "../_meta";

import Imgcrop from "@/component/gip-imagecrop";

export default function App({ refdata, result }) {
  const defval = { title: "", content: "" };
  const form = useForm(meta.model, refdata ? refdata : defval);

  React.useEffect(() => {
    refdata && form.setpayload(refdata);
  }, []);

  function handleCrop(croped) {
    form.handleInput({
      imgCover: croped,
    });
    console.log(payload);
  }

  function handleSubmit() {
    result(form.payload);
  }

  return (
    <Stack
      component={"form"}
      noValidate
      autoComplete="off"
      onSubmit={form.handleSubmit}
      spacing={1}
    >
      {refdata && (
        <Input.Hidden v={form.handleInput} refdata={refdata} fname="id" />
      )}

      <Input.URL
        val={form.payload.url}
        setval={form.setval}
        name="url"
        label="Facebook Embed Code"
        placeholder="<iframe src='https://www.facebook.com/plugins/post ... "
      />
      <iframe
        src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fgeneshairzan%2Fposts%2F10227173951195930&show_text=true&width=500"
        width="300"
        height="665"
        style={{
          border: "none",
          overflow: "hidden",
        }}
        scrolling="no"
        frameBorder="0"
        allowFullScreen={true}
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      ></iframe>
      <Button variant="contained" onClick={handleSubmit}>
        Submit
      </Button>
    </Stack>
  );
}
