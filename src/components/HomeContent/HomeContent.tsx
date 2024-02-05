"use client";
import {
  Box,
  Container,
  Grid,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";

import NewProducts from "../NewProducts/NewProducts";
import NumberCounter from "./NumberCounter/NumberCounter";

const tabs = ["Our Vision", "Our Mission", "Our Values"];

export default function HomeContent() {
  // const theme = useTheme();
  // const isSmallerScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Container>
        <Stack
          alignItems={"center"}
          justifyContent={"center"}
          // sx={isSmallerScreen ? { width: "100%" } : { flex: 0.9 }}
          sx={{ md: { flex: 0.9 }, xs: { width: "100%" } }}
        >
          <h2 className="text-center">Welcome to Saar Biotech</h2>
          <Typography variant="body1" textAlign={"justify"}>
            Saar Biotech Pvt. Ltd., a distinguished and WHO-GMP certified
            third-party pharmaceutical manufacturing company. Since our
            establishment in 2005, we have been operating from our
            state-of-the-art manufacturing unit in Baddi, complemented by our
            centrally located head office in Chandigarh. With a track record of
            serving a diverse clientele comprising over 1700 companies, we have
            firmly established ourselves as a trusted and quality-driven partner
            in the pharmaceutical industry. At Saar Biotech, we specialize in
            the manufacturing of a wide range of pharmaceutical products,
            including Oral Liquids, Ointments, Sprays, Mouthwash, and Paste. We
            have wide product range which comprises Anti-Fungal, Anti-Bacterial,
            Anti-Inflammatory, Antitussive and Dermatological products.
          </Typography>
        </Stack>

        <Toolbar />
        <NumberCounter />
        <Toolbar />
        <NewProducts />
        <Toolbar />

        {/* <div class="diamond green">
        <span>Attractive Packing</span>
      </div>
      <div class="diamond darkGreen">
        <span>Attractive Rate</span>
      </div>
      <div class="diamond green">
        <span>Timely Delivery</span>
      </div> */}

        {/* <Container>
        <Link href="/products">
          <LoadingButton
            color="primary"
            size="large"
            type="submit"
            variant="contained"
            loading={false}
            className="loading-button"
          >
            ALL PRODUCTS
          </LoadingButton>
        </Link>
      </Container>

      <Toolbar /> */}

        <Container maxWidth="md">
          {/* <div style={diamond}>
          <span>Attractive Packing</span>
        </div>
        <div style={diamond}>
          <span>Attractive Rate</span>
        </div>
        <div style={diamond}>
          <span>Timely Delivery</span>
        </div> */}
          <h3 className="text-center">Our Certifications</h3>
          <Grid container justifyContent={"center"}>
            <Grid item md={5} sm={5} xs={8} sx={certificateBoxStyle}>
              <img
                src="/images/icons/certificate/WHO.png"
                alt="Recode7"
                style={{
                  height: "11em",
                  objectFit: "contain",
                  display: "flex",
                  margin: "auto",
                }}
              />

              <h6 className="text-center">WHO Certified</h6>
            </Grid>
            <Grid item md={5} sm={5} xs={8} sx={certificateBoxStyle}>
              <img
                src="/images/icons/certificate/GMP.png"
                alt="Recode7"
                style={{
                  height: "11em",
                  objectFit: "contain",
                  display: "flex",
                  margin: "auto",
                }}
              />

              <h6 className="text-center">GMP Certification</h6>
            </Grid>
            <Grid item md={5} sm={5} xs={8} sx={certificateBoxStyle}>
              <img
                src="/images/icons/certificate/ISO.png"
                alt="Recode7"
                style={{
                  height: "11em",
                  objectFit: "contain",
                  display: "flex",
                  margin: "auto",
                }}
              />

              <h6 className="text-center">ISO Certified</h6>
            </Grid>
            <Grid item md={5} sm={5} xs={8} sx={certificateBoxStyle}>
              <img
                src="/images/icons/certificate/FSSAI.png"
                alt="Recode7"
                style={{
                  height: "8em",
                  objectFit: "contain",
                  display: "flex",
                  margin: "auto",
                }}
              />

              <h6 className="text-center">Food Suppliment License</h6>
            </Grid>
          </Grid>
        </Container>

        <Toolbar />

        <Box
          sx={{
            width: "100%",
            height: "15vh",
            backgroundColor: "var(--primary-color)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <h5 style={{ fontStyle: "italic", color: "white" }}>
            "Wherever the art of Medicine is love, there is also a love for
            humanity"
          </h5>
        </Box>

        {/* <Toolbar /> */}

        {/* <div className="p-5 m-5">
        <div className="row row-cols-1 row-cols-md-3  text-center">
          <div className="col">
            <div className="card mb-4 rounded-3 shadow-sm">
              <div className="card-header py-3">
                <h4 className="my-0 fw-normal">Our Vision</h4>
              </div>
              <div className="card-body">
                <h6 className="text-start card-title">
                  To become a leading Pharmaceutical Company in India in sphere
                  of excellence manufacturing, innovation, formulation,
                  marketing and to escalate the business from threshold of
                  country and to become a forerunner in overseas.
                </h6>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card mb-4 rounded-3 shadow-sm">
              <div className="card-header py-3">
                <h4 className="my-0 fw-normal">Our Mission</h4>
              </div>
              <div className="card-body">
                <h6 className="card-title">
                  To become a leading Pharmaceutical Company in India in sphere
                  of excellence manufacturing, innovation, formulation,
                  marketing and to escalate the business from threshold of
                  country and to become a forerunner in overseas.
                </h6>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card mb-4 rounded-3 shadow-sm">
              <div className="card-header py-3">
                <h4 className="my-0 fw-normal">Our Values</h4>
              </div>
              <div className="card-body">
                <h6 className="card-title">
                  We deliver what we promise. We go the extra distance in all
                  that we do to earn our customers’ trust. We embrace our social
                  responsibility as a global company and to being
                  environmentally responsible.
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      </Container>
    </>
  );
}

const certificateBoxStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "15em",
  margin: "1.5em",
  transition: ".5s",
  borderRadius: "15px",
  boxShadow: "0px 2px 4px 2px rgb(0,0,0,0.2)",
  "&:hover": {
    backgroundColor: "var(--primary-color)",
    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
  },
};

// const diamond = {
//   width: "150px",
//   height: "150px",
//   display: "inline-block",
//   backgroundColor: "green",
//   color: "white",
//   // textAlign: "center",
//   transform: "rotate(45deg)"
// };
