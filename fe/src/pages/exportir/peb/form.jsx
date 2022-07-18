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

export default function App({ refdata }) {
  const [formdata, setformdata] = useState({});
  const { auth } = useContext(Context);

  return (
    <Stack>
      <Stack
        alignItems={"center"}
        display={auth.user.role.includes("fasilitator") ? "none" : ""}
      >
        <Stack width={"210mm"} className="hide_on_print">
          <BackIcon />
          <RInvoice
            selected={(v) => setformdata({ ...formdata, invoice: v })}
            value={formdata.invoice}
            refvalue={refdata ? refdata.invoice_id : ""}
          />
          <RShippingInstruction
            selected={(v) => setformdata({ ...formdata, si: v })}
            value={formdata.si}
            refvalue={refdata ? refdata.si_id : ""}
          />
          <RPackingList
            selected={(v) => setformdata({ ...formdata, pl: v })}
            value={formdata.pl}
            refvalue={refdata ? refdata.pl_id : ""}
          />
        </Stack>
      </Stack>
      {formdata.invoice && formdata.si && formdata.pl && (
        <Stack spacing={2}>
          <NewPEBForm formdata={formdata} />
          <NewPEBForm2 formdata={formdata} refdata={refdata} />
        </Stack>
      )}
      {auth.user.role.includes("fasilitator") && (
        <Approval model="MD_peb" id={refdata.id} callback_url="/exportir/peb" />
      )}
    </Stack>
  );
}
function NewPEBForm({ formdata }) {
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
        <Stack direction={"row"} spacing={2} justifyContent="space-between">
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
            <RenderFixed t="nama" v={formdata.invoice.to.name} w={60} />
            <RenderFixed t="nama" v={formdata.invoice.to.address} w={60} />
          </Stack>
          <Stack>
            <RenderFixed t="PENERIMA" B />
            <RenderFixed t="Identitas" v={"01.234.567.8-910.111"} w={60} />
            <RenderFixed t="nama" v={formdata.invoice.from.name} w={60} />
            <RenderFixed t="alamat" v={formdata.invoice.from.address} w={60} />
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
            <RenderFixed t="nama" v={formdata.invoice.to.name} w={60} />
            <RenderFixed t="nama" v={formdata.invoice.to.address} w={60} />
          </Stack>
        </Stack>
        <Divider />

        <Stack direction={"row"} spacing={2} justifyContent="space-between">
          <Stack>
            <RenderFixed t="DATA PENGANGKUTAN" B />
            <RenderFixed t="17.	Cara Pengangkutan" v={"laut"} />
            <RenderFixed
              t="18.	Nama & Bendera Sarana Pengangkut"
              v={formdata.si.shipper}
            />
            <RenderFixed
              t="19.	No.Pengangkut (Voy/ Flight/Nopol)"
              v={formdata.si.docref}
            />
            <RenderFixed t="20.	Tanggal Perkiraan Ekspor" v={formdata.si.date} />
          </Stack>
          <Stack>
            <RenderFixed t="DATA PELABUHAN/TEMPAT MUAT EKSPOR" B />
            <RenderFixed t="21.	Pel. Muat Asal" v={"IDTPP	Tanjung Priok"} />
            <RenderFixed
              t="22.	Pel./Tempat Muat Ekspor"
              v={"IDTPP	Tanjung Priok"}
            />
            <RenderFixed t="23.	Tmpt. Penimbunan" v={"-"} />
            <RenderFixed t="24.	Pel. Bongkar" v={formdata.si.pol} />
            <RenderFixed t="25.Pel. Tujuan" v={formdata.si.pol} />
            <RenderFixed t="26. Negara Tujuan Ekspor" v={formdata.si.pol} />
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
            <RenderFixed t="33.	Bank Devisa Hasil Ekspor" v={"123 – BANKDEV"} />
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
            <RenderFixed
              t="39.	Jumlah Peti Kemas"
              v={"1 x 20 feet; 0 x 40 feet"}
            />
            <RenderFixed t="40.	Nomor,Ukuran " v={"GAOU-2095201 "} />
            <RenderFixed t="Status peti Kemas " v={"FCL "} />
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

function NewPEBForm2({ formdata, refdata }) {
  const { auth } = useContext(Context);
  const [formdisabled, setformdisabled] = useState(refdata ? true : false);

  const [payload, setpayload] = useState(
    refdata
      ? {
          product_list: refdata.product_list,
        }
      : {
          invoice_id: formdata.invoice.id,
          pl_id: formdata.pl.id,
          si_id: formdata.si.id,
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
