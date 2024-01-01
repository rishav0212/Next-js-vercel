"use client";
import {
  Box,
  Container,
  Divider,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import QueryForm from "./QueryForm";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function Footer() {
  const theme = useTheme();
  const isSmallerScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Box
          py={5}
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "black",
          }}
        >
          <Container>
            <Stack
              spacing={4}
              className="w-100"
              direction={isSmallerScreen ? "column" : "row"}
              alignItems={"center"}
              justifyContent={"space-around"}
            >
              <Stack
                sx={{
                  color: "white",
                }}
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
              </Stack>

              <QueryForm props={"footer"} />
            </Stack>
            <Divider sx={{ my: 3, borderColor: "#EF3E00" }} />
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
