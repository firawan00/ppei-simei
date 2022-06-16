import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { fcurr } from "@component/helper/formating";
import Typography from "@mui/material/Typography";
import { Stack, Button } from "@mui/material";

export default function BasicTable({ header, data }) {
  return (
    <Stack>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {header.map((d, ix) => (
                <TableCell align={ix == 0 ? "left" : "right"}>{d}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.mark}
                </TableCell>
                <TableCell align="right">{row.desc}</TableCell>
                <TableCell align="right">{row.qty}</TableCell>
                <TableCell align="right">{fcurr.format2(row.up)}</TableCell>
                <TableCell align="right">
                  {fcurr.format2(row.qty * row.up)}
                </TableCell>
              </TableRow>
            ))}

            <TableRow>
              <TableCell colSpan={6}>
                <Button fullWidth sx={{ py: "2px", height: "18px", my: "8px" }}>
                  Add New Item
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Stack
        justifyContent={"space-between"}
        direction="row"
        width={"100%"}
        px={3}
        pt={1}
      >
        <Typography variant="body2" fontWeight={"bold"} color="initial">
          Total
        </Typography>
        <Typography variant="body2" fontWeight={"bold"} color="initial">
          {fcurr.format(100000)}
        </Typography>
      </Stack>
    </Stack>
  );
}
