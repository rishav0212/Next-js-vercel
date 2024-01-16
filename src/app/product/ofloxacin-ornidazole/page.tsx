import {
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  Grid,
} from "@mui/material";
import { FiberManualRecord } from "@mui/icons-material";

export default function IronSpray() {
  const link = "ofloxacin-ornidaxole";

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
          Ofloxacin and Ornidazole suspension
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
            <b>Indications:-</b> Diarrhoea, Dysentery, Pelvic Inflammatory Disease ,
            Gingividis and Peridontis.
          </Typography>

          <Typography
            variant="h6"
            className="color-primary mb--25 mt-4 text-uppercase"
          >
            Approved Name -
            <span style={{ color: "black" }}>
              <br />
              Ofloxacin Ornidazole Suspension
            </span>
          </Typography>

          <Typography variant="button" className="font--size-1125">
            Presentation:
          </Typography>

          <List>
            {["Ofloxacin 50 mg", "Ornidazole  125 mg"].map((item, index) => (
              <ListItem key={index}>
                <ListItemIcon key={index}>
                  <FiberManualRecord className="color-primary icon-small" />
                </ListItemIcon>
                <ListItemText>{item}</ListItemText>
              </ListItem>
            ))}
            <b> per 30/60 ml in a Amber Bottle</b>
          </List>
        </Grid>

        <Grid item md ={5}>
          <img
            src={`/images/products/${link}.jpg`}
            alt="Saar Biotech"
          />
        </Grid>
        <Grid item md={12}>
          <Typography
            variant="h6"
            className="color-primary mt-4 text-uppercase"
          >
            Description
          </Typography>
          <Typography className="my-3" textAlign={"justify"}>
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
          <Typography
            variant="h6"
            className="color-primary mt-4 text-uppercase"
          >
            Indications
          </Typography>
          <List>
            <b>Ofloxacin:</b>
            {[
              "On therapy for the treatment of patients ofloxacin  suspension help to cure Mild to moderate infection due to susceptible strains of designated microorganisms.",
              "It is used to treat certain prostate infections and sexually transmitted infections.",
            ].map((item, i) => (
              <ListItem key={i}>
                <ListItemIcon>
                  <FiberManualRecord className="color-primary icon-small" />
                </ListItemIcon>
                <ListItemText>{item}</ListItemText>
              </ListItem>
            ))}
            <b>Ofloxacin:</b>
            {[
              "Trichomoniasis of uro-genital tract and bacterial vaginosis.",
              "Ornidazole suspension is Used in the treatment and prophylaxis of susceptible anaerobic infections in dental and gastrointestinal surgery.",
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
            action of antibiotic
          </Typography>


          <List>{[
              "Trichomoniasis of uro-genital tract and bacterial vaginosis.",
              "Ornidazole suspension is Used in the treatment and prophylaxis of susceptible anaerobic infections in dental and gastrointestinal surgery.",
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
          <Typography
            variant="h6"
            className="color-primary mt-4 text-uppercase"
          >
            Interactions
          </Typography>
          <Typography className="my-3" textAlign={"justify"}>
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
          <Typography
            variant="h6"
            className="color-primary mt-4 text-uppercase"
          >
            Side effects
          </Typography>
          <List>
            {[
              "Headache are the commonly reported side effects.",
              "The other side effects occurring to a lesser extent are nausea.",
              "Abdominal cramps are the most common.",
              "Occasionally diarrhea an dryness of mouth.",
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
            CONTRAINDICATION
          </Typography>
          <Typography className="my-3" textAlign={"justify"}>
            Neurological disorders, Blood dyscrasiae, Caution when used during
            pregnancy, Caution when used during lactation.
          </Typography>
          <Typography
            variant="h6"
            className="color-primary mt-4 text-uppercase"
          >
            Precautions
          </Typography>
          <Typography className="my-3" textAlign={"justify"}></Typography>
          Concomitant use with alcohol should be avoided.
          <Typography />
          <Typography
            variant="h6"
            className="color-primary mt-4 text-uppercase"
          >
            Conclusion
          </Typography>
          <Typography className="my-3" textAlign={"justify"}>
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
          <Toolbar />
          <Typography className="fst-italic fw-600">
            Disclaimer: The data uploaded is made from content already available
            on internet. The company holds no right of it and is not responsible
            for any wrong information.
          </Typography>
          <Toolbar />
        </Grid>
      </Grid>
    </Grid>
  );
}
