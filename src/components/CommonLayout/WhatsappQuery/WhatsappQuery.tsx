"use client";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Button } from "@mui/material";
import { usePathname } from "next/navigation";

const ButtonStyles = {
  position: "fixed",
  zIndex: "999",
  background: "#25D366",
  color: "white",
  borderRadius: "50%",
  width: "4em",
  height: "4em",
  top: { md: "25em", sm: "25em", xs: "90dvh" },
  left: { md: "1.5em", sm: "1.5em", xs: "7em" },
  opacity: "0.9",
  boxShadow: "2px 4px 8px rgb(0,0,0,0.5)",
  transition:
    "backgroundColor 0.3s ease, transform 0.3s ease,boxShadow 0.3s ease, width 1s ease",
  "&:hover": {
    opacity: "1",
    background: "#25D366",
    transform: "scale(1.1)",
    boxShadow: "2px 6px 12px rgb(0,0,0,0.7)",
    // width: "11em",
  },
};

function WhatsappQuery() {
  const url = usePathname();
  const product =
    url.slice(
      0,
      url.indexOf("/", 1) !== -1 ? url.indexOf("/", 1) : url.length
    ) === "/product"
      ? url.slice(url.indexOf("/", 1) + 1, -1)
      : "";

  const handleClick = () => {
    window.open("https://wa.me/+917658852936?text=" + product);
  };
  return (
    <>
      <Button sx={ButtonStyles} onClick={handleClick}>
        <WhatsAppIcon sx={{ fontSize: "3.5em" }} />
      </Button>
    </>
  );
}

export default WhatsappQuery;
