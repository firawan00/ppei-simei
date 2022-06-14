import * as React from "react";
import {
  Box,
  Button,
  Stack,
  Stepper,
  Step,
  StepLabel,
  Typography,
  StepContent,
  Paper,
} from "@mui/material";

import { Steps } from "./_partial/meta";

export default function VerticalLinearStepper({
  activeStep,
  next,
  back,
  payload,
}) {
  return (
    <Stepper activeStep={activeStep} orientation="vertical">
      {Steps.map((S, index) => (
        <Step key={index}>
          <StepLabel>{S.label}</StepLabel>
          <StepContent>
            {<S.App next={next} back={back} refpayload={payload} />}
          </StepContent>
        </Step>
      ))}
    </Stepper>
  );
}
