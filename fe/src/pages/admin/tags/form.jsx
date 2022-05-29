import React from "react";
import { Stack, Button } from "@mui/material";
import useForm, { Input, fetcher } from "@/component/useForm";
import BackIcon from "@/component/ui/backIcon";
import { meta } from "./_meta";

export default function App({ refdata }) {
  const defval = { group_id: "", new_group: "", name: "" };
  const form = useForm(meta.model, refdata ? refdata : defval);
  const [newInput, setnewInput] = React.useState(false);

  React.useEffect(() => {
    refdata && form.setpayload(refdata);
  }, []);

  function handleNewInput(params) {
    form.setval({
      target: {
        value: "",
        name: !newInput ? "group_id" : "new_group",
      },
    });
    setnewInput(!newInput);
  }

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
        <Input.Hidden
          val={form.payload.id}
          setval={form.handleInput}
          refdata={refdata}
        />
      )}

      <Stack spacing={2}>
        <Input.Text
          val={form.payload.name}
          setval={form.handleInput}
          name="name"
        />
        <Stack direction={"row"} spacing={2}>
          {!newInput && (
            <SelectGroup
              val={form.payload.group_id || ""}
              setval={form.handleInput}
            />
          )}
          {newInput && (
            <Input.Text
              val={form.payload.new_group}
              setval={form.handleInput}
              name="new_group"
            />
          )}
          <Button
            variant="contained"
            onClick={handleNewInput}
            sx={{ minWidth: 120 }}
          >{`${!newInput ? "new" : "select"} ${meta.model}`}</Button>
        </Stack>

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
