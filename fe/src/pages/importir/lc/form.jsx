import React, { useState, useContext } from "react";
import Context from "@context";

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
import { fetcherMultipart, useNavigate } from "@component/gip-useForm/fetcher";
import BackIcon from "@/component/ui/backIcon";
import { meta } from "./_meta";
import PaperA4 from "@component/paperA4";
import Sentto from "@component/apps/sentto";
import ArticleIcon from "@mui/icons-material/Article";
import Approval from "@/component/apps/approval";

export default function App({ refdata }) {
  return <NewSkaForm refdata={refdata} />;
}

function Prefix(params) {
  return (
    <Stack spacing={1} mb={2}>
      <Typography variant="subtitle2" color="primary">
        Silahkan Download dan isi template pengajuan di bawah ini. Setelah itu,
        isi form dan upload kembali dokumen yang telah disini
      </Typography>
      <File path={"uploads/template/lc-template.xls"} text="Form LC Template" />
    </Stack>
  );
}

function NewSkaForm({ refdata }) {
  const { auth } = useContext(Context);

  const [err, seterr] = useState();
  const [formdisabled, setformdisabled] = useState(refdata ? true : false);
  const [payload, setpayload] = useState(
    refdata ? { ...refdata, to: refdata.to.id } : {}
  );
  const nav = useNavigate();
  function handlePayload(e) {
    setpayload({ ...payload, [e.target.name]: e.target.value });
  }
  async function formSubmit(e) {
    e.preventDefault();
    delete payload.from;
    let res = await fetcherMultipart({
      url: `md_lc`,
      method: "post",
      data: payload,
    });
    if (!res.id) seterr("Incorect uploaded file");
    else nav("/importir/lc", true);
  }

  return (
    <Stack component="form" onSubmit={formSubmit}>
      <PaperA4 prefix={refdata ? <></> : <Prefix />}>
        <Stack spacing={2}>
          <Typography variant="h4" color="primary" align="center">
            Pengajuan LC Baru
          </Typography>
          <Typography variant="body">
            Dengan ini saya lampirangan dokument pengajuan Letter of Credit.
          </Typography>
          {!formdisabled && (
            <InputFile
              value={(v) => {
                setpayload({ ...payload, file: v });
              }}
            />
          )}
          {formdisabled && (
            <Stack>
              <File path={refdata.file_path} text="Form LC Template" />
            </Stack>
          )}

          <Stack mx={2}>
            {(!refdata || (refdata && refdata.from.id == auth.user.id)) && (
              <Sentto
                nogrow
                value={payload.to || ""}
                name="to"
                onChange={handlePayload}
                disabled={formdisabled}
                setEdit={() => setformdisabled(false)}
                filter="fasilitator-bank"
              />
            )}

            <Typography variant="caption" color="error" align="center">
              {err}
            </Typography>
          </Stack>
        </Stack>
      </PaperA4>
      {auth.user.role.includes("fasilitator") && (
        <Approval model="md_lc" id={refdata.id} callback_url="/importir/lc" />
      )}
    </Stack>
  );
}
