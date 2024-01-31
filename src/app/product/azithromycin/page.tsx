import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  Grid,
  Link,
} from "@mui/material";
import { FiberManualRecord } from "@mui/icons-material";
import { Metadata } from "next";
import * as styles from "@/components/ProductPages/styles.js";
import ScrollToSection from "@/components/ProductPages/ScrollToSection/ScrollToSrction";

export default function Page() {
  const link = "azithromycin";
  const Sections = [
    "description",
    "indications",
    "mechanism",
    "pharmacokinetics",
    "side effects",
    "contraindication",
    "conclusion"
  ];
  const description = `
  Azithromycin is macrolide antibiotic used to treat or prevent
  certain bacterial infections, most often those causing middle ear
  infections, strep throat, pneumonia, typhoid, bronchitis.
  Azithromycin Superior activity against gram+ve, gram-ve organism. It
  prevents bacteria from growing by interfering with their protein
  synthesis.`;

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
              AZITHROMYCIN
            </Typography>
          </Grid>
          <Grid container item md={7} sm={12} xs={12}>
            <Grid display={"flex"}>
              <Typography variant="h6" sx={styles.indications.title}>
                <b>Indications -</b>
              </Typography>
              <Typography sx={styles.indications.data} variant="subtitle1">
                Antibiotic / Antibacterial
              </Typography>
            </Grid>

            <Grid display={"flex"}>
              <Typography variant="h6" sx={styles.approved.title}>
                <b>Approved Name -</b>
              </Typography>
              <Typography sx={styles.approved.data} variant="h6">
                Azithromycin Dihydrate
              </Typography>
            </Grid>

            <Grid>
              <Typography sx={styles.presentation.title} variant="h6">
                <b>Spray Presentation </b>
              </Typography>

              <Typography sx={styles.presentation.data} variant="body1">
                Each 5 ml contains :<br />
                Eq to Azithromycin 100mg/200mg
              </Typography>
            </Grid>

            <Link sx={{ color: "black" }} href="#description">
              <Typography variant="body2" sx={styles.readMoreGrid}>
                <b>Description : </b> Azithromycin is macrolide antibiotic used
                to treat or prevent certain bacterial infections, most often
                those causing middle ear . . .
              </Typography>
            </Link>

            <Link sx={{ color: "black" }} href="#pharmacokinetics">
              <Typography variant="body2" margin={2} sx={styles.readMoreGrid}>
                <b>Pharmacokinetics : </b> Absorption:Following oral
                administration in humans, azithromycin is widely distributed
                throughout the body bioavailability is approximate. . .
              </Typography>
            </Link>
          </Grid>

          <Grid item md={5} sm={7} xs={9} sx={styles.imgPaper}>
            <img
              src="/images/azithromycin1.jpg"
              alt="Azithromycin | Saar Biotech Product"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />
          </Grid>
        </Grid>

        <Grid item md={12} sx={styles.lowerGrid}>
          <ScrollToSection Sections={Sections} />

          <Typography variant="h6" id="description" sx={styles.sectionTitle}>
            DESCRIPTION
          </Typography>

          <Typography sx={styles.sectionData} textAlign="justify">
            {description}
          </Typography>

          {/** Indications Section */}
          <Typography variant="h6" id="indications" sx={styles.sectionTitle}>
            Indications
          </Typography>
          <List dense sx={styles.list}>
            {[
              "Otitis Media",
              "Upper Respiratory Tract Infection",
              "Pneumonia",
              "Pharyngitis",
              "Sinusitis",
              "Skin or Soft Tissue Infection",
              "Gonococcal Infection - Uncomplicated",
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

          {/** Mechanism Section */}
          <Typography variant="h6" id="mechanism" sx={styles.sectionTitle}>
            Mechanism
          </Typography>
          <Typography sx={styles.sectionData} textAlign="justify">
            Azithromycin binds to the 50S subunit of the 70S bacterial
            ribosomes, inhibiting RNA-dependent protein synthesis in bacterial
            cells.
          </Typography>

          {/** Pharmacokinetics Section */}
          <Typography
            variant="h6"
            sx={styles.sectionTitle}
            id="pharmacokinetics"
          >
            Pharmacokinetics
          </Typography>
          <Typography textAlign="justify" sx={styles.sectionData}>
            <b> Absorption: </b>
            Following oral administration in humans, azithromycin is widely
            distributed throughout the body bioavailability is approximately
            37%. The time taken to peak plasma levels is 2-3 hours.
            <br />
            <br />
            <b>Distribution: </b>
            Pharmacokinetic studies in humans have shown markedly higher
            azithromycin levels in tissue than in plasma (up to 50 times the
            maximum observed concentration in plasma) indicating that the drug
            is heavily tissue bound. Concentrations in target tissues, such as
            lung, tonsil and prostate exceed the MIC90 for likely pathogens
            after a single dose.
            <br />
            <br />
            <b>Elimination: </b>
            Plasma terminal elimination half-life closely reflects the tissue
            depletion half-life of 2 to 4 days. Approximately 12% of an
            intravenously administered dose is excreted in the urine over 3 days
            as the parent drug, the majority in the first 24 hours. Biliary
            excretion of azithromycin is a major route of elimination for
            unchanged drug following oral administration. Very high
            concentrations of unchanged drug have been found in human bile,
            together with 10 metabolites, formed by Nand O-demethylation, by
            hydroxylation of the desosamine and aglycone rings, and by cleavage
            of the cladinose conjugate. Comparison of HPLC and microbiological
            assays in tissues suggests that metabolites play no part in the
            microbiological activity of azithromycin.
          </Typography>

          {/** Side Effects Section */}
          <Typography variant="h6" id="side effects" sx={styles.sectionTitle}>
            Side Effects
          </Typography>
          <List dense sx={styles.list}>
            <b>Common side effects include:</b>
            {["Abdominal pain", "Rash", "Headache"].map((item, i) => (
              <ListItem key={i} sx={{}}>
                <ListItemIcon>✓</ListItemIcon>
                <ListItemText primaryTypographyProps={{ fontSize: "1em" }}>
                  {item}
                </ListItemText>
              </ListItem>
            ))}
          </List>

          {/** Contraindication Section */}
          <Typography
            variant="h6"
            id="contraindication"
            sx={styles.sectionTitle}
          >
            Contraindication
          </Typography>
          <Typography sx={styles.sectionData} textAlign="justify">
            The use of azithromycin is contraindicated in patients with
            hypersensitivity to azithromycin, erythromycin, or any macrolide or
            ketolide antibiotic.
          </Typography>

          {/** Conclusion Section */}
          <Typography variant="h6" id="conclusion" sx={styles.sectionTitle}>
            Conclusion
          </Typography>
          <Typography sx={styles.sectionData} textAlign="justify">
            <b>
              From the above discussion, it can be concluded that Azithromycin
              used to treat Infections of the middle ear, Upper Respiratory
              Tract Infection, Bronchitis, Pneumonia, Pharyngitis, Sinusitis and
              Skin or Soft Tissue Infection because azithromycin is macrolide
              antibiotic and used to treat bacterial infections by binds to the
              50S subunit of the 70S bacterial ribosomes, and therefore inhibits
              RNA-dependent protein synthesis in bacterial cells.
            </b>
            <br />
            We are making superior quality of Azithromycin Suspension that is
            used to prevent bacterial infection like Upper Respiratory Tract
            Infection, Bronchitis, Pneumonia, Pharyngitis, Sinusitis, Skin or
            Soft Tissue Infection and Infections of the middle ear.
            <br /> Our offered Suspension is processed using high grade chemical
            compounds and other required drugs by our experienced quality
            controllers that ensure its quality, purity and chemical properties.
            Highly treasured among the clients for its reliability, accurate
            composition, excellent physical and purity, this Suspension is
            offered to our esteemed clients at the market leading prices.
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
    "Azithromycin Suspension | Saar Biotech | Third party Medicine Contract Manufacturing",
  description:
    "Saar biotech Contract manufacturer of pharmaceuticals located in baddi( Excise free Zone) maufacturing  Azithromycin  Tablet/Suspension which is used to treat or prevent certain bacterial infections, most often those causing middle ear infections, strep throat, pneumonia, typhoid, and sinusitis.It is also effective against certain sexually transmitted infections, such as nongonococcal urethritis, chlamydia, and cervicitis.",
  keywords:
    "Azithromycin dihydrate IP, azithromycin suspension, azithromycin side effects, azithromycin dosage, azithromycin uses, azithromycin indication, skin infection, ear infection, Gonococcal Infection, 100mg, 200mg, mg, antibiotic drugs, antibacterial drugs ",
};
