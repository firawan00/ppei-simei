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

export default function App(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Stack my={2}>
      <Button startIcon={<AddIcon />} size="small" onClick={handleOpen}>
        Pengajuan SKA Baru
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        sx={{
          backdropFilter: "blur(5px)",
          background: "rgba(255,255,255,0.1)",
        }}
      >
        <Stack
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "100%",
            maxWidth: "800px",
            bgcolor: "background.paper",
            boxShadow: 24,
            pt: 2,
            px: 4,
            pb: 3,
          }}
        >
          <Stack width={"100%"} maxWidth={600} spacing={1}>
            <Typography variant="subtitle2" color="initial">
              Silahkan Download dan isi template pengajuan di bawah ini. Setelah
              itu, isi form dan upload kembali dokumen yang telah disini
            </Typography>
            <File
              path={"uploads/template/ska-template.doc"}
              text="Form SKA Template"
            />
            <NewSkaForm />
            <Button onClick={handleClose} variant="outlined">
              Kembali
            </Button>
          </Stack>
        </Stack>
      </Modal>
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
      console.log(res);
    },
  });

  return (
    <Stack spacing={2} component="form" onSubmit={formik.handleSubmit}>
      <Typography variant="h4" color="primary">
        Pengajual SKA Baru
      </Typography>
      <TextField
        label="name"
        value={formik.values.name}
        onChange={formik.handleChange}
      />
      <TextField
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
      </TextField>
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
