import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import { Divider, Stack } from "@mui/material";

const StyledLink = styled(Link)({
  textDecoration: "none",
  color: "white",
  display: "inline-flex",
  fontSize: "1.7em",
  fontWeight: "400",
  padding: "10px 12px",
  transition: ".3s",
  "&:hover": {
    textDecoration: "underline",
  },
});

export default function Dropdown({ props, url }) {
  const to = props.to;

  return (
    <Stack className="dropdown1">
      <Link
        href={to}
        className={`navbar-links border-bottom-class ${
          url ===
          to.slice(
            0,
            to.indexOf("/", 1) !== -1 ? to.indexOf("/", 1) : to.length
          )
            ? "active-link "
            : " "
        } ${
          props.menu_name === "Products" && url === "/product"
            ? "active-link"
            : ""
        }`}
      >
        {props.menu_name}
      </Link>

      <div className="dropdown-content">
        {props.items &&
          Object.keys(props.items).map((key) => (
            <React.Fragment key={key}>
              <StyledLink href={to + props.items[key]}>{key}</StyledLink>
              <Divider />
            </React.Fragment>
          ))}
      </div>
    </Stack>
  );
}
