
import {
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  Grid,
  Paper,
  Box,
} from "@mui/material";
import { FiberManualRecord } from "@mui/icons-material";
import { Metadata } from "next";

export default function IronSpray() {
  const link = "azithromycin";
  const description = `
  Azithromycin is macrolide antibiotic used to treat or prevent
  certain bacterial infections, most often those causing middle ear
  infections, strep throat, pneumonia, typhoid, bronchitis.
  Azithromycin Superior activity against gram+ve,Gram-ve organism. It
  prevents bacteria from growing by interfering with their protein
  synthesis.`;

  return (
    <Grid
      container
      marginTop={4}
      justifyContent="center"
      alignContent="center"
      spacing={1}
    >
      <Grid item md={12}>
        <Typography variant="h4" className="text-center color-primary">
          AZITHROMYCIN
        </Typography>
      </Grid>

      <Grid
        marginTop={4}
        container
        item
        justifyContent="center"
        alignContent="center"
        md={7}
        sm={10}
        xs={11}
      >
        <Grid item md={7} sm={12} xs={12}>
          <Typography variant="subtitle1">
            Indications:- Antibiotic/Antibacterial
          </Typography>

          <Typography
            variant="h6"
            className="color-primary mb--25 mt-4 text-uppercase"
          >
            Approved Name -
            <span style={{ color: "black" }}>
              <br />
              Azithromycin Dihydrate
            </span>
          </Typography>

          <Typography variant="button" className="font--size-1125">
            Spray Presentation:
          </Typography>

          <List>
            <ListItem>
              <ListItemIcon>
                <FiberManualRecord className="color-primary icon-small" />
              </ListItemIcon>
              <ListItemText>Eq. to Azithromycin 100 mg/200 mg</ListItemText>
            </ListItem>
          </List>
        </Grid>

        <Grid item md={5}>
          <Paper elevation={12}>
            <img
              src={`/images/products/${link}.jpg`}
              alt="Saar Biotech"
              style={{ width: "100%", borderRadius: 10 }}
            />
          </Paper>
        </Grid>
        <Grid item md={12}>
          <Paper
            elevation={7}
            sx={{ marginTop: 2, padding: 2, borderRadius: 5 }}
          >
            <Typography
              variant="h6"
              className="color-primary mt-4 text-uppercase"
            >
              Description
            </Typography>

            <Typography className="my-3" textAlign={"justify"}>
              {description}
            </Typography>

            <Typography
              variant="h6"
              className="color-primary mt-4 text-uppercase"
            >
              Indications
            </Typography>

            <List>
              {[
                "Otitis Media",
                "Upper Respiratory Tract Infection",
                "Upper Respiratory Tract Infection",
                "Pneumonia",
                "Pharyngitis",
                "Sinusitis",
                "Skin or Soft Tissue Infection",
                "Gonococcal Infection - Uncomplicated",
              ].map((item, i) => (
                <ListItem key={i}>
                  <ListItemIcon>
                    <FiberManualRecord className="color-primary icon-small" />
                  </ListItemIcon>
                  <ListItemText>{item}</ListItemText>
                </ListItem>
              ))}
            </List>

            <Typography
              variant="h6"
              className="color-primary mt-4 text-uppercase"
            >
              Mechanism
            </Typography>

            <Typography className="my-3" textAlign={"justify"}>
              Azithromycin binds to the 50S subunit of the 70S bacterial
              ribosomes, and therefore inhibits RNA-dependent protein synthesis
              in bacterial cells.
            </Typography>

            <Typography
              variant="h6"
              className="color-primary mt-4 text-uppercase"
            >
              pharmacokinetics
            </Typography>

            <Typography className="my-3" textAlign={"justify"}>
              <b> Absorption:</b>
              Following oral administration in humans, azithromycin is widely
              distributed throughout the body bioavailability is approximately
              37%. The time taken to peak plasma levels is 2-3 hours.
              <br />
              <b>Distribution:</b>
              Pharmacokinetic studies in humans have shown markedly higher
              azithromycin levels in tissue than in plasma (up to 50 times the
              maximum observed concentration in plasma) indicating that the drug
              is heavily tissue bound. Concentrations in target tissues, such as
              lung, tonsil and prostate exceed the MIC90 for likely pathogens
              after a single dose.
              <br />
              <b>Elimination:</b>
              Plasma terminal elimination half-life closely reflects the tissue
              depletion half-life of 2 to 4 days. Approximately 12% of an
              intravenously administered dose is excreted in the urine over 3
              days as the parent drug, the majority in the first 24 hours.
              Biliary excretion of azithromycin is a major route of elimination
              for unchanged drug following oral administration. Very high
              concentrations of unchanged drug have been found in human bile,
              together with 10 metabolites, formed by Nand O-demethylation, by
              hydroxylation of the desosamine and aglycone rings, and by
              cleavage of the cladinose conjugate. Comparison of HPLC and
              microbiological assays in tissues suggests that metabolites play
              no part in the microbiological activity of azithromycin.
            </Typography>

            <Typography
              variant="h6"
              className="color-primary mt-4 text-uppercase"
            >
              Side effects
            </Typography>

            <List>
              <b>Side effects of Amoxycillin are most likely to be minor:</b>
              {["Abdominal pain", "Rash", "Headache"].map((item, i) => (
                <ListItem key={i}>
                  <ListItemIcon>
                    <FiberManualRecord className="color-primary icon-small" />
                  </ListItemIcon>
                  <ListItemText>{item}</ListItemText>
                </ListItem>
              ))}
            </List>
            <Typography
              variant="h6"
              className="color-primary mt-4 text-uppercase"
            >
              CONTRAINDICATION
            </Typography>

            <Typography className="my-3" textAlign={"justify"}>
              The use of azithromycin is contraindicated in patients with
              hypersensitivity to azithromycin, erythromycin, any macrolide or
              ketolide antibiotic.
            </Typography>

            <Typography
              variant="h6"
              className="color-primary mt-4 text-uppercase"
            >
              Conclusion
            </Typography>

            <Typography className="my-3" textAlign={"justify"}>
              <b>
                From the above discussion, it can be concluded that Azithromycin
                used to treat Infections of the middle ear, Upper Respiratory
                Tract Infection, Bronchitis, Pneumonia, Pharyngitis, Sinusitis
                and Skin or Soft Tissue Infection because azithromycin is
                macrolide antibiotic and used to treat bacterial infections by
                binds to the 50S subunit of the 70S bacterial ribosomes, and
                therefore inhibits RNA-dependent protein synthesis in bacterial
                cells.
              </b>
              <br />
              We are making superior quality of Azithromycin Suspension that is
              used to prevent bacterial infection like Upper Respiratory Tract
              Infection, Bronchitis, Pneumonia, Pharyngitis, Sinusitis, Skin or
              Soft Tissue Infection and Infections of the middle ear.
              <br /> Our offered Suspension is processed using high grade
              chemical compounds and other required drugs by our experienced
              quality controllers that ensure its quality, purity and chemical
              properties. Highly treasured among the clients for its
              reliability, accurate composition, excellent physical and purity,
              this Suspension is offered to our esteemed clients at the market
              leading prices.
            </Typography>
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
    "Azithromycin Suspension | Saar Biotech | Third party Medicine Contract Manufacturing",
  description:
    "Saar biotech Contract manufacturer of pharmaceuticals located in baddi( Excise free Zone) maufacturing  Azithromycin  Tablet/Suspension which is used to treat or prevent certain bacterial infections, most often those causing middle ear infections, strep throat, pneumonia, typhoid, and sinusitis.It is also effective against certain sexually transmitted infections, such as nongonococcal urethritis, chlamydia, and cervicitis.",
  keywords:
    "Azithromycin dihydrate IP, azithromycin suspension, azithromycin side effects, azithromycin dosage, azithromycin uses, azithromycin indication, skin infection, ear infection, Gonococcal Infection, 100mg, 200mg, mg, antibiotic drugs, antibacterial drugs ",
};
