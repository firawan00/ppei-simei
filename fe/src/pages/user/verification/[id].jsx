import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Stack, Button } from "@mui/material";
import { Link } from "react-router-dom";
import useForm, { Input, fetcher } from "@/component/useForm";
import { Loader } from "@ui/loaderFs";

export default function App(props) {
  const { id } = useParams();
  const [status, setstatus] = React.useState(1);

  async function handleRegister() {
    const res = await fetcher({
      method: "post",
      url: `auth/emailverification`,
      data: { id: id },
    });

    res.data ? setstatus(3) : setstatus(2);
  }

  React.useEffect(() => {
    handleRegister();
  }, []);

  return (
    <Stack
      minHeight="calc(100vh - 96px)"
      width={"100%"}
      alignItems={"center"}
      justifyContent={"center"}
      direction={"column"}
    >
      {status == 1 && <Loader />}
      {status == 2 && "error"}
      {status == 3 && (
        <>
          Your account has been activated.
          <Button to="/signin" LinkComponent={Link}>
            Continue to signin
          </Button>
        </>
      )}
    </Stack>
  );
}
