import React, { useState } from "react";

import {
  Button,
  Stack,
  Modal,
  Typography,
  TextField,
  MenuItem,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import File from "@ui/file";
import context from "@/component/context";
import { useFormik } from "formik";
import * as yup from "yup";

import InputFile from "@component/gip-useForm/inputFile";
import { fetcherMultipart } from "@component/gip-useForm/fetcher";
import BackIcon from "@/component/ui/backIcon";
import { meta } from "./_meta";
import PaperA4 from "@component/paperA4";

export default function App({ refdata }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <PaperA4 prefix={<Prefix />}>
      <NewSkaForm />
    </PaperA4>
  );
}

function Prefix(params) {
  return (
    <Stack spacing={1} mb={2}>
      <Typography variant="subtitle2" color="primary">
        Silahkan Download dan isi template pengajuan di bawah ini. Setelah itu,
        isi form dan upload kembali dokumen yang telah disini
      </Typography>
      <File
        path={"uploads/template/peb-template.xls"}
        text="Form PEB Template"
      />
    </Stack>
  );
}

const validationSchema = yup.object({
  name: yup.string("Enter your email").required("This Field Required "),
  type: yup.string("Enter your password").required("Password is required"),
});

function NewSkaForm(params) {
  const { auth } = React.useContext(context);

  const formik = useFormik({
    initialValues: {
      name: auth.user.name || "",
      type: "foobar@example.com",
    },
    validationSchema: validationSchema,
    onSubmit: async (payload) => {
      console.log({
        fileName: payload.file.name,
        type: payload.file.type,
        size: `${payload.file.size} bytes`,
      });

      let res = await fetcherMultipart({
        url: "ska",
        method: "post",
        data: payload,
      });
    },
  });

  return (
    <Stack spacing={2} component="form" onSubmit={formik.handleSubmit}>
      <Typography variant="h4" color="primary" align="center">
        Pengajuan PEB Baru
      </Typography>
      <TextField
        label="name"
        value={formik.values.name}
        onChange={formik.handleChange}
        disabled
      />
      {/* <TextField
        name="type"
        label="Form Type"
        select
        value={formik.values.type}
        onChange={formik.handleChange}
        error={formik.touched.type && Boolean(formik.errors.type)}
        helperText={formik.touched.type && formik.errors.type}
      >
        <MenuItem value="type-a">Type A</MenuItem>
        <MenuItem value="type-b">Type B</MenuItem>
      </TextField> */}
      <InputFile
        value={(v) => {
          formik.setFieldValue("file", v ? v : "");
        }}
      />
      <Button fullWidth type="submit">
        Submit
      </Button>
    </Stack>
  );
}
