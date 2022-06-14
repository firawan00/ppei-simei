import React from "react";
import Context from "@context";

// import { Input } from "@/component/gip-useForm";
import Form from "./form";

import * as yup from "yup";
import { Stack, TextField } from "@mui/material";

export default function App({ next, back }) {
  const { auth } = React.useContext(Context);
  const config = {
    field: [
      {
        name: "name",
        label: "NAMA PEGAWAI*",
        type: TextField,
        disabled: true,
        validation: yup.string("Enter your name").required("required"),
        initialValues: "Genesha",
      },

      {
        name: "nip",
        label: "NIP Pegawai*",
        type: TextField,
        disabled: true,
        validation: yup
          .string("Enter your name")
          .required("this field required"),
        initialValues: "1111111111",
      },

      {
        name: "jabatan",
        label: "Jabatan Pegawai",
        type: TextField,
        validation: yup
          .string("Enter your name")
          .required("this field required"),
      },

      {
        name: "unitesselon_1",
        label: "Unit Eselon I",
        type: TextField,
        validation: yup
          .string("Enter your name")
          .required("this field required"),
      },
      {
        name: "satuan_kerja",
        label: "Satuan Kerja",
        type: TextField,
        validation: yup
          .string("Enter your name")
          .required("this field required"),
      },
      {
        name: "jenjang_pendidikan",
        label: "Jenjang Pendidikan Terakhir",
        type: TextField,
        validation: yup
          .string("Enter your name")
          .required("this field required"),
      },
      {
        name: "Jurusan_pendidikan",
        label: "Jurusan/Konsentrasi Pendidikan",
        type: TextField,
        validation: yup
          .string("Enter your name")
          .required("this field required"),
      },
    ],
  };

  return (
    <Stack>
      <Form config={config} next={(v) => next(v)} back={back} disableBack />
    </Stack>
  );
}
