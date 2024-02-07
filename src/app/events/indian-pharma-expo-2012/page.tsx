import { Grid, Typography } from "@mui/material";
import { Metadata } from "next";
import Head from "next/head";;

export default function Expo2012Content() {
  return (
    <>
      <Head>
        <link
          rel="canonical"
          href="https://old.saarbiotech.in/Indian%20pharma20%Expo%202012.html"
        />
      </Head>
      <Grid container justifyContent={"center"} alignContent={"center"}>
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
              fontSize={"3.5em"}
              variant="h4"
              className="color-primary text-center"
            >
              Indian Pharma Expo 2012
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={7} p={2}>
            <Typography
              fontSize={"1.6em"}
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
            <Typography
              fontSize={"2em"}
              variant="h6"
              className="color-primary text-start"
            >
              Exhibition Highlights
            </Typography>
            <Typography m={2} fontSize={"1.5em"} variant="body1">
              Pharmaceuticals Products Exhibition
            </Typography>
            <Typography m={2} fontSize={"1.5em"} variant="body1">
              Expo based on the theme 'Destination for Innovative and Reliable
              Healthcare Products'.
            </Typography>
            <Typography m={2} fontSize={"1.5em"} variant="body1">
              B2B Exhibition
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export const metadata: Metadata = {
  title: "Indian Pharma Expo 2012 | Saar Biotech",
  description:
    "Saar Biotech participated in the Indian Pharma Expo 2012, showcasing a wide range of pharmaceutical products. Explore our participation in the exhibition and our commitment to producing high-quality DCGI approved drugs.",
  keywords:
    "Indian Pharma Expo 2012, Saar Biotech, Pharmaceutical Exhibition, Pharma Expo 2012, Delhi Exhibition, Contract Manufacturing, GMP Certified, DCGI Approved Drugs, Pharmaceutical Manufacturer, Pharma Exporter, Bulk Medicine Manufacturer, Top Pharma Companies, Pharma Industry",
};
