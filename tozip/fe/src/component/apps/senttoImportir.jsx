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

  return (
    <Stack alignItems={"center"} mt={3} className="hide_on_print">
      <Stack width={"210mm"} spacing={2}>
        {!props.formdisabled && (
          <>
            {data.length && (
              <TextField
                select
                label="Sent To"
                onChange={props.onChange}
                name={props.name}
                value={props.value}
              >
                {data
                  .filter((d) => d.username.includes(props.filter))
                  .map((d) => (
                    <MenuItem key={d.id} value={d.id}>
                      {d.name}
                    </MenuItem>
                  ))}
              </TextField>
            )}

            <Button type="submit" fullWidth>
              Submit
            </Button>
          </>
        )}
        {props.formdisabled && (
          <>
            <Button fullWidth onClick={props.setEdit}>
              Edit this Document
            </Button>
          </>
        )}
      </Stack>
    </Stack>
  );
}
