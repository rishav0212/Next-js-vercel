import {
  Typography,
  Grid,
  Paper, Link
} from "@mui/material";
import { Metadata } from "next";
import * as styles from "@/components/ProductPages/styles.js";
import info from "@/product_details/info";

export default function Page({name}) {
  
  const product_info = (info[name.toUpperCase()]?info[name.toUpperCase()]:null)
  console.log(product_info.name)
  if(!product_info) return <div>NA</div>

  return (
    <Grid
      container
      marginTop={3}
      justifyContent="center"
      alignContent="center"
      spacing={1}
    >
      <Grid container item md={8} sm={10} xs={11} sx={styles.pageItemGrid}>
        <Paper elevation={8} sx={styles.upperGrid}>
          <Grid
            container
            spacing={2}
            justifyContent={"center"}
            justifyItems={"center"}
          >
            <Grid item xs={12}>
              <Typography variant="h4" sx={styles.titleStyle}>
                {product_info.name?product_info.name.toUpperCase():"NA"}
              </Typography>
            </Grid>
            <Grid container item md={7} sm={12} xs={12}>
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
                  {product_info.indications?product_info.indications:"NA"}
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
                  <b>Approved Name-</b>
                </Typography>
                <Typography fontSize={"2.5em"} variant="h6" marginLeft={1}>
                  {product_info['approved_name']?product_info['approved_name']:"NA"}
                </Typography>
              </Grid>

              <Grid>
                <Typography fontSize={"2.3em"} variant="h6">
                  <b>Spray Presentation </b>
                </Typography>

                <Typography fontSize={"2em"} variant="body1" marginLeft={5}>
                  NA
                </Typography>
              </Grid>

              <Link sx={{ color: "black" }} >
                <Typography variant="body2" sx={styles.readMoreGrid}>
                  <b>Description : </b> Azithromycin is macrolide antibiotic
                  used to treat or prevent certain bacterial infections, most
                  often those causing middle ear . . .
                </Typography>
              </Link>

              <Link sx={{ color: "black" }} >
                <Typography variant="body2" margin={2} sx={styles.readMoreGrid}>
                  <b>Pharmacokinetics : </b> Absorption:Following oral
                  administration in humans, azithromycin is widely distributed
                  throughout the body bioavailability is approximate. . .
                </Typography>
              </Link>
            </Grid>

            <Grid item md={5} sm={7} xs={9}>
              <Paper elevation={3} sx={styles.imgPaper}>
                <img
                  src="/images/azithromycin1.jpg"
                  alt="Azithromycin | Saar Biotech Product"
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
      </Grid>
    </Grid>
  );
}

export const metadata: Metadata = {
  title:
    "Product | Saar Biotech | Third party Medicine Contract Manufacturing",
  description:
    "Saar biotech Contract manufacturer of pharmaceuticals located in baddi( Excise free Zone) maufacturing  Azithromycin  Tablet/Suspension which is used to treat or prevent certain bacterial infections, most often those causing middle ear infections, strep throat, pneumonia, typhoid, and sinusitis.It is also effective against certain sexually transmitted infections, such as nongonococcal urethritis, chlamydia, and cervicitis.",
  keywords:
    "Azithromycin dihydrate IP, azithromycin suspension, azithromycin side effects, azithromycin dosage, azithromycin uses, azithromycin indication, skin infection, ear infection, Gonococcal Infection, 100mg, 200mg, mg, antibiotic drugs, antibacterial drugs ",
};

