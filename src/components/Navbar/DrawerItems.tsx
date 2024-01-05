import React from 'react';

import {
    List,
    ListItem,
    ListItemText,
    Divider,
  } from "@mui/material";
import Link from 'next/link';

export default function DrawerItem({props, onclick}){

    return (
        <List component="div" disablePadding>
            {
                Object.keys(props.items).map((key)=>
                <React.Fragment key={key}>
                    <ListItem className="text-center justify-content-center">
                    <Link
                        href={props.to + props.items[key]}
                        className="navbar-dropdown-links"
                        onClick={onclick}
                    >
                        <ListItemText primary={key} />
                    </Link>
                    </ListItem>
                    <Divider />

                </React.Fragment>
                )
            }
        </List>
    )

}