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
  const link = "immunity-booster-spray";

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
              Immunity Booster Spray
            </Typography>
          </Grid>
          <Grid item md={7} sm={12} xs={12}>
            <Grid display={"flex"}>
              <Typography variant="h6" sx={styles.indications.data}>
                <b>Indications:-</b>
              </Typography>{" "}
              <Typography sx={styles.indications.data} variant="subtitle1">
                Boost your immune system
              </Typography>
            </Grid>

            <Grid display={"flex"}>
              {" "}
              <Typography variant="h6" sx={styles.approved.title}>
                <b>Approved Name -</b>
              </Typography>
              <Typography sx={styles.approved.data} variant="h6">
                Immunity Booster Spray
              </Typography>
            </Grid>

            <Grid>
              <Typography sx={styles.presentation.title} variant="h6">
                <b>Spray Presentation :</b>
              </Typography>

              <Typography sx={styles.presentation.data} variant="body1">
                Vitamin C 40 mg,
                <br /> Zinc Sulphate 5.7 mg,
                <br /> Ashwagandha 25 mg,
                <br /> Giloy 20 mg,
                <br /> Astaxanthin 5 mg,
                <br /> Vitamin B1 1 mg,
                <br /> Vitamin D 10 mcg
              </Typography>
            </Grid>
          </Grid>

          <Grid item md={5} sm={7} xs={9} sx={styles.imgPaper}>
            <img
              src={`/images/immunity-booster-spray.jpg`}
              alt="Immunity Booster Spray | Saar Biotech Product"
              style={{
                // width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography sx={styles.sectionData}>
              Our Immunity spray is mainly designed to boost up immunity and
              prevent damage from free radicals, use this spray to help boost
              your immune system, especially as the cold and flu season goes on
              the attack. The functions of all nutrients are well known, and
              each of them plays one or more key roles in maintaining the daily
              functions basics to health and life itself.
              <br />
              Our immunity spray produces rapid and sustained relief, allowing
              you to recover quickly and be back in your daily life.
              <br />
              This spray is easier to take for those people who cannot or do not
              like taking pills, capsules, or any other dosage form. This is
              also especially useful for those who experience difficulty in
              swallowing tablets.
              <br />
              The rational use of nutritional supplements, combined with a
              healthy diet, will contribute substantially to health promotion
              and work in balance and synergism on protection and integration of
              the physiological functions of the body.
              <br />
            </Typography>
          </Grid>
        </Grid>

        <Grid item md={12} sx={styles.lowerGrid}>
          <Typography variant="h6" id="description" sx={styles.sectionTitle}>
            DESCRIPTION
          </Typography>

          <Typography sx={styles.sectionData}>
            <b>Ashwagandha</b> strengthens immune function by improving the
            cell-mediated immunity.
            <br />
            <b>Giloy</b> helps in boosting up the immune system and helps to
            remove extra toxins from the body and rejuvenates the body
            <br />
            <b>Vitamin B1</b> Metabolites of carbohydrate, keeps heart and brain
            healthy.
            <br />
            <b>Vitamin D</b> helps in calcium absorption to build strong bones.
            <br />
            <b>Vitamin C and Zinc</b> contribute to your normal functioning of
            the immune system and both are required for healthy cell division
            and protein synthesis.{" "}
          </Typography>

          {/** Indications Section */}
          <Typography variant="h6" sx={styles.sectionTitle}>
            Indications
          </Typography>
          <List dense sx={styles.list}>
            <b>This formula has been formulated to provide:</b>
            {[
              "Antioxidant activity",
              "Boosts your energy levels and helps you combat the weakness",
              "It provides protection against pollutants",
              "Improve the function of neurons as an antioxidant",
              "Help keep blood sugar and cholesterol levels",
              "Promotes skin health through increased collagen formation",
              "Minimize digestive complaints",
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
          <Typography variant="h6" sx={styles.sectionTitle}>
            Main Features
          </Typography>
          <Typography sx={styles.sectionData}>
            Immunity spray fits into any schedule and can be taken anywhere.
          </Typography>

          {/** Pharmacokinetics Section */}
          <Typography variant="h6" sx={styles.sectionTitle} id="interactions">
            Side Effects
          </Typography>
          <Typography sx={styles.sectionData}>
            The product is possible safe for most adults. There is no
            disadvantage associated with the product if taken under the
            recommended usage. However, some are: headache, nausea, vomiting,
            and upset stomach.
            <br /> <br />
            If symptoms persist for a longer time, consult your dietician.
          </Typography>

          {/** Contraindication Section */}
          <Typography variant="h6" sx={styles.sectionTitle}>
            Warnings
          </Typography>
          <Typography sx={styles.sectionData}>
            Pregnant and lactating mothers should not take any single supplement
            in higher – than – normal doses unless recommended by a health –
            care provider for special conditions. The combination should only be
            used in pregnancy and lactation if benefits outweigh the risk.
          </Typography>

          <Typography variant="h6" sx={styles.sectionTitle}>
            Dosage
          </Typography>
          <Typography sx={styles.sectionData}>
            Use 4 Spray a day or as directed by the Dietician
          </Typography>
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
    "Immunity Booster Spray | Saar Biotech | Third-party Medicine Contract Manufacturing",
  description:
    "Boost your immune system with Saar Biotech's Immunity Booster Spray. Our spray is designed to prevent damage from free radicals and help you combat the cold and flu season. Formulated with key nutrients like Ashwagandha, Giloy, Vitamin B1, Vitamin D, Vitamin C, and Zinc, our spray enhances cell-mediated immunity, removes toxins from the body, supports heart and brain health, promotes strong bones, and contributes to healthy skin. Experience rapid relief and improved well-being with our convenient spray, suitable for those who prefer not to swallow pills or capsules.",
  keywords:
    "Immunity Booster Spray, immune system, Ashwagandha, giloy, Vitamin B1, Vitamin D, Vitamin C, zinc, pharma, pharmaceutical, manufacturing, baddi, chandigarh",
};

