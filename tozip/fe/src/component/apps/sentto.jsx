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
      <Stack width={!props.nogrow ? "210mm" : "100%"} spacing={2}>
        {!props.disabled && (
          <>
            {data.length && (
              <TextField
                select
                label="Sent To"
                value={props.value}
                name={props.name}
                onChange={props.onChange}
                disabled={props.disabled}
              >
                {data
                  .filter((d) => d.role == props.filter)
                  .map((d) => (
                    <MenuItem key={d.id} value={d.id}>
                      {d.name}
                    </MenuItem>
                  ))}
              </TextField>
            )}
            <Button
              fullWidth
              type="submit"
              disabled={props.disabled || props.value == ""}
            >
              Submit
            </Button>
          </>
        )}
        {props.disabled && (
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
