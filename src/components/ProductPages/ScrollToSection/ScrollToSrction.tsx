"use client";
import styled from "@emotion/styled";
import { Grid, Button } from "@mui/material";
import { useEffect, useRef, useState } from "react";

const StyledButton = styled(Button)({
  marginInline: "5px",
  color: "rgb(230,230,230,1)",
  width: "calc(calc(0.7vh + 0.3vw)*12)",
  backgroundColor: "rgb(150,150,165)",
  border: "none",
  zIndex: 12,
  fontSize: "1.1em",
  padding: "10px",
  borderRadius: "10px",
  cursor: "pointer",
  boxShadow: "0 2px 4px rgb(0,0,0,0.4)",
  transition: "boxShadow 0.3s ease, color 0.3s ease, transform 0.3s ease",
  "&:hover": {
    boxShadow: "0 4px 4px rgb(0,0,0,0.7)",
    color: "#fff",
    backgroundColor: "rgb(80,80,140)",
    transform: "scale(1.05)",
  },
});
const StyledNaviButton = styled("button")({
  marginInline: "5px",
  color: "rgb(230,230,230,1)",
  backgroundColor: "rgb(150,150,165)",
  width: "calc(calc(0.7vh + 0.3vw)*4)",
  height: "calc(calc(0.7vh + 0.3vw)*4)",
  border: "none",
  zIndex: 12,
  fontSize: "1.5em",
  padding: "3px",
  borderRadius: "50%",
  cursor: "pointer",
  boxShadow: "0 2px 4px rgb(0,0,0,0.4)",
  transition: "boxShadow 0.3s ease, color 0.3s ease, transform 0.3s ease",
  "&:hover": {
    boxShadow: "0 4px 4px rgb(0,0,0,0.7)",
    color: "#fff",
    backgroundColor: "rgb(80,80,140)",
    transform: "scale(1.05)",
  },
});

const ScrollToSection = ({ Sections }) => {
  const [startIndex, setStartIndex] = useState(0);
  const [visibleButtons, setVisibleButtons] = useState([]);
  const containerRef = useRef(null);
  const handleClick = (sectionId) => {
    const element = document.getElementById(sectionId);

    if (element) {
      const rect = element.getBoundingClientRect();
      const scrollTop = document.documentElement.scrollTop;
      const barheight = containerRef.current.clientHeight;
      const targetOffset = rect.top + scrollTop - barheight - 67;
      console.log(rect.top);
      console.log(scrollTop);
      console.log(barheight);

      window.scrollTo({
        top: targetOffset,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const updateVisibleButtons = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.clientWidth;
        const buttonWidth =
          (window.innerHeight * 0.007 + window.innerWidth * 0.003) * 12;

        const maxButtons = Math.floor(containerWidth / buttonWidth);

        setVisibleButtons(
          Sections.slice(startIndex, startIndex + maxButtons - 1)
        );
      }
    };

    updateVisibleButtons();
    window.addEventListener("resize", updateVisibleButtons);

    return () => {
      window.removeEventListener("resize", updateVisibleButtons);
    };
  }, [Sections, startIndex]);

  const handleNext = () => {
    setStartIndex((prevIndex) => Math.min(prevIndex + 2, Sections.length - 1));
  };

  const handlePrev = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - 2, 0));
  };

  return (
    <Grid
      container
      ref={containerRef}
      position={"sticky"}
      zIndex={10}
      alignItems={"center"}
      justifyContent={"center"}
      marginTop={1}
      paddingY={1}
      sx={{
        top: { md: "9.3vh", sm: "9.3vh", xs: "6.3vh" },
        backgroundColor: "#f0f0f0",
      }}
    >
      {startIndex !== 0 ? (
        <StyledNaviButton onClick={handlePrev}>{"<"}</StyledNaviButton>
      ) : null}
      {visibleButtons.map((item, index) => (
        <StyledButton
          key={item}
          id={index.toString()}
          onClick={() => handleClick(item)}
        >
          {item}
        </StyledButton>
      ))}
      {startIndex + visibleButtons.length < Sections.length ? (
        <StyledNaviButton onClick={handleNext}>{">"}</StyledNaviButton>
      ) : null}
    </Grid>
  );
};

export default ScrollToSection;
