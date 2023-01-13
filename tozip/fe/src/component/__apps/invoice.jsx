import React, { useState } from "react";

import { Stack, Typography, Divider, TextField } from "@mui/material";
import PaperA4 from "@component/paperA4";
import { logo } from "@ui/logo";
import Circle from "@ui/circle";
import { fdate } from "@component/helper/formating";
import InputInline from "@component/gip-useForm/inputInline";
import Table from "./partial/table";

export default function App(props) {
  const [data, setdata] = useState([
    {
      Mark: "",
      desc: "",
      qty: 0,
      up: 0,
    },
  ]);
  const header = [
    "Mark",
    "Description",
    "Quantity",
    "Unit price",
    "Total Amount",
  ];

  return (
    <PaperA4>
      <Stack spacing={3}>
        <Header />
        <Divider />
        <Typography variant="h6" align="center" color="initial">
          INVOICE
        </Typography>
        <Stack direction={"row"} justifyContent="space-between">
          <Stack spacing={1}>
            <InputInline lb={"No"} />
          </Stack>
          <Stack>
            <Typography color="initial">
              Jakata, {fdate.format(fdate.today)}
            </Typography>
          </Stack>
        </Stack>
        <Stack>
          <Stack direction={"row"} justifyContent="space-between">
            <InputInline lb={"From"} />
            <InputInline lb={"To"} />
          </Stack>
          <Stack direction={"row"} justifyContent="space-between">
            <InputInline lb={"L/C No."} />
            <InputInline lb={"Issuing Bank"} />
          </Stack>
          <InputInline lb={"Date"} />
        </Stack>
        <Stack>
          Dear Sir/Madam, Regarding to your inquiry no…. dated…., herewith we
          would like to submit our offers are as follows:
        </Stack>
        <Table header={header} data={data} />
        <Stack>
          <InputInline lb={"Shipping Marks"} lbw={180} />
        </Stack>
        <Stack>
          Faithfully Yours.
          <br />
          <br />
          <br />
          <br />
          Export Manager
        </Stack>
      </Stack>
    </PaperA4>
  );
}

function Header(params) {
  return (
    <Stack direction={"row"} className="center" spacing={2}>
      <Stack width={96} height={96} p={1}>
        <img src={logo.e1} alt="" className="img-contain" />
      </Stack>
      <Stack>
        <Typography variant="h6" color="initial">
          PT. BAYU SEGARA
        </Typography>

        <Typography variant="subtitle1" color="initial">
          JL. TAMAN ANGGREK NO. 14
        </Typography>

        <Typography variant="subtitle1" color="initial">
          Phone 62-21-5664425, Fax. 62-21-5664430
        </Typography>
      </Stack>
    </Stack>
  );
}
