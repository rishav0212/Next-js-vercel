"use client";
import ApprovalIcon from "@mui/icons-material/Approval";
import GavelIcon from "@mui/icons-material/Gavel";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import SecurityIcon from "@mui/icons-material/Security";
import { LoadingButton } from "@mui/lab";
import {
  Box,
  Container,
  Grid,
  Paper,
  Stack,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";

import { useTheme } from "@mui/material/styles";
import NewProducts from "../NewProducts/NewProducts";
import NumberCounter from "./NumberCounter/NumberCounter";

const tabs = ["Our Vision", "Our Mission", "Our Values"];

export default function HomeContent() {
  const theme = useTheme();
  const isSmallerScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Toolbar />

      <Container>
        <Stack
          spacing={4}
          direction={isSmallerScreen ? "column" : "row"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Stack
            spacing={3}
            alignItems={"center"}
            justifyContent={"center"}
            sx={isSmallerScreen ? { width: "100%" } : { flex: 0.9 }}
          >
            <h2 className="text-center">Welcome to Saar Biotech</h2>
            <Typography variant="body1" textAlign={"justify"}>
              Saar Biotech Pvt. Ltd., a distinguished and WHO-GMP certified
              third-party pharmaceutical manufacturing company. Since our
              establishment in 2005, we have been operating from our
              state-of-the-art manufacturing unit in Baddi, complemented by our
              centrally located head office in Chandigarh. With a track record
              of serving a diverse clientele comprising over 1700 companies, we
              have firmly established ourselves as a trusted and quality-driven
              partner in the pharmaceutical industry. At Saar Biotech, we
              specialize in the manufacturing of a wide range of pharmaceutical
              products, including Oral Liquids, Ointments, Sprays, Mouthwash,
              and Paste. We have wide product range which comprises Anti-Fungal,
              Anti-Bacterial, Anti-Inflammatory, Antitussive and Dermatological
              products.
            </Typography>
          </Stack>
        </Stack>
      </Container>
      <Toolbar />
      <NumberCounter />
      <Toolbar />
      <NewProducts />
      <Toolbar />

      <div class="diamond green">
        <span>Attractive Packing</span>
      </div>
      <div class="diamond darkGreen">
        <span>Attractive Rate</span>
      </div>
      <div class="diamond green">
        <span>Timely Delivery</span>
      </div>

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
        <h3 className="text-center mb-4">Our Certifications</h3>
        <Grid container spacing={4}>
          <Grid item md={6} sm={12} xs={12}>
            <Paper
              elevation={1}
              sx={{
                borderRadius: "15px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  height: "20vh",
                  transition: ".5s",
                  borderRadius: "15px",
                  "&:hover": {
                    backgroundColor: "var(--primary-color)",
                    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
                  },
                }}
              >
                <ApprovalIcon sx={{ fontSize: "4rem" }} />
                <br />
                <h6 className="text-center">WHO Certified</h6>
              </Box>
            </Paper>
          </Grid>
          <Grid item md={6} sm={12} xs={12}>
            <Paper
              elevation={1}
              sx={{
                borderRadius: "15px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  height: "20vh",
                  transition: ".5s",
                  borderRadius: "15px",
                  "&:hover": {
                    backgroundColor: "var(--primary-color)",
                    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
                  },
                }}
              >
                <SecurityIcon sx={{ fontSize: "4rem" }} />
                <br />
                <h6 className="text-center">GMP Certification</h6>
              </Box>
            </Paper>
          </Grid>
          <Grid item md={6} sm={12} xs={12}>
            <Paper
              elevation={1}
              sx={{
                borderRadius: "15px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  height: "20vh",
                  transition: ".5s",
                  borderRadius: "15px",
                  "&:hover": {
                    backgroundColor: "var(--primary-color)",
                    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
                  },
                }}
              >
                <LocalDiningIcon sx={{ fontSize: "4rem" }} />
                <br />
                <h6 className="text-center">Food Supplement License</h6>
              </Box>
            </Paper>
          </Grid>
          <Grid item md={6} sm={12} xs={12}>
            <Paper
              elevation={1}
              sx={{
                borderRadius: "15px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  height: "20vh",
                  transition: ".5s",
                  borderRadius: "15px",
                  "&:hover": {
                    backgroundColor: "var(--primary-color)",
                    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
                  },
                }}
              >
                <GavelIcon sx={{ fontSize: "4rem" }} />
                <br />
                <h6 className="text-center">Non Conviction Certificate</h6>
              </Box>
            </Paper>
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

      <Toolbar />
    </>
  );
}
