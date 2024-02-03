"use client";
import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import QueryForm from "../hook-form/QueryForm";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function Footer() {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Box
          py={2}
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "black",
          }}
        >
          <Container>
            <Grid container spacing={4} justifyContent={"center"}>
              <Grid
                item
                xs={9}
                sm={7}
                md={5}
                color={"white"}
                alignSelf={"center"}
                fontSize={"1.5em"}
              >
                <h4>Contact Us</h4>
                <ul>
                  <li>Mr. Abhinav Aggrawal</li>
                  <span>(Chief Operating Officer)</span>
                  <li>
                    <a
                      href="mailto:abhinav@dmpharma.org"
                      className="text-light"
                    >
                      Email: abhinav@dmpharma.org
                    </a>
                  </li>
                </ul>
                <br />
                <h4>For Product Status Call</h4>
                <ul>
                  <li>Mr. Vijay</li>
                  <span>(Marketing Manager)</span>
                  <li>
                    <a href="tel:+918591978885" className="text-light">
                      M.No.: +91 859 197 8885
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:quotation@saarbiotech.com"
                      className="text-light"
                    >
                      Email: quotation@saarbiotech.com
                    </a>
                  </li>
                </ul>
              </Grid>

              <Grid item xs={11} sm={9} md={5} mt={2}>
                <QueryForm props={"footer"} />
              </Grid>
            </Grid>
            <Divider sx={{ my: 3, borderColor: "var(--primary-color)" }} />
            <Typography variant="body1" className="text-center text-light">
              © CopyRight by <span className="color-primary">Saar Biotech</span>
              . All Rights Reserved.
            </Typography>
          </Container>
        </Box>
      </ThemeProvider>
    </>
  );
}
