import React, { Fragment } from "react";
import Context from "@context";

import { Stack, Button, Chip, Skeleton, Typography, Card } from "@mui/material";
import useForm, { Input, fetcher, fetcherMultipart } from "@/component/useForm";

export default function SelectTag({ setval, asString, max = 3 }) {
  const [option, setoption] = React.useState();
  const [selected, setselected] = React.useState([]);
  const { snackbar } = React.useContext(Context);

  React.useEffect(() => {
    fetching();
  }, []);

  async function fetching() {
    setoption(
      await fetcher({
        method: "get",
        url: `tags`,
      })
    );
  }
  React.useEffect(() => {
    asString && setval(JSON.stringify(selected));
    !asString && setval(selected);
  }, [selected]);

  function handleClick(e) {
    let input = e.target.getAttribute("data-name");
    let temp = selected;

    if (!temp.includes(input)) {
      selected.length >= max
        ? snackbar.setWarning(`max ${max} tag`)
        : temp.push(input);
    } else temp = temp.filter((d) => d != input);

    setselected([...temp]);
  }

  if (!option) return <Input.Loader />;

  return (
    <Stack direction="row" flexWrap="wrap">
      {option.map((d) => (
        <Stack m={0.5} key={d.id}>
          <Button
            key={d.id}
            variant={selected.includes(d.name) ? "contained" : "outlined"}
            data-name={d.name}
            onClick={handleClick}
            size="small"
            sx={{ borderRadius: 4, px: 2 }}
          >
            {d.name}
          </Button>
        </Stack>
      ))}
    </Stack>
  );
}
