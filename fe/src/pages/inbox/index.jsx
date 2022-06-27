import React, { useState, useEffect } from "react";

import { Box, Stack } from "@mui/material";
import { fetcher } from "@component/gip-useForm/fetcher";
import { Link } from "react-router-dom";

export default function App(props) {
  const [data, setdata] = useState([]);

  const field = [
    { data: "from", label: "From", w: "10%" },
    { data: "to", label: "To", w: "20%" },
    { data: "from", label: "Message", w: "50%" },
    { data: "from", label: "Action", w: "10%" },
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

  return (
    <Stack>
      <Stack>
        <Stack direction="row">
          {field.map((d) => (
            <Stack key={d.label} width={d.w}>
              {d.label}
            </Stack>
          ))}
        </Stack>
      </Stack>
      {data.length &&
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
