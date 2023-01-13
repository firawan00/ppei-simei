import React, { useState, useEffect } from "react";

import { Box, Stack, Divider, Typography, Button } from "@mui/material";
import { fetcher } from "@component/gip-useForm/fetcher";
import { Link, useNavigate } from "react-router-dom";
import { fdate } from "@/component/helper/formating";

export default function App(props) {
  const [data, setdata] = useState([]);
  const nav = useNavigate();

  const field = [
    { data: "from", label: "From", w: "20%" },
    { data: "from", label: "Message", w: "35%" },
    { data: "ref", label: "ref", w: "15%" },
    { data: "updated_at", label: "Time", w: "15%" },
    { data: "from", label: "Action", w: "5%" },
  ];

  useEffect(() => {
    async function fetchData() {
      let res = await fetcher({
        url: `inbox/to`,
        method: "get",
      });
      setdata(res);
    }
    fetchData();
  }, []);

  async function doRead(id, link) {
    await fetcher({
      url: `inbox/read?id=${id}`,
      method: "post",
      data: {
        id: id,
      },
    });
    nav(link, true);
  }

  return (
    <Stack spacing={2}>
      <Typography variant="h4" className="f-uppercase f-bold" color="primary">
        INBOX
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
          <Stack
            key={d.id}
            direction="row"
            fontWeight={d.hasread ? "" : "bold"}
          >
            <Stack width={field[0].w}>{d.from.name}</Stack>
            <Stack width={field[1].w}>{d.title}</Stack>
            <Stack width={field[2].w}>{d.ref_id}</Stack>
            <Stack width={field[3].w}>{fdate.format_time(d.updated_at)}</Stack>
            <Stack width={field[4].w}>
              <Button variant="text" onClick={() => doRead(d.id, d.link)}>
                view
              </Button>
            </Stack>
          </Stack>
        ))}
    </Stack>
  );
}
