import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  Grid,
  Divider,
  Chip,
  Link,
} from "@mui/material";
import { FiberManualRecord } from "@mui/icons-material";
import { Metadata } from "next";
import * as styles from "@/components/ProductPages/styles.js";
import ScrollToSection from "@/components/ProductPages/ScrollToSection/ScrollToSrction";
import ImageGallery from "@/components/ImageGallery/ImageGallery";

export default function Page() {
  const link = "azithromycin";
  const Sections = [
    "description",
    "indications",
    "mechanism",
    "pharmacokinetics",
    "side effects",
    "contraindication",
    "conclusion",
  ];
  const description = `
  Tretinoin 0.025% Cream is a derivative of vitamin A used in the treatment of acne, which appears as spots or pimples on the face, chest, or back. Additionally, it aids in smoothing rough facial skin and diminishing fine wrinkles.
  `;

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
              TRETINOIN
            </Typography>
          </Grid>
          <Grid container item md={7} sm={12} xs={12}>
            <Grid display={"flex"}>
              <Typography sx={styles.indications.title}>
                <b>Indications:</b>
              </Typography>
              <Typography sx={styles.indications.data}>Anti Acne</Typography>
            </Grid>

            <Grid display={"flex"}>
              <Typography sx={styles.indications.title}>
                <b>Approved Name:</b>
              </Typography>
              <Typography sx={styles.indications.data}>
                Azithromycin Dihydrate
              </Typography>
            </Grid>

            <Grid>
              <Typography sx={styles.indications.title} variant="h6">
                <b>Cream Presentation </b>
              </Typography>

              <Typography sx={styles.indications.data} variant="body1">
                Tretinoin USP 0.0255%, 0.05% w/w, 0.1 % w/w
              </Typography>
            </Grid>
          </Grid>

          <Grid item md={5} sm={7} xs={9} sx={styles.imgPaper}>
            {/* <img
              src="/images/azithromycin1.jpg"
              alt="Azithromycin | Saar Biotech Product"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            /> */}
            <ImageGallery />
          </Grid>
        </Grid>

        <Grid container item md={12} sx={styles.lowerGrid}>
          <ScrollToSection Sections={Sections} />

          <Typography id="description" sx={styles.sectionTitle}>
            DESCRIPTION
            {/* <hr style={{ width: "100%" }} /> */}
            <Divider />
          </Typography>

          <Typography sx={styles.sectionData} textAlign="justify">
            {description}
            <br />
            Tretin 0.025% Cream reduces excessive oil production of the skin.
            Ideally, a pinpoint application at nighttime is recommended for the
            duration prescribed by your doctor. The amount you need and for how
            long you need to take it will depend on what you are being treated
            for. You should normally wash and dry the affected area before
            applying a thin layer of this medicine. Follow your doctor’s
            instructions. You should not apply it to damaged or broken skin and
            avoid contact with your mouth, eyes, and nose. It may take several
            weeks for your symptoms to improve but keep using it regularly to
            get the most benefit. Consult your doctor again if you do not notice
            any improvement after a few weeks. Using more medicine or applying
            it more often than prescribed will not make it work any faster and
            may increase the side effects.
          </Typography>

          {/** Indications Section */}
          <Typography variant="h6" id="indications" sx={styles.sectionTitle}>
            Indications
            <Divider />
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
            <Divider />
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
            <Divider />
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
            <Divider />
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
            <Divider />
          </Typography>
          <Typography sx={styles.sectionData} textAlign="justify">
            The use of azithromycin is contraindicated in patients with
            hypersensitivity to azithromycin, erythromycin, or any macrolide or
            ketolide antibiotic.
          </Typography>

          {/** Conclusion Section */}
          <Typography variant="h6" id="conclusion" sx={styles.sectionTitle}>
            Conclusion
            <Divider />
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
    "Tretinoin | Saar Biotech | Third party Medicine Contract Manufacturing",
  description:
    "Saar biotech Contract manufacturer of pharmaceuticals located in baddi( Excise free Zone) maufacturing  Azithromycin  Tablet/Suspension which is used to treat or prevent certain bacterial infections, most often those causing middle ear infections, strep throat, pneumonia, typhoid, and sinusitis.It is also effective against certain sexually transmitted infections, such as nongonococcal urethritis, chlamydia, and cervicitis.",
  keywords:
    "Azithromycin dihydrate IP, azithromycin suspension, azithromycin side effects, azithromycin dosage, azithromycin uses, azithromycin indication, skin infection, ear infection, Gonococcal Infection, 100mg, 200mg, mg, antibiotic drugs, antibacterial drugs ",
};
