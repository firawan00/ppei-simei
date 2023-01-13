import React from "react";

import { IconButton, Stack, Modal, Typography, ListItem } from "@mui/material";
import HelpIcon from "@mui/icons-material/Help";
import CloseIcon from "@mui/icons-material/Close";
import Img from "@ui/img";
import { fetcher } from "@/component/gip-useForm/fetcher";
import { fcurr } from "@component/helper/formating";

export default function App(props) {
  const [data, setdata] = React.useState();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  React.useEffect(() => {
    fetching();
  }, []);

  async function fetching() {
    setdata(
      await fetcher({
        method: "get",
        url: `config`,
      })
    );
  }

  return (
    <Stack>
      <ListItem button onClick={() => setOpen(true)}>
        <Stack
          pl={"4px"}
          direction={"row"}
          spacing={2}
          overflow="hidden"
          color={"dark.main"}
          onClick={handleOpen}
        >
          <HelpIcon />
          <Typography variant="body1">Help</Typography>
        </Stack>
      </ListItem>

      <Modal open={open} onClose={handleClose}>
        <Stack
          sx={{
            width: "100vw",
            height: "100vh",
          }}
          className="center"
        >
          <Stack
            sx={{
              p: 3,
              bgcolor: "background.paper",
              borderRadius: 2,
            }}
          >
            <Stack alignItems={"flex-end"}>
              <IconButton onClick={handleClose}>
                <CloseIcon />
              </IconButton>
            </Stack>
            <Typography variant="h4" my={2} color="primary">
              Simulasi Export Import (SimEI )
            </Typography>
            <Stack my={1}>
              <Typography variant="overline" fontWeight={"bold"}>
                USDIDR Exchange Informartion
              </Typography>
              <Typography variant="caption">
                {data &&
                  fcurr.format(
                    data.find((d) => d.name === "Exchange IDRUSD").value
                  )}
              </Typography>
            </Stack>

            <Typography variant="overline" fontWeight={"bold"}>
              Process Reference
            </Typography>

            <Img path="assets/flowchart.png" />
          </Stack>
        </Stack>
      </Modal>
    </Stack>
  );
}
