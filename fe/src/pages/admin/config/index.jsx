import React, { useState } from "react";
import Datatable from "@/component/datatables";
import { fetcher } from "@/component/gip-useForm/fetcher";
import { meta } from "./_meta";
import { Stack, Button, Typography } from "@mui/material";

export default function AdminPage(params) {
  const [data, setfirst] = useState();
  const [clearMsg, setclearMsg] = useState();

  React.useEffect(() => {
    fetching();
  }, []);

  async function fetching() {
    setfirst(
      await fetcher({
        method: "get",
        url: `${meta.model}`,
      })
    );
  }

  async function doClearMsg() {
    await fetcher({
      method: "post",
      url: `inbox/clear`,
    });
    setclearMsg("Inbox Cleared");
  }

  return (
    <Stack spacing={3}>
      <Typography variant="h2" color="primary" className="f-capitalize">
        Clear Data
      </Typography>
      <Stack direction={"row"}>
        <Button onClick={doClearMsg} variant="outlined">
          {clearMsg || "Clear Inbox"}
        </Button>
      </Stack>

      <Datatable data={data} meta={meta} isRefetch={fetching} disableNew />
    </Stack>
  );
}
