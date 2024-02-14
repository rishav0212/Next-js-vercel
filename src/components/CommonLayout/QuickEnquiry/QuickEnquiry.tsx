"use client";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import { Popover, Typography, Box, Modal, Button } from "@mui/material";
// import { useState }, React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import QueryForm from "../../hook-form/QueryForm";
import { useState } from "react";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const buttonStyles = {
  position: "fixed",
  zIndex: "999",
  background: "var(--primary-color)",
  color: "white",
  borderRadius: "4em",
  width: { sm: "4em", xs: "3em" },
  height: { sm: "4em", xs: "3em" },
  bottom: { xs: "1em" },
  top: { sm: "20em" },
  left: "1.5em",
  opacity: "0.8",
  boxShadow: "2px 4px 8px rgb(0,0,0,0.5)",
  transition:
    "backgroundColor 0.3s ease, transform 0.3s ease,boxShadow 0.3s ease, width 1s ease",
  "&:hover": {
    opacity: "1",
    background: "var(--primary-color)",
    transform: "scale(1.1)",
    boxShadow: "2px 6px 12px rgb(0,0,0,0.7)",
    width: "11em",
  },
};

const tooltipStyles = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transition: "opacity 1s ease, transform 1s ease",
};

function QuickEnquiry() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [popOverOpen, setPopOverOpen] = useState(false);
  const handlePopoverOpen = (event) => {
    setPopOverOpen(true);
  };

  const handlePopoverClose = () => {
    setPopOverOpen(false);
  };

  const textOpen = Boolean(popOverOpen);

  return (
    <>
      <Button
        onClick={handleOpen}
        sx={buttonStyles}
        aria-owns={textOpen ? "mouse-over-popover" : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
      >
        <MailOutlineOutlinedIcon
          fontSize={"large"}
          sx={{ position: "absolute", left: "15px" }}
        />
        <Typography
          component="div"
          sx={{
            ...tooltipStyles,
            opacity: textOpen ? 1 : 0,
            transform: textOpen
              ? "translate(-25%, -50%)"
              : "translate(-60%, -50%)",
          }}
        >
          Quick Enquiry
        </Typography>
      </Button>

      <ThemeProvider theme={darkTheme}>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: { md: "600px", xs: "85%" },
              background: "black",
              boxShadow: "24",
              padding: "10px 50px 30px 30px",
              opacity: 0.95,
              borderRadius: "20px",
            }}
          >
            <Typography
              variant="h3"
              fontSize={"2.5em"}
              color={"rgb(255,255,255,0.8)"}
              textAlign={"center"}
              margin={3}
            >
              Send Us a Message
            </Typography>
            <QueryForm props={"footer"} />
          </Box>
        </Modal>
      </ThemeProvider>
    </>
  );
}

export default QuickEnquiry;
