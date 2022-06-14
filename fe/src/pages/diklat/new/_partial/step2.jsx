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
        name: "riwayat_jabatan_1",
        label: "Riwayat Jabatan 1",
        type: TextField,
        validation: yup.string("").required("this field required"),
      },
      {
        name: "riwayat_jabatan_2",
        label: "Riwayat Jabatan 2",
        type: TextField,
      },
      {
        name: "riwayat_jabatan_3",
        label: "Riwayat Jabatan 3",
        type: TextField,
      },
      {
        name: "riwayat_jabatan_4",
        label: "Riwayat Jabatan 4",
        type: TextField,
      },
    ],
  };

  return (
    <Stack>
      <Form config={config} next={(v) => next(v)} back={back} disableBack />
    </Stack>
  );
}
