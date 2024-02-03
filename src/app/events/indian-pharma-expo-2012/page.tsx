import { Grid, Typography } from "@mui/material";
import { Metadata } from "next";

export default function Expo2012Content() {
  return (
    <>
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
  title: "Pharmac South 2012| Saar Biotech",
  description:
    "Saar Biotech Deals in Liquids, Suspensions, Dry syrups, sprays, Nasal sprays, Ointments, Tablets,creams, skin ceams, antibiotic, Anticold, Analgesic & Anti-inflammatory, Antacid, Dry Syrups, Tonic, Drops, Cough, Shampoo, Lotions, Roll On, Capsules, Sachets in very attractive packings for Amber Bottle PACKING, measuring Cap, Blister Packing, Metallic Cartons. Saar Biotech is GMP Certified company involved in making DCGI approved new Drugs from Past four years",
  keywords:
    "Participation, indian pharme expo 2012, dm pharma, saar biotech , exhibition , expo 2012, delhi, sponsors, Contract manufacturing, export, exports, exporter, exporters,DM,Saar, biotech, Pharma, Excise freee Zone ,DCGI approved drugs, Saar Biotech, Pharmaceutical Manufacturing,  companies in India,  PHARMACEUTICAL, Manufacturers ,Baddi Himachal,Third party medicine manufacturers ,Bulk medicine manufacturers in Chandigarh,  Top Pharmaceutical companies in Chandigarh,  DCGI Approved Molecules, pharmaceutical companies in India, pharmaceuticals export india, top 10 pharmaceutical companies , third party, medicine, manufacturer, pharmaceutical manufacturer in india,pharma exporters, medicines ",
};
