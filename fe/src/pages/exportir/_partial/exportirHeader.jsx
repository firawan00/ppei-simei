import React from "react";
import Context from "@context";

import {
  Stack,
  Typography,
  Divider,
  TextField,
  MenuItem,
  Button,
} from "@mui/material";
import { logo } from "@ui/logo";
import Circle from "@ui/circle";
import { useContext } from "react";

export default function Header({ refdata }) {
  const { auth } = useContext(Context);

  return (
    <Stack direction={"row"} className="center" spacing={2}>
      <Stack width={96} height={96} className="center">
        <img src={logo.e3} alt="" className="img-contain" />
      </Stack>
      <Stack>
        <Typography variant="h6" color="initial">
          {refdata ? refdata.from.name : auth.user.name}
        </Typography>
        <Typography variant="overline" color="initial">
          {refdata ? refdata.from.address : auth.user.address}
        </Typography>
        <Typography variant="overline" color="initial">
          Phone 62-21-5664425, <br /> Fax. 62-21-5664430
        </Typography>
      </Stack>
    </Stack>
  );
}
