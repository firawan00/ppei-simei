import React, { useState } from "react";

import { Stack, Typography, Divider, TextField } from "@mui/material";
import PaperA4 from "@component/paperA4";
import { logo } from "@ui/logo";
import Circle from "@ui/circle";
import { fdate } from "@component/helper/formating";
import InputInline from "@component/gip-useForm/inputInline";
import SenttoExportir from "@/component/apps/sentto";

export default function App(props) {
  return (
    <Stack>
      <PaperA4>
        <Stack spacing={3}>
          <Wessel id={1} />
          <Wessel id={2} />
        </Stack>
      </PaperA4>
      <SenttoExportir />
    </Stack>
  );
}

function Wessel({ id }) {
  const [desc, setdesc] =
    useState(`At . . . . . Sight . . . . . . pay this first of Exchange (${
      id == 1 ? "Second" : "First"
    } of same tenor and date not paid ) to the . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . or order. . . . . . . . . . . . . . . . . . . . . . . . === US Dollar . . . . . . . . . . . . . . . . . .=== 
  Value received drawn against 
  LC No. . . . . .  Date . . . . . . 
  Issued by . . . . . .
`);

  const [footer, setfooter] = useState(`. . . . . . . . . . . . . . . . . .  
 . . . . . . . . . . . . . . . . . .  
 . . . . . . . . . . . . . . . . . .  
 . . . . . . . . . . . . . . . . . .  `);

  return (
    <Stack spacing={3} border="1px solid black" p={4} position="relative">
      <Typography color="initial">
        Jakata, {fdate.format(fdate.today)}
      </Typography>
      <InputInline lb={"Exchange for USD"} lbw={140} />
      <TextField
        fullWidth
        multiline
        onChange={(e) => setdesc(e.target.value)}
        value={desc}
      />

      <TextField
        fullWidth
        multiline
        onChange={(e) => setfooter(e.target.value)}
        value={footer}
      />

      <Stack
        sx={{
          fontSize: 256,
          opacity: 0.5,
          zIndex: 0,
          left: "40%",
          top: "0",
          width: "100%",
          position: "absolute",
        }}
      >
        {id}
      </Stack>
    </Stack>
  );
}
