import React, { useState, useContext } from "react";
import Context from "@context";
import { fetcher, useNavigate } from "@component/gip-useForm/fetcher";
import { Stack, Button, TextField } from "@mui/material";

export default function App(props) {
  const { auth } = useContext(Context);

  const [notes, setnotes] = useState("");
  const nav = useNavigate();

  async function formSubmit(e) {
    let res = await fetcher({
      url: `status_handler`,
      method: "post",
      data: {
        id: props.id,
        model: props.model,
        status: e,
        status_notes: notes,
      },
    });
    nav(props.callback_url, true);
  }

  return (
    <Stack alignItems={"center"} my={2}>
      <Stack width={"210mm"} className="print-margin">
        <Stack spacing={2}>
          <TextField
            value={notes}
            onChange={(e) => setnotes(e.target.value)}
            name="notes"
            label="notes"
          />
          <Stack direction={"row"} spacing={2}>
            <Button fullWidth onClick={() => formSubmit("approved")}>
              Approve
            </Button>
            <Button
              fullWidth
              color="error"
              onClick={() => formSubmit("rejected")}
            >
              Reject
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
