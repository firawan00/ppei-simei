import React, { useState, useEffect } from "react";
import { TextField, MenuItem, Stack, Typography, Button } from "@mui/material";
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

  if (!data.length)
    return <Typography color={"error"}>Anda belum membuat invoice</Typography>;
  return (
    <Stack direction={"row"}>
      <TextField
        id="outlined-select-currency"
        select
        label="Select"
        value={props.value || ""}
        fullWidth
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
      {props.refvalue && props.withview && (
        <Stack width={"120px"}>
          <Button
            variant="text"
            LinkComponent={"a"}
            href={`/exportir/invoice/${props.refvalue}`}
            rel="noopener noreferrer"
            target="_blank"
          >
            View
          </Button>
        </Stack>
      )}
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
          ? `md_shippinginstruction`
          : `md_shippinginstruction?from=${auth.user.id}`,
      })
    );
  }
  if (!data.length)
    return (
      <Typography color={"error"}>
        Anda belum membuat shipping instruction
      </Typography>
    );

  return (
    <Stack direction={"row"}>
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
            {`#${d.docref} - to ${d.to.name}`}
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
          ? `md_packinglist`
          : `md_packinglist?from=${auth.user.id}`,
      })
    );
  }
  if (!data.length)
    return (
      <Typography color={"error"}>Anda belum membuat Packing List</Typography>
    );

  return (
    <Stack direction={"row"}>
      <TextField
        id="outlined-select-currency"
        select
        label="Select"
        fullWidth
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
      {props.refvalue && props.withview && (
        <Stack width={"120px"}>
          <Button
            variant="text"
            LinkComponent={"a"}
            href={`/exportir/packinglist/${props.refvalue}`}
            rel="noopener noreferrer"
            target="_blank"
          >
            View
          </Button>
        </Stack>
      )}
    </Stack>
  );
}

export function RBillOfLading(props) {
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
          ? `md_billoflading`
          : `md_billoflading?to=${auth.user.id}`,
      })
    );
  }
  if (!data.length)
    return (
      <Typography color={"error"}>
        Anda belum memiliki Bill of Lading
      </Typography>
    );

  return (
    <Stack direction={"row"}>
      <TextField
        id="outlined-select-currency"
        select
        label="Select"
        fullWidth
        value={props.value || ""}
        onChange={(e) => props.selected(e.target.value)}
        helperText="Please select your Bill of Lading reference"
        disabled={props.refvalue ? true : false}
      >
        {data.map((d) => (
          <MenuItem key={d.id} value={d}>
            {`#${d.data.blno} - to ${d.to.name}`}
          </MenuItem>
        ))}
      </TextField>
      {props.refvalue && props.withview && (
        <Stack width={"120px"}>
          <Button
            variant="text"
            LinkComponent={"a"}
            href={`/exportir/billoflanding/${props.refvalue}`}
            rel="noopener noreferrer"
            target="_blank"
          >
            View
          </Button>
        </Stack>
      )}
    </Stack>
  );
}

export function RNPE(props) {
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
          ? `md_npe`
          : `md_npe?to=${auth.user.id}`,
      })
    );
  }
  if (!data.length)
    return <Typography color={"error"}>Anda belum memiliki NPE</Typography>;

  return (
    <Stack direction={"row"}>
      <TextField
        id="outlined-select-currency"
        select
        label="Select"
        value={props.value || ""}
        fullWidth
        onChange={(e) => props.selected(e.target.value)}
        helperText="Please select your NPE List reference"
        disabled={props.refvalue ? true : false}
      >
        {data.map((d) => (
          <MenuItem key={d.id} value={d}>
            {`NPE - to ${d.to.name}`}
          </MenuItem>
        ))}
      </TextField>
      {props.refvalue && props.withview && (
        <Stack width={"120px"}>
          <Button
            variant="text"
            LinkComponent={"a"}
            href={`/exportir/npe/${props.refvalue}`}
            rel="noopener noreferrer"
            target="_blank"
          >
            View
          </Button>
        </Stack>
      )}
    </Stack>
  );
}

export function RSKAA(props) {
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
          ? `md_ska_a`
          : `md_ska_a?from=${auth.user.id}`,
      })
    );
  }
  if (!data.length) return <Typography color={"error"}></Typography>;

  return (
    <Stack direction={"row"}>
      <TextField
        id="outlined-select-currency"
        select
        label="Select"
        value={props.value || ""}
        fullWidth
        onChange={(e) => props.selected(e.target.value)}
        helperText="Please select your SKA-A List reference"
        disabled={props.refvalue ? true : false}
      >
        {data.map((d) => (
          <MenuItem key={d.id} value={d}>
            {`SKA - to ${d.to.name}`}
          </MenuItem>
        ))}
      </TextField>
      {props.refvalue && props.withview && (
        <Stack width={"120px"}>
          <Button
            variant="text"
            LinkComponent={"a"}
            href={`/exportir/ska-a/${props.refvalue}`}
            rel="noopener noreferrer"
            target="_blank"
          >
            View
          </Button>
        </Stack>
      )}
    </Stack>
  );
}

export function RSKAD(props) {
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
          ? `md_ska_d`
          : `md_ska_d?from=${auth.user.id}`,
      })
    );
  }
  if (!data.length) return <Typography color={"error"}></Typography>;

  return (
    <Stack direction={"row"}>
      <TextField
        id="outlined-select-currency"
        select
        label="Select"
        value={props.value || ""}
        fullWidth
        onChange={(e) => props.selected(e.target.value)}
        helperText="Please select your SKA-A List reference"
        disabled={props.refvalue ? true : false}
      >
        {data.map((d) => (
          <MenuItem key={d.id} value={d}>
            {`SKA - to ${d.to.name}`}
          </MenuItem>
        ))}
      </TextField>
      {props.refvalue && props.withview && (
        <Stack width={"120px"}>
          <Button
            variant="text"
            LinkComponent={"a"}
            href={`/exportir/ska-a/${props.refvalue}`}
            rel="noopener noreferrer"
            target="_blank"
          >
            View
          </Button>
        </Stack>
      )}
    </Stack>
  );
}
