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
  const link = "ofloxacin-ornidazole";

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
                Ofloxacin and Ornidazole suspension
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
                  Diarrhoea, Dysentery, Pelvic Inflammatory Disease , Gingividis
                  and Peridontis.
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
                  Ofloxacin Ornidazole Suspension
                </Typography>
              </Grid>

              <Typography className="my-3">
                <b>Spray Presentation :</b>
              </Typography>

              <Typography variant="body1" marginLeft={5}>
                Ofloxacin 50 mg
                <br />
                Ornidazole 125 mg Eq to Azithromycin 100mg/200mg
                <br />
                <b>per 30/60 ml in a Amber Bottle</b>
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
                  <b>Description : </b>Ofloxacin is a quinolone antibiotic used
                  for treating certain kinds of bacterial infections(ear
                  infections, urinary tract infections) and also useful in
                  pelvic inflammatory disease (PID). It belongs to the
                  fluoroquinolone class of antibiotics. Ofloxacin stops the
                  multipli
                </Typography>
              </Link>

              <Link sx={{ color: "black" }} href="#interactions">
                <Typography
                  variant="body2"
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
                  <b>Interations : </b> This suspension is the combination of
                  Ofloxacin and ornidazole and has unique dual mode of action
                  i.e., in the combination, ofloxacin may increase the
                  anticoagulant effect of acenocoumarol and anisindione. Calcium
                  salts such as calcium acetate may decrease the absorption of
                  quinolon
                </Typography>
              </Link>
            </Grid>

            <Grid item md={5}>
              <Paper
                elevation={3}
                sx={{
                  position: "relative",
                  display: "inline-block",
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
                  src={`/images/ofloxacin-ornidazole.jpg`}
                  alt="Ofloxacin Ornidazole Suspension | Saar Biotech Product"
                  style={{
                    height: "100%",
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
              <b>Ofloxacin:</b>
              <br />
              Ofloxacin is a quinolone antibiotic used for treating certain
              kinds of bacterial infections(ear infections, urinary tract
              infections) and also useful in pelvic inflammatory disease (PID).
              It belongs to the fluoroquinolone class of antibiotics. Ofloxacin
              stops the multiplication of bacteria by inhibiting the
              reproduction and repair of their genetic material (DNA).
              <br />
              <br />
              <b>Ornidazole:</b>
              <br />
              Ornidazole is a nitroimidazole which is an antibacterial and
              antiprotozoal drug used to treat anaerobic enteric protozoa. It is
              a drug that cures some protozoan infections like (Giardiasis,
              Trichomoniasis). This antibacterial agent effective against a wide
              variety of gram-negative and gram-positive aerobic bacteria.
              <br />
              <br />
              <b>
                It has been demonstrated by recent studies concomitant
                administration of an antibiotic (Ofloxacin) and antiprotozoal
                (Ornidazole), shows better symptoms relief compared with the
                modest improvement of infections with each of the treatments.
              </b>
            </Typography>

            {/** Indications Section */}
            <Typography variant="h6" sx={sectionTitleStyle}>
              Indications
            </Typography>
            <List dense>
              <b>Ofloxacin:</b>
              {[
                "On therapy for the treatment of patients ofloxacin  suspension help to cure Mild to moderate infection due to susceptible strains of designated microorganisms.",
                "It is used to treat certain prostate infections and sexually transmitted infections.",
              ].map((item, i) => (
                <ListItem key={i} sx={listItemStyle}>
                  <ListItemIcon>
                    <FiberManualRecord className="color-primary icon-small" />
                  </ListItemIcon>
                  <ListItemText>{item}</ListItemText>
                </ListItem>
              ))}

              <b>Ofloxacin :</b>
              {[
                "Trichomoniasis of uro-genital tract and bacterial vaginosis.",
                "Ornidazole suspension is Used in the treatment and prophylaxis of susceptible anaerobic infections in dental and gastrointestinal surgery.",
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
              <b>Ornidazole:</b>
              <br />
              The antimicrobial activity of ornidazole is due to the reduction
              of the nitro group to a more reactive amine that attacks microbial
              DNA, brings about loss of helical structure of DNA and subsequent
              DNA breakage thus inhibiting further synthesis and causing
              degradation of existing DNA.
              <br />
              <b>Ofloxacin :</b>
              <br />
              Inhibits the enzyme Bacterial DNA gyrase. It has activity against
              C.trachomatis, M.leprae, M.tuberculosis and other Mycobacterium
              spp.
            </Typography>

            <Typography variant="h6" sx={sectionTitleStyle}>
              Action of Antibiotic
            </Typography>
            <List dense>
              {[
                "Pertaining to the ability to destroy or inhibit other living organisms.",
                "A substance derived from a mould or bacterium, or produced synthetically, that destroys (bactericidal) or inhibits the growth (bacteriostatic) of other microorganisms and is thus used to treat infections.",
              ].map((item, i) => (
                <ListItem key={i} sx={listItemStyle}>
                  <ListItemIcon>
                    <FiberManualRecord className="color-primary icon-small" />
                  </ListItemIcon>
                  <ListItemText>{item}</ListItemText>
                </ListItem>
              ))}
            </List>

            {/** Pharmacokinetics Section */}
            <Typography variant="h6" sx={sectionTitleStyle} id="interactions">
              Interactions
            </Typography>
            <Typography className="my-3" textAlign="justify">
              Before taking this medicine tell the doctor about any medical
              problems an allergies that child has now or has had.
              <br />
              <br />
              This suspension is the combination of Ofloxacin and ornidazole and
              has unique dual mode of action i.e., in the combination, ofloxacin
              may increase the anticoagulant effect of acenocoumarol and
              anisindione. Calcium salts such as calcium acetate may decrease
              the absorption of quinolone antibiotics such as ofloxacin. Of
              concern only with oral administration of both agents. Potentiates
              effect of coumarin-type oral anticoagulants.prolongs the
              muscle-relaxant effect of vacuronium bromide.
            </Typography>

            {/** Side Effects Section */}
            <Typography variant="h6" sx={sectionTitleStyle}>
              Side Effects
            </Typography>
            <List dense>
              <b>Common side effects include:</b>
              {[
                "Headache are the commonly reported side effects.",
                "The other side effects occurring to a lesser extent are nausea.",
                "Abdominal cramps are the most common.",
                "Occasionally diarrhea an dryness of mouth.",
              ].map((item, i) => (
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
              Neurological disorders, Blood dyscrasiae, Caution when used during
              pregnancy, Caution when used during lactation.
            </Typography>

            <Typography variant="h6" sx={sectionTitleStyle}>
              Precautions
            </Typography>
            <Typography className="my-3" textAlign="justify">
              Concomitant use with alcohol should be avoided.
            </Typography>

            {/** Conclusion Section */}
            <Typography variant="h6" sx={sectionTitleStyle}>
              Conclusion
            </Typography>
            <Typography className="my-3" textAlign="justify">
              {" "}
              From the above discussion it can be conclude that this Ofloxacin &
              Ornidazole suspension could improve the quality of life of
              children’s with infections as well as Diarrhea, Peritonitis ( A
              combination of ofloxacin & ornidazole can also be used to treat
              Hansen's Disease, or leprosy).
              <br />
              <br />
              Moreover it has a considerable safety profile, with persistent
              results.
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
