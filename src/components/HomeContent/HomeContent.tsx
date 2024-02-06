import { Grid, Typography } from "@mui/material";

import NewProducts from "./NewProducts/NewProducts";
import NumberCounter from "./NumberCounter/NumberCounter";

const tabs = ["Our Vision", "Our Mission", "Our Values"];

export default function HomeContent() {
  return (
    <Grid container width={"100%"} justifyContent={"center"}>
      <Grid
        item
        sm={11}
        xs={11}
        sx={{
          maxWidth: { md: "100em" },
          margin: "3em",
          borderRadius: "1em",
          padding: 2,
          background: "#f8f8f8",
          boxShadow: "1px 2px 3px rgb(0,0,0,0.4)",
        }}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <h2 className="text-center" style={{ fontSize: "3em" }}>
          Welcome to Saar Biotech
        </h2>
        <Typography variant="body1" textAlign={"justify"} fontSize={"1.5em"}>
          Saar Biotech Pvt. Ltd., a distinguished and WHO-GMP certified
          third-party pharmaceutical manufacturing company. Since our
          establishment in 2005, we have been operating from our
          state-of-the-art manufacturing unit in Baddi, complemented by our
          centrally located head office in Chandigarh. With a track record of
          serving a diverse clientele comprising over 1700 companies, we have
          firmly established ourselves as a trusted and quality-driven partner
          in the pharmaceutical industry. At Saar Biotech, we specialize in the
          manufacturing of a wide range of pharmaceutical products, including
          Oral Liquids, Ointments, Sprays, Mouthwash, and Paste. We have wide
          product range which comprises Anti-Fungal, Anti-Bacterial,
          Anti-Inflammatory, Antitussive and Dermatological products.
        </Typography>
      </Grid>
      <NumberCounter />
      <Grid item xs={10} my={5}>
        <NewProducts />
      </Grid>

      {/* <Grid> */}
      {/* <div class="diamond green">
          <span>Attractive Packing</span>
        </div>
        <div class="diamond darkGreen">
          <span>Attractive Rate</span>
        </div>
        <div class="diamond green">
          <span>Timely Delivery</span>
        </div> */}
      {/* </Grid> */}

      {/* <Grid>
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
      </Grid>

      <Toolbar /> */}
      {/* <Grid item justifyContent={"center"}>
        <Grid sx={diamond}>
          <span style={spanStyle}>Attractive Packing</span>
        </Grid>
        <Grid sx={diamond}>
          <span style={spanStyle}>Attractive Rate</span>
        </Grid>
        <Grid sx={diamond}>
          <span style={spanStyle}>Timely Delivery</span>
        </Grid>
      </Grid> */}

      <Grid container item md={8} justifyContent={"center"}>
        <h3 className="text-center w-100">Our Certifications</h3>
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

      <Grid
        sx={{
          width: "100%",
          height: "15vh",
          backgroundColor: "var(--primary-color)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          marginY: "2em",
        }}
      >
        <h5 style={{ fontStyle: "italic", color: "white", fontSize: "2em" }}>
          "Wherever the art of Medicine is love, there is also a love for
          humanity"
        </h5>
      </Grid>

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
    </Grid>
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

const diamond = {
  width: "140px",
  height: "140px",
  display: "inline-flex",
  color: "#fff",
  transform: "rotate(45deg)",
  justifyContent: "center",
  alignItems: "center",
  margin: "2em 5vw",
  textAlign: "center",
  background: "linear-gradient(45deg, #3cb6a0 0%, #4a90e2 130%)",
  border: "2px solid #3cb6a0",
  transition: "background 0.3s ease-in,transform 0.7s ease-in",
  "&:hover": {
    background: "linear-gradient(-45deg, #3cb6a0 0%, #4a90e2 130%)",
    backgroundPosition: "100% 0",
    border: "2px solid #4a90e2",

    transform: "scale(1.1) rotate(45deg)",
  },
  "@media (max-width: 600px)": {
    width: "80px",
    height: "80px",
  },
};
const spanStyle = {
  transform: "rotate(-45deg)",
  fontSize: "1.3em",
};
