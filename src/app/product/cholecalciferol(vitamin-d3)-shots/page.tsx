import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  Grid,
} from "@mui/material";
import { FiberManualRecord } from "@mui/icons-material";
import { Metadata } from "next";
import * as styles from "@/components/ProductPages/styles.js";
import ScrollToSection from "@/components/ProductPages/ScrollToSection/ScrollToSrction";
import ImageGallery from "@/components/ProductPages/ImageGallery/ImageGallery";

export default function Page() {
  const link = "cholecalciferol(vitamin-d3)-shots";
  const Sections = [
    "description",
    "indications",
    "mechanism",
    "pharmacodynamics",
    "pharmacokinetics",
    "side effects",
    "contraindication",
    "conclusion",
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
              Cholecalciferol (Vitamin D3) Nano Shots
            </Typography>
          </Grid>
          <Grid
            container
            item
            display={"flex"}
            direction={"column"}
            md={7}
            sm={12}
            xs={12}
          >
            <Grid display={"flex"}>
              <Typography sx={styles.indications.title}>
                <b>Indications:</b>
              </Typography>
              <Typography sx={styles.indications.data}>
                Bone Disorder
              </Typography>
            </Grid>

            <Grid display={"flex"}>
              <Typography sx={styles.indications.title}>
                <b>Approved Name:</b>
              </Typography>
              <Typography sx={styles.indications.data}>
                Cholecalciferol (Vitamin D3) Shots
              </Typography>
            </Grid>

            <Grid>
              <Typography sx={styles.indications.title} variant="h6">
                <b>Liquid Presentation </b>
              </Typography>

              <Typography sx={styles.indications.data} variant="body1">
                <b>Each 5 ml contains:</b>
                <br />
                Cholecalciferol(Vitamin D3) IP 60000 IU
              </Typography>
            </Grid>
          </Grid>

          <Grid item md={5} sm={7} xs={9} sx={styles.imgPaper}>
            <ImageGallery imagesCount={5} name={link} />
          </Grid>
        </Grid>

        <Grid container item md={12} sx={styles.lowerGrid}>
          <ScrollToSection Sections={Sections} />

          <Typography variant="h6" id="description" sx={styles.sectionTitle}>
            DESCRIPTION
          </Typography>

          <Typography sx={styles.sectionData} textAlign="justify">
            Cholecalciferol is also known as Vitamin D3. Vitamin D3 is a form of
            Vitamin D. Cholecalciferol is the raw form of the nutrient that
            humans obtain through exposure to sunlight. It is the form the
            nutrient takes after it has been processed for use by the body.
            Cholecalciferol is made in the skin following UVB light exposure It
            is structurally similar to steroids such as testosterone,
            cholesterol, and cortisol (though vitamin D3 itself is a
            secosteroid). Excessive doses in humans can result in vomiting,
            constipation, weakness, and confusion Vitamin D is an essential
            nutrient that plays an important role in calcium metabolism and bone
            health. In recent years, biomarkers like PTH, calcium absorption
            have been used to define relevant biological indices of vitamin D
            nutritional status. Vitamin D3 supports calcium in your body in
            order to develop and maintain strong bones and healthy teeth.
            <br />
            It is also found in some foods and can be taken as a dietary
            supplement. It is used to treat and prevent vitamin D deficiency and
            associated diseases, including rickets.
          </Typography>

          {/** Indications Section */}
          <Typography variant="h6" id="indications" sx={styles.sectionTitle}>
            Indications
          </Typography>
          <Typography sx={styles.sectionData} textAlign="justify">
            Vitamin D3 (Cholecalciferol) is indicated in the treatment and
            prevention of bone disorders including osteomalacia, rickets and so
            on, which are caused by low levels of vitamin D in the body.It is
            also used for familial hypophosphatemia, hypoparathyroidism that is
            causing low blood calcium, and Fanconi syndrome.
          </Typography>

          {/** Mechanism Section */}
          <Typography variant="h6" id="mechanism" sx={styles.sectionTitle}>
            Mechanism
          </Typography>
          <Typography sx={styles.sectionData} textAlign="justify">
            Cholecalciferol is inactive by itself. It is converted to its active
            form by two hydroxylations: the first in the liver, by CYP2R1 or
            CYP27A1, to form 25-hydroxycholecalciferol (calcifediol, 25-OH
            vitamin D3). The second hydroxylation occurs mainly in the kidney
            through the action of CYP27B1 to convert 25-OH vitamin D3 into
            1,25-dihydroxycholecalciferol. All these metabolites are bound in
            blood to the vitamin D-binding protein. The action of calcitriol is
            mediated by the vitamin D receptor, a nuclear receptor which
            regulates the synthesis of hundreds of proteins and is present in
            virtually every cell in the body.
          </Typography>

          <Typography
            variant="h6"
            sx={styles.sectionTitle}
            id="pharmacodynamics"
          >
            Pharmacodynamics
          </Typography>
          <Typography textAlign="justify" sx={styles.sectionData}>
            Cholecalciferol (Vitamin D3) is a steroid hormone that has long been
            known for its important role in regulating body levels of calcium
            and phosphorus, in mineralization of bone, and for the assimilation
            of Vitamin A. The classical manifestations of vitamin D deficiency
            are rickets, which is seen in children and results in bony
            deformaties including bowed long bones. Deficiency in adults leads
            to the disease osteomalacia. Both rickets and osteomalacia reflect
            impaired mineralization of newly synthesized bone matrix, and
            usually result from a combination of inadequate exposure to sunlight
            and decreased dietary intake of vitamin D. Common causes of vitamin
            D deficiency include genetic defects in the vitamin D receptor,
            severe liver or kidney disease, and insufficient exposure to
            sunlight. Vitamin D plays an important role in maintaining calcium
            balance and in the regulation of parathyroid hormone (PTH). It
            promotes renal reabsorption of calcium, increases intestinal
            absorption of calcium and phosphorus, and increases calcium and
            phosphorus mobilization from bone to plasma.
          </Typography>
          <Typography
            variant="h6"
            sx={styles.sectionTitle}
            id="pharmacokinetics"
          >
            Pharmacokinetics
          </Typography>
          <Typography textAlign="justify" sx={styles.sectionData}>
            <b>ABSORPTION:</b> Cholecalciferol is readily absorbed from the
            small intestine if fat absorption is normal . Bile is necessary for
            absorption as well.
            <br />
            <b>PROTEIN BINDING:</b> 50% to 80%, in the plasma, vitamin D3 (from
            either diet or the skin) is bound to vitamin D-binding protein (DBP)
            produced in the liver, for transport to the liver.
            <br />
            <b>METABOLISM:</b> Within the liver, cholecalciferal is hydroxylated
            to calcidiol (25-hydroxycholecalciferol) by the enzyme
            25-hydroxylase. Within the kidney, calcidiol serves as a substrate
            for 1-alpha-hydroxylase, yielding calcitriol (1,
            25-dihydroxycholecalciferol), the biologically active form of
            vitamin D3.
            <br />
            <b>ELIMINATION:</b> Vitamin D is excreted in faeces and urine.
          </Typography>

          {/** Side Effects Section */}
          <Typography variant="h6" id="side effects" sx={styles.sectionTitle}>
            Side Effects
          </Typography>
          <List dense sx={styles.list}>
            {[
              "Allergic reactions",
              "Swelling of the face, lips, or tongue.",
              "Headache",
              "Bone pain",
              "Increased thirst",
              "Increased urination",
              "Irregular heartbeat, high blood pressure",
              "Seizures",
              "Unexpected weight loss",
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
          <Typography
            variant="h6"
            id="contraindication"
            sx={styles.sectionTitle}
          >
            Contraindication
          </Typography>
          <List dense sx={styles.list}>
            <b>Cholecalciferol is contraindicated in:</b>
            {[
              "Nephrolithiasis / nephrocalcinosis",
              "Severe renal impairment and renal failure.",
              "Hypervitaminosis",
              "Hypersensitivity to the active substances or to any of the excipients sarcoidosis",
              "High amount of phosphate in the blood, high amount of calcium in the blood",
              "Blockage of the arteries called arteriosclerosis,kidney stones",
            ].map((item, i) => (
              <ListItem key={i} sx={{}}>
                <ListItemIcon>✓</ListItemIcon>
                <ListItemText primaryTypographyProps={{ fontSize: "1em" }}>
                  {item}
                </ListItemText>
              </ListItem>
            ))}
            <p>
              <b>PREGNANCY AND LACTATION:</b>
              Vitamin D3 film-coated tablets can be used during breast-feeding.
              Calcium and vitamin D pass into breast milk. This should be
              considered when giving additional vitamin D to the child.
            </p>
          </List>
        </Grid>

        <Toolbar />
      </Grid>
    </Grid>
  );
}

export const metadata: Metadata = {
  title:
    "Cholecalciferol (Vitamin D3) Nano Shots | Benefits, Indications & Mechanism",
  description:
    "Learn about Cholecalciferol (Vitamin D3) Nano Shots, their benefits, indications, mechanism, pharmacodynamics, pharmacokinetics, side effects, and contraindications. Find comprehensive information for healthcare professionals.",
  keywords:
    "Cholecalciferol, Vitamin D3, Nano Shots, Indications, Mechanism, Pharmacodynamics, Pharmacokinetics, Side Effects, Contraindications, Bone Disorders, Rickets, Osteomalacia, Hypophosphatemia, Hypoparathyroidism, Fanconi Syndrome",
};
