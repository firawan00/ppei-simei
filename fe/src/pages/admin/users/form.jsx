import React from "react";
import { Stack, Button } from "@mui/material";
import useForm, { Input, fetcher } from "@/component/useForm";
import BackIcon from "@/component/ui/backIcon";
import { meta } from "./_meta";

export default function App({ refdata }) {
  const defval = { role: "", name: "", email: "" };
  const form = useForm(meta.model, refdata ? refdata : defval);

  React.useEffect(() => {
    refdata && form.setpayload(refdata);
  }, []);

  return (
    <Stack
      component={"form"}
      width="100%"
      noValidate
      autoComplete="off"
      onSubmit={form.handleSubmit}
    >
      <BackIcon
        title={refdata ? `${meta.model} Edit` : `${meta.model} Create`}
      />
      {refdata && (
        <Input.Hidden v={form.handleInput} refdata={refdata} fname="id" />
      )}

      <Stack spacing={2}>
        <Input.Text val={form.payload.name} setval={form.setval} name="name" />

        {!refdata && (
          <Input.Pass
            val={form.payload.name}
            setval={form.setval}
            name="name"
          />
        )}

        <Input.Email val={form.payload.email} setval={form.setval} />
        <Input.Role val={form.payload.role} setval={form.setval} />

        <Input.Submit />
      </Stack>
    </Stack>
  );
}

function SelectGroup({ val, setval }) {
  const [option, setoption] = React.useState();

  React.useEffect(() => {
    fetching();
  }, []);

  async function fetching() {
    setoption(
      await fetcher({
        method: "get",
        url: `tagsgroup`,
      })
    );
  }

  if (!option) return <Input.Loader />;

  return (
    <Input.Select
      options={option}
      name="group_id"
      val={val}
      setval={setval}
      newOption
    />
  );
}
