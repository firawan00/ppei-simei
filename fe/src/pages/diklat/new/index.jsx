import React, { useState, useEffect } from "react";

import { Stack } from "@mui/material";
import Steper from "./_stepper";
import S1_pengantar from "./_partial/pengantar";

export default function App(props) {
  const [payload, setpayload] = useState({});
  const [step, setstep] = useState(-1);

  function handleNext(value) {
    setpayload({ ...payload, ...value });
    setstep(step + 1);
  }

  function handleBack() {
    setstep(step - 1);
  }

  useEffect(() => {
    // console.log(payload);
  }, [payload]);

  return (
    <Stack>
      {step == -1 && <S1_pengantar next={() => setstep(0)} back={handleBack} />}
      {step >= 0 && (
        <Steper
          activeStep={step}
          next={handleNext}
          back={handleBack}
          payload={payload}
        />
      )}
    </Stack>
  );
}
