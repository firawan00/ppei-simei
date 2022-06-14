import React, { useEffect, useState, Fragment } from "react";
import Context from "@context";
import { Stack, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

import useAxios from "@component/gip-useAxios";
import { useFormik } from "formik";
import * as yup from "yup";

import InputRadio from "@component/gip-useForm/inputRadio";

export default function useForm({
  config,
  disableBack = false,
  next,
  back,
  refpayload,
}) {
  const formik = useFormik({
    initialValues: config.field.reduce(
      (acc, cur) => ({
        ...acc,
        [cur.name]: (refpayload && refpayload[cur.name]) || cur.initialValues,
      }),
      {}
    ),
    validationSchema: yup.object(
      config.field.reduce(
        (acc, cur) => ({ ...acc, [cur.name]: cur.validation }),
        {}
      )
    ),
    onSubmit: async (payload) => {
      next(payload);
    },
  });

  return (
    <Stack component={"form"} onSubmit={formik.handleSubmit} spacing={0}>
      {config.field.map((d, ix) => (
        <Fragment key={ix}>
          {!d.isCustom && (
            <d.type
              label={d.label || d.name}
              name={d.name}
              value={formik.values[d.name] || ""}
              onChange={formik.handleChange}
              error={formik.touched[d.name] && Boolean(formik.errors[d.name])}
              helperText={
                (formik.touched[d.name] && formik.errors[d.name]) || " "
              }
              disabled={d.disabled}
            />
          )}
          {d.isCustom == "text" && (
            <Typography variant={d.var} color={d.color || "primary"}>
              {d.content}
            </Typography>
          )}

          {d.isCustom == "radio" && (
            <Stack>
              <InputRadio
                name={d.name}
                label={d.label || d.name}
                options={d.options}
                value={formik.values[d.name] || ""}
                onChange={formik.handleChange}
              />
              <Typography variant="caption" color="error" minHeight={24}>
                {(formik.touched[d.name] && formik.errors[d.name]) || " "}
              </Typography>
            </Stack>
          )}
        </Fragment>
      ))}
      <Stack spacing={2} direction="row">
        {!disableBack && (
          <Button variant="outlined" onClick={back}>
            Kembali
          </Button>
        )}
        <Button type="submit" variant="contained">
          Lanjutkan
        </Button>
      </Stack>
    </Stack>
  );
}
