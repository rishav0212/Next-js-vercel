import React, { useCallback } from "react";
import styled from "@emotion/styled";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Divider } from "@mui/material";

const StyledLink = styled(Link)({
  textDecoration: "none",
  color: "black",
  fontSize: "1.6em",
  fontWeight: "300",
  transition: ".3s",
  "&:hover": {
    textDecoration: "underline",
  },
});

export default function Dropdown({ props, url }) {
  const to = props.to;

  return (
    <div>
      <div className="dropdown1">
        <Link
          href={props.to}
          className={`navbar-links border-bottom-class ${
            url ===
            to.slice(
              0,
              props.to.indexOf("/", 1) !== -1 ? to.indexOf("/", 1) : to.length
            )
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
                <StyledLink href={props.to + props.items[key]}>
                  {key}
                </StyledLink>
                <Divider />
              </React.Fragment>
            ))}
        </div>
      </div>
    </div>
  );
}
