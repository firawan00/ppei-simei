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
  RDO,
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
import InputSelect from "@component/gip-useForm/inputSelect";

export default function App({ refdata }) {
  const [formdata, setformdata] = useState({});
  const [formdata2, setformdata2] = useState({});
  const [formdisabled, setformdisabled] = useState(false);

  const { auth } = useContext(Context);

  async function handleRef(v, target) {
    let temp = formdata;
    temp[target] = v;
    setformdata({ ...temp });
  }

  return (
    <Stack>
      <Stack
        alignItems={"center"}
        display={auth.user.role.includes("fasilitator") ? "none" : ""}
      >
        <Stack width={"210mm"} className="hide_on_print">
          <BackIcon />
          <RInvoice
            selected={(v) => handleRef(v, "invoice")}
            value={formdata.invoice}
            refvalue={refdata ? refdata.invoice_id : ""}
          />
          <RShippingInstruction
            selected={(v) => handleRef(v, "si")}
            value={formdata.si}
            refvalue={refdata ? refdata.si_id : ""}
          />
          <RPackingList
            selected={(v) => handleRef(v, "pl")}
            value={formdata.pl}
            refvalue={refdata ? refdata.pl_id : ""}
          />
          <RDO
            selected={(v) => handleRef(v, "do")}
            value={formdata.do}
            refvalue={refdata ? refdata.do_id : ""}
          />
        </Stack>
      </Stack>
      {formdata.invoice && formdata.si && formdata.pl && formdata.do && (
        <Stack spacing={2}>
          <NewPEBForm
            formdata={formdata}
            refdata={refdata}
            handleRef={(v) => setformdata2(v)}
            onEdit={formdisabled}
          />
          <NewPEBForm2
            formdata={formdata}
            formdata2={formdata2}
            refdata={refdata}
            onEdit={(v) => setformdisabled(v)}
          />
        </Stack>
      )}
      {auth.user.role.includes("fasilitator") && (
        <Approval model="MD_peb" id={refdata.id} callback_url="/exportir/peb" />
      )}
    </Stack>
  );
}

