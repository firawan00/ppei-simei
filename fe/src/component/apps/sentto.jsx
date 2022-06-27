import React, { useState, useEffect } from "react";

import {
  Stack,
  Typography,
  Divider,
  TextField,
  MenuItem,
  Button,
} from "@mui/material";
import { fetcher } from "@component/gip-useForm/fetcher";

export default function App(props) {
  const [data, setdata] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let res = await fetcher({
        url: `users`,
        method: "get",
      });
      setdata(res);
    }
    fetchData();
  }, []);
  console.log(data);

  return (
    <Stack alignItems={"center"} mt={3}>
      <Stack width={"210mm"} spacing={2}>
        {data.length && (
          <TextField select label="Sent To" {...props}>
            {data.map((d) => (
              <MenuItem key={d.id} value={d.id}>
                {d.name}
              </MenuItem>
            ))}
          </TextField>
        )}
        <Button fullWidth>Submit</Button>

        <Button fullWidth variant="text">
          Print this document
        </Button>
      </Stack>
    </Stack>
  );
}
