import React, { useEffect, useState } from "react";
import Context from "@context";
import { Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { Input } from "@component/useForm";
import useAxios from "@component/gip-useAxios";
import { useFormik } from "formik";

export default function useForm({ config }) {
  const { fetcher } = useAxios();
  const router = useNavigate();
  const { auth } = React.useContext(Context);

  const formik = useFormik({
    initialValues: config.initialValues,
    validationSchema: config.validationSchema,
    onSubmit: async (payload) => {
      const res = await fetcher({
        method: config.fetch.method,
        url: config.fetch.url,
        data: payload,
      });

      if (!res.err) {
        await auth.update(res);
        router("/", { replace: true });
      }
    },
  });

  return (
    <Stack component={"form"} onSubmit={formik.handleSubmit}>
      {config.field.map((d, ix) => (
        <div key={ix}>
          {d.mode == "text" && (
            <Typography variant={d.var} color={d.color || "primary"}>
              {d.content}
            </Typography>
          )}

          {d.mode == "input" && !d.isCustom && (
            <d.type
              name={d.name}
              val={formik.values[d.name]}
              setval={formik.handleChange}
              err={formik.touched[d.name] && formik.errors[d.name]}
            />
          )}
          {d.mode == "input" && d.isCustom && (
            <d.type
              name={d.name}
              setval={(v) => formik.setFieldValue([d.name], v)}
              {...d.attr}
            />
          )}
        </div>
      ))}
      <Input.Submit />
    </Stack>
  );
}

export { Input };
