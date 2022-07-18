import React, { useState, useEffect } from "react";
import { TextField, MenuItem, Stack } from "@mui/material";
import { fetcher, useNavigate } from "@component/gip-useForm/fetcher";
import context from "@/component/context";

export function RInvoice(props) {
  const { auth } = React.useContext(context);
  const [data, setdata] = useState([]);

  React.useEffect(() => {
    fetching();
    props.refvalue && props.selected(data.find((d) => d.id == props.refvalue));
  }, []);

  React.useEffect(() => {
    props.refvalue && props.selected(data.find((d) => d.id == props.refvalue));
  }, [data]);

  async function fetching() {
    setdata(
      await fetcher({
        method: "get",
        url: auth.user.role.includes("fasilitator")
          ? `md_invoice`
          : `md_invoice?from=${auth.user.id}`,
      })
    );
  }
  if (!data.length) return "";
  return (
    <Stack>
      <TextField
        id="outlined-select-currency"
        select
        label="Select"
        value={props.value || ""}
        onChange={(e) => props.selected(e.target.value)}
        helperText="Please select your invoice reference"
        disabled={props.refvalue ? true : false}
      >
        {data &&
          data.map((d, ix) => (
            <MenuItem key={d.id} value={d} selected={ix == 0}>
              {`#${d.no} - to ${d.to.name}`}
            </MenuItem>
          ))}
      </TextField>
    </Stack>
  );
}

export function RShippingInstruction(props) {
  const { auth } = React.useContext(context);
  const [data, setdata] = useState([]);

  React.useEffect(() => {
    fetching();
  }, []);

  React.useEffect(() => {
    props.refvalue && props.selected(data.find((d) => d.id == props.refvalue));
  }, [data]);

  async function fetching() {
    setdata(
      await fetcher({
        method: "get",
        url: auth.user.role.includes("fasilitator")
          ? `md_invoice`
          : `md_invoice?from=${auth.user.id}`,
      })
    );
  }
  if (!data.length) return "";

  return (
    <Stack>
      <TextField
        id="outlined-select-currency"
        select
        label="Select"
        value={props.value || ""}
        onChange={(e) => props.selected(e.target.value)}
        helperText="Please select your Shipping Instruction reference"
        disabled={props.refvalue ? true : false}
      >
        {data.map((d) => (
          <MenuItem key={d.id} value={d}>
            {`#${d.no} - to ${d.to.name}`}
          </MenuItem>
        ))}
      </TextField>
    </Stack>
  );
}

export function RPackingList(props) {
  const { auth } = React.useContext(context);
  const [data, setdata] = useState([]);

  React.useEffect(() => {
    fetching();
  }, []);

  React.useEffect(() => {
    props.refvalue && props.selected(data.find((d) => d.id == props.refvalue));
  }, [data]);

  async function fetching() {
    setdata(
      await fetcher({
        method: "get",
        url: auth.user.role.includes("fasilitator")
          ? `md_invoice`
          : `md_invoice?from=${auth.user.id}`,
      })
    );
  }
  if (!data.length) return "";

  return (
    <Stack>
      <TextField
        id="outlined-select-currency"
        select
        label="Select"
        value={props.value || ""}
        onChange={(e) => props.selected(e.target.value)}
        helperText="Please select your Packing List reference"
        disabled={props.refvalue ? true : false}
      >
        {data.map((d) => (
          <MenuItem key={d.id} value={d}>
            {`#${d.no} - to ${d.to.name}`}
          </MenuItem>
        ))}
      </TextField>
    </Stack>
  );
}
