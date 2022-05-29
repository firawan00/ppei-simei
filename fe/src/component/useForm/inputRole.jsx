import React, { useContext, useEffect, useState } from "react";
import { Stack, TextField, Typography, MenuItem } from "@mui/material";
import { dataFind } from "@/component/helper/objectParsing";
import { fetcher } from "@/component/useForm";

export default function App({ val, setval, name = "role" }) {
  const [options, setoptions] = useState([
    { name: "user", val: 0 },
    { name: "admin", val: 1 },
  ]);

  // const [state, setstate] = useState({
  //   val: refdata && refdata != null ? dataFind(refdata, fname) : "",
  //   err: false,
  //   isDiry: false,
  // });

  // useEffect(async () => {
  //   let res = await fetcher({
  //     url: `/api/roles`,
  //     method: "get",
  //   });
  //   setoptions(res);
  // }, []);

  // useEffect(() => {
  //   if (!state.err) v({ [fname]: state.val });
  // }, [state]);

  return (
    <Stack>
      {options && (
        <TextField
          fullWidth
          select
          label={name}
          name={name}
          value={val}
          onChange={setval}
          // error={state.err && state.isDiry}
        >
          {options.map((d) => (
            <MenuItem key={d.val} value={d.val}>
              {d.name}
            </MenuItem>
          ))}
        </TextField>
      )}

      {/* <Typography
        variant="caption"
        color="error"
        pt={0.2}
        pl={2}
        minHeight={20}
      >
        {state.isDiry ? state.err : ""}
      </Typography> */}
    </Stack>
  );
}
