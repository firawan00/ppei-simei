import React, { useState, useContext } from "react";
import Context from "@context";

import {
  Button,
  Stack,
  Modal,
  Typography,
  TextField,
  MenuItem,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import File from "@ui/file";
import context from "@/component/context";
import { useFormik } from "formik";
import * as yup from "yup";

import InputFile from "@component/gip-useForm/inputFile";
import { fetcherMultipart, useNavigate } from "@component/gip-useForm/fetcher";
import BackIcon from "@/component/ui/backIcon";
import { meta } from "./_meta";
import PaperA4 from "@component/paperA4";
import Sentto from "@component/apps/sentto";
import ArticleIcon from "@mui/icons-material/Article";
import Approval from "@/component/apps/approval";
import InputInline from "@component/gip-useForm/inputInline";

function Prefix(params) {
  return (
    <Stack spacing={1} mb={2}>
      <Typography variant="subtitle2" color="primary">
        Silahkan Download dan isi template pengajuan di bawah ini. Setelah itu,
        isi form dan upload kembali dokumen yang telah disini
      </Typography>
      <File path={"uploads/template/lc-template.xls"} text="Form LC Template" />
    </Stack>
  );
}

export default function NewSkaForm({ refdata }) {
  const { auth } = useContext(Context);

  const [err, seterr] = useState();
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
    let res = await fetcherMultipart({
      url: `md_lc_release`,
      method: "post",
      data: payload,
    });
    nav("/exportir/lc", true);
  }

  return (
    <Stack component="form" onSubmit={formSubmit}>
      <PaperA4 nolimit>
        <Stack>
          <Typography variant="caption" color="initial">
            PT. BANK JAKARTA EXPORT <br />
            incoming SWIFT Message Report <br />
            Message Type : 700
            <br />
            Basic Header : 1: F01ABCNIDJAXXX603984343
            <br />
            Application Header (07001609090520BOAUSXXXXX00000000011111112222N
            <br />
          </Typography>
          <InputInline
            dcol
            multiline
            rows={2}
            lb={"Sender"}
            name="sender"
            onChange={handlePayload}
            disabled={formdisabled}
            value={payload.sender || ""}
          />
          <InputInline
            dcol
            multiline
            rows={2}
            lb={"Receiver"}
            name="receiver"
            onChange={handlePayload}
            disabled={formdisabled}
            value={payload.receiver || ""}
            sx={{
              width: "100%",
              input: {
                width: "100%",
                py: "1px",
                fontSize: "8px",
              },
            }}
          />
          <InputInline
            dcol
            multiline
            lb={"Body"}
            name="body"
            onChange={handlePayload}
            disabled={formdisabled}
            inputProps={{ style: { fontSize: 12 } }}
            value={payload.body || blankbody}
            sx={{
              "&textarea": {
                py: "1px",
                fontSize: "8px",
              },
            }}
          />
        </Stack>
      </PaperA4>
      {(!refdata || (refdata && refdata.from.id == auth.user.id)) && (
        <Sentto
          nogrow
          value={payload.to || ""}
          name="to"
          onChange={handlePayload}
          disabled={formdisabled}
          setEdit={() => setformdisabled(false)}
          filter="user-export"
        />
      )}
    </Stack>
  );
}

const blankbody = `
---------------- Beginning of Text ------------------ 
Sequence of Total 
: 27:1/1 
Form of Documentary Credit 
: 40A: Irrevocable 
Documentary Credit Number 
: 20: ILC-7800122022
Date of Issue 
: 31C: 220513
Applicable Rules 
: 40E: UCP Latest Version 
Date and Place of Expiry 
: 31D: 220920 IN INDONESIA. 
Applicant 
: 50: SHOE DISTRIBUTOR VIETNAM
HUYNH TAN 084RD, HOCHIMINH CITY, VIETNAM

Beneficiary name 
:59: PT. SEPATUKU INTERNASIONAL
JL . RAYA CILEUNGSI NO.9, BEKASI
INDONESIA.
currency code, Amount
:32B: USD 222,744.00  
Precentage Credit Amount 
:39A: 10/10
Available with..By..
:41A: any bank for negotiation
By Negotiation .

:42C: at  Sight Draft.
Drawee
:42A: VN1292XXX
Partial Shipments
:43P: Prohibited 
Transhipment
:43T: Allowed
Port of Loading/ Airport of Departure
:44E: Any port Indonesia.
Port of Discharge / Airport of Dest
:44F: Thị Nại, VN
Latest Date Of Shipment
:44C:220830
Description of Goods and / or Srv
:45A: ALL SHOES PRODUCT:

Black Canvas Shoes Ref. 100P277            1,200 unit USD.30/Unit  USD.36.000.00

Pink Canvas Shoes Ref. 100P279              1,048 unit  USD.28/Unit  USD.29.344.00

Green Lime Canvas Shoes Ref. 100P212  2,200 unit USD.32/Unit   USD.70.400.00

Navy Canvas Shoes Ref. 100P224              1,700 unit USD.30/Unit  USD.51.000.00

Purple Light Canvas Shoes  Ref. 100P226     900 unit USD. 40/Unit USD.36,000.00


TOTAL AMOUNT USD.222.744

FOB TANJUNG PRIOK, JAKARTA

Documents Required:
:46A: Commercial Invoice in 3 copies, 
Full set of 3/3 Clean on Board Ocean Bills of lading and two non negotiable copies, Made out to order of  Issuing  Bank  , Notify : Applicant Marked Freight Collect  and indicating this L/C number.
Packing List  in  03 Copies
Certificate of Origin
:47A:Additional Conditions : 
TT Reimbursement  is NOT Allowed
Other  additional conditions :
+Third Party B/L  and  Documents  are not acceptable.
+Made in Indonesia should be marked on the dege of each product.
+More ( 10 Pct ) or Less ( 10 Pct ) in quantity and amount are acceptable
+If documents containing discrepancies are presented , a fee  of USD.80.00  should be deducted from the reimbursement claim. Notwithstanding any instruction to the contrary.
This fee should be charged to the Beneficiary.
This credit is subject  to  The ICC UCP600 and URR latest version.
An extra copy off all documents is required for Issuing Bank’s file. 
Charges
:71B: 
+All Bank charges outside VIETNAM including discrepancy fee ( if any ) are for beneficiary account.
+Reimbursement  Charges are for account of Beneficiary.
Period for presentation 
:48: transport  documents  must be presented  within  21 days  after  the date  of shipment  but within  the expiry  date of this  credit.

 Confirmation instruction  : 
:49: without 

Instruction to The Paying/Acc/Nego 
:78: +The amount  of Each  draft must be endorsed  on the reverse  of this credit.
        + All Documents  must be forwarded to  us  by courier service  in one lot.
          Addressed to be  VIENTINBANK OF VIETNAM, HANOI, VIETNAM
         +Acceptance Comm and discount Chgs are for account applicant.
Advice Through Bank :
:57D: Yr. PT. BANK JAKARTA EXPORT
5:MAC:00000000}{CHK:EB4E9876C732C}} 

----------------------------Ending of Text---------------------------------------------------------

`;
