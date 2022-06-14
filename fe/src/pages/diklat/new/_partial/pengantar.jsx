import { Stack, Typography, Button } from "@mui/material";

export default function App({ next }) {
  return (
    <Stack spacing={3}>
      <Typography variant="h6" color="" align="center" fontWeight={"bold"}>
        PENGISIAN DATA PENGEMBANGAN SDM DI LINGKUNGAN BAKAMLA RI
      </Typography>
      <Typography variant="p" color="initial">
        Yth. Bapak/Ibu di tempat LANGKAH PENGISIAN:
      </Typography>
      <Stack spacing={1}>
        <Typography variant="p" color="initial">
          1. Mohon telah membaca Surat Edaran Sekretaris Jenderal Nomor
          56128/MPK.A/KP/2020 tanggal 6 Juli 2020.
        </Typography>
        <Typography variant="p" color="initial">
          2. Mohon untuk memperhatikan keterangan pengisian pada tiap field
          pengisian.
        </Typography>
        <Typography variant="p" color="initial">
          3. Apabila formulir tidak dapat terkirim, mohon untuk perhatikan field
          dengan tanda bintang(*).
        </Typography>
      </Stack>
      <Typography variant="p" color="initial">
        Mohon dengan sangat kepada Bapak/Ibu untuk dapat mengisi data
        pengembangan pegawai sesuai dengan analisis GAP kompetensi dan kebutuhan
        pengembangan pegawai sesuai dengan jabatan yang diampu/diinput pada form
        ini.
      </Typography>
      <Stack spacing={1}>
        <Typography variant="p" color="initial">
          *GAP/kesenjangan Kompetensi = Standar Kompetensi Jabatan - Kompetensi
          existing yang dimiliki personel
        </Typography>
        <Typography variant="p" color="initial">
          *apabila standar kompetensi jabatan belum tersedia dimohon untuk
          menentukan standar kompetensi terlebih dahulu dengan pendekatan
          sederhana yaitu berdasarkan intuisi dan ulasan pimpinan untuk
          menentukan kompetensi yang dibutuhkan bawahannya dengan
          mempertimbangkan uraian tugas dan hasil/capaian yang diharapkan.
        </Typography>
        <Typography variant="p" color="initial">
          * Kebutuhan pengembangan kompetensi harus memenuhi minimal 20 JP per
          tahun bagi setiap personel (Dasar UU no 5 Tahun 2014 tentang ASN dan
          PP Nomor 11 Tahun 2017 tentang Manajemen PNS)
        </Typography>
      </Stack>
      <Typography variant="p" color="initial">
        Atas perhatian dan kerjasama bapak/ibu kami ucapkan terimakasih.
      </Typography>
      <Typography variant="p" color="initial">
        SALAM HORMAT BAGIAN KEPEGAWAIAN BAKAMLA RI
      </Typography>
      <Button onClick={next}>Lanjutkan</Button>
    </Stack>
  );
}
