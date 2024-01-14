import {
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { FiberManualRecord } from "@mui/icons-material";
import React from "react";

export default function VitaminD3Drops() {
  return (
    <>
      <Toolbar />
      <Typography variant="h4" className="text-center color-primary">
        Vitamin D3 Drops
      </Typography>
      <Toolbar />

      <Container maxWidth="md">
        <Typography variant="subtitle1" className="fw-600 mb-2">
          Indications - Rickets & Osteomalacia
        </Typography>

        <Typography variant="button" className="font--size-1125">
          Drop Presentation:
        </Typography>

        <Typography className="font--size-1125">Each 5ml Contains:</Typography>

        <Typography>Each 5ml (Teaspoonful) contains:</Typography>

        <Typography>Vitamin D3 IP 400/800 IU</Typography>

        <Typography
          variant="h6"
          className="color-primary mb--25 mt-4 text-uppercase"
        >
          Description
        </Typography>

        <Typography>
          This drops of vitamin D3 helps to get rid of bone disorders such as
          rickets and osteomalacia in children. As, the age and dark skin leads
          to restricted exposure to sunlight thus this result in deficiency of
          vitamin D.
        </Typography>

        <Typography variant="h6" className="color-primary mt-4 text-uppercase">
          Indications
        </Typography>

        <List>
          <ListItem>
            <ListItemIcon>
              <FiberManualRecord className="color-primary icon-small" />
            </ListItemIcon>
            <ListItemText>
              It helps in the metabolism of calcium and phosphorus
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <FiberManualRecord className="color-primary icon-small" />
            </ListItemIcon>
            <ListItemText>
              It helps to build strong bones and teeth’s
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <FiberManualRecord className="color-primary icon-small" />
            </ListItemIcon>
            <ListItemText>
              It promotes the growth and development of kids
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <FiberManualRecord className="color-primary icon-small" />
            </ListItemIcon>
            <ListItemText>
              It enhances the function of immune system
            </ListItemText>
          </ListItem>
        </List>

        <Typography
          variant="h6"
          className="color-primary mb--25 mt-4 text-uppercase"
        >
          Mechanism
        </Typography>

        <Typography>
          Vitamin D acts on the receptors present in the small intestine which
          enhances the absorption of calcium and phosphorus. It also stimulates
          the receptors present in osteoblasts which stimulates the nuclear
          factor KB which helps the maturation of bones for reabsorption of
          calcium and phosphorus.
        </Typography>

        <Typography variant="h6" className="color-primary mt-4 text-uppercase">
          Pharmacokinetics
        </Typography>

        <List>
          <ListItem>
            <ListItemIcon>
              <FiberManualRecord className="color-primary icon-small" />
            </ListItemIcon>
            <ListItemText>
              Absorption- It is absorbed orally from the small intestine
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <FiberManualRecord className="color-primary icon-small" />
            </ListItemIcon>
            <ListItemText>
              Protein Binding- It is 50-80% bound to proteins
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <FiberManualRecord className="color-primary icon-small" />
            </ListItemIcon>
            <ListItemText>
              Metabolism- It undergoes hydroxylation and converted into
              25-hydroxycalciderol
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <FiberManualRecord className="color-primary icon-small" />
            </ListItemIcon>
            <ListItemText>
              Excretion- It is excreted via bile and feces
            </ListItemText>
          </ListItem>
        </List>

        <Typography variant="h6" className="color-primary mt-4 text-uppercase">
          Interactions
        </Typography>

        <List>
          <ListItem>
            <ListItemIcon>
              <FiberManualRecord className="color-primary icon-small" />
            </ListItemIcon>
            <ListItemText>Phenobarbital</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <FiberManualRecord className="color-primary icon-small" />
            </ListItemIcon>
            <ListItemText>Phenytoin</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <FiberManualRecord className="color-primary icon-small" />
            </ListItemIcon>
            <ListItemText>Atorvastatin</ListItemText>
          </ListItem>
        </List>

        <Typography variant="h6" className="color-primary mt-4 text-uppercase">
          Side Effects
        </Typography>

        <List>
          <ListItem>
            <ListItemIcon>
              <FiberManualRecord className="color-primary icon-small" />
            </ListItemIcon>
            <ListItemText>Nausea</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <FiberManualRecord className="color-primary icon-small" />
            </ListItemIcon>
            <ListItemText>Vomiting</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <FiberManualRecord className="color-primary icon-small" />
            </ListItemIcon>
            <ListItemText>Poor appetite</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <FiberManualRecord className="color-primary icon-small" />
            </ListItemIcon>
            <ListItemText>Stomach-ache</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <FiberManualRecord className="color-primary icon-small" />
            </ListItemIcon>
            <ListItemText>Constipation</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <FiberManualRecord className="color-primary icon-small" />
            </ListItemIcon>
            <ListItemText>Diarrhoea</ListItemText>
          </ListItem>
        </List>

        <Typography variant="h6" className="color-primary mt-4 text-uppercase">
          Contraindications
        </Typography>

        <List>
          <ListItem>
            <ListItemIcon>
              <FiberManualRecord className="color-primary icon-small" />
            </ListItemIcon>
            <ListItemText>Contraindicated in sarcoidosis</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <FiberManualRecord className="color-primary icon-small" />
            </ListItemIcon>
            <ListItemText>Contraindicated in Kidney stones</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <FiberManualRecord className="color-primary icon-small" />
            </ListItemIcon>
            <ListItemText>Contraindicated in kidney disease</ListItemText>
          </ListItem>
        </List>

        <Toolbar />

        <Typography className="fst-italic fw-600">
          Disclaimer: The data uploaded is made from content already available
          on internet. The company holds no right of it and is not responsible
          for any wrong information.
        </Typography>

        <Toolbar />
      </Container>
    </>
  );
}
