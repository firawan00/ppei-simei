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
      <Imgcrop result={handleCrop} btnText="Add Image Cover" />
      <Typography variant="h6" color="initial">
        Raw Material
      </Typography>
      <Input.ArrayObject
        val={form.payload.content}
        setval={form.setval}
        name="content"
        objectarr={[
          { name: "name", w: "100%" },
          { name: "weight" },
          { name: "unit" },
        ]}
        initValue={[
          { name: "terigu", weight: "1", unit: "kg" },
          { name: "telur", weight: "2", unit: "butir" },
        ]}
      />
      <Typography variant="h6" color="initial">
        Step & Prosess
      </Typography>
      <Input.ArrayObject
        val={form.payload.content}
        setval={form.setval}
        name="content"
        objectarr={[{ name: "content" }]}
        withNumber
        initValue={[
          {
            content:
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
          },
          {
            content:
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
          },
        ]}
      />

      <Button variant="contained" onClick={handleSubmit}>
        Submit
      </Button>
    </Stack>
  );
}
