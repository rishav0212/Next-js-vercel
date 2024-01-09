"use client";

import {
  Box,
  Container,
  Grid,
  Paper,
  Stack,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { useTheme } from "@mui/material/styles";
import Link from "next/link";
import SecurityIcon from "@mui/icons-material/Security";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import GavelIcon from "@mui/icons-material/Gavel";
import ApprovalIcon from "@mui/icons-material/Approval";
import PropTypes from "prop-types";

const Accordion = styled(MuiAccordion)(({ theme }) => ({
  marginBottom: `6px`,
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

Accordion.defaultProps = {
  disableGutters: true,
  elevation: 2,
  square: true,
};

interface AccordionSummaryProps {
  "aria-controls": string;
  id: string;
  children: React.ReactNode;
}

const AccordionSummary = styled(
  ({
    children,
    "aria-controls": ariaControls,
    id,
    ...props
  }: AccordionSummaryProps) => (
    <MuiAccordionSummary
      expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
      aria-controls={ariaControls}
      id={id}
      {...props}
    >
      {children}
    </MuiAccordionSummary>
  )
)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#EF3E00" : "#EF3E00",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const tabs = ["Our Vision", "Our Mission", "Our Values"];

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export default function HomeContent() {
  const [expanded, setExpanded] = useState("panel1");
  const [value, setValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const theme = useTheme();
  const isSmallerScreen = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    const counters = document.querySelectorAll(".count");
    const speed = 300;

    counters.forEach((counter) => {
      const updateCount = () => {
        const target = parseInt(counter.getAttribute("data-target"));
        const count = parseInt(counter.innerHTML);
        const increment = Math.trunc(target / speed);

        if (count < target) {
          counter.innerHTML = (count + increment).toString();
          setTimeout(updateCount, 1);
        } else {
          counter.innerHTML = target.toString(); // Update the element's innerText
        }
      };
      updateCount();
    });
  }, []);

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
            sx={isSmallerScreen ? { width: "100%" } : { flex: 1 }}
          >
            <h2 className="text-center">Welcome to Saar Biotech</h2>
            <Typography variant="body1">
              Saar Biotech is one of the most respected GMP certified
              pharmaceutical company established with a vision towards
              empowering life . We are committed to deliver better health
              through superior products. The company has taken several important
              steps in critical area of pharmaceutical research. The company
              focuses on providing high quality, appropriately priced products
              to its customers and supports all these with dedicated customer
              service. We, at Saar Biotech, understand the various concerns
              connected with hygiene and safety in the healthcare sector and
              hence have come with a comprehensive range of new drugs. Our team
              comprises of skilled medical expert professionals, their hard work
              has helped us to become one of the leading Pharmaceutical
              manufacturing company. It has always been our endeavour to create
              an environment where innovation of the highest order can blossom.
              We offer new formulated drugs approved by DCGI.
            </Typography>
          </Stack>

          <Stack style={{ width: isSmallerScreen ? "100%" : "30%" }}>
            <Typography variant="h6">Latest Products</Typography>
            <Accordion
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
            >
              <AccordionSummary
                aria-controls="panel1d-content"
                id="panel1d-header"
                // as={Typography}
                // sx={{ color: "white" }}
              >
                <Typography sx={{ color: "white" }}>Vitamin D3 400/800 IU Drops/ 25ml Spray</Typography>


              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  This drops of vitamin D3 helps to get rid of bone disorders
                  such as rickets and osteomalacia in children.
                  <br />
                  <br />
                  <Link href={"/product/vitamin-d3-drops"} className="active">
                    Read more...
                  </Link>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
            >
              <AccordionSummary
                aria-controls="panel2d-content"
                id="panel2d-header"
              >
                <Typography sx={{ color: "white" }}>Immunity Spray</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Our Immunity spray is mainly designed to boost up immunity and
                  prevent damage from free radicals
                  <br />
                  <br />
                  <Link
                    href={"/product/immunity-booster-spray"}
                    className="active"
                  >
                    Read more...
                  </Link>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel3"}
              onChange={handleChange("panel3")}
            >
              <AccordionSummary
                aria-controls="panel3d-content"
                id="panel3d-header"
              >
                <Typography sx={{ color: "white" }}>Iron Spray</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Iron oral spray is an effective intra-spray technology
                  formulated to directly deliver iron into the bloodstream.
                  <br />
                  <br />
                  <Link href={"/product/iron-oral-spray"} className="active">
                    Read more...
                  </Link>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel4"}
              onChange={handleChange("panel4")}
            >
              <AccordionSummary
                aria-controls="panel3d-content"
                id="panel3d-header"
              >
                <Typography sx={{ color: "white" }}>
                  Multivitamin Spray
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  A multivitamin is a preparation intended to serve as a dietary
                  supplement.
                  <br />
                  <br />
                  <Link
                    href={"/product/multivitamin-oral-spray"}
                    className="active"
                  >
                    Read more...
                  </Link>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Stack>
        </Stack>
      </Container>

      <Toolbar />
      <Toolbar />

      <div className="container">
        <div className="row g-3">
          <div className="col-md-4 counter">
            <h3 data-target="9936" className="count">
              0
            </h3>
            <h4>Management</h4>
          </div>
          <div className="col-md-4 counter">
            <h3 data-target="4532" className="count">
              0
            </h3>
            <h4>Age Care </h4>
          </div>
          <div className="col-md-4 counter">
            <h3 data-target="6326" className="count">
              0
            </h3>
            <h4>Healthcare </h4>
          </div>
        </div>
      </div>

      <Toolbar />
      <Toolbar />

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
                    backgroundColor: "#EF3E00",
                    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
                  },
                }}
              >
                <ApprovalIcon sx={{ fontSize: "4rem" }} />
                <br />
                <h6 className="text-center">WHO Applied</h6>
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
                    backgroundColor: "#EF3E00",
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
                    backgroundColor: "#EF3E00",
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
                    backgroundColor: "#EF3E00",
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
          backgroundColor: "#EF3E00",
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

      <Toolbar />

      {isSmallerScreen ? (
        <>
          <Container maxWidth="xs" sx={{ backgroundColor: "#F8F8F8" }}>
            <Grid container>
              <Grid item sm={12} xs={12}>
                <Stack
                  spacing={4}
                  mt={2}
                  direction={"column"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  sx={{ width: "100%" }}
                >
                  <Typography variant="h5">Our Vision</Typography>
                  <img
                    src="/images/vision.jpg"
                    alt="Saar Biotech"
                    style={{ width: "100%", height: "50vh" }}
                  />
                  <Typography variant="body1" sx={{ lineHeight: "2" }}>
                    To become a leading Pharmaceutical Company in India in
                    sphere of excellence manufacturing, innovation, formulation,
                    marketing and to escalate the business from threshold of
                    country and to become a forerunner in overseas.
                  </Typography>
                </Stack>
              </Grid>
              <Grid item sm={12} xs={12}>
                <Stack
                  spacing={4}
                  direction={"column"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  sx={{ width: "100%" }}
                >
                  <Toolbar />
                  <Typography variant="h5">Our Mission</Typography>
                  <img
                    src="/images/mission.jpg"
                    alt="Saar Biotech"
                    style={{ width: "100%", height: "50vh" }}
                  />
                  <Typography variant="body1" sx={{ lineHeight: "2" }}>
                    Saar Biotech commits itself to endeavour to satisfy our
                    customers’ needs in every manner possible: through excellent
                    service, by developing and marketing an effective, safe,
                    quality product and by offering our product at a price
                    affordable to all patients.
                  </Typography>
                </Stack>
              </Grid>
              <Grid item sm={12} xs={12}>
                <Stack
                  spacing={4}
                  direction={"column"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  sx={{ width: "100%" }}
                >
                  <Toolbar />
                  <Typography variant="h5">Our Values</Typography>
                  <img
                    src="/images/values.jpg"
                    alt="Saar Biotech"
                    style={{ width: "100%", height: "50vh" }}
                  />
                  <Typography variant="body1" sx={{ lineHeight: "2" }}>
                    We deliver what we promise. We go the extra distance in all
                    that we do to earn our customers’ trust. We embrace our
                    social responsibility as a global company and to being
                    environmentally responsible.
                  </Typography>
                </Stack>
              </Grid>
            </Grid>
          </Container>
        </>
      ) : (
        <>
          <Container maxWidth="md" sx={{ backgroundColor: "#F8F8F8" }}>
            <Tabs
              value={value}
              onChange={handleTabChange}
              variant="fullWidth"
              scrollButtons
              allowScrollButtonsMobile
              aria-label="scrollable force tabs example"
              sx={{
                "& .MuiTabs-indicator": {
                  backgroundColor: "#EF3E00",
                  width: "auto", // Set the indicator width to auto to match the tab content length
                },
              }}
            >
              {tabs.map((tab, index) => (
                <Tab
                  key={index}
                  label={
                    <Typography
                      variant={value === index ? "h5" : "h6"}
                      sx={{ color: value === index ? "#EF3E00" : "black" }}
                    >
                      {tab}
                    </Typography>
                  }
                  sx={{
                    padding: "10px 20px", // Add padding to the tabs to create space between them
                  }}
                />
              ))}
            </Tabs>

            <TabPanel value={value} index={0}>
              <Stack
                p={2}
                spacing={4}
                direction={"row"}
                alignItems={"center"}
                justifyContent={"center"}
                sx={{ width: "100%" }}
              >
                <img
                  src="/images/vision.jpg"
                  alt="Saar Biotech"
                  style={{ width: "100%", height: "60vh" }}
                />
                <Container>
                  <Typography variant="body1" sx={{ lineHeight: "2.5" }}>
                    To become a leading Pharmaceutical Company in India in
                    sphere of excellence manufacturing, innovation, formulation,
                    marketing and to escalate the business from threshold of
                    country and to become a forerunner in overseas.
                  </Typography>
                </Container>
              </Stack>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Stack
                p={2}
                spacing={4}
                direction={"row"}
                alignItems={"center"}
                justifyContent={"center"}
                sx={{ width: "100%" }}
              >
                <img
                  src="/images/mission.jpg"
                  alt="Saar Biotech"
                  style={{ width: "100%", height: "60vh" }}
                />
                <Container>
                  <Typography variant="body1" sx={{ lineHeight: "2.5" }}>
                    Saar Biotech commits itself to endeavour to satisfy our
                    customers’ needs in every manner possible: through excellent
                    service, by developing and marketing an effective, safe,
                    quality product and by offering our product at a price
                    affordable to all patients.
                  </Typography>
                </Container>
              </Stack>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <Stack
                p={2}
                spacing={4}
                direction={"row"}
                alignItems={"center"}
                justifyContent={"center"}
                sx={{ width: "100%" }}
              >
                <img
                  src="/images/values.jpg"
                  alt="Saar Biotech"
                  style={{ width: "100%", height: "60vh" }}
                />
                <Container>
                  <Typography variant="body1" sx={{ lineHeight: "2.5" }}>
                    We deliver what we promise. We go the extra distance in all
                    that we do to earn our customers’ trust. We embrace our
                    social responsibility as a global company and to being
                    environmentally responsible.
                  </Typography>
                </Container>
              </Stack>
            </TabPanel>
          </Container>
        </>
      )}
      <Toolbar />
    </>
  );
}
