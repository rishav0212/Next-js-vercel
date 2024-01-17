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
  Link,
} from "@mui/material";
import { FiberManualRecord } from "@mui/icons-material";
import { Metadata } from "next";

export default function Page() {
  const link = "azithromycin";
  const description = `
  Azithromycin is macrolide antibiotic used to treat or prevent
  certain bacterial infections, most often those causing middle ear
  infections, strep throat, pneumonia, typhoid, bronchitis.
  Azithromycin Superior activity against gram+ve,Gram-ve organism. It
  prevents bacteria from growing by interfering with their protein
  synthesis.`;

  const sectionTitleStyle = {
    color: "whitesmoke",
    display: "inline-block",
    borderRadius: 10,
    background: `linear-gradient(45deg, #EF3E00 30%, #FF8E53 90%)`,
    padding: 1.2,
    boxShadow: "0 4px 6px rgba(0,0,0, 0.8)",
    marginBottom: 0.5,
    marginTop: 2,
    width: "250px",
    textAlign: "center",
    "&:hover": {
      boxShadow: "0 6px 10px rgba(0, 0, 0, 0.9)",
    },
  };

  const listItemStyle = {
    display: "flex",
    alignItems: "center",
    // margin: 0,
  };

  return (
    <Grid
      container
      marginTop={3}
      justifyContent="center"
      alignContent="center"
      spacing={1}
    >
      <Grid
        marginTop={2}
        container
        item
        justifyContent="center"
        alignContent="center"
        md={8}
        sm={10}
        xs={11}
      >
        <Paper
          elevation={8}
          sx={{
            width: "100%",
            padding: 2,
            borderRadius: 5,
            backgroundColor: "#f0f0f0",
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography
                variant="h4"
                sx={{
                  color: "#EF3E00",
                  fontWeight: "bold",
                  textShadow: "4px 2px 4px rgba(0, 0, 0, 0.3)",
                  marginBottom: 3,
                  textAlign: "center",
                  "&:hover": {
                    textShadow: "5px 2px 4px rgba(0, 0, 0, 0.4)",
                  },
                }}
              >
                AZITHROMYCIN
              </Typography>
            </Grid>
            <Grid item md={7} sm={12} xs={12}>
              <Grid display={"flex"}>
                <Typography
                  variant="h6"
                  sx={{ color: "#EF3E00", display: "inline-block" }}
                >
                  <b>Indications:-</b>
                </Typography>
                <Typography variant="subtitle1" marginLeft={1}>
                  Antibiotic / Antibacterial
                </Typography>
              </Grid>

              <Grid display={"flex"}>
                <Typography
                  variant="h6"
                  sx={{ color: "#EF3E00", display: "inline-block" }}
                >
                  <b>Approved Name -</b>
                </Typography>
                <Typography variant="h6" marginLeft={1}>
                  Azithromycin Dihydrate
                </Typography>
              </Grid>

              <Typography className="my-1" variant="h6">
                <b>Spray Presentation </b>
              </Typography>

              <Typography variant="body1" marginLeft={5}>
                Each 5 ml contains :<br />
                Eq to Azithromycin 100mg/200mg
              </Typography>

              <Link sx={{ color: "black" }} href="#description">
                <Typography
                  variant="body2"
                  sx={{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    WebkitLineClamp: 2,
                    textOverflow: "ellipsis",
                    marginInline: 2,
                    marginTop: 2,
                  }}
                >
                  <b>Description : </b> Azithromycin is macrolide antibiotic
                  used to treat or prevent certain bacterial infections, most
                  often those causing middle ear . . .
                </Typography>
              </Link>

              <Link sx={{ color: "black" }} href="#pharmacokinetics">
                <Typography
                  variant="body2"
                  margin={2}
                  sx={{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    WebkitLineClamp: 2,
                    textOverflow: "ellipsis",
                    marginInline: 2,
                    marginTop: 1,
                  }}
                >
                  <b>Pharmacokinetics : </b> Absorption:Following oral
                  administration in humans, azithromycin is widely distributed
                  throughout the body bioavailability is approximate. . .
                </Typography>
              </Link>
            </Grid>

            <Grid item md={5}>
              <Paper
                elevation={3}
                sx={{
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: 5,
                  transition: "box-shadow 0.3s ease-in-out",
                  "&:hover": {
                    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.6)",
                    transform: "scale(1.05)",
                  },
                }}
              >
                <img
                  src={`/images/azithromycin.jpg`}
                  alt="Azithromycin | Saar Biotech Product"
                  style={{
                    width: "100%",
                    objectFit: "cover",
                  }}
                />
              </Paper>
            </Grid>
          </Grid>
        </Paper>

        <Grid item md={12}>
          <Paper
            elevation={7}
            sx={{
              marginTop: 4,
              padding: 3,
              borderRadius: 5,
              backgroundColor: "#f0f0f0",
            }}
            id="description"
          >
            <Typography variant="h6" sx={sectionTitleStyle}>
              DESCRIPTION
            </Typography>

            <Typography className="my-3" textAlign="justify">
              {description}
            </Typography>

            {/** Indications Section */}
            <Typography variant="h6" sx={sectionTitleStyle}>
              Indications
            </Typography>
            <List dense>
              {[
                "Otitis Media",
                "Upper Respiratory Tract Infection",
                "Pneumonia",
                "Pharyngitis",
                "Sinusitis",
                "Skin or Soft Tissue Infection",
                "Gonococcal Infection - Uncomplicated",
              ].map((item, i) => (
                <ListItem key={i} sx={listItemStyle}>
                  <ListItemIcon>
                    <FiberManualRecord className="color-primary icon-small" />
                  </ListItemIcon>
                  <ListItemText>{item}</ListItemText>
                </ListItem>
              ))}
            </List>

            {/** Mechanism Section */}
            <Typography variant="h6" sx={sectionTitleStyle}>
              Mechanism
            </Typography>
            <Typography className="my-3" textAlign="justify">
              Azithromycin binds to the 50S subunit of the 70S bacterial
              ribosomes, inhibiting RNA-dependent protein synthesis in bacterial
              cells.
            </Typography>

            {/** Pharmacokinetics Section */}
            <Typography
              variant="h6"
              sx={sectionTitleStyle}
              id="pharmacokinetics"
            >
              Pharmacokinetics
            </Typography>
            <Typography className="my-3" textAlign="justify">
              <b> Absorption:</b>
              Following oral administration in humans, azithromycin is widely
              distributed throughout the body bioavailability is approximately
              37%. The time taken to peak plasma levels is 2-3 hours.
              <br />
              <br />
              <b>Distribution:</b>
              Pharmacokinetic studies in humans have shown markedly higher
              azithromycin levels in tissue than in plasma (up to 50 times the
              maximum observed concentration in plasma) indicating that the drug
              is heavily tissue bound. Concentrations in target tissues, such as
              lung, tonsil and prostate exceed the MIC90 for likely pathogens
              after a single dose.
              <br />
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

            {/** Side Effects Section */}
            <Typography variant="h6" sx={sectionTitleStyle}>
              Side Effects
            </Typography>
            <List dense>
              <b>Common side effects include:</b>
              {["Abdominal pain", "Rash", "Headache"].map((item, i) => (
                <ListItem key={i} sx={listItemStyle}>
                  <ListItemIcon>✓</ListItemIcon>
                  <ListItemText>{item}</ListItemText>
                </ListItem>
              ))}
            </List>

            {/** Contraindication Section */}
            <Typography variant="h6" sx={sectionTitleStyle}>
              Contraindication
            </Typography>
            <Typography className="my-3" textAlign="justify">
              The use of azithromycin is contraindicated in patients with
              hypersensitivity to azithromycin, erythromycin, or any macrolide
              or ketolide antibiotic.
            </Typography>

            {/** Conclusion Section */}
            <Typography variant="h6" sx={sectionTitleStyle}>
              Conclusion
            </Typography>
            <Typography className="my-3" textAlign="justify">
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
