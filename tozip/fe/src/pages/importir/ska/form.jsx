import React, { useState } from "react";

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
import InputInline from "@component/gip-useForm/inputInline";
import Input from "@component/gip-useForm/smallTextfield";
import { fdate } from "@/component/helper/formating";
import SenttoExportir from "@/component/apps/sentto";

export default function App({ refdata }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Stack spacing={3}>
      <PaperA4>
        <P1 />
      </PaperA4>
      <PaperA4 noback>
        <P2 />
      </PaperA4>
      <PaperA4 noback>
        <P3 />
      </PaperA4>
      <SenttoExportir />
    </Stack>
  );
}

const validationSchema = yup.object({
  name: yup.string("Enter your email").required("This Field Required "),
  type: yup.string("Enter your password").required("Password is required"),
});

function P1(params) {
  const { auth } = React.useContext(context);

  const formik = useFormik({
    initialValues: {
      name: auth.user.name || "",
      type: "foobar@example.com",
    },
    validationSchema: validationSchema,
    onSubmit: async (payload) => {
      console.log({
        fileName: payload.file.name,
        type: payload.file.type,
        size: `${payload.file.size} bytes`,
      });

      let res = await fetcherMultipart({
        url: "ska",
        method: "post",
        data: payload,
      });
    },
  });

  return (
    <Stack spacing={1} component="form" onSubmit={formik.handleSubmit}>
      <Typography variant="subtitle" color="" align="center">
        LAMPIRAN IVa PERATURAN DIREKTUR JENDERAL PERDAGANGAN LUAR NEGERI NOMOR :
        09/DAGLU/PFR/10/2007
      </Typography>
      <Divider />
      <Typography variant="subtitle1" color="initial" align="center">
        ” PERNYATAAN PEMOHON SKA FORM A”
      </Typography>

      <Stack direction={"row"} justifyContent="space-between" spacing={2}>
        <Stack>
          <InputInline lb="nama & alamat Pemohon" var="caption" lbw={180} />
          <InputInline lb="Kantor " var="caption" lbw={180} />
          <InputInline lb="Pabrik " var="caption" lbw={180} />
          <InputInline lb="No. Tel : " var="caption" lbw={180} />
          <InputInline lb="No. Fax : " var="caption" lbw={180} />
        </Stack>
        <Stack>
          <InputInline lb="Nomor" var="caption" lbw={180} />
          <InputInline lb="Jumlah Lampiran" var="caption" lbw={180} />
          <InputInline lb="Kepada" var="caption" lbw={180} />
          <InputInline lb="Ijin Industri No." var="caption" lbw={180} />
          <InputInline lb="TDP No. " var="caption" lbw={180} />
        </Stack>
      </Stack>
      <Typography variant="caption" color="initial">
        Sebagai ( ) produsen-eksportir ( ) eksportir, kami memohon SKA Form A
        Terlampir yang disertai dengan dokumenpendukung ( ) PEB ( ) B/L Airway
        Bill ( ) Lain-lain.
        <br />
        <br />
        <span className="f-ul"> Pernyataan Produsen-Eksportir.</span>
        <br />
        Dengan ini kami menyatakan bahwa produk ekspor yang dinyatakan dalam SKA
        Form A memenuhi syarat untuk memperoleh perlakuan tarif preferensi
        berdasarkan Ketentuan Asal Barang GSP.......................... (nama
        negara pemberi Preferensi)
        <br />
        <br />
        <span className="f-ul"> Selanjutnya Kami menyatakan :</span>
        <br />
        1. Barang kami telah memenuhi persyaratan produk ekspor yang dinyatakan
        dalam SKA Form A terlampir berdasarkan atas : (a) Struktur biaya yang
        kami buat dalam formulir yang ditetapkan oleh Departemen Perdagangan
        melalui Peraturan Menteri Perdagangan No....................... (b)
        Ketentuan Asal Barang GSP negara..................(nama negara pemberi
        preferensi).
        <br />
        <br />
        2. Bahwa kami akan mengubah struktur biaya apabila ada
        perubahan-perubahan dalam biaya impor. Atas perubahan tersebut, kami
        akan menilai kembali pemenuhan persyaratan produk kami untuk perlakuan
        GSP berdasarkan Ketentuan Asal Barang GSP yang berlaku.
        <br />
        <br />
        3. Bahwa kami akan menyimpan semua dokumen termasuk struktur biaya dan
        dokumen pendukung yang membuktikan kebenaran atas pemenuhan Ketentuan
        Asal Barang GSP selama 3 tahun dan dalam keadaan siap sedia untuk
        diperiksa oleh pejabat penerbit SKA dalam waktu lima hari sejak
        dimintakan untuk diperiksa.
        <br />
        <br />
        4. Bahwa kami menyadari akibat dari kegagalan memenuhi Ketentuan Asal
        Barang GSP baik karena kelalaian maupun karena kekurangan-fahaman atas
        Ketentuan Asak Barang GSP, pejabat penerbit SKA akan menarik semua SKA
        Form A yang telah diterbitkan selama 3 tahun terakhir. Selanjutnya kami
        bersedia menerima sanksi yang ditetapkan oleh Pemerintah sebagai akibat
        kegagalan tersebut.
        <br />
        <br />
        <span className="f-ul"> Pernyataan Pedagang-Eksportir.</span>
        <br />
        Sebagai eksportir produk yang dinyatakan dalam SKA Form A, dengan ini
        kami menyatakan bahwa kami telah memberitahukan produsen-pemasok produk
        tersebut tentang keperluan dan persyaratan yang dinyatakan pada butir
        1-4 diatas dan telah meminta mereka untuk menjamin bahwa produk ekspor
        tersebut memenuhi Ketentuan Asal Barang GSP negara donor pemberi
        fasilitas GSP. Setelah kami yakin, dengan ini kami melengkapi dengan
        suatu pernyataan dari Pemasok sebagaimana yang di tetapkan pada formulir
        (terlampir) yang menyatakan bahwa produk yang disebutkan dalam SKA Form
        A sepenuhnya memenuhi Ketentuan Asal Barang GSP
        Negara.................................. (nama negara pemberi
        preferensi).
      </Typography>
      <Stack direction={"row"} justifyContent="space-between">
        <Stack>
          <InputInline lb="Nama Pemohon" var="caption" lbw={180} />
          <InputInline lb="TDP No." var="caption" lbw={180} />
          <InputInline lb="Tanggal / Tempat" var="caption" lbw={180} />
        </Stack>
        <Stack className="center">Tanda tangan (meterai Cukup)</Stack>
      </Stack>
    </Stack>
  );
}

