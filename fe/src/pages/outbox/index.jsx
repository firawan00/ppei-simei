import React, { useState, useEffect } from "react";

import { Box, Stack, Divider, Typography } from "@mui/material";
import { fetcher } from "@component/gip-useForm/fetcher";
import { Link } from "react-router-dom";

export default function App(props) {
  const [data, setdata] = useState([]);

  const field = [
    { data: "from", label: "From", w: "20%" },
    { data: "to", label: "To", w: "20%" },
    { data: "from", label: "Message", w: "40%" },
    { data: "from", label: "Action", w: "5%" },
  ];

  useEffect(() => {
    async function fetchData() {
      let res = await fetcher({
        url: `inbox/from`,
        method: "get",
      });
      setdata(res);
    }
    fetchData();
  }, []);

  return (
    <Stack spacing={2}>
      <Typography variant="h4" className="f-uppercase f-bold" color="primary">
        Outbox
      </Typography>
      <Stack>
        <Divider />
        <Stack direction="row" my={1}>
          {field.map((d) => (
            <Typography
              key={d.label}
              width={d.w}
              variant="subtitle1"
              className="f-uppercase f-bold"
              color="primary"
            >
              {d.label}
            </Typography>
          ))}
        </Stack>
        <Divider />
      </Stack>
      {data.length > 0 &&
        data.map((d) => (
          <Stack key={d.id} direction="row">
            <Stack width={field[0].w}>{d.from.name}</Stack>
            <Stack width={field[1].w}>{d.to.name}</Stack>
            <Stack width={field[2].w}>{d.title}</Stack>
            <Stack width={field[3].w}>
              <Link to={d.link}>view</Link>
            </Stack>
          </Stack>
        ))}
    </Stack>
  );
}
