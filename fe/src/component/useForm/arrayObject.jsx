import React, { useContext, useEffect, useState } from "react";
import {
  Stack,
  TextField,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import Context from "@/component/context";
import { min } from "./helper";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

export default function App({
  val,
  setval,
  name = "unknown",
  initValue,
  objectarr,
  withNumber,
}) {
  // const { isLoading } = useContext(Context);
  const [results, setresults] = useState(initValue);

  function handleDelete(index) {
    let temp = results;
    temp.splice(index, 1);
    setresults([...temp]);
  }

  function handleAdd() {
    let obj = initValue[0];
    let temp = results;
    temp.push(obj);
    setresults([...temp]);
  }
  // const [state, setstate] = useState({
  //   val: refdata && refdata != null ? refdata[fname] : "",
  //   err: true,
  //   isDiry: false,
  // });

  // useEffect(() => {
  //   setstate({ ...state, isDiry: true });
  // }, [isLoading]);

  // useEffect(() => {
  //   min(state.val, 1)
  //     ? setstate({ ...state, err: "min 6 char" })
  //     : setstate({ ...state, err: false });
  // }, [state.val]);

  // useEffect(() => {
  //   if (!state.err) v({ [fname]: state.val });
  // }, [state]);

  return (
    <Stack>
      <Stack>
        {results.map((d, di) => (
          <Stack key={di} direction={"row"} alignItems="center" spacing={1}>
            <Stack minWidth={24}>
              <IconButton
                size="small"
                color="secondary"
                onClick={() => handleDelete(di)}
              >
                x
              </IconButton>
            </Stack>
            {objectarr.map((dx, dxi) => (
              <Typography key={dxi} variant="" color="initial" width={dx.w}>
                {withNumber && `${di + 1}. `}
                {d[dx.name]}
              </Typography>
            ))}
          </Stack>
        ))}
      </Stack>
      <Button
        size="small"
        variant="outlined"
        startIcon={<AddCircleOutlineIcon />}
        onClick={handleAdd}
      >
        Add More Ingridient
      </Button>
    </Stack>
  );
}