function NewPEBForm({ formdata, refdata, handleRef, onEdit }) {
  const [payload, setpayload] = useState(refdata ? { ...refdata.data } : {});
  const [formdisabled, setformdisabled] = useState(onEdit);

  React.useEffect(() => {
    handleRef(payload);
  }, [payload]);

  React.useEffect(() => {
    setformdisabled(onEdit);
  }, [onEdit]);

  // React.useEffect(() => {
  //   isFormDisabled(formdisabled);
  // }, [formdisabled]);

  function handlePayload(e) {
    setpayload({ ...payload, [e.target.name]: e.target.value });
  }

  return (
    <PaperA4 noback>
      <Stack spacing={0} component="form">
        <Typography variant="h6" color="primary" align="center">
          PEMBERITAHUAN EKSPOR BARANG
        </Typography>
        <RenderFixed t="Nomor Pengajuan" v="040300-000001-20220101-000001" />

        <Stack direction={"row"} spacing={2}>
          <Stack>
            <RenderFixed t="A. KANTOR PABEAN" B />
            <RenderFixed
              t="1.	Kantor Pabean Pemuatan"
              v="040300	KPU Tanjung Priok"
            />
            <RenderFixed
              t="2.	Kantor Pabean Ekspor"
              v="040300	KPU Tanjung Priok"
            />
            <RenderFixed t="B.	JENIS EKSPOR" v="Ekspor biasa" />
            <RenderFixed t="C.	KATEGORI EKSPOR" v="Umum" />
            <RenderFixed t="D.	CARA PERDAGANGAN" v="Lainnya" />
            <RenderFixed t="E.	CARA PEMBAYARAN" v="Lainnya" />
          </Stack>
          <Stack pt={"18px"}>
            <RenderFixed t="H. KOLOM KHUSUS BEA DAN CUKAI" B />
            <RenderFixed t="1.	Nomor Pendaftaran" v="000001" />
            <RenderFixed t="Tanggal" v={formdata.invoice.date} />
            <RenderFixed t="2.	Nomor BC 1.1" />
            <RenderFixed t="Tanggal" />
            <RenderFixed t="Pos/ Sub Pos" />
          </Stack>
        </Stack>
        <Divider />
        <Stack direction={"row"} justifyContent="space-between">
          <Stack>
            <RenderFixed t="EKSPORTIR" B />
            <RenderFixed
              t="Identitas"
              v={"Npwp 15 Digit 01.234.567.8-910.111"}
              w={60}
            />
            <RenderFixed t="nama" v={formdata.invoice.from.name} w={60} />
            <RenderFixed t="alamat" v={formdata.invoice.from.address} w={60} />
          </Stack>
          <Stack>
            <RenderFixed t="PEMILIK BARANG" B />
            <RenderFixed t="Identitas" v={"01.234.567.8-910.111"} w={60} />
            <RenderFixed t="nama" v={formdata.invoice.from.name} w={60} />
            <RenderFixed t="nama" v={formdata.invoice.from.address} w={60} />
          </Stack>
          <Stack>
            <RenderFixed t="PENERIMA" B />
            <RenderFixed t="Identitas" v={"01.234.567.8-910.111"} w={60} />
            <RenderFixed t="nama" v={formdata.invoice.consignee} w={60} />
            <RenderFixed t="alamat" v={formdata.invoice.destination} w={60} />
          </Stack>
        </Stack>
        <Divider />
        <Stack direction={"row"} spacing={2} justifyContent="space-between">
          <Stack>
            <RenderFixed t="PPJK" B />
            <RenderFixed t="8. NPWP" v={"12.345.678.9-000.000"} />
            <RenderFixed t="9. Nama" v={"PT LOGISTIKA"} />
            <RenderFixed t="10. Alamat" v={"GROGOL JAKARTA BARAT"} />
          </Stack>
          <Stack>
            <RenderFixed t="PEMBELI" B />
            <RenderFixed t="Identitas" v={"01.234.567.8-910.111"} w={60} />
            <RenderFixed t="nama" v={formdata.invoice.consignee} w={60} />
            <RenderFixed t="nama" v={formdata.invoice.destination} w={60} />
          </Stack>
        </Stack>
        <Divider />

        <Stack direction={"row"} spacing={2} justifyContent="space-between">
          <Stack>
            <RenderFixed t="DATA PENGANGKUTAN" B />
            <RenderFixed t="17.	Cara Pengangkutan" v={"laut"} />
            {/* <RenderFixed
              t="18.	Nama & Bendera Sarana Pengangkut"
              v={formdata.si.shipper}
            /> */}

            {/* <RenderFixed
              t="19.	No.Pengangkut (Voy/ Flight/Nopol)"
              v={formdata.si.docref}
            /> */}
            {/* <RenderFixed t="20.	Tanggal Perkiraan Ekspor" v={formdata.si.date} /> */}
            <InputInline
              lb={"18.	Nama & Bendera Sarana Pengangkut"}
              name="i18"
              onChange={handlePayload}
              value={payload.i18 || ""}
              disabled={formdisabled}
              var="caption"
            />
            <InputInline
              lb={"19.	No.Pengangkut (Voy/ Flight/Nopol)"}
              name="i19"
              onChange={handlePayload}
              value={payload.i19 || ""}
              disabled={formdisabled}
              var="caption"
            />

            <InputInline
              lb={"20.	Tanggal Perkiraan Ekspor"}
              name="i20"
              onChange={handlePayload}
              value={payload.i20 || ""}
              var="caption"
              disabled={formdisabled}
            />
          </Stack>
          <Stack>
            <RenderFixed t="DATA PELABUHAN/TEMPAT MUAT EKSPOR" B />
            <RenderFixed t="21.	Pel. Muat Asal" v={formdata.si.pol} />
            <RenderFixed t="22.	Pel./Tempat Muat Ekspor" v={formdata.si.pol} />
            <RenderFixed t="23.	Tmpt. Penimbunan" v={"-"} />
            <RenderFixed t="24.	Pel. Bongkar" v={formdata.si.pod} />
            <RenderFixed t="25.Pel. Tujuan" v={formdata.si.pod} />
            <RenderFixed
              t="26. Negara Tujuan Ekspor"
              v={formdata.si.finaldestination}
            />
          </Stack>
        </Stack>
        <Divider />

        <Stack direction={"row"} spacing={2} justifyContent="space-between">
          <Stack>
            <RenderFixed t="DOKUMEN PELENGKAP PABEAN" B />
            <RenderFixed
              t="27.	Nomor & Tgl Invoice"
              v={fdate.format(formdata.invoice.date)}
              w={210}
            />
            <RenderFixed
              t="28.	Nomor & Tgl Packing"
              v={formdata.si.date}
              w={210}
            />
            <RenderFixed t="29.	Jenis, No & Tgl Dok. lainnya" v={"-"} w={210} />
            <RenderFixed
              t="Kantor Bea Cukai pendaftaran CK-5"
              v={"-"}
              w={210}
            />
          </Stack>
          <Stack>
            <RenderFixed t="DATA TEMPAT PEMERIKSAAN" B />
            <RenderFixed
              t="30.	Lokasi Pemeriksaan"
              v={"Gudang Eksportir"}
              w={210}
            />
            <RenderFixed
              t="31.	Kantor Pabean Pemeriksaan"
              v={"040300	KPU Tanjung Priok"}
              w={210}
            />
            <RenderFixed t="DATA PENYERAHAN" />
            <RenderFixed
              t="32. Cara Penyerahan Barang"
              // v={formdata.si.date}
              w={210}
            />
          </Stack>
        </Stack>
        <Divider />
        <Stack direction={"row"} spacing={2} justifyContent="space-between">
          <Stack>
            <RenderFixed t="DATA TRANSAKSI EKSPOR" B />
            {/* <RenderFixed t="33.	Bank Devisa Hasil Ekspor" v={"123 – BANKDEV"} /> */}
            <InputInline
              lb={"33.	Bank Devisa Hasil Ekspor"}
              name="i33"
              onChange={handlePayload}
              value={payload.i33 || ""}
              var="caption"
              disabled={formdisabled}
            />
            <RenderFixed t="34.	Jenis Valuta Asing" v={"USD"} />
            <RenderFixed
              t="Nilai Ekspor"
              v={invoiceTotal(formdata.invoice.product_list)}
            />
          </Stack>
          <Stack pt={"18px"} width="50%">
            <RenderFixed t="36.	Freight" v={""} w={210} />
            <RenderFixed t="37.	Asuransi (LN/DN)" v={""} w={210} />
            <RenderFixed t="38.	Nilai Maklon (Jika Ada)" v={""} w={210} />
          </Stack>
        </Stack>
        <Divider />
        <Stack direction={"row"} spacing={2} justifyContent="space-between">
          <Stack>
            <RenderFixed t="DATA PETI KEMAS" B />
            <RenderFixed t="39.	Jumlah Peti Kemas" v={formdata.si.qoc} />
            <RenderFixed
              t="40.	Nomor,Ukuran "
              v={`${formdata.do.container_no} |
               ${formdata.do.seal_no}`}
            />
            {/* <RenderFixed t="Status peti Kemas " v={"FCL "} /> */}

            <InputSelect
              lb={"status peti kemas"}
              name="ispk"
              onChange={handlePayload}
              value={payload.ispk || ""}
              var="caption"
              disabled={formdisabled}
              options={["fcl", "lcl"]}
            />
          </Stack>
          <Stack pt={"18px"} width="50%">
            <RenderFixed
              t="41.Jenis, Jumlah dan Merek Kemasan "
              v={""}
              w={210}
            />
          </Stack>
        </Stack>
      </Stack>
    </PaperA4>
  );
}

