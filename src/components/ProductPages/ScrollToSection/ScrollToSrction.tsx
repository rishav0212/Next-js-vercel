"use client";
import styled from "@emotion/styled";
import { Grid, Button } from "@mui/material";
import { useEffect, useRef, useState } from "react";

const StyledButton = styled(Button)({
  marginInline: "5px",
  color: "rgb(230,230,230,1)",
  backgroundColor: "rgb(150,150,165)",
  minWidth: "auto",
  width: "auto",
  border: "none",
  // textTransform: "lowercase", //to lowercase the text
  whiteSpace: "nowrap",
  zIndex: 12,
  fontSize: "1.3em",
  padding: "10px",
  borderRadius: "10px",
  cursor: "pointer",
  boxShadow: "0 2px 4px rgb(0,0,0,0.4)",
  transition:
    "boxShadow 0.3s ease-out, color 0.3s ease-out, transform 0.3s ease-out",
  "&:hover": {
    boxShadow: "0 4px 4px rgb(0,0,0,0.7)",
    color: "#fff",
    backgroundColor: "rgb(80,80,140)",
    transform: "scale(1.08)",
  },
});
const StyledNaviButton = styled("button")({
  color: "rgb(230,230,230,1)",
  backgroundColor: "rgb(150,150,165)",
  border: "none",
  width: "2.3em",
  height: "2.3em",
  zIndex: 15,
  fontSize: "1.5em",
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
  const containerRef = useRef(null);
  const [isEndOfScroll, setIsEndOfScroll] = useState(false);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleClick = (sectionId) => {
    const element = document.getElementById(sectionId);

    if (element) {
      const rect = element.getBoundingClientRect();
      const scrollTop = document.documentElement.scrollTop;
      const barheight = containerRef.current.clientHeight;
      const targetOffset = rect.top + scrollTop - barheight - 67;

      window.scrollTo({
        top: targetOffset,
        behavior: "smooth",
      });
    }
  };
  const handleScroll = (direction) => {
    const container = containerRef.current;
    if (container) {
      const scrollAmount = direction === "left" ? -200 : 200;
      let left = scrollLeft + scrollAmount > 0 ? scrollLeft + scrollAmount : 0;
      left =
        containerRef.current.scrollWidth - containerRef.current.clientWidth <
        scrollLeft + scrollAmount
          ? containerRef.current.scrollWidth - containerRef.current.clientWidth
          : scrollLeft + scrollAmount;
      container.scrollTo({
        left: left,
        behavior: "smooth",
      });
      setScrollLeft(left);
    }
  };

  useEffect(() => {
    setIsEndOfScroll(
      containerRef.current.scrollWidth - containerRef.current.clientWidth <
        scrollLeft
    );
  }, [scrollLeft]);

  useEffect(() => {
    const container = containerRef.current;

    const handleScroll = () => {
      setScrollLeft(container.scrollLeft);
    };

    container.addEventListener("scroll", handleScroll);

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, [containerRef]);

  return (
    <Grid
      ref={containerRef}
      position={"sticky"}
      zIndex={10}
      alignItems={"center"}
      marginTop={1}
      paddingY={1}
      sx={{
        overflowY: "hidden",
        whiteSpace: "nowrap",
        top: { md: "9.3vh", sm: "9.3vh", xs: "6.3vh" },
        backgroundColor: "#f0f0f0",
        WebkitOverflowScrolling: "touch",
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      {scrollLeft > 0 ? (
        <div
          style={{
            minWidth: "8em",
            height: "6em",
            display: "inline-flex",
            padding: 5,
            background:
              "linear-gradient(to left, rgba(240,240,240,0.0) 0%, rgba(240,240,240,1) 35%)",
            position: "sticky",
            left: "0",
            zIndex: 13,
            alignContent: "center",
          }}
        >
          <StyledNaviButton onClick={() => handleScroll("left")}>
            {"<"}
          </StyledNaviButton>
        </div>
      ) : null}

      {Sections.map((item, index) => (
        <StyledButton
          key={item}
          id={index.toString()}
          onClick={() => handleClick(item)}
        >
          {item}
        </StyledButton>
      ))}
      {!isEndOfScroll ? (
        <div
          style={{
            minWidth: "8em",
            height: "6em",
            padding: 5,
            display: "inline-flex",
            background:
              "linear-gradient(to right, rgba(240,240,240,0.0) 0%, rgba(240,240,240,1) 50%)",
            position: "sticky",
            right: "0",
            zIndex: 13,
            justifyContent: "right",
            alignContent: "center",
          }}
        >
          <StyledNaviButton onClick={() => handleScroll("right")}>
            {">"}
          </StyledNaviButton>
        </div>
      ) : null}
    </Grid>
  );
};

export default ScrollToSection;
