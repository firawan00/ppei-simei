import React, { useState, useContext } from "react";
import Context from "@context";
import { fetcher, useNavigate } from "@component/gip-useForm/fetcher";

import {
  Button,
  Stack,
  Modal,
  Typography,
  TextField,
  MenuItem,
  Divider,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import File from "@ui/file";
import context from "@/component/context";
import { useFormik } from "formik";
import * as yup from "yup";

import InputFile from "@component/gip-useForm/inputFile";
import { fetcherMultipart } from "@component/gip-useForm/fetcher";
import BackIcon from "@/component/ui/backIcon";
import { meta } from "./_meta";
import PaperA4 from "@component/paperA4";
import InputInline from "@component/gip-useForm/inputInline";
import Input from "@component/gip-useForm/smallTextfield";
import { fdate } from "@/component/helper/formating";
import SenttoImportir from "@component/apps/senttoImportir";
import Sign from "@component/apps/sign";
import Sentto from "@/component/apps/sentto";
import { Checkbox, FormControlLabel } from "@mui/material";

const checkboxstyle = {
  height: "24px",
  "& .MuiFormControlLabel-label": {
    fontSize: 11,
  },
};

export default function App({ refdata }) {
  const { auth } = useContext(Context);
  const [formdisabled, setformdisabled] = useState(
    refdata && refdata.data ? true : false
  );
  const [payload, setpayload] = useState(
    refdata ? { ...refdata.data, to: refdata.to.id } : {}
  );
  const nav = useNavigate();

  function handlePayload(e) {
    setpayload({ ...payload, [e.target.name]: e.target.value });
  }

  async function formSubmit(e) {
    e.preventDefault();
    let res = await fetcher({
      url: `md_ska_d`,
      method: "post",
      data: payload,
    });
    nav("/exportir/ska-d", true);
  }

  return (
    <Stack spacing={3} component="form" onSubmit={formSubmit}>
      <PaperA4 noback>
        <Stack>
          <Typography variant="subtitle" color="" align="center">
            CERTIFICATE OF ORIGIN
          </Typography>
          <Divider />

          <Stack direction={"row"}>
            <Stack width={"50%"}>
              <InputInline
                dcol
                lb="1.	Goods consigned from (exporters business name, address, country)"
                disabled={formdisabled}
                name="gcf"
                onChange={handlePayload}
                value={payload.gcf || ""}
              />
              <InputInline
                dcol
                lb="2.	Goods consigned to (consigned’s name, address, country)"
                disabled={formdisabled}
                name="gct"
                onChange={handlePayload}
                value={payload.gct || ""}
              />
            </Stack>
            <Stack width={"50%"} spacing={2} className="center" p={2}>
              <InputInline
                lb="Reference No :"
                disabled={formdisabled}
                name="refno"
                onChange={handlePayload}
                value={payload.refno || ""}
              />
              <Typography variant="body1" color="initial" align="center">
                ASEAN TRADE IN GOODS AGREEMENT ASEAN INDUSTRIAL COOPERATION
                SCHEME CERTIFICATE OF ORIGIN (Combined Declaration and
                Certificate) FORM D Issued in INDONESIA (Country) See Overleaf
                Notes
              </Typography>
              <Typography
                variant="caption"
                color="initial"
                align="right"
                width={"100%"}
              >
                Sea notes overleaf
              </Typography>
            </Stack>
          </Stack>
          <Stack direction={"row"} spacing={3}>
            <Stack width={"50%"}>
              <InputInline
                dcol
                multiline
                rows={3}
                lb="3.   Means of Transport and route (as far known)"
                disabled={formdisabled}
                name="f3"
                onChange={handlePayload}
                value={payload.f3 || ""}
              />
            </Stack>
            <Stack width={"50%"}>
              <Typography variant="body1" color="initial">
                4. For official use
              </Typography>
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked={payload.c1 ? true : false}
                    onChange={(e) =>
                      setpayload({ ...payload, c1: e.target.checked })
                    }
                  />
                }
                label="Preferential Treatment Given Under ASEAN Trade in Goods Agreement"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked={payload.c2 ? true : false}
                    onChange={(e) =>
                      setpayload({ ...payload, c2: e.target.checked })
                    }
                  />
                }
                label="Preferential Treatment Given Under ASEAN Industrial Cooperation Scheme"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked={payload.c3 ? true : false}
                    onChange={(e) =>
                      setpayload({ ...payload, c3: e.target.checked })
                    }
                  />
                }
                label="Preferential Treatment Not Given (Please State reason's)"
              />
            </Stack>
          </Stack>

          <Stack direction={"row"} spacing={1} pt={5}>
            <InputInline
              dcol
              multiline
              rows={5}
              lb="5. Item number"
              disabled={formdisabled}
              name="f5"
              onChange={handlePayload}
              value={payload.f5 || ""}
            />
            <InputInline
              dcol
              multiline
              rows={5}
              lb="6. Marks and number of packages"
              disabled={formdisabled}
              name="f6"
              onChange={handlePayload}
              value={payload.f6 || ""}
            />
            <InputInline
              dcol
              multiline
              rows={5}
              lb="7. Number and kind of packages, description of goods"
              disabled={formdisabled}
              name="f7"
              onChange={handlePayload}
              value={payload.f7 || ""}
            />
            <InputInline
              dcol
              multiline
              rows={5}
              lb="8. Origin criterion (see notes overleaf)"
              disabled={formdisabled}
              name="f8"
              onChange={handlePayload}
              value={payload.f8 || ""}
            />
            <InputInline
              dcol
              multiline
              rows={5}
              lb="9. Gross weight or other quantity"
              disabled={formdisabled}
              name="f9"
              onChange={handlePayload}
              value={payload.f9 || ""}
            />
            <InputInline
              dcol
              lb="10. Number and date of invoice"
              multiline
              rows={5}
              disabled={formdisabled}
              name="f10"
              onChange={handlePayload}
              value={payload.f10 || ""}
            />
          </Stack>

          <Stack direction={"row"} spacing={3} pt={5}>
            <Stack width={"50%"}>
              <Typography variant="body1" color="initial">
                12.Declaration by the exporter
              </Typography>
              <Typography variant="caption" color="initial">
                The undersigned hereby declare that the above details and
                statements are correct : that all the goods were
              </Typography>
              <Typography
                variant="caption"
                color="initial"
                my={0.5}
                align="center"
              >
                Produced in Indonesia
              </Typography>
              <Typography variant="caption" color="initial">
                And that they comply with the origin requirements specified for
                those goods in the generalized system of preferences for goods
                exported to
              </Typography>
              <Typography
                variant="caption"
                color="initial"
                my={0.5}
                align="center"
              >
                Jakarta,{fdate.format(fdate.today)}
              </Typography>
              <Divider />

              <Typography variant="caption" color="initial">
                Place and date, signatures and stamp of certifying authority
              </Typography>
              <Stack direction={"row"}>
                <Stack width={"50%"}>
                  <FormControlLabel
                    sx={checkboxstyle}
                    control={
                      <Checkbox
                        checked={payload.c4 ? true : false}
                        onChange={(e) =>
                          setpayload({ ...payload, c4: e.target.checked })
                        }
                      />
                    }
                    label="Third Country Invoicing"
                  />
                  <FormControlLabel
                    sx={checkboxstyle}
                    control={
                      <Checkbox
                        checked={payload.c5 ? true : false}
                        onChange={(e) =>
                          setpayload({ ...payload, c5: e.target.checked })
                        }
                      />
                    }
                    label="Accumulation"
                  />
                  <FormControlLabel
                    sx={checkboxstyle}
                    control={
                      <Checkbox
                        checked={payload.c6 ? true : false}
                        onChange={(e) =>
                          setpayload({ ...payload, c6: e.target.checked })
                        }
                      />
                    }
                    label="Back-to-Back CO"
                  />
                  <FormControlLabel
                    sx={checkboxstyle}
                    control={
                      <Checkbox
                        checked={payload.c7 ? true : false}
                        onChange={(e) =>
                          setpayload({ ...payload, c7: e.target.checked })
                        }
                      />
                    }
                    label="Partial Cumulation"
                  />
                </Stack>
                <Stack width={"50%"}>
                  <FormControlLabel
                    sx={checkboxstyle}
                    control={
                      <Checkbox
                        checked={payload.c8 ? true : false}
                        onChange={(e) =>
                          setpayload({ ...payload, c8: e.target.checked })
                        }
                      />
                    }
                    label="Exhibition "
                  />
                  <FormControlLabel
                    sx={checkboxstyle}
                    control={
                      <Checkbox
                        checked={payload.c9 ? true : false}
                        onChange={(e) =>
                          setpayload({ ...payload, c9: e.target.checked })
                        }
                      />
                    }
                    label="De Minimis"
                  />
                  <FormControlLabel
                    sx={checkboxstyle}
                    control={
                      <Checkbox
                        checked={payload.c10 ? true : false}
                        onChange={(e) =>
                          setpayload({ ...payload, c10: e.target.checked })
                        }
                      />
                    }
                    label="Issued Retroactively d"
                  />
                </Stack>
              </Stack>
            </Stack>
            <Stack width={"50%"}>
              <Typography variant="body1" color="initial">
                11. Certification
              </Typography>
              <Typography variant="caption" color="initial">
                It is hereby certified, on the basis of control carried out,
                that the declaration by the exporter is correct\
                <br />
                <br />
                <br />
                <br />
              </Typography>
              <Sign text="Exportir" />
              <Divider sx={{ mt: "32px" }} />
              <Typography variant="caption" color="initial">
                Place and date, signatures and stamp of certifying authority
              </Typography>
            </Stack>
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
          filter="fasilitator-ska"
        />
      )}
    </Stack>
  );
}

const validationSchema = yup.object({
  name: yup.string("Enter your email").required("This Field Required "),
  type: yup.string("Enter your password").required("Password is required"),
});
