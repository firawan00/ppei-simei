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
    form.setval({
      imgCover: croped,
    });
  }

  function handleSubmit() {
    result(form.payload);
  }

  return (
    <Stack component={"form"} noValidate autoComplete="off" spacing={2}>
      {refdata && (
        <Input.Hidden v={form.handleInput} refdata={refdata} fname="id" />
      )}

      <Imgcrop result={handleCrop} btnText="Add Image Cover" />

      <Input.Text
        val={form.payload.title}
        setval={form.handleInput}
        name="title"
      />
      <Input.TextArea
        val={form.payload.content}
        setval={form.handleInput}
        name="content"
      />
      <Button variant="contained" onClick={handleSubmit}>
        Submit
      </Button>
    </Stack>
  );
}