function P2(params) {
  const { auth } = React.useContext(context);

  const formik = useFormik({
    initialValues: {
      name: auth.user.name || "",
      type: "foobar@example.com",
    },
    validationSchema: validationSchema,
    onSubmit: async (payload) => {
      console.log({
        fileName: payload.file.name,
        type: payload.file.type,
        size: `${payload.file.size} bytes`,
      });

      let res = await fetcherMultipart({
        url: "ska",
        method: "post",
        data: payload,
      });
    },
  });

  return (
    <Stack spacing={1} component="form" onSubmit={formik.handleSubmit}>
      <Typography variant="subtitle" color="" align="center">
        LAMPIRAN IVa PERATURAN DIREKTUR JENDERAL PERDAGANGAN LUAR NEGERI NOMOR :
        09/DAGLU/PFR/10/2007
      </Typography>
      <Divider />
      <Typography variant="subtitle1" color="initial" align="center">
        ”FORMAT STRUKTUR BIAYA PER UNIT” (Dalam US. $)
      </Typography>

      <Typography variant="body1" color="initial">
        NAMA BARANG/NO.POS H.S DI EKSPOR KE :
      </Typography>

      <InputInline
        dcol
        lb=" A. BAHAN/KOMPONEN YANG DIIMPOR ATAU YANG TIDAK DIKETAHUI ASALNYA"
      />
      <InputInline
        lb="No. URAIAN BARANG / NEGARA ASAL NILAI % POS TARIF HS"
        dcol
      />
      <InputInline lb="JUMLAH A" lbw={500} />

      <InputInline dcol lb="B.	BAHAN/KOMPONEN YANG BERASAL DARI ASEAN" />
      <InputInline
        lb="No. URAIAN BARANG / NEGARA ASAL NILAI % POS TARIF HS"
        dcol
      />
      <InputInline lb="JUMLAH B" lbw={500} />

      <InputInline dcol lb="C.	BAHAN / KOMPONEN YANG BERASAL DARI INDONESIA" />
      <InputInline
        lb="No. URAIAN BARANG / NAMA PEMASOK VALUE % POS TARIF HS"
        dcol
      />
      <InputInline lb="JUMLAH C" lbw={500} />

      <InputInline
        dcol
        lb="D.	BIAYA PRODUKSI LANGSUNG (BURUH & BIAYA LANGSUNG LAINNYA)"
      />
      <InputInline lb="BIAYA PRODUKSI" lbw={500} />

      <InputInline dcol lb="E.	KEUNTUNGAN" />
      <InputInline lb="EX HARGA PABRIK" lbw={500} />

      <InputInline dcol lb="F.	BIAYA PENGANGKUTAN BARANG SAMPAI KE KAPAL" />
      <InputInline lb="HARGA SAMPAI KE KAPAL (FOB)" lbw={500} />

      <Typography variant="body1" color="initial" align="right">
        <br />
        <br />
        {fdate.format(fdate.today)}
        <br />
        TANDA TANGAN
        <br />
        <br />
        <br />
        NAMA JELAS
      </Typography>
    </Stack>
  );
}

