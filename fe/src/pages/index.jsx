import React, { useState, useEffect } from "react";
import Context from "@context";

import { Box, Stack, Divider, Typography } from "@mui/material";
import { fetcher } from "@component/gip-useForm/fetcher";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

// import Context from "@context";
import PostList from "@ui/post";
import FullWidth from "@ui/fullWidth";

const exportItem = [
  { model: "MD_introductionletter", label: "Introduction letter" },
  { model: "MD_offeringletter", label: "offering letter" },
  { model: "MD_lc_release", label: "lc release" },
  { model: "MD_invoice", label: "invoice" },
  { model: "MD_packinglist", label: "packing List" },
  { model: "MD_shippinginstruction", label: " Shipping Instruction" },
  { model: "MD_deliveryorder", label: " Delivery Order" },
  { model: "MD_peb", label: "PEB" },
  { model: "MD_npe", label: "NPE" },
  { model: "MD_billoflading", label: "Bill of Lading" },
  { model: "MD_ska_a", label: "SKA A" },
  { model: "MD_ska_d", label: "SKA D" },
  { model: "MD_wessel", label: "Wessel" },
];

const importItem = [
  { model: "MD_inquiry", label: "Inquiry letter" },
  { model: "MD_lkn", label: "Lembar Kerja Negosiasi" },
  { model: "md_ordering", label: "Ordering letter" },
  { model: "MD_salescontract", label: "Sales Contract" },
  { model: "MD_lc", label: "Permintaan Pembukaan LC" },
];

export default function App(props) {
  const [data, setData] = useState();
  const { auth } = React.useContext(Context);

  useEffect(() => {
    async function fetchData() {
      let res = await fetcher({
        url: `dashboard`,
        method: "post",
      });
      setData(res);
    }
    fetchData();
  }, []);
  return (
    <Stack>
      <Stack width={"100%"} className="center">
        <Typography variant="h4" color="initial">
          WELCOME
        </Typography>
        <Typography variant="h1" color="primary">
          SimEI
        </Typography>
        <Typography variant="overline" color="initial">
          Simulasi Export & Import
        </Typography>
        <Typography variant="body1" color="initial" mt={2}>
          SiMei adalah platform belajar terpadu berbasis elektronik di
          lingkungan Kementerian Perdagangan dengan pembelajaran yang
          menggunakan teknologi komunikasi dan informasi (TIK) untuk mempermudah
          kegiatan simulasi ekspor impor di PPEJP. Namun ini hanya bersifat
          simulasi untuk kepentingan pembelajarn. Sehingga untuk proses ekspor
          impor sebenarnya tidak menggunakan platform ini dan menggunakan
          platform lain dari Instansi yang berwenang.
        </Typography>
      </Stack>
      {data && auth.user.role == "user-export" && (
        <UserExportStatus data={data} />
      )}
      {data && auth.user.role == "user-import" && (
        <UserImportStatus data={data} />
      )}
    </Stack>
  );
}

function UserImportStatus({ data }) {
  const size = 120;
  return (
    <Stack mt={3}>
      <Typography
        variant="h4"
        color="primary"
        align="center"
        className="f-uppercase"
      >
        User Import Progress
      </Typography>
      <Stack direction={"row"} flexWrap={"wrap"}>
        {importItem.map((d) => (
          <Stack mx={4} my={2}>
            <Stack
              width={size}
              height={size}
              border="1px solid"
              borderColor={data[d.model] ? "success.main" : "black"}
              borderRadius={2}
              p={1}
              justifyContent="space-between"
              bgcolor={data[d.model] ? "success.main" : ""}
              color={data[d.model] ? "white.main" : "initial"}
            >
              <Typography
                variant="overline"
                align="center"
                color={data[d.model] ? "white.main" : "initial"}
              >
                {d.label}
              </Typography>
              <Stack className="center" height={64}>
                {data[d.model] && <CheckCircleIcon style={{ fontSize: 28 }} />}
              </Stack>
            </Stack>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
}

function UserExportStatus({ data }) {
  const size = 120;
  return (
    <Stack mt={3}>
      <Typography
        variant="h4"
        color="primary"
        align="center"
        className="f-uppercase"
      >
        User Export Progress
      </Typography>
      <Stack direction={"row"} flexWrap={"wrap"}>
        {exportItem.map((d, ix) => (
          <Stack mx={4} my={2} key={ix}>
            <Stack
              width={size}
              height={size}
              border="1px solid"
              borderColor={data[d.model] ? "success.main" : "black"}
              borderRadius={2}
              p={1}
              justifyContent="space-between"
              bgcolor={data[d.model] ? "success.main" : ""}
              color={data[d.model] ? "white.main" : "initial"}
            >
              <Typography
                variant="overline"
                align="center"
                color={data[d.model] ? "white.main" : "initial"}
              >
                {d.label}
              </Typography>
              <Stack className="center" height={64}>
                {data[d.model] && <CheckCircleIcon style={{ fontSize: 28 }} />}
              </Stack>
            </Stack>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
}
