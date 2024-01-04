"use client"

import { Container, Grid, Stack, Toolbar, Typography } from "@mui/material";
import * as React from "react";

export default function DmPharmaContent() {
  return (
    <>
     = <Toolbar />

            <Typography variant="h4" className="text-center color-primary">DM Pharma Manufacuring Unit</Typography>

            <Toolbar />
            <Container>
                <Grid container spacing={8}>
                    <Grid item xs={12} sm={12} md={8} lg={8}>
                        <Typography className="d-flex align-self-center lh-lg">
                            The facilities and location of the factory have created an extra edge for manufacturing and distributing the products. The factory consists of Production department, R&D department, Accounts department and other sub-departments.
                            <br /><br />
                            The factory is operating with experienced and hard working employees. It is equipped with sophisticated, modern and vquality control equipments.
                            The facility has also been equipped to handle the development of formulation OF New DRUGS. Our product range comprises Anti-retrovirals, Anti-malarials, Cardiovascular and Dermatology.
                            <br /><br />
                            The well-planned and state-of-the-art facilities at DM Pharma have led to its accelerated growth in the pharmaceutical sector. Infrastructure plays a key role in the development and progress of a company. The reputation of our company is built on Manufacturing and R&D facilities that are designed to meet global standards, and stringent Quality standards that ensure wetdeliver only the best formulations and products.
                            <br /><br />
                            World-class manufacturing facilities coupled with a state-of-the-art R&D centre that manufactures innovative products, and ably supported by an intelligent Quality Management Systems implemented to perfection has taken DM Pharma to a commendable position in the domestic as well as global market.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                        <Stack spacing={2}
                            alignItems="center"
                            justifyContent={"center"}
                            className="w-100 h-100"
                        >
                            <img className="manufacturing-unit-images" src="/images/dm-image1.jpg" alt="Saar Biotech" />
                            <img className="manufacturing-unit-images" src="/images/dm-image2.jpg" alt="Saar Biotech" />
                            <img className="manufacturing-unit-images" src="/images/dm-image3.jpg" alt="Saar Biotech" />
                            <img className="manufacturing-unit-images" src="/images/dm-image4.jpg" alt="Saar Biotech" />
                            <img className="manufacturing-unit-images" src="/images/dm-image5.jpg" alt="Saar Biotech" />
                        </Stack>
                    </Grid>
                </Grid>

                <Toolbar />
                <Toolbar />

                <Typography variant="h4" className="text-center color-primary">Our Strengths</Typography>

                <Toolbar />

                <Grid container spacing={8} className="text-center">
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <Typography variant="h6" className="font--size-1125">
                            <li>Timely Delivery of Product</li>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <Typography variant="h6" className="font--size-1125">
                            <li>Determined by quality, integrity and core values </li>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <Typography variant="h6" className="font--size-1125">
                            <li>Rigid adherence to Good Manufacturing Practises (GMP) International Organization for Standardization(ISO)</li>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <Typography variant="h6" className="font--size-1125">
                            <li>Multidisciplined workforce that is motivated towards the highest standards of customer satisfaction</li>
                        </Typography>
                    </Grid>
                </Grid>

                <Toolbar />
            </Container>
    </>
  );
}
