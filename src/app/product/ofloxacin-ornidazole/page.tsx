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
import ScrollToSection from "@/components/ProductPages/ScrollToSection/ScrollToSrction";

export default function Page() {
  const link = "ofloxacin-ornidazole";
  const Sections = [
    "description",
    "indications",
    "mechanism",
    "action of antibiotic",
    "interactions",
    "side effects",
    "contraindication",
    "pracautions",
    "conclusion"
  ];

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
              Ofloxacin and Ornidazole suspension
            </Typography>
          </Grid>
          <Grid item md={7} sm={12} xs={12}>
            <Grid display={"flex"}>
              <Typography variant="h6" sx={styles.indications.data}>
                <b>Indications:-</b>
              </Typography>{" "}
              <Typography sx={styles.indications.data} variant="subtitle1">
                Diarrhoea, Dysentery, Pelvic Inflammatory Disease , Gingividis
                and Peridontis.
              </Typography>
            </Grid>

            <Grid display={"flex"}>
              {" "}
              <Typography variant="h6" sx={styles.approved.title}>
                <b>Approved Name -</b>
              </Typography>
              <Typography sx={styles.approved.data} variant="h6">
                Ofloxacin Ornidazole Suspension
              </Typography>
            </Grid>

            <Grid>
              <Typography sx={styles.presentation.title} variant="h6">
                <b>Spray Presentation :</b>
              </Typography>

              <Typography sx={styles.presentation.data} variant="body1">
                Ofloxacin 50 mg
                <br />
                Ornidazole 125 mg Eq to Azithromycin 100mg/200mg
                <br />
                <b>per 30/60 ml in a Amber Bottle</b>
              </Typography>
            </Grid>

            <Link sx={{ color: "black" }} href="#description">
              <Typography variant="body2" sx={styles.readMoreGrid}>
                <b>Description : </b>Ofloxacin is a quinolone antibiotic used
                for treating certain kinds of bacterial infections(ear
                infections, urinary tract infections) and also useful in pelvic
                inflammatory disease (PID). It belongs to the fluoroquinolone
                class of antibiotics. Ofloxacin stops the multipli
              </Typography>
            </Link>

            <Link sx={{ color: "black" }} href="#interactions">
              <Typography variant="body2" sx={styles.readMoreGrid}>
                <b>Interations : </b> This suspension is the combination of
                Ofloxacin and ornidazole and has unique dual mode of action
                i.e., in the combination, ofloxacin may increase the
                anticoagulant effect of acenocoumarol and anisindione. Calcium
                salts such as calcium acetate may decrease the absorption of
                quinolon
              </Typography>
            </Link>
          </Grid>

          <Grid item md={5} sm={7} xs={9} sx={styles.imgPaper}>
            <img
              src={`/images/ofloxacin-ornidazole1.jpg`}
              alt="Ofloxacin Ornidazole Suspension | Saar Biotech Product"
              style={{
                // width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />
            \
          </Grid>
        </Grid>

        <Grid  item md={12} sx={styles.lowerGrid}>
          <ScrollToSection Sections={Sections}/>
          <Typography variant="h6" sx={styles.sectionTitle} id="description">
            DESCRIPTION
          </Typography>

          <Typography sx={styles.sectionData}>
            <b>Ofloxacin:</b>
            <br />
            Ofloxacin is a quinolone antibiotic used for treating certain kinds
            of bacterial infections(ear infections, urinary tract infections)
            and also useful in pelvic inflammatory disease (PID). It belongs to
            the fluoroquinolone class of antibiotics. Ofloxacin stops the
            multiplication of bacteria by inhibiting the reproduction and repair
            of their genetic material (DNA).
            <br />
            <br />
            <b>Ornidazole:</b>
            <br />
            Ornidazole is a nitroimidazole which is an antibacterial and
            antiprotozoal drug used to treat anaerobic enteric protozoa. It is a
            drug that cures some protozoan infections like (Giardiasis,
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
          <Typography variant="h6" id="indications" sx={styles.sectionTitle}>
            Indications
          </Typography>
          <List dense sx={styles.list}>
            <b>Ofloxacin:</b>
            {[
              "On therapy for the treatment of patients ofloxacin  suspension help to cure Mild to moderate infection due to susceptible strains of designated microorganisms.",
              "It is used to treat certain prostate infections and sexually transmitted infections.",
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

            <b>Ofloxacin :</b>
            {[
              "Trichomoniasis of uro-genital tract and bacterial vaginosis.",
              "Ornidazole suspension is Used in the treatment and prophylaxis of susceptible anaerobic infections in dental and gastrointestinal surgery.",
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

          {/** Mechanism Section */}
          <Typography variant="h6" id="mechanism" sx={styles.sectionTitle}>
            Mechanism
          </Typography>
          <Typography sx={styles.sectionData}>
            <b>Ornidazole:</b>
            <br />
            The antimicrobial activity of ornidazole is due to the reduction of
            the nitro group to a more reactive amine that attacks microbial DNA,
            brings about loss of helical structure of DNA and subsequent DNA
            breakage thus inhibiting further synthesis and causing degradation
            of existing DNA.
            <br />
            <b>Ofloxacin :</b>
            <br />
            Inhibits the enzyme Bacterial DNA gyrase. It has activity against
            C.trachomatis, M.leprae, M.tuberculosis and other Mycobacterium spp.
          </Typography>

          <Typography variant="h6" id="action of antibiotic" sx={styles.sectionTitle}>
            Action of Antibiotic
          </Typography>
          <List dense sx={styles.list}>
            {[
              "Pertaining to the ability to destroy or inhibit other living organisms.",
              "A substance derived from a mould or bacterium, or produced synthetically, that destroys (bactericidal) or inhibits the growth (bacteriostatic) of other microorganisms and is thus used to treat infections.",
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

          {/** Pharmacokinetics Section */}
          <Typography variant="h6" id="interactions" sx={styles.sectionTitle}>
            Interactions
          </Typography>
          <Typography sx={styles.sectionData}>
            Before taking this medicine tell the doctor about any medical
            problems an allergies that child has now or has had.
            <br />
            <br />
            This suspension is the combination of Ofloxacin and ornidazole and
            has unique dual mode of action i.e., in the combination, ofloxacin
            may increase the anticoagulant effect of acenocoumarol and
            anisindione. Calcium salts such as calcium acetate may decrease the
            absorption of quinolone antibiotics such as ofloxacin. Of concern
            only with oral administration of both agents. Potentiates effect of
            coumarin-type oral anticoagulants.prolongs the muscle-relaxant
            effect of vacuronium bromide.
          </Typography>

          {/** Side Effects Section */}
          <Typography variant="h6" id="side effects" sx={styles.sectionTitle}>
            Side Effects
          </Typography>
          <List dense sx={styles.list}>
            <b>Common side effects include:</b>
            {[
              "Headache are the commonly reported side effects.",
              "The other side effects occurring to a lesser extent are nausea.",
              "Abdominal cramps are the most common.",
              "Occasionally diarrhea an dryness of mouth.",
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
          <Typography variant="h6" id="contraindication" sx={styles.sectionTitle}>
            Contraindication
          </Typography>
          <Typography sx={styles.sectionData}>
            Neurological disorders, Blood dyscrasiae, Caution when used during
            pregnancy, Caution when used during lactation.
          </Typography>

          <Typography variant="h6" id="pracautions" sx={styles.sectionTitle}>
            Precautions
          </Typography>
          <Typography sx={styles.sectionData}>
            Concomitant use with alcohol should be avoided.
          </Typography>

          {/** Conclusion Section */}
          <Typography variant="h6" id="conclusion" sx={styles.sectionTitle}>
            Conclusion
          </Typography>
          <Typography sx={styles.sectionData}>
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
