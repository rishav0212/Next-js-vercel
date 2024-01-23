import { Grid, Typography } from "@mui/material";

export default function Expo2012Content() {
  return (
    <>
      <Grid
        container
        justifyContent={"center"}
        alignContent={"center"}
        fontSize={"calc(0.7vh+0.3vw)"}
      >
        <Grid
          container
          item
          xs={11}
          sm={11}
          md={10}
          margin={5}
          justifyContent={"center"}
          alignContent={"center"}
        >
          <Grid item xs={12} m={2}>
            <Typography
              fontSize={"2.5em"}
              variant="h4"
              className="color-primary text-center"
            >
              Indian Pharma Expo 2012
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={7} p={2}>
            <Typography
              fontSize={"1em"}
              className="lh-lg"
              textAlign={"justify"}
            >
              The Indian Pharma Expo 2012 took place on 22- 23 sept at Pragati
              Maidan in New Delhi. It was a unique pharma event, which proved to
              be the perfect platform flooded with opportunities for pharma
              entrepreneurs such as Pharmaceutical Manufacturers & Ethical, PCD
              and Generic companies, eager to explore distributorship,
              franchisee & Third Party Manufacturing for their brands. Many
              Pharma students, doctors and consultants also visited the
              Exhibition and gained good exposure of Indian Pharma Industry.
              <br />
              <br />
              It was a great pleasure to participate in such a good pharma
              event. UBM Medica, the organizers of Indian Pharma Expo, made
              appreciable efforts to bring so many pharmaceutical companies and
              related visitors from all around the nation together at a single
              place and provide platform for everybody to Explore opportunities
              for themselves in Pharma Industry.
              <br />
              <br />
              This event provided great opportunity to all the exhibitors to
              market their products to pharmaceutical industry, increase
              awareness about their products and improve their corporate
              visibility.
              <br />
              <br />
              We want to thank our dedicated Staff, our associated companies who
              played major role in all arrangements and visitors for making
              Indian Pharma Expo-2012 a success for us.
            </Typography>
          </Grid>
          <Grid item xs={11} sm={11} md={3} p={2}>
            <Typography variant="h6" className="color-primary text-start">
              Exhibition Highlights
            </Typography>
            <Typography m={2} variant="body1">
              Pharmaceuticals Products Exhibition
            </Typography>
            <Typography m={2} variant="body1">
              Expo based on the theme 'Destination for Innovative and Reliable
              Healthcare Products'.
            </Typography>
            <Typography m={2} variant="body1">
              B2B Exhibition
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
