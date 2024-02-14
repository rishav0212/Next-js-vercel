"use client";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import { useEffect, useState } from "react";

const StyledButton = styled("button")({
  width: "4em",
  height: "4em",
  color: "#fff",
  border: "none",
  backgroundColor: "rgb(0,0,0,0.6)",
  boxShadow: "2px 4px 8px rgb(0,0,0,0.5)",
  borderRadius: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  transition:
    "background-color 0.3s ease, transform 0.3s ease,box-shadow 0.3s ease",
  "@media (hover:hover)": {
    "&:hover": {
      backgroundColor: "rgb(0,0,0,0.8)",
      boxShadow: "4px 6px 12px rgb(0,0,0,0.8)",
      transform: "translateY(-3px)",
    },
  },

  "& svg": {
    animation: "gototop 0.7s linear infinite alternate-reverse",
  },
  "@keyframes gototop": {
    "0%": {
      transform: "translateY(-0.07em)",
    },
    "100%": {
      transform: "translateY(0.1em)",
    },
  },
});
function ScrollToTop() {
  const onClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const [isVisible, setIsVisible] = useState(false);

  const scrollRead = () => {
    let height = 250;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    winScroll > height ? setIsVisible(true) : setIsVisible(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollRead);
    return () => window.removeEventListener("scroll", scrollRead);
  }, []);

  return (
    <motion.div
      initial={{ y: "100px" }}
      animate={{ y: isVisible ? "0" : "100px" }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
      }}
      style={{
        position: "fixed",
        bottom: "4em",
        right: "5em",
        zIndex: "999",
      }}
    >
      <StyledButton onClick={onClick}>
        <KeyboardDoubleArrowUpIcon />
      </StyledButton>
    </motion.div>
  );
}

export default ScrollToTop;
