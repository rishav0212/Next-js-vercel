import { Grid, Paper, Typography } from "@mui/material";
import { Metadata } from "next";
import Head from "next/head";

export default function SaarBiotechContent() {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://old.saarbiotech.in/saar.html" />
      </Head>
      <Grid container alignContent={"center"} justifyContent={"center"}>
        <Grid
          container
          xs={11}
          md={10}
          item
          justifyContent={"center"}
          textAlign={"center"}
          sx={{
            padding: 4,
            borderRadius: 5,
            backgroundColor: "#f0f0f0",
            mt: 5,
            justifySelf: "center",
            boxShadow: "0px 4px 8px rgb(0,0,0,0.4)",
          }}
        >
          <Grid item xs={12} margin={1}>
            <Typography fontSize={"4em"} variant="h4" className="color-primary">
              Saar Biotech Manufacuring Unit
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={8}>
            <Typography fontSize={"1.8em"} textAlign={"justify"}>
              Our Factory is located in Baddi, District Solan of Himachal
              Pradesh. The facilities and the location of the factory have
              created an extra edge for manufacturing and distributing the
              products.
              <br />
              <br />
              The factory consists of Production department, QC department, QA
              department, Accounts department and various other sub-departments.
              The factory is operating with team of professionals.The factory
              carries out management and production as per GMP requirements. It
              is equipped with sophisticated, modern and quality control
              equipments.
              <br />
              <br />
              The facility has also been equipped to handle the development of
              formulation of New DRUGS. Our product range comprises
              Anti-Allergic, Anti-Inflammatory, Antitussive, Expectorant,
              Dermatological and Ophthalmology.
              <br />
              <br />
              Focusing on superior customer service, it is Saar Biotech policy
              to conduct business in a transparent manner.
              <br />
              <br />
              From production to the packaging of goods, internal processes
              follow strict GMP requirements. Every batch of production is
              thoroughly tested to ensure the conformity of quality.
            </Typography>
          </Grid>
          <Grid
            item
            alignItems="center"
            justifyContent={"center"}
            xs={12}
            sm={12}
            md={4}
          >
            <img
              className="manufacturing-unit-images"
              width={250}
              height={100}
              src={"/images/saar-image1.jpg"}
              alt={"Saar Biotech"}
            />
            <img
              className="manufacturing-unit-images"
              width={250}
              height={100}
              src={"/images/saar-image2.jpg"}
              alt={"Saar Biotech"}
            />
            <img
              className="manufacturing-unit-images"
              width={250}
              height={100}
              src={"/images/saar-image3.jpg"}
              alt={"Saar Biotech"}
            />
            <img
              className="manufacturing-unit-images"
              width={250}
              height={100}
              src={"/images/saar-image4.jpg"}
              alt={"Saar Biotech"}
            />
          </Grid>
        </Grid>
        <Grid
          container
          xs={11}
          md={10}
          item
          justifyContent={"center"}
          sx={{
            borderRadius: 5,
            backgroundColor: "#f0f0f0",
            my: 5,
            justifySelf: "center",
            boxShadow: "0px 4px 8px rgb(0,0,0,0.4)",
          }}
        >
          <Grid item xs={12} margin={1} className="text-center color-primary">
            <Typography fontSize={"3em"} variant="h4">
              Our Strengths
            </Typography>
          </Grid>

          <Grid item xs={12} sm={12} md={5} margin={1}>
            <Typography
              fontSize={"1.9em"}
              variant="h6"
              className="font--size-1125"
            >
              <li>Timely Delivery of Product</li>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={5} margin={1}>
            <Typography
              fontSize={"1.9em"}
              variant="h6"
              className="font--size-1125"
            >
              <li>Determined by quality, integrity and core values </li>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={5} margin={1}>
            <Typography
              fontSize={"1.9em"}
              variant="h6"
              className="font--size-1125"
            >
              <li>
                Rigid adherence to Good Manufacturing Practises (GMP)
                International Organization for Standardization(ISO)
              </li>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={5} margin={1}>
            <Typography
              fontSize={"1.9em"}
              variant="h6"
              className="font--size-1125"
            >
              <li>
                Multidisciplined workforce that is motivated towards the highest
                standards of customer satisfaction
              </li>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export const metadata: Metadata = {
  title: "Saar Biotech | Manufacturing Unit",
  description:
    "Explore Saar Biotech's manufacturing unit in Baddi, Himachal Pradesh. Specializing in pharmaceutical production including Anti-Retrovirals, Anti-Malarials, Cardiovascular, Dermatology, Ophthalmology, and more.",
  keywords:
    "Saar Biotech, manufacturing unit, pharmaceutical manufacturing, Baddi Himachal, GMP, ISO, pharmaceutical products, Anti-Retrovirals, Anti-Malarials, Cardiovascular, Dermatology, Ophthalmology, top pharmaceutical companies, pharmaceutical exporters, third party medicine manufacturers, bulk medicine manufacturers, DCGI approved drugs, pharmaceutical companies in India, pharmaceuticals export India, pain killers, pain relief",
};
