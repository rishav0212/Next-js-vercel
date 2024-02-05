import { Grid, Typography } from "@mui/material";
import * as styles from "@/components/ProductPages/styles";
import Certificates from "./Certificates";

export default function AboutContent() {
  return (
    <Grid container alignContent={"center"} justifyContent={"center"}>
      <Grid
        container
        item
        xs={12}
        md={10}
        margin={2}
        alignContent={"center"}
        justifyContent={"center"}
        sx={{
          backgroundColor: "#fff",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.6)",
          padding: "2em 1em",
          borderRadius: "10px",
          transition: "boxShadow 0.3s ease",
          "&:hover": {
            boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.7)",
          },
        }}
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          textAlign={"center"}
          sx={styles.titleStyle}
        >
          <h2 style={{ fontSize: "0.9em" }}>About Saar Biotech</h2>
        </Grid>
        <Grid item xs={12} sm={12} md={7}>
          <Typography fontSize={"1.6em"} textAlign={"justify"}>
            Saar Biotech is one of the leading pharmaceuticals manufacturing
            company in India. We use latest techniques and technologies for
            performing test. We are engaged in third party manufacturing of
            varied pharmaceutical formulations and also manufactured products
            for domestic and international market. Our product range consists
            Syrups, Dry syrups, suspensions, Nasal spray, Roll On, Lotions,
            Drops, Ointment, Glycerine and Shampoo. Our plant is large,
            well-designed and comply with global requirements. <br />
            <br />
            Infrastructure, processes and systems at our plants support a
            flexible product mix and quick product changeovers. We have wide
            product range which comprises Anti-Fungal, Anti-Bacterial,
            Anti-Inflammatory, Antitussive and Dermatological products. At our
            manufacturing site, the latest analytical instruments and tightly
            monitored quality assurance and quality control systems ensures
            consistent quality of our products.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={5}>
          <img
            src="/images/about.jpg"
            alt="Saar Biotech"
            width={"90%"}
            style={{
              // backgroundColor: "#fff",
              // boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
              padding: 1,
              margin: 20,
              borderRadius: "10px",
            }}
          />
        </Grid>
      </Grid>

      <Grid item md={9} xs={12} sm={11}>
        <Certificates />
      </Grid>

      <Grid
        className="w-100 d-flex align-items-center justify-content-center text-center background-primary"
        sx={{
          padding: "2em",
        }}
      >
        <h5 className="fst-italic text-light" style={{ fontSize: "2.3em" }}>
          "For us Quality Means Doing it Right When No one is Looking."
        </h5>
      </Grid>

      <Grid
        container
        item
        marginTop={3}
        sx={{
          textAlign: { xs: "center", md: "left" },
        }}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Grid
          container
          item
          xs={11}
          sm={8}
          md={3.5}
          padding={4}
          margin={2}
          borderRadius={3}
          justifySelf={"center"}
          sx={{
            background: "#f0f0f0",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
            "&:hover": {
              boxShadow: "0px 8px 16px rgba(0,0,0,0.6)",
            },
          }}
        >
          <Grid>
            <Typography variant="h5">
              <u>Main Perspective</u>
            </Typography>
            <Typography variant="subtitle1" className="color-primary">
              Quality Care
            </Typography>
            <Typography variant="body2">
              We Provide COA(Certificate of Analysis) with each batch and
              control samples are maintained in laboratories.
            </Typography>
            <Typography variant="subtitle1" className="color-primary">
              Quality Certifications
            </Typography>
            <Typography variant="body2">
              WHO Certified
              <br />
              ISO Certification <br />
              GMP Certification
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          item
          xs={11}
          sm={8}
          md={3.5}
          padding={3}
          margin={2}
          borderRadius={3}
          justifyContent={"center"}
          alignContent={"center"}
          sx={{
            background: "#f0f0f0",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
            "&:hover": {
              boxShadow: "0px 8px 16px rgba(0,0,0,0.6)",
            },
          }}
        >
          <Grid>
            <Typography variant="h5">
              <u>Our Values</u>
            </Typography>
            <Grid>
              <Typography variant="subtitle1" className="color-primary">
                Customer Satisfaction
              </Typography>
              <Typography variant="body2">
                At Saar Biotech we will endeavour to fulfill the requirments of
                our prestigious clients to ensure the highest levels of customer
                satisfaction at all times. Our products and related services
                will exemplify unparalled quality standards to ensure that
                tangible value is to our customers and their stakeholders over
                long term mutually beneficial relationships.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          item
          xs={11}
          sm={8}
          md={3.5}
          padding={3}
          margin={2}
          borderRadius={3}
          sx={{
            background: "#f0f0f0",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
            "&:hover": {
              boxShadow: "0px 8px 16px rgba(0,0,0,0.6)",
            },
          }}
        >
          <Grid>
            <Typography variant="h5">
              <u>Our Strengths</u>
            </Typography>
            <Typography variant="subtitle1" className="color-primary">
              Our Team
            </Typography>
            <Typography variant="body2">
              Our Professional and Highly Qualified Staff includes M pharm,
              MBA'S and CA'S from which all are dedicated towards their duties.
            </Typography>
            <Typography variant="subtitle1" className="color-primary">
              Latest DCGI Approvals
            </Typography>
            <Typography variant="body2">
              As we believe in <b>inspiring innovation</b> that's why this is
              our main aim to bring new DCGI Approved molecules for our
              customers.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
