import React, { useState } from "react";
import { Stack, Button, TextField, MenuItem } from "@mui/material";
import BackIcon from "@/component/ui/backIcon";
import { meta } from "./_meta";
import { fetcherMultipart, useNavigate } from "@component/gip-useForm/fetcher";
import InputFile from "@component/gip-useForm/inputFile";

export default function App({ refdata }) {
  const [payload, setpayload] = useState(refdata ? refdata : {});
  const nav = useNavigate();

  function handlePayload(e) {
    setpayload({ ...payload, [e.target.name]: e.target.value });
  }

  async function formSubmit(e) {
    e.preventDefault();
    delete payload.token;

    let res = await fetcherMultipart({
      url: `config`,
      method: "post",
      data: payload,
    });
    nav("/admin/config", true);
  }

  return (
    <Stack
      component={"form"}
      width="100%"
      noValidate
      autoComplete="off"
      onSubmit={formSubmit}
    >
      <BackIcon
        title={refdata ? `${meta.model} Edit` : `${meta.model} Create`}
      />
      <Stack spacing={2}>
        <TextField
          label="name"
          name="name"
          value={payload.name || ""}
          onChange={handlePayload}
          disabled
        />
        {payload.type == "file" && (
          <InputFile
            accept=".xls , .xlsx"
            btnText="Upload Document"
            value={(v) => {
              setpayload({ ...payload, file: v });
            }}
          />
        )}
        {payload.type == "text" && (
          <TextField
            label="value"
            name={"value"}
            value={payload.value || ""}
            onChange={handlePayload}
          />
        )}

        {/* <TextField
          label="role"
          name="role"
          value={payload.role || ""}
          onChange={handlePayload}
          select
        >
          <MenuItem value="admin">admin</MenuItem>
          <MenuItem value="user-import">user import</MenuItem>
          <MenuItem value="user-export">user export</MenuItem>
          <MenuItem value="fasilitator-kepabeanan">
            fasilitator kepabeanan
          </MenuItem>
          <MenuItem value="fasilitator-bank">fasilitator bank</MenuItem>
          <MenuItem value="fasilitator-cargo">fasilitator cargo</MenuItem>
          <MenuItem value="fasilitator-ska">fasilitator ska</MenuItem>
        </TextField> */}

        <Button type="submit">Submit</Button>
      </Stack>
    </Stack>
  );
}
