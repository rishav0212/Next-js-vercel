import React from "react";
import {
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { FiberManualRecord, Spa } from "@mui/icons-material";
import info from '@/product_details/info'


export default async function ProductTemplate({ params }){

  const product = params.name
  return (
    <>
      <Toolbar />
      <Typography variant="h4" className="text-center color-primary">
        {info[product].name}
      </Typography>
      <Toolbar />



      <Container maxWidth="md">

        <Typography variant="subtitle1" className="fw-600 mb-2 mt-5">
          Indications:- {info[product].indications}
        </Typography>
        <Typography
          variant="h6"
          className="color-primary mb--25 mt-4 text-uppercase"
        >
          Approved Name -{" "}
          <span style={{ color: "black" }}>{info[product].approvedName}</span>
        </Typography>

        <Typography variant="button" className="font--size-1125">
          Spray Presentation:
        </Typography>

        <Typography
          variant="h6"
          className="color-primary mb--25 mt-4 text-uppercase"
        >
          Description
        </Typography>

        <div className="font--size-1125">
          {(info[product].sprayPresentation).map((dataitem) => {
            return <Typography key={dataitem.id} >{dataitem}</Typography>
          })}
        </div>

        <Typography className="my-3">
          {info[product].description}
        </Typography>

        <Typography variant="h6" className="color-primary mt-4 text-uppercase">
          Indications
        </Typography>

        <ul>
          {info[product].indicationsList.map((dataitem) => {
            return (
              <ListItem key={dataitem.id} >
                <ListItemIcon>
                  <FiberManualRecord className="color-primary icon-small" />
                </ListItemIcon>
                <ListItemText>{dataitem}</ListItemText>
              </ListItem>
            )
          })}
        </ul>

        <Typography variant="h6" className="color-primary mt-4 text-uppercase">
          Side Effects
        </Typography>

        {/* <ul>
          {info[product].sideEffects.map((dataitem)=>{
            return (
              <ListItem>
                <ListItemIcon>
                  <FiberManualRecord className="color-primary icon-small" />
                </ListItemIcon>
                <ListItemText>{dataitem}</ListItemText>
              </ListItem>
            )
          })}
        </ul> */}


      </Container>
    </>
  );
};

export function generateStaticParams() {
  return (Object.keys(info).map((key) => {
    name: key
    console.log(key)
  }))
};

// export default ProductTemplate;