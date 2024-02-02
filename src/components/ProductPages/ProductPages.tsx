import { Typography, Grid, Paper, Link } from "@mui/material";
import { Metadata } from "next";
import * as styles from "@/components/ProductPages/styles.js";
import info from "@/product_details/info";

let product_info = {
  title: "",
  meta: [],
  name: "",
  indications: "",
  "approved-name": "",
};

export default function Page({ name }) {
  product_info = info[name] ? info[name] : null;
  console.log(product_info.name);
  if (!product_info) return <div>NA</div>;

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
              {product_info.name ? product_info.name.toUpperCase() : "NA"}
            </Typography>
          </Grid>
          <Grid container item md={7} sm={12} xs={12}>
            <Grid display={"flex"}>
              <Typography variant="h6" sx={styles.indications}>
                <b>Indications:-</b>
              </Typography>
              <Typography
                sx={styles.indications.data}
                variant="subtitle1"
                marginLeft={1}
              >
                {product_info.indications ? product_info.indications : "NA"}
              </Typography>
            </Grid>

            <Grid display={"flex"}>
              <Typography variant="h6" sx={styles.approved.title}>
                <b>Approved Name-</b>
              </Typography>
              <Typography sx={styles.approved.data} variant="h6" marginLeft={1}>
                {product_info["approved_name"]
                  ? product_info["approved_name"]
                  : "NA"}
              </Typography>
            </Grid>

            <Grid>
              <Typography sx={styles.presentation.title} variant="h6">
                <b>Spray Presentation </b>
              </Typography>

              <Typography
                sx={styles.presentation.data}
                variant="body1"
                marginLeft={5}
              >
                NA
              </Typography>
            </Grid>

            <Link sx={{ color: "black" }}>
              <Typography variant="body2" sx={styles.readMoreGrid}>
                <b>Description : </b> Azithromycin is macrolide antibiotic used
                to treat or prevent certain bacterial infections, most often
                those causing middle ear . . .
              </Typography>
            </Link>

            <Link sx={{ color: "black" }}>
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
      </Grid>
    </Grid>
  );
}

export const metadata: Metadata = {
  title: `${product_info.title}+ | Saar Biotech | Third party Medicine Contract Manufacturing`,
};
