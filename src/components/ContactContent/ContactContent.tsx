"use client"

import { Container, Grid, Stack, Toolbar, Typography } from "@mui/material";
import QueryForm from "@/components/Footer/QueryForm";

export default function ContactContent() {
 
  return (
    <>
      <Toolbar />
      <Container>
        <Grid container spacing={8} className="text-center">
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <Stack p={5} className="stack-contact">
              <Typography variant="h5" className="color-primary">
                Our Location
              </Typography>
              <br />
              <Typography variant="subtitle1">
                SCO-165, Sector-38C, Chandigarh, Pincode - 160038
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <Stack p={5} className="stack-contact">
              <Typography variant="h5" className="color-primary">
                Factory Location
              </Typography>
              <br />
              <Typography variant="subtitle1">
                Saar Biotech, NH 21-A, Bhud, Baddi, Solan(H.P.) - 173205
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <Stack p={5} className="stack-contact">
              <Typography variant="h5" className="color-primary">
                Operating Hours
              </Typography>
              <br />
              <Typography variant="subtitle1">
                Monday - Saturday <br />
                9:00 am - 6:00 pm
              </Typography>
            </Stack>
          </Grid>
        </Grid>

        <Toolbar />

        <Grid container spacing={8}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Stack>
              <Typography variant="h5">Send Us a Message</Typography>
              <QueryForm props={"contact"} />
            </Stack>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <iframe
              title="Saar Biotech"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3429.0870831895018!2d76.74135717456915!3d30.744055285087114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390feddedd955551%3A0xf990db21aadebf62!2sSAAR%20BIOTECH!5e0!3m2!1sen!2sus!4v1696870040314!5m2!1sen!2sus"
              width="100%"
              height="500"
              style={{ border: "0" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Grid>
        </Grid>
      </Container>
      <Toolbar />
    </>
  );
}
