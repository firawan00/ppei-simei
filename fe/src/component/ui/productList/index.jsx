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
  input: {
    py: "2px",
    px: "8px",
    fontSize: "14px",
  },
};

const meta = [
  {
    name: "name",
    w: "35%",
  },

  {
    name: "qty",
    w: "5%",
  },

  {
    name: "unit",
    w: "10%",
  },

  {
    name: "unit price",
    w: "25%",
  },

  {
    name: "total amount",
    w: "25%",
  },
];
const blank = {
  name: "item name",
  qty: 1,
  unit: "pcs",
  unitprice: 10000,
};

export default function BasicTable() {
  const [data, setdata] = useState([
    {
      name: "Frozen yoghurt",
      qty: 10,
      unit: "asdf",
      unitprice: 10000,
    },
    {
      name: "Frozen yoghurt",
      qty: 20,
      unit: "asdf",
      unitprice: 10000,
    },
  ]);

  function handleChange(value, field, ix) {
    let temp = data;
    temp[ix][field] = value;
    setdata([...temp]);
  }

  function handleAdd() {
    let temp = data;
    temp.push(blank);
    setdata([...temp]);
  }
  function handleDelete(ix) {
    let temp = data;
    temp.splice(ix, 1);
    setdata([...temp]);
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
      {data.map((d, ix) => (
        <Stack direction={"row"} spacing={1} key={ix}>
          <Stack width={meta[0].w} direction="row" alignItems={"center"}>
            <ClearIcon
              fontSize="8px"
              sx={{
                marginRight: 1,
                ":hover": {
                  color: "error.main",
                },
              }}
              onClick={() => handleDelete(ix)}
            />
            <TextField
              value={d.name}
              sx={inputStyle}
              onChange={(e) => handleChange(e.target.value, "name", ix)}
            />
          </Stack>
          <Stack width={meta[1].w}>
            <TextField
              value={d.qty}
              sx={inputStyle}
              onChange={(e) => handleChange(e.target.value, "qty", ix)}
            />
          </Stack>
          <Stack width={meta[2].w}>
            <TextField
              value={d.unit}
              sx={inputStyle}
              onChange={(e) => handleChange(e.target.value, "unit", ix)}
            />
          </Stack>
          <Stack width={meta[3].w}>
            <TextField
              value={d.unitprice}
              sx={inputStyle}
              onChange={(e) => handleChange(e.target.value, "unitprice", ix)}
            />
          </Stack>
          <Typography
            width={meta[4].w}
            variant="body2"
            align="right"
            color="initial"
          >
            {fcurr.format2(d.unitprice * d.qty)}
          </Typography>
        </Stack>
      ))}

      <Stack
        justifyContent={"space-between"}
        direction="row"
        width={"100%"}
        pt={1}
        borderTop="1px solid grey"
      >
        <Typography variant="body2" fontWeight={"bold"} color="initial">
          Total
        </Typography>
        <Typography variant="body2" fontWeight={"bold"} color="initial">
          {fcurr.format(data.reduce((a, b) => a + b.qty * b.unitprice, 0))}
        </Typography>
      </Stack>

      <Button size="small" onClick={handleAdd}>
        Add New Item
      </Button>
    </Stack>
  );
}
