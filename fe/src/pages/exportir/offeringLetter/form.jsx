import React, { useState, useContext } from "react";
import Context from "@context";
import { fetcher, useNavigate } from "@component/gip-useForm/fetcher";

import { Stack, Typography, Divider, TextField } from "@mui/material";
import PaperA4 from "@component/paperA4";
import { logo } from "@ui/logo";
import { fdate } from "@component/helper/formating";
import InputInline from "@component/gip-useForm/inputInline";
import Sentto from "@/component/apps/sentto";

export default function App({ refdata }) {
  const { auth } = useContext(Context);
  const [formdisabled, setformdisabled] = useState(refdata ? true : false);
  const [payload, setpayload] = useState(
    refdata ? { ...refdata, to: refdata.to.id } : {}
  );
  const nav = useNavigate();

  function handlePayload(e) {
    setpayload({ ...payload, [e.target.name]: e.target.value });
  }

  async function formSubmit(e) {
    e.preventDefault();
    delete payload.from;
    let res = await fetcher({
      url: `md_introductionletter`,
      method: "post",
      data: payload,
    });
    nav("/exportir/introductionletter", true);
  }

  return (
    <Stack>
      <PaperA4>
        <Stack spacing={3}>
          <Header />
          <Divider />

          <Typography variant="h6" align="center" color="initial">
            OFFERING LETTER
          </Typography>

          <Stack direction={"row"} justifyContent="space-between">
            <Stack spacing={1}>
              <InputInline lb={"Our Ref"} />
              <InputInline lb={"To"} />
              <InputInline lb={"Cc"} />
            </Stack>
            <Stack>
              <Typography color="initial">
                Jakata, {fdate.format(fdate.today)}
              </Typography>
            </Stack>
          </Stack>

          <Stack>
            Dear Sir/Madam, Regarding to your inquiry no…. dated…., herewith we
            would like to submit our offers are as follows:
          </Stack>

          <Stack spacing={1}>
            <InputInline lb={"Commodity"} lbw={180} />
            <InputInline lb={"Quantity"} lbw={180} />
            <InputInline lb={"Unit FOB Price"} lbw={180} />
            <InputInline lb={"Packing"} lbw={180} />
            <InputInline lb={"Shipment"} lbw={180} />
            <InputInline lb={"Term of Payment "} lbw={180} />
            <InputInline lb={"Validity"} lbw={180} />
          </Stack>

          <Stack>
            Please be advised that we prefer to sell in FOB Basis Price. We hope
            our offers are favorable to you, if you have any question do not
            hesitate to contact us.
          </Stack>

          <Stack>
            Faithfully Yours.
            <br />
            <br />
            <br />
            <br />
            Export Manager
          </Stack>
        </Stack>
      </PaperA4>
      {(!refdata || (refdata && refdata.from.id == auth.user.id)) && (
        <Sentto
          value={payload.to || ""}
          name={"to"}
          onChange={handlePayload}
          disabled={formdisabled}
          setEdit={() => setformdisabled(false)}
          filter="user-import"
        />
      )}
    </Stack>
  );
}

function Header(params) {
  return (
    <Stack direction={"row"} className="center" spacing={2}>
      <Stack width={96} height={96} p={1}>
        <img src={logo.e1} alt="" className="img-contain" />
      </Stack>
      <Stack>
        <Typography variant="h6" color="initial">
          PT. BAYU SEGARA
        </Typography>

        <Typography variant="subtitle1" color="initial">
          JL. TAMAN ANGGREK NO. 14
        </Typography>

        <Typography variant="subtitle1" color="initial">
          Phone 62-21-5664425, Fax. 62-21-5664430
        </Typography>
      </Stack>
    </Stack>
  );
}
