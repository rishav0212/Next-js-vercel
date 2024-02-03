import { Grid, Typography } from "@mui/material";
import { Metadata } from "next";

export default function DmPharmaContent() {
  return (
    <>
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
              DM Pharma Manufacuring Unit
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={8}>
            <Typography fontSize={"1.8em"} textAlign={"justify"}>
              The facilities and location of the factory have created an extra
              edge for manufacturing and distributing the products. The factory
              consists of Production department, R&D department, Accounts
              department and other sub-departments.
              <br />
              <br />
              The factory is operating with experienced and hard working
              employees. It is equipped with sophisticated, modern and vquality
              control equipments. The facility has also been equipped to handle
              the development of formulation OF New DRUGS. Our product range
              comprises Anti-retrovirals, Anti-malarials, Cardiovascular and
              Dermatology.
              <br />
              <br />
              The well-planned and state-of-the-art facilities at DM Pharma have
              led to its accelerated growth in the pharmaceutical sector.
              Infrastructure plays a key role in the development and progress of
              a company. The reputation of our company is built on Manufacturing
              and R&D facilities that are designed to meet global standards, and
              stringent Quality standards that ensure wetdeliver only the best
              formulations and products.
              <br />
              <br />
              World-class manufacturing facilities coupled with a
              state-of-the-art R&D centre that manufactures innovative products,
              and ably supported by an intelligent Quality Management Systems
              implemented to perfection has taken DM Pharma to a commendable
              position in the domestic as well as global market.
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
              src={"/images/dm-image1.jpg"}
              alt={"Saar Biotech"}
            />
            <img
              className="manufacturing-unit-images"
              width={250}
              height={100}
              src={"/images/dm-image2.jpg"}
              alt={"Saar Biotech"}
            />
            <img
              className="manufacturing-unit-images"
              width={250}
              height={100}
              src={"/images/dm-image3.jpg"}
              alt={"Saar Biotech"}
            />
            <img
              className="manufacturing-unit-images"
              width={250}
              height={100}
              src={"/images/dm-image4.jpg"}
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
          <Grid item xs={12} margin={2} className="text-center color-primary">
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
          <Grid item fontSize={"1.9em"} xs={12} sm={12} md={5} margin={1}>
            <Typography variant="h6" className="font--size-1125">
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
    "Our Factory is located in Baddi, Dictrict Solan of Himachal Pradesh .DM Pharma, DM, Pharma, PHARMACEUTICALS INDUSTRY,DRUGS , Pharmaceutical ,Drugs , Pharmaceutical Medicines, Our product range comprisesAnti retrovirals,Anti malarials, Cardiovascular, Dermatology , Ophthalmology, Anti deprossants, Anti aging, Anti virus, Anti anxiety, Anti pyreticdrugs in Chandigarh India.We are one from  the top 10 pharmaceutical Companies in India.DM Pharma factory is fulfilled with new and latest equipments equipment",
  keywords:
    "export, exports, exporter, exporters,DM, Pharma, Excise freee Zone ,DCGI approved drugs, DM Pharma, Pharmaceutical Manufacturing,  companies in India,  PHARMACEUTICAL, Manufacturers ,Baddi Himachal,Third party medicine manufacturers ,Bulk medicine manufacturers in Chandigarh,  Top Pharmaceutical companies in Chandigarh,  DCGI Approved Molecules, pharmaceutical companies in India, pharmaceuticals export india, top 10 pharmaceutical companies , third party, medicine, manufacturer, pharmaceutical manufacturer in india,pharma exporters, medicines, Anti retrovirals,Anti malarials, Cardiovascular, Dermatology , Ophthalmology, Anti deprossants, Anti aging, Anti virus, Anti anxiety, Anti pyretic, pain killers, pain killer, pain relief , medicines. ",
};
