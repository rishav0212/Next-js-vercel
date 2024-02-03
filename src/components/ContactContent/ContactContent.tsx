import { Grid, Typography } from "@mui/material";
import QueryForm from "@/components/hook-form/QueryForm";

const contactBoxStyles = {
  textAlign: "center",
  padding: "20px",
  marginInline: "auto",
  my: 2,
  background: "rgba(0, 0, 0, 0.06)",
  borderRadius: "25px",
  transition: "0.1s ease",
  boxShadow: "0 2px 4px rgb(0,0,0,0.8)",
  "&:hover": {
    boxShadow: "0 10px 15px rgb(0,0,0,0.5)",
    transform: "translateY(-5px)",
  },
};

export default function ContactContent() {
  return (
    <>
      <Grid
        container
        justifyContent={"center"}
        alignContent={"center"}
        marginY={5}
      >
        <Grid
          container
          item
          xs={8}
          sm={6}
          md={10}
          lg={9}
          justifyContent={"center"}
          alignContent={"center"}
        >
          <Grid  item xs={12} sm={12} md={3.5} lg={3} sx={contactBoxStyles}>
            <Typography  variant="h5" className="color-primary">
              Our Location
            </Typography>
            <br />
            <Typography variant="subtitle1">
              SCO-165, Sector-38C, Chandigarh, Pincode - 160038
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={3.5} lg={3} sx={contactBoxStyles}>
            <Typography variant="h5" className="color-primary">
              Factory Location
            </Typography>
            <br />
            <Typography variant="subtitle1">
              Saar Biotech, NH 21-A, Bhud, Baddi, Solan(H.P.) - 173205
            </Typography>
          </Grid>
          <Grid item xs={11} sm={12} md={3.5} lg={3} sx={contactBoxStyles}>
            <Typography variant="h5" className="color-primary">
              Operating Hours
            </Typography>
            <br />
            <Typography variant="subtitle1">
              Monday - Saturday <br />
              9:00 am - 6:00 pm
            </Typography>
          </Grid>
        </Grid>

        <Grid xs={11} sm={11} md={5} lg={5} padding={5} item>
          <Typography variant="h5" className="color-primary">
            Send Us a Message
          </Typography>
          <QueryForm props={"contact"} />
        </Grid>
        <Grid item xs={12} sm={12} md={7} lg={7} padding={5}>
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
    </>
  );
}
