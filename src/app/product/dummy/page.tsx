"use client";
import React from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  List,
  ListItem,
  ListItemText,
  Divider,
  Paper,
} from "@mui/material";
import styled from "@emotion/styled";

const OrangePaper = styled(Paper)`
  padding: 3px;
  margin-bottom: 3px;
  background-color: #ff9800; /* Orange color */
  color: #fff; /* White text */
`;

const ProductImage = styled.img`
  max-width: 100%;
//   height: auto;
`;

const ProductCard = styled(Card)`
  display: flex;
  flex-direction: column;
  background-color: #fff; /* White background */
`;

const StyledTypography = styled(Typography)`
  color: EF3E00;
`;

const ProductPage: React.FC = () => {
  // Dummy product data for illustration
  const dummyProduct = {
    name: "Dummy Medicine",
    image: "/images/products/azithromycin.jpg",
    presentation: "Tablets",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    approvedName: "Loremipsum",
    indications: ["Fever", "Headache", "Pain"],
    mechanism: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    sideEffects: [
      {
        element: "Active Ingredient",
        effects: ["Nausea", "Dizziness", "Insomnia"],
      },
      {
        element: "Inactive Ingredient",
        effects: ["Allergic reactions", "Skin rash"],
      },
    ],
    conclusions: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  };

  const product = dummyProduct;

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <Container>
      <OrangePaper>
        <StyledTypography variant="h2" gutterBottom>
          {product.name}
        </StyledTypography>
        <Divider />
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <ProductCard>
              <CardMedia
                component={ProductImage}
                alt={product.name}
                image={product.image}
              />
              <CardContent>
                <StyledTypography variant="h5">
                  Presentation: {product.presentation}
                </StyledTypography>
                <StyledTypography variant="body1">
                  Description: {product.description}
                </StyledTypography>
                <StyledTypography variant="body1">
                  Approved Name: {product.approvedName}
                </StyledTypography>
              </CardContent>
            </ProductCard>
          </Grid>
          <Grid item xs={12} sm={6}>
            <StyledTypography variant="h4" gutterBottom>
              Indications
            </StyledTypography>
            <List>
              {product.indications.map((indication, index) => (
                <ListItem key={index}>
                  <ListItemText primary={indication} />
                </ListItem>
              ))}
            </List>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h4" gutterBottom>
              Mechanism
            </Typography>
            <Typography variant="body1" color="textSecondary">
              {product.mechanism}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h4" gutterBottom>
              Side Effects
            </Typography>
            {product.sideEffects.map((item, index) => (
              <div key={index}>
                <Typography variant="h6" gutterBottom>
                  {item.element}
                </Typography>
                <List>
                  {item.effects.map((effect, i) => (
                    <ListItem key={i}>
                      <ListItemText primary={effect} />
                    </ListItem>
                  ))}
                </List>
              </div>
            ))}
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h4" gutterBottom>
              Conclusions
            </Typography>
            <Typography variant="body1" color="textSecondary">
              {product.conclusions}
            </Typography>
          </Grid>
        </Grid>
      </OrangePaper>
    </Container>
  );
};

export default ProductPage;
