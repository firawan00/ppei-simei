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
        label="Instgram Post URL"
        name="url"
        placeholder="https://www.instagram.com/p/xxxx/?utm_source=ig_web_copy_link"
      />

      <Button variant="contained" onClick={handleSubmit}>
        Submit
      </Button>
    </Stack>
  );
}