function P3(params) {
  const { auth } = React.useContext(context);

  const formik = useFormik({
    initialValues: {
      name: auth.user.name || "",
      type: "foobar@example.com",
    },
    validationSchema: validationSchema,
    onSubmit: async (payload) => {
      console.log({
        fileName: payload.file.name,
        type: payload.file.type,
        size: `${payload.file.size} bytes`,
      });

      let res = await fetcherMultipart({
        url: "ska",
        method: "post",
        data: payload,
      });
    },
  });

  return (
    <Stack component="form" onSubmit={formik.handleSubmit}>
      <Typography variant="subtitle" color="" align="center">
        CERTIFICATE OF ORIGIN
      </Typography>
      <Divider />

      <Stack direction={"row"}>
        <Stack width={"50%"}>
          <InputInline
            dcol
            lb="1.	Goods consigned from (exporters business name, address, country)"
          />
          <InputInline
            dcol
            lb="2.	Goods consigned to (consigned’s name, address, country)"
          />
        </Stack>
        <Stack width={"50%"} spacing={2} className="center" p={2}>
          <InputInline lb="Reference No :" />
          <Typography variant="body1" color="initial" align="center">
            A GENERALIZED SYSTEM OF PREFERENCES CERTIFICATE OF ORIGIN (Combined
            declaration and certificate) FORM A Issued in Indonesia. (Country)
          </Typography>
          <Typography
            variant="caption"
            color="initial"
            align="right"
            width={"100%"}
          >
            Sea notes overleaf
          </Typography>
        </Stack>
      </Stack>
      <Stack direction={"row"} spacing={3}>
        <Stack width={"50%"}>
          <InputInline
            dcol
            lb="3.   Means of Transport and route (as far known)"
          />
        </Stack>
        <Stack width={"50%"}>
          <InputInline dcol lb="4.  For  official use" />
        </Stack>
      </Stack>

      <Stack direction={"row"} spacing={1} pt={5}>
        <InputInline dcol multiline rows={5} lb="5. Item number" />
        <InputInline
          dcol
          multiline
          rows={5}
          lb="6. Marks and number of packages"
        />
        <InputInline
          dcol
          multiline
          rows={5}
          lb="7. Number and kind of packages, description of goods"
        />
        <InputInline
          dcol
          multiline
          rows={5}
          lb="8. Origin criterion (see notes overleaf)"
        />
        <InputInline
          dcol
          multiline
          rows={5}
          lb="9. Gross weight or other quantity"
        />
        <InputInline
          dcol
          lb="10. Number and date of invoice"
          multiline
          rows={5}
        />
      </Stack>

      <Stack direction={"row"} spacing={3} pt={5}>
        <Stack width={"50%"}>
          <Typography variant="body1" color="initial">
            11. Certification
          </Typography>
          <Typography variant="caption" color="initial">
            <br />
            <br />
            It is hereby certified, on the basis of control carried out, that
            the declaration by the exporter is correct\
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <Divider />
            Place and date, signatures and stamp of certifying authority
          </Typography>
        </Stack>
        <Stack width={"50%"}>
          <Typography variant="body1" color="initial">
            12.Declaration by the exporter
          </Typography>
          <Typography variant="caption" color="initial">
            <br />
            <br />
            The undersigned hereby declare that the above details and statements
            are correct : that all the goods were
            <br />
            <br />
            Produced in Indonesia
            <br />
            <br />
            And that they comply with the origin requirements specified for
            those goods in the generalized system of preferences for goods
            exported to
            <br />
            <br />
            <br />
            Jakarta,{fdate.format(fdate.today)}
            <Divider />
            Place and date, signatures and stamp of certifying authority
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}
