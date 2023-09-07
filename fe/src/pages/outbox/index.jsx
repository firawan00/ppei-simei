import React, { useState, useEffect } from "react";

import { Box, Stack, Divider, Typography, Button } from "@mui/material";
import { fetcher } from "@component/gip-useForm/fetcher";
import { Link } from "react-router-dom";
import { fdate } from "@/component/helper/formating";

export default function App(props) {
  const [data, setdata] = useState([]);
  const [showAll, setshowAll] = useState(false);

  const field = [
    { data: "to", label: "To", w: "20%" },
    { data: "msg", label: "Message", w: "35%" },
    { data: "ref", label: "ref", w: "15%" },
    { data: "updated_at", label: "Time", w: "15%" },
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

  function mailFilter(d) {
    if (showAll) return true;
    var today = new Date().setHours(0, 0, 0, 0);
    let refdate = new Date(d.updated_at).setHours(0, 0, 0, 0);
    return refdate >= today;
  }

  return (
    <Stack spacing={2}>
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Typography variant="h4" className="f-uppercase f-bold" color="primary">
          Outbox
        </Typography>
        <Button variant="outlined" onClick={() => setshowAll(!showAll)}>
          {!showAll ? "All " : "Today"}
        </Button>
      </Stack>

      <Stack>
        <Divider />
        <Stack direction="row" my={1}>
          {field.map((d, ix) => (
            <Typography key={d.label} width={d.w} variant="subtitle1" className="f-uppercase f-bold" color="primary">
              {d.label}
            </Typography>
          ))}
        </Stack>
        <Divider />
      </Stack>
      {data.length > 0 &&
        data.filter(mailFilter).map((d) => (
          <Stack key={d.id} direction="row">
            {/* <Stack width={field[0].w}>{d.from.name}</Stack> */}
            <Stack width={field[0].w}>{d.to.name}</Stack>
            <Stack width={field[1].w}>{d.title}</Stack>
            <Stack width={field[2].w}>{d.ref_id}</Stack>

            <Stack width={field[3].w}>{fdate.format_time(d.updated_at)}</Stack>
            <Stack width={field[4].w}>
              <Link to={d.link}>view</Link>
            </Stack>
          </Stack>
        ))}
    </Stack>
  );
}
