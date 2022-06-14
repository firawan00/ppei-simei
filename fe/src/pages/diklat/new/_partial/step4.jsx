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
        isCustom: "radio",
        name: "kompetensi_teknis",
        label: "Kesenjangan Kompetensi Teknis",
        options: ["Tidak Ada", "Rendah", "Sedang", "Tinggi"],
        validation: yup.string("").required("please select at lease one"),
      },

      {
        isCustom: "radio",
        name: "bool_asesmen",
        label:
          "Apakah pegawai ybs telah mengikuti asesmen yang diselenggarakan oleh Bakamla?",
        options: ["Ya", "Tidak"],
        validation: yup.string("").required("please select at lease one"),
      },
      {
        isCustom: "radio",
        name: "bool_asesmen_result",
        label:
          "Apakah pegawai ybs telah menerima atau mengetahui hasil asesmen?",
        options: ["Ya", "Tidak"],
        validation: yup.string("").required("please select at lease one"),
      },
      {
        name: "nilai_kinerja",
        label: "Nilai Kinerja",
        validation: yup.number().required("this field required"),
        type: TextField,
      },
    ],
  };

  return <Form config={config} next={(v) => next(v)} back={back} />;
}
