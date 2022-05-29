import React from "react";
import { Stack, IconButton, Modal, Typography, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Slide from "@mui/material/Slide";
import Logo from "@img/logo.webp";
import MainNav from "@ly/component/navigation";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function App(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <IconButton onClick={handleOpen}>
        <MenuIcon color="white" />
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        sx={{
          backdropFilter: "blur(1px)",
          backgroundColor: "rgba(0, 0, 0, 0.1)",
        }}
      >
        <Slide direction="right" in={open} mountOnEnter unmountOnExit>
          <Stack
            sx={{
              position: "absolute",
              height: "100%",
              width: "100%",
              p: 3,
              borderRadius: 2,
            }}
          >
            <Stack
              sx={{
                height: "100%",
                width: 400,
                bgcolor: "background.paper",
                boxShadow: 24,
                p: 4,
                borderRadius: 2,
              }}
            >
              <Box mb={2}>
                <IconButton onClick={handleClose}>
                  <ArrowBackIcon />
                </IconButton>
              </Box>
              <Stack
                className="center  "
                width={"100%"}
                height={"150px"}
                flexShrink={0}
                p={2}
                bgcolor="#f1f1f1"
              >
                <img src={Logo} alt="" className="img-contain h100" />
              </Stack>
              <MainNav
                isOpen={(e) => setOpen(e)}
                parentOpen={handleClose}
                isWhiteColor={false}
              />
            </Stack>
          </Stack>
        </Slide>
      </Modal>
    </>
  );
}
