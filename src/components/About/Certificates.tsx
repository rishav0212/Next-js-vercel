"use client";
import { Box, Grid, Tab, Tabs, Typography } from "@mui/material";
import * as React from "react";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export default function Certificates() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const links = {
    "WHO Certificate": "/Certficates/WHO Certificate.pdf",
    "GLP Certificate": "/Certficates/GLP Certificate.pdf",
    "GMP Certificate": "/Certficates/GMP Certificate.pdf",
  };

  return (
    <>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
        }}
      >
        <Tabs
          sx={
            {
              // background: "var(--primary-color)",
              // opacity: 0.5,
            }
          }
          value={value}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="certificates"
        >
          {Object.keys(links).map((link, index) => (
            <Tab
              sx={{
                fontSize: "1.5em",
                overflow: "hidden",
                maxWidth: "33%",
              }}
              label={link}
              id={`simple-tab-${index}`}
              key={index}
              // "aria-controls" = {`simple-tabpanel-${index}`}
            />
          ))}
        </Tabs>
      </Box>

      {Object.keys(links).map((link, index) => (
        <Grid container>
          <Grid
            item
            md={5}
            sm={6}
            key={index}
            display={"inline-flex"}
            hidden={value !== index}
            role="tabpanel"
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            sx={{
              width: { md: "30vw", sm: "50vw" },
              height: { md: "70vh", sm: "60vh" },
            }}
          >
            {/* <iframe
              src={links[link]}
              style={{ width: "100%", height: "100%" }}
            ></iframe> */}
          </Grid>
          <Grid
            item
            md={6}
            sm={5}
            padding={3}
            fontSize={"1.3em"}
            alignItems={"center"}
            justifyContent={"center"}
            hidden={value !== index}
          >
            <h3 style={{ fontSize: "2em" }}>WHO Certification </h3>
            <p>
              The "World Health Organization (WHO)" is a specialized agency of
              the "United Nations (UN)" that is concerned with international
              public health.
              <br /> <br />
            </p>
            <ul>
              <b> WHO identifies its role as: </b>
              <br />
              <li>
                Providing leadership on matters critical to health and engaging
                in partnerships where joint action is needed.
              </li>
              <br />

              <li>
                Shaping the research agenda and stimulating the generation,
                translation and dissemination of valuable knowledge.
              </li>
              <br />

              <li>
                Providing technical support, catalyzing change, and building
                sustainable institutional capacity; and
              </li>
              <br />

              <li>
                Monitoring the health situation and assessing health trends.
              </li>
            </ul>
          </Grid>
        </Grid>
      ))}
    </>
  );
}
