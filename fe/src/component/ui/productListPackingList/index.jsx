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
    w: "30%",
  },

  {
    name: "qty",
    w: "10%",
  },
  {
    name: "UNIT",
    w: "10%",
  },

  {
    name: "GROSS WEIGHT (KG)",
    w: "15%",
  },

  {
    name: "NETT. WEIGHT (KG)",
    w: "15%",
  },
  {
    name: "MEASUREMENT (M³)",
    w: "10%",
  },
];
const blank = {
  name: "item name",
  qty: 1,
  carton: 1,

  unit: "pcs",
  unitprice: 10000,
};

export default function BasicTable({ initvalue, onChange, refitem, disabled }) {
  const [data, setdata] = useState(initvalue || refitem);
  function handleChange(value, field, ix) {
    let temp = data;
    temp[ix][field] = value;
    setdata([...temp]);
  }

  React.useEffect(() => {
    setdata(refitem);
  }, [refitem]);

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

  React.useEffect(() => {
    onChange(data);
  }, [data]);

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
            {/* <ClearIcon
              fontSize="8px"
              sx={{
                marginRight: 1,
                ":hover": {
                  color: "error.main",
                },
              }}
              onClick={() => handleDelete(ix)}
            /> */}
            <TextField
              value={d.name}
              sx={inputStyle}
              onChange={(e) => handleChange(e.target.value, "name", ix)}
              disabled
            />
          </Stack>
          <Stack width={meta[1].w}>
            <TextField
              value={d.qty}
              type="tel"
              sx={inputStyle}
              onChange={(e) => handleChange(e.target.value, "qty", ix)}
              disabled={disabled}
            />
          </Stack>
          <Stack width={meta[2].w}>
            <TextField
              type="text"
              value={d.unit}
              sx={inputStyle}
              onChange={(e) => handleChange(e.target.value, "unit", ix)}
              disabled={disabled}
            />
          </Stack>
          <Stack width={meta[3].w}>
            <TextField
              type="number"
              value={d.gweight || ""}
              sx={inputStyle}
              onChange={(e) => handleChange(e.target.value, "gweight", ix)}
              disabled={disabled}
            />
          </Stack>

          <Stack width={meta[4].w}>
            <TextField
              type="number"
              value={d.nweight || ""}
              sx={inputStyle}
              onChange={(e) => handleChange(e.target.value, "nweight", ix)}
              disabled={disabled}
            />
          </Stack>
          <Stack width={meta[5].w}>
            <TextField
              type="number"
              value={d.measurement || ""}
              sx={inputStyle}
              onChange={(e) => handleChange(e.target.value, "measurement", ix)}
              disabled={disabled}
            />
          </Stack>
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
          {`${data.reduce((a, b) => a + Number(b.measurement), 0)} (M³)`}
        </Typography>
      </Stack>

      {/* <Button size="small" onClick={handleAdd}>
        Add New Item
      </Button> */}
    </Stack>
  );
}