function NewPEBForm2({ formdata, formdata2, refdata, onEdit }) {
  const { auth } = useContext(Context);
  const [formdisabled, setformdisabled] = useState(refdata ? true : false);

  React.useEffect(() => {
    onEdit(formdisabled);
  }, [formdisabled]);

  const [payload, setpayload] = useState(
    refdata
      ? {
          id: refdata.id,
          product_list: refdata.product_list,
        }
      : {
          invoice_id: formdata.invoice.id,
          pl_id: formdata.pl.id,
          si_id: formdata.si.id,
          do_id: formdata.do.id,
          rawhead: formdata2,
        }
  );
  const nav = useNavigate();

  function handlePayload(e) {
    setpayload({ ...payload, [e.target.name]: e.target.value });
  }

  async function formSubmit(e) {
    e.preventDefault();
    let res = await fetcher({
      url: `md_peb`,
      method: "post",
      data: payload,
    });
    nav("/exportir/peb", true);
  }

  React.useEffect(() => {
    setpayload({ ...payload, rawhead: formdata2 });
  }, [formdata2]);

  return (
    <Stack spacing={0} component="form" onSubmit={formSubmit}>
      <PaperA4 noback>
        <RenderFixed t="DATA BARANG EKSPOR" B />
        <Stack direction={"row"} spacing={2} justifyContent="space-between">
          <Stack>
            <RenderFixed
              t="Berat Kotor (kg)"
              v={formdata.pl && beratotalbruto(formdata.pl.product_list)}
            />
          </Stack>
          <Stack>
            <RenderFixed
              t="Berat Bersih (kg)"
              v={beratotalnett(formdata.pl.product_list)}
            />
          </Stack>
        </Stack>
        <Divider />

        <ProductList
          disabled={formdisabled}
          value={
            payload.product_list || [
              {
                f1: "",
              },
            ]
          }
          onChange={(v) => setpayload({ ...payload, product_list: v })}
        />
      </PaperA4>

      {(!refdata || (refdata && refdata.from.id == auth.user.id)) && (
        <Sentto
          value={payload.to || ""}
          name={"to"}
          onChange={handlePayload}
          disabled={formdisabled}
          setEdit={() => setformdisabled(false)}
          filter="fasilitator-kepabeanan"
        />
      )}
    </Stack>
  );
}
