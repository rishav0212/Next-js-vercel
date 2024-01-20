import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  Grid,
  Paper,
  Link,
} from "@mui/material";
import { FiberManualRecord } from "@mui/icons-material";
import { Metadata } from "next";
import * as styles from "@/components/ProductPages/styles.js";

export default function Page() {
  const link = "vitamin-d3-drops";

  return (
    <Grid
      container
      marginTop={3}
      justifyContent="center"
      alignContent="center"
      spacing={1}
    >
      <Grid container item md={8} sm={10} xs={11} sx={styles.pageItemGrid}>
        <Paper elevation={8} sx={styles.upperPaper}>
          <Grid
            container
            spacing={2}
            justifyContent={"center"}
            justifyItems={"center"}
          >
            <Grid item xs={12}>
              <Typography variant="h4" sx={styles.titleStyle}>
                Vitamin D3 Drops{" "}
              </Typography>
            </Grid>
            <Grid item md={7} sm={12} xs={12}>
              <Grid display={"flex"}>
                <Typography
                  variant="h6"
                  sx={{
                    color: "#EF3E00",
                    fontSize: "2.5em",
                  }}
                >
                  <b>Indications:-</b>
                </Typography>
                <Typography
                  fontSize={"2.5em"}
                  variant="subtitle1"
                  marginLeft={1}
                >
                  Rickets & Osteomalacia
                </Typography>
              </Grid>

              <Grid display={"flex"}>
                <Typography
                  variant="h6"
                  sx={{
                    color: "#EF3E00",
                    fontSize: "2.5em",
                  }}
                >
                  <b>Approved Name -</b>
                </Typography>
                <Typography fontSize={"2.5em"} variant="h6" marginLeft={1}>
                  Ofloxacin Ornidazole Suspension
                </Typography>
              </Grid>

              <Typography fontSize={"2.3em"}>
                <b>Drop Presentation :</b>
              </Typography>

              <Typography fontSize={"2em"} variant="body1" marginLeft={5}>
                <b>Each 5ml (Teaspoonful) contains:</b>
                <br />
                Vitamin D3 IP 400/800 IU
              </Typography>

              <Link sx={{ color: "black" }} href="#description">
                <Typography variant="body2" sx={styles.readMoreGrid}>
                  <b>Description : </b>This drops of vitamin D3 helps to get rid
                  of bone disorders such as rickets and osteomalacia in
                  children. As, the age and dark skin leads to restricted
                  exposure to sunlight thus this result in deficiency of vitamin
                  D.
                </Typography>
              </Link>

              <Link sx={{ color: "black" }} href="#mechanism">
                <Typography variant="body2" sx={styles.readMoreGrid}>
                  <b>Mechanism : </b> Vitamin D acts on the receptors present in
                  the small intestine which enhances the absorption of calcium
                  and phosphorus. It also stimulates the receptors present in
                  osteoblasts which stimulates the nuclear factor KB which helps
                  the maturation of bone
                </Typography>
              </Link>
            </Grid>

            <Grid item md={5} sm={7} xs={9}>
              <Paper elevation={3} sx={styles.imgPaper}>
                <img
                  src={`/images/vitamin-d3-drops.jpg`}
                  alt="Vitamin d3 drops | Saar Biotech Product"
                  style={{
                    // width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </Paper>
            </Grid>
          </Grid>
        </Paper>

        <Grid item md={12}>
          <Paper elevation={7} sx={styles.lowerPaper} id="description">
            <Typography variant="h6" sx={styles.sectionTitle}>
              DESCRIPTION
            </Typography>

            <Typography fontSize={"1.9em"} textAlign="justify">
              This drops of vitamin D3 helps to get rid of bone disorders such
              as rickets and osteomalacia in children. As, the age and dark skin
              leads to restricted exposure to sunlight thus this result in
              deficiency of vitamin D.
            </Typography>

            {/** Indications Section */}
            <Typography variant="h6" sx={styles.sectionTitle}>
              Indications
            </Typography>
            <List dense sx={{ fontSize: "1.9em" }}>
              {[
                "              It helps in the metabolism of calcium and phosphorus",
                "It helps to build strong bones and teeth’s",
                "It promotes the growth and development of kids",
                "It enhances the function of immune system",
              ].map((item, i) => (
                <ListItem key={i}>
                  <ListItemIcon>
                    <FiberManualRecord className="color-primary icon-small" />
                  </ListItemIcon>
                  <ListItemText
                    primary={item}
                    primaryTypographyProps={{ fontSize: "1em" }}
                  />
                </ListItem>
              ))}
            </List>

            {/** Mechanism Section */}
            <Typography variant="h6" sx={styles.sectionTitle} id="mechanism">
              Mechanism
            </Typography>
            <Typography fontSize={"1.9em"} textAlign="justify">
              Vitamin D acts on the receptors present in the small intestine
              which enhances the absorption of calcium and phosphorus. It also
              stimulates the receptors present in osteoblasts which stimulates
              the nuclear factor KB which helps the maturation of bones for
              reabsorption of calcium and phosphorus.
            </Typography>

            <Typography variant="h6" sx={styles.sectionTitle}>
              Pharmacokinetics
            </Typography>
            <List dense sx={{ fontSize: "1.9em" }}>
              {[
                "<b>Absorption</b>- It is absorbed orally from the small intestine",
                " <b>Protein Binding- </b>It is 50-80% bound to proteins",
                "<b>Metabolism-</b> It undergoes hydroxylation and converted into 25-hydroxycalciderol",
                "<b>Excretion-</b> It is excreted via bile and feces",
              ].map((item, i) => (
                <ListItem key={i} sx={{}}>
                  <ListItemIcon>
                    <FiberManualRecord className="color-primary icon-small" />
                  </ListItemIcon>
                  <ListItemText primaryTypographyProps={{ fontSize: "1em" }}>
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </ListItemText>
                </ListItem>
              ))}
            </List>

            <Typography variant="h6" sx={styles.sectionTitle} id="interactions">
              Interactions
            </Typography>
            <List dense sx={{ fontSize: "1.9em" }}>
              {["Phenobarbital", " Phenytoin", "Atorvastatin"].map(
                (item, i) => (
                  <ListItem key={i} sx={{}}>
                    <ListItemIcon>
                      <FiberManualRecord className="color-primary icon-small" />
                    </ListItemIcon>
                    <ListItemText primaryTypographyProps={{ fontSize: "1em" }}>
                      {item}
                    </ListItemText>
                  </ListItem>
                )
              )}
            </List>

            {/** Side Effects Section */}
            <Typography variant="h6" sx={styles.sectionTitle}>
              Side Effects
            </Typography>
            <List dense sx={{ fontSize: "1.9em" }}>
              {[
                "Nausea",
                "Vomiting",
                "Poor appetite",
                "Stomach-ache",
                "Constipation",
                "Diarrhoea",
              ].map((item, i) => (
                <ListItem key={i} sx={{}}>
                  <ListItemIcon>✓</ListItemIcon>
                  <ListItemText primaryTypographyProps={{ fontSize: "1em" }}>
                    {item}
                  </ListItemText>
                </ListItem>
              ))}
            </List>

            {/** Contraindication Section */}
            <Typography variant="h6" sx={styles.sectionTitle}>
              Contraindication
            </Typography>
            <List dense sx={{ fontSize: "1.9em" }}>
              {[
                "Contraindicated in sarcoidosis",
                "Contraindicated in Kidney stones",
                "Contraindicated in kidney disease",
              ].map((item, i) => (
                <ListItem key={i} sx={{}}>
                  <ListItemIcon>
                    <FiberManualRecord className="color-primary icon-small" />
                  </ListItemIcon>
                  <ListItemText primaryTypographyProps={{ fontSize: "1em" }}>
                    {item}
                  </ListItemText>
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>

        <Toolbar />
        <Typography className="fst-italic fw-600">
          Disclaimer: The data uploaded is made from content already available
          on internet. The company holds no right of it and is not responsible
          for any wrong information.
        </Typography>

        <Toolbar />
      </Grid>
    </Grid>
  );
}

export const metadata: Metadata = {
  title:
    "Vitamin d3 dops | Saar Biotech | Third party Medicine Contract Manufacturing",
  description: "",
  keywords: "",
};
