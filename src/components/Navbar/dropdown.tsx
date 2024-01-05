import React, { useCallback } from 'react';
import styled from "@emotion/styled";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
    Divider,
  } from "@mui/material";

const StyledLink = styled(Link)({
    textDecoration: "none",
    color: "black",
    fontSize: "16px",
    fontWeight: "600",
    paddingLeft: "20px",
    paddingTop: "5px",
    paddingRight: "20px",
    textAlign: "center",
    justifyContent: "center",
    transition: ".3s",
    "&:hover": {
      textDecoration: "underline",
    },
  });


export default function Dropdown({props, url}){

    return(
        <div>
            <div className="dropdown1">
                <Link
                href={props.to}
                className={`navbar-links border-bottom-class ${
                    url === props.to ? "active-link" : ""
                }`}
                >
                {props.menu_name}
                </Link>
                
                <div className="dropdown-content">{
                    Object.keys(props.items).map((key)=>(
                        <React.Fragment key = {key}>
                            <StyledLink href={props.to + props.items[key]}>
                                {key}
                            </StyledLink>
                            <Divider />
                        </React.Fragment>)
                    )
                }
                </div>
            </div>
        </div>
    )
}