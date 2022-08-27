import React, { useState, useContext } from "react";
import Context from "@context";
import { fetcher, useNavigate } from "@component/gip-useForm/fetcher";

import {
  Button,
  Stack,
  Modal,
  Typography,
  TextField,
  MenuItem,
  Divider,
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
import {
  RInvoice,
  RShippingInstruction,
  RPackingList,
} from "@component/apps/selectRef";
import RenderFixed from "./_renderFixed";
import { ref } from "yup";
import {
  invoiceTotal,
  beratotalbruto,
  beratotalnett,
} from "@component/helper/invoiceTotal";
import { fdate } from "@/component/helper/formating";
import ProductList from "@/component/ui/productListPEB";
import Sentto from "@/component/apps/sentto";
import Approval from "@/component/apps/approval";
import InputInline from "@component/gip-useForm/inputInline";

export default function App({ refdata }) {
  const [formdata, setformdata] = useState({});
  const { auth } = useContext(Context);

  return (
    <Stack>
      <Stack alignItems={"center"}>
        <Stack width={"210mm"} className="hide_on_print">
          <BackIcon />
        </Stack>
      </Stack>

      <Stack spacing={2}>
        <NewPEBForm formdata={formdata} refdata={refdata} />
      </Stack>
    </Stack>
  );
}
function NewPEBForm({ formdata, refdata }) {
  const { auth } = useContext(Context);
  const [formdisabled, setformdisabled] = useState(refdata ? true : false);

  const [payload, setpayload] = useState(refdata ? refdata.data : {});
  const nav = useNavigate();

  function handlePayload(e) {
    setpayload({ ...payload, [e.target.name]: e.target.value });
  }

  async function formSubmit(e) {
    e.preventDefault();
    let res = await fetcher({
      url: `md_npe`,
      method: "post",
      data: payload,
    });
    nav("/exportir/npe", true);
  }
  return (
    <Stack component={"form"} onSubmit={formSubmit}>
      <PaperA4 noback>
        <Stack spacing={0} component="form">
          <Stack direction={"row"} justifyContent="space-between">
            <Stack>
              <RenderFixed t="KEMENTERIAN KEUANGAN REPUBLIK INDONESIA" />
              <RenderFixed t="DIREKTORAT JENDERAL BEA DAN CUKAI" />
              <RenderFixed t="KANTOR PELAYANAN UTAMA TANJUNG PRIOK" />
            </Stack>
            <Stack>
              <RenderFixed t="No.Pengajuan: 040300-000218-20211202-000201" />
            </Stack>
          </Stack>

          <Typography variant="h6" color="primary" align="center">
            NOTA PELAYANAN EKSPOR (NPE)
          </Typography>
          <Stack direction={"row"} justifyContent="space-between">
            <Stack>
              <RenderFixed t="Nomor" v="818027/KPU.01/2021" />
              <RenderFixed
                t="No.Pendaftaran PEB"
                v="815561 Tanggal: 02-12-2021"
              />
              <RenderFixed t="Jenis Komoditi" v="NON-SDA" />
            </Stack>
            <Stack>
              <RenderFixed t="Tanggal" v="02-12-2021" />
            </Stack>
          </Stack>

          <Divider />

          <Stack>
            <InputInline
              lb={"1. KANTOR PABEAN PEMUATAN"}
              var="caption"
              name="f1"
              onChange={handlePayload}
              disabled={formdisabled}
              value={payload.f1 || ""}
              lbw={320}
              my={0}
            />
            <InputInline
              lb={"NPWP / NAMA EKSPORTIR"}
              var="caption"
              name="f2"
              onChange={handlePayload}
              disabled={formdisabled}
              value={payload.f2 || ""}
              lbw={320}
              my={0}
            />
            <InputInline
              lb={"NPWP / NAMA PPJK"}
              var="caption"
              name="f3"
              onChange={handlePayload}
              disabled={formdisabled}
              value={payload.f3 || ""}
              lbw={320}
              my={0}
            />
          </Stack>
          <RenderFixed t="SARANA PENGANGKUT" />
          <Stack direction={"row"} justifyContent="space-between" spacing={2}>
            <Stack>
              <InputInline
                lb={"a. Nama"}
                var="caption"
                name="f4"
                onChange={handlePayload}
                disabled={formdisabled}
                value={payload.f4 || ""}
                my={0}
              />
            </Stack>
            <Stack>
              <InputInline
                lb={"b. Voyage/FLight/Nopol:"}
                var="caption"
                name="f5"
                onChange={handlePayload}
                disabled={formdisabled}
                value={payload.f5 || ""}
                my={0}
              />
            </Stack>
          </Stack>
          <InputInline
            lb={"TANGGAL PERKIRAAN EKSPOR"}
            var="caption"
            name="f6"
            onChange={handlePayload}
            disabled={formdisabled}
            value={payload.f6 || ""}
            my={0}
            lbw={320}
          />
          <RenderFixed t="PELABUHAN MUAT" />
          <Stack direction={"row"} justifyContent="space-between" spacing={2}>
            <Stack>
              <InputInline
                lb={"a. Pelabuhan Muat Asal"}
                var="caption"
                name="f7"
                onChange={handlePayload}
                disabled={formdisabled}
                value={payload.f7 || ""}
                my={0}
              />
            </Stack>
            <Stack>
              <InputInline
                lb={"b. Pelabuhan/Tempat Muat Ekspor "}
                var="caption"
                name="f8"
                onChange={handlePayload}
                disabled={formdisabled}
                value={payload.f8 || ""}
                my={0}
              />
            </Stack>
          </Stack>
          <InputInline
            lb={"7. BERAT KOTOR"}
            var="caption"
            name="f6"
            onChange={handlePayload}
            disabled={formdisabled}
            value={payload.f6 || ""}
            my={0}
          />
          <RenderFixed t="KEMASAN" />
          <Stack direction={"row"} justifyContent="space-between" spacing={2}>
            <Stack>
              <RenderFixed t="PETI KEMAS" />
              <InputInline
                lb={"a. Merek/Nomor"}
                var="caption"
                name="f9"
                onChange={handlePayload}
                disabled={formdisabled}
                value={payload.f9 || ""}
                my={0}
              />
              <InputInline
                lb={"b. Ukuran"}
                var="caption"
                name="f10"
                onChange={handlePayload}
                disabled={formdisabled}
                value={payload.f10 || ""}
                my={0}
              />
            </Stack>
            <Stack>
              <RenderFixed t="NON PETI KEMAS" />
              <InputInline
                lb={"a. Jenis/Merek Kemasan"}
                var="caption"
                name="f11"
                onChange={handlePayload}
                disabled={formdisabled}
                value={payload.f11 || ""}
                my={0}
              />
              <InputInline
                lb={"b. Jumlah"}
                var="caption"
                name="f12"
                onChange={handlePayload}
                disabled={formdisabled}
                value={payload.f12 || ""}
                my={0}
              />
            </Stack>
          </Stack>
        </Stack>
        <Footer />
      </PaperA4>
      {(!refdata || (refdata && refdata.from.id == auth.user.id)) && (
        <Sentto
          value={payload.to || ""}
          name={"to"}
          onChange={handlePayload}
          disabled={formdisabled}
          setEdit={() => setformdisabled(false)}
          filter="user-export"
        />
      )}
    </Stack>
  );
}

function Footer(params) {
  return (
    <Stack>
      <Divider />
      <Typography variant="overline" align="center">
        UNTUK KANTOR PABEAN PEMUATAN DI PELABUHAN MUAT EKSPOR
      </Typography>
      <Divider />
      <Stack direction={"row"} justifyContent="space-between" spacing={2}>
        <Stack width={"50%"}>
          <RenderFixed t="A. CATATAN PEMERIKSAAN DOKUMEN EKSPOR" />
          <RenderFixed t="Pejabat Pemeriksa Dokumen ..................." />
        </Stack>
        <Stack width={"50%"}>
          <RenderFixed t="B. CATATAN PEMERIKSAAN DOKUMEN EKSPOR" />
          <RenderFixed t="Pemeriksa ..........................................." />
        </Stack>
      </Stack>
      <Divider />

      <Stack direction={"row"} justifyContent="space-between" spacing={2}>
        <Stack width={"50%"}>
          <RenderFixed t="C. CATATAN PENGAWASAN STUFFING" />
          <RenderFixed t="Merek / Nomor Peti Kemas" />
          <RenderFixed t="Ukuran Peti Kemas" />
          <RenderFixed t="Jenis Segel : ........... Nomor Segel : ................" />
          <RenderFixed t="Petugas Pengawasan Stuffing ...................." />
        </Stack>
        <Stack width={"50%"}>
          <RenderFixed t="D. CATATAN PENGELUARAN BARANG EKSPOR DARI TPB" />
          <RenderFixed t="Jenis Segel : ........... Nomor Segel : ................" />
          <RenderFixed t="Selesai Keluar Tanggal : ........... Pukul : ................" />
          <RenderFixed t="Petugas Dinas Luar ................" />
        </Stack>
      </Stack>
      <Divider />
      <Stack direction={"row"} justifyContent="space-between" spacing={2}>
        <Stack width={"50%"}>
          <RenderFixed t=" E.CATATAN PEMASUKAN BARANG EKSPOR" />
          <RenderFixed t="Segel :  Utuh / Rusak / Tidak Sesuai" />
          <RenderFixed t="Mulai Masuk Tanggal : ........... Pukul : ................" />
          <RenderFixed t="Selesai Masuk Tanggal : ........... Pukul : ................" />
          <RenderFixed t="Petugas Dinas Luar ......................" />
        </Stack>
        <Stack width={"50%"}>
          <RenderFixed t="F. CATATAN PEMUATAN BRG.EKSPOR KE SARANA PENGANGKUT" />
          <RenderFixed t="Short Shipment : ........... " />
          <RenderFixed t="Selesai Muat Tanggal : ........... Pukul : ................" />
          <RenderFixed t="Petugas Dinas Luar ..................." />
        </Stack>
      </Stack>

      <Divider />
      <Typography variant="overline" align="center">
        UNTUK KANTOR PABEAN PEMUATAN DI PELABUHAN MUAT ASAL
      </Typography>
      <Divider />
      <Stack direction={"row"} justifyContent="space-between" spacing={2}>
        <Stack width={"50%"}>
          <RenderFixed t="A. CATATAN PEMERIKSAAN DOKUMEN EKSPOR" />
          <RenderFixed t="Pejabat Pemeriksa Dokumen ..................." />
        </Stack>
        <Stack width={"50%"}>
          <RenderFixed t="B. CATATAN PEMERIKSAAN DOKUMEN EKSPOR" />
          <RenderFixed t="Pemeriksa ..........................................." />
        </Stack>
      </Stack>
      <Divider />

      <Stack direction={"row"} justifyContent="space-between" spacing={2}>
        <Stack width={"50%"}>
          <RenderFixed t="C. CATATAN PENGAWASAN STUFFING" />
          <RenderFixed t="Merek / Nomor Peti Kemas" />
          <RenderFixed t="Ukuran Peti Kemas" />
          <RenderFixed t="Jenis Segel : ........... Nomor Segel : ................" />
          <RenderFixed t="Petugas Pengawasan Stuffing ...................." />
        </Stack>
        <Stack width={"50%"}>
          <RenderFixed t="D. CATATAN PENGELUARAN BARANG EKSPOR DARI TPB" />
          <RenderFixed t="Jenis Segel : ........... Nomor Segel : ................" />
          <RenderFixed t="Selesai Keluar Tanggal : ........... Pukul : ................" />
          <RenderFixed t="Petugas Dinas Luar ................" />
        </Stack>
      </Stack>
      <Divider />
      <Stack direction={"row"} justifyContent="space-between" spacing={2}>
        <Stack width={"50%"}>
          <RenderFixed t=" E.CATATAN PEMASUKAN BARANG EKSPOR" />
          <RenderFixed t="Segel :  Utuh / Rusak / Tidak Sesuai" />
          <RenderFixed t="Mulai Masuk Tanggal : ........... Pukul : ................" />
          <RenderFixed t="Selesai Masuk Tanggal : ........... Pukul : ................" />
          <RenderFixed t="Petugas Dinas Luar ......................" />
        </Stack>
        <Stack width={"50%"}>
          <RenderFixed t="F. CATATAN PEMUATAN BRG.EKSPOR KE SARANA PENGANGKUT" />
          <RenderFixed t="Short Shipment : ........... " />
          <RenderFixed t="Selesai Muat Tanggal : ........... Pukul : ................" />
          <RenderFixed t="Petugas Dinas Luar ..................." />
        </Stack>
      </Stack>
    </Stack>
  );
}
