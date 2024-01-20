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
  const link = "multivitamin-oral-spray";

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
                Multivitamin Oral Spray
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
                  Health Supplement
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
                  Multivitamin Oral Spray
                </Typography>
              </Grid>

              <Typography fontSize={"2.3em"}>
                <b>Spray Presentation :</b>
              </Typography>

              <Typography fontSize={"2em"} variant="body1" marginLeft={5}>
                Vitamin C 5 mg
                <br />
                Vitamin B3(Niacin) 2 mg
                <br />
                Vitamin B5(Pantothenic acid) 1.25 mg
                <br />
                Vitamin B2(As Sodium Phosphate) 0.35 mg
                <br />
                Vitamin B6 0.3 mg
                <br />
                Vitamin B1 0.275 mg
                <br />
                Vitamin B9(Folic Acid) 25 mcg
                <br />
                Vitamin A 45 mcg
                <br />
                Iodine 37.5 mcg
                <br />
                Vitamin K1 13.75 mcg
                <br />
                Selenium 10 mcg
                <br />
                Vitamin B7(Biotin) 7.5 mcg
                <br />
                Vitamin D3 2.5 mcg
                <br />
                Cyanocobalamin 0.25 mcg
              </Typography>
            </Grid>

            <Grid item md={5} sm={7} xs={9}>
              <Paper elevation={3} sx={styles.imgPaper}>
                <img
                  src={`/images/multivitamin-oral-spray.jpg`}
                  alt="multivitamin oral spray | Saar Biotech Product"
                  style={{
                    width: "100%",
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
              A multivitamin is a preparation intended to serve as a dietary
              supplement with vitamins, dietary minerals, and other nutritional
              elements. Multivitamins are a combination of many different
              vitamins that are normally found in foods and other natural
              sources .Multivitamins are used to provide vitamins that are not
              taken in through the diet. Multivitamins are also used to treat
              vitamin deficiencies (lack of vitamins) caused by illness,
              pregnancy, poor nutrition, digestive disorders, and many other
              conditions. The Multi Vitamin oral spray is designed to give our
              bodies a unique formulation of vitamins many of us miss out on due
              to busy lifestyles, poor diets and the reduced nutrient quality in
              highly processed foods. Formulated to provide optimal nutritional
              delivery, each spray provides active ingredients in micro-sized
              droplets that coat and permeate the soft-tissue of the inner
              cheek, delivery the essential nutrients into the rich vein system.
              Multivitamins are an ideal solution to help plug the nutritional
              gaps left by diet. This could be down to busy lifestyles,
              processed foods or restricted diets vegetarian etc.
              <br />
              <br />
              <b>
                The combination essential nutrients works to support the body in
                a number of ways:
              </b>
              <br />
              <br />
              <b>Vitamin A – </b>Contributes to the maintenance of normal skin
              and vision
              <br />
              <b>Vitamin D –</b> Is essential to support the immune system,
              normal bones and teeth and contributes to normal muscle function.
              <br />
              <b>Vitamin C –</b> Contributes to the normal function of the
              immune system and nervous system. Helps fight tiredness and
              fatigue
              <br />
              <b>Vitamin K –</b> Works in partnership with vitamin D for bone
              health but is also essential to support normal blood clotting.
              <br />
              <b>Vitamin B complex –</b> Supports energy metabolism and reducing
              tiredness and fatigue
              <br />
              <br />
              <b>
                The final ingredients are two essential minerals, Iodine and
                Selenium. Iodine is important for normal cognitive and
                neurological function, while Selenium supports the maintenance
                of normal hair and nails.
              </b>{" "}
            </Typography>

            {/** Indications Section */}
            <Typography variant="h6" sx={styles.sectionTitle}>
              Indications
            </Typography>
            <List dense sx={{ fontSize: "1.9em" }}>
              <b>Ofloxacin:</b>
              {[
                "              MultiVitamins Spray&nbsp;delivers a safe combination of multivitamins necessary for optimal overall function.",
                "Helps supplement dietary deficiencies, used to treat or prevent vitamin deficiency due to poor diet, certain illnesses or during&nbsp;pregnancy",
                "Supports a healthy immune system",
                "Vitamins&nbsp;are important building blocks of the body and help keep you in good health",
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
              <b>How IT WORKS?</b>
              <br />
              As an oral spray MultiVitamin bypasses processing by the digestive
              system and instead delivers the multi-nutrient formulation
              straight into the bloodstream via the rich vascular system within
              the mouth.
              <br />
              <br />
              <b>How TO USE IT?</b>
              <br />
              Four sprays daily or as advised by your health care specialist.
              Spray under the tongue or on the inside of your cheek for optimal
              absorption.
            </List>


            {/** Side Effects Section */}
            <Typography variant="h6" sx={styles.sectionTitle}>
              Side Effects
            </Typography>
            <List dense sx={{ fontSize: "1.9em" }}>
              {[
                "unusual or unpleasant taste in your mouth.",
                "Diarrhea, or upset stomach may occur.",
                "These effects are usually temporary and may disappear as your body adjusts to this ",
              ].map((item, i) => (
                <ListItem key={i} sx={{}}>
                  <ListItemIcon>✓</ListItemIcon>
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
    "MultiVitamin Iron Spray | Saar Biotech | Third party Medicine Contract Manufacturing",
  description:
    "",
  keywords:
    "",
};
