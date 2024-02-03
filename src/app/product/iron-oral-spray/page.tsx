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
  const link = "iron-oral-spray";

  return (
    <Grid
      container
      marginTop={3}
      justifyContent="center"
      alignContent="center"
      spacing={1}
    >
      <Grid container item md={8} sm={10} xs={11} sx={styles.pageItemGrid}>
        <Grid container sx={styles.upperGrid}>
          <Grid item xs={12}>
            <Typography variant="h4" sx={styles.titleStyle}>
              Iron Oral Spray
            </Typography>
          </Grid>
          <Grid item md={7} sm={12} xs={12}>
            <Grid display={"flex"}>
              <Typography variant="h6" sx={styles.indications.title}>
                <b>Indications -</b>
              </Typography>
              <Typography sx={styles.indications.data} variant="subtitle1">
                Avoiding digestive comfort and enhancing bioavailability
              </Typography>
            </Grid>

            <Grid display={"flex"}>
              <Typography variant="h6" sx={styles.approved.title}>
                <b>Approved Name -</b>
              </Typography>
              <Typography sx={styles.approved.data} variant="h6">
                Iron Oral Spray
              </Typography>
            </Grid>

            <Grid>
              {" "}
              <Typography sx={styles.presentation.title} variant="h6">
                <b>Spray Presentation :</b>
              </Typography>
              <Typography sx={styles.presentation.data} variant="body1">
                <b>Iron</b> (As Ferric ammonium citrate) 4.2 mg
              </Typography>
            </Grid>

            <Link sx={{ color: "black" }} href="#description">
              <Typography variant="body2" sx={styles.readMoreGrid}>
                <b>Description : </b> Iron oral spray is an effective
                intra-spray technology formulated to directly deliver iron into
                the bloodstream, bypassing the primary processing by the
                digestive system and thus preventing digestive discomfort
                experienced from ingested iron supplements while also enhancing
                bioavailability. The tiny droplets absorb quickly, providing
                fast nutrient uptake.
              </Typography>
            </Link>

            <Link sx={{ color: "black" }} href="#interactions">
              <Typography variant="body2" sx={styles.readMoreGrid}>
                <b>Main Features : </b> Treats Anemia, Boosts Hemoglobin,
                Reduces Fatigue, Increases Muscle Strength, Boosts Immunity,
                Improves Concentration", Reduces Bruising, Restores Sleep
              </Typography>
            </Link>
          </Grid>

          <Grid item md={5} sm={7} xs={9} sx={styles.imgPaper}>
            <img
              src={`/images/iron-oral-spray.jpg`}
              alt="iron oral spray | Saar Biotech Product"
              style={{
                width: "100%",
                // height: "100%",
                objectFit: "contain",
              }}
            />
          </Grid>
        </Grid>

        <Grid item md={12} sx={styles.lowerGrid}>
          <Typography variant="h6" sx={styles.sectionTitle} id="description">
            DESCRIPTION
          </Typography>

          <Typography sx={styles.sectionData}>
            Iron oral spray is an effective intra-spray technology formulated to
            directly deliver iron into the bloodstream, bypassing the primary
            processing by the digestive system and thus preventing digestive
            discomfort experienced from ingested iron supplements while also
            enhancing bioavailability. The tiny droplets absorb quickly,
            providing fast nutrient uptake.
            <br /> <br /> Iron is an essential mineral. Most of the iron in the
            body is found in the hemoglobin of red blood cells and in the
            myoglobin of muscle cells. Iron is vital for transporting oxygen and
            carbon dioxide. It is highly regarded for its role in supporting a
            healthy immune system, treating anemia, boosting hemoglobin,
            reducing tiredness and supporting a normal cognitive function.
          </Typography>

          {/** Indications Section */}
          <Typography variant="h6" sx={styles.sectionTitle}>
            Indications
          </Typography>
          <List dense sx={styles.list}>
            {[
              "Prevents digestive discomfort",
              "educes tiredness and fatigue",
              "Increases bioavailability",
              "Effective alternative to tablets and capsules",
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

          <Typography variant="h6" sx={styles.sectionTitle}>
            Main Features
          </Typography>
          <List dense sx={styles.list}>
            {[
              "Treats Anemia",
              "Boosts Hemoglobin",
              "Reduces Fatigue",
              "Increases Muscle Strength",
              "Boosts Immunity",
              "Improves Concentration",
              "Reduces Bruising",
              "Restores Sleep",
            ].map((item, i) => (
              <ListItem key={i}>
                <ListItemIcon>
                  <FiberManualRecord className="color-primary icon-small" />
                </ListItemIcon>
                <ListItemText primaryTypographyProps={{ fontSize: "1em" }}>
                  {item}
                </ListItemText>
              </ListItem>
            ))}
          </List>

          <Typography variant="h6" sx={styles.sectionTitle}>
            Storage
          </Typography>
          <List dense sx={styles.list}>
            {[
              "Store at room temperature and out of direct sunlight.",
              "Keep out of reach of children.",
              "Once opened, use within 6 months.",
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
    "Iron Oral Spray | Saar Biotech | Third party Medicine Contract Manufacturing",
  description: "Iron oral spray is an effective intra-spray technology formulated to directly deliver iron into the bloodstream, bypassing the primary processing by the digestive system and thus preventing digestive discomfort experienced from ingested iron supplements while also enhancing bioavailability. ",
  keywords: "iron, oral, spray, Avoiding digestive comfort, enhancing bioavailability, digestive system, third party, pharma, pharmaceutical, manufacturing, baddi, chandigarh",
};
