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
        name: "riwayat_pelatihan_1",
        label: "Riwayat Pelatihan 1",
        type: TextField,
        validation: yup.string("").required("this field required"),
      },
      {
        name: "riwayat_pelatihan_2",
        label: "Riwayat Pelatihan 2",
        type: TextField,
      },
      {
        name: "riwayat_pelatihan_3",
        label: "Riwayat Pelatihan 3",
        type: TextField,
      },
      {
        name: "riwayat_pelatihan_4",
        label: "Riwayat Pelatihan 4",
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
