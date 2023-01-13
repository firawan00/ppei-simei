import React, { useState } from "react";

import { fcurr } from "@component/helper/formating";
import {
  Stack,
  Button,
  Typography,
  TextField,
  IconButton,
} from "@mui/material";
import AddNewItem from "./addNewItem";
import ClearIcon from "@mui/icons-material/Clear";
const inputStyle = {
  p: 0,
  "& .MuiOutlinedInput-root ": {
    p: 0.2,
  },
  textarea: {
    p: "2px",
    fontSize: "12px",
  },
};

const meta = [
  {
    name: "45. Pos Tarif/HS, uraian jumlah dan jenis barang secara lengkap, merk, tipe,ukuran, spesifikasi lain dan kode barang",
    w: "25%",
  },

  {
    name: "46. Perizinan Ekspor",
    w: "15%",
  },
  {
    name: "47. HE barang dan Tarif BK pada tanggal pendaftaran",
    w: "15%",
  },

  {
    name: "48.Jumlah & jenis sat, Berat Bersih (kg), Volume (m3)",
    w: "15%",
  },

  {
    name: "49.	- Negara Asal Barang 50.	- Daerah Asal Barang",
    w: "15%",
  },
  {
    name: "51. Jumlah Nilai FOB",
    w: "15%",
  },
];

export default function BasicTable({ onChange, disabled, value }) {
  function handleChange(inputvalue, field, ix) {
    let temp = value;
    temp[ix][field] = inputvalue;
    onChange([...temp]);
  }

  function handleAdd() {
    let temp = value;
    temp.push({
      f1: "item name",
    });
    onChange([...temp]);
  }

  function handleDelete(ix) {
    let temp = value;
    temp.splice(ix, 1);
    onChange([...temp]);
  }

  return (
    <Stack spacing={1} my={1}>
      <Stack
        direction={"row"}
        spacing={1}
        borderTop="1px solid grey"
        borderBottom="1px solid grey"
        py={0.5}
      >
        {meta.map((d, ix) => (
          <Typography
            key={ix}
            variant="overline"
            align={ix == 4 ? "right" : "left"}
            width={d.w}
            fontWeight="bold"
          >
            {d.name}
          </Typography>
        ))}
      </Stack>
      {value.map((d, ix) => (
        <Stack direction={"row"} spacing={1} key={ix}>
          <Stack width={meta[0].w} direction="row" alignItems={"center"}>
            <ClearIcon
              fontSize="8px"
              sx={{
                display: disabled & "none",
                marginRight: 1,
                ":hover": {
                  color: "error.main",
                },
              }}
              onClick={() => handleDelete(ix)}
            />
            <TextField
              multiline
              rows={3}
              value={d.f1 || ""}
              sx={inputStyle}
              onChange={(e) => handleChange(e.target.value, "f1", ix)}
              disabled={disabled}
            />
          </Stack>
          <Stack width={meta[1].w}>
            <TextField
              value={d.f2 || ""}
              sx={inputStyle}
              multiline
              rows={3}
              onChange={(e) => handleChange(e.target.value, "f2", ix)}
              disabled={disabled}
            />
          </Stack>
          <Stack width={meta[2].w}>
            <TextField
              multiline
              rows={3}
              value={d.f3 || ""}
              sx={inputStyle}
              onChange={(e) => handleChange(e.target.value, "f3", ix)}
              disabled={disabled}
            />
          </Stack>
          <Stack width={meta[3].w}>
            <TextField
              multiline
              rows={3}
              value={d.f4 || ""}
              sx={inputStyle}
              onChange={(e) => handleChange(e.target.value, "f4", ix)}
              disabled={disabled}
            />
          </Stack>

          <Stack width={meta[4].w}>
            <TextField
              multiline
              rows={3}
              value={d.f5 || ""}
              sx={inputStyle}
              onChange={(e) => handleChange(e.target.value, "f5", ix)}
              disabled={disabled}
            />
          </Stack>
          <Stack width={meta[5].w}>
            <TextField
              multiline
              rows={3}
              value={d.f6 || ""}
              sx={inputStyle}
              onChange={(e) => handleChange(e.target.value, "f6", ix)}
              disabled={disabled}
            />
          </Stack>
        </Stack>
      ))}
      <Stack display={disabled && "none"}>
        <Button size="small" onClick={handleAdd}>
          Add New Item
        </Button>
      </Stack>
    </Stack>
  );
}
