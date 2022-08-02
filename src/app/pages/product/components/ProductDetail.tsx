import { Grid, Typography, Box, styled } from "@mui/material";
import React from "react";

const StyledTypography = styled(Typography)`
  font-size: 14px;
  padding-top: 10px;
  width: 100%;
  text-align: left;
  ${(props) => props.theme.breakpoints.up("xs")} {
    font-size: 16px;
  }
`;

const ProductDetail = () => {
  const product = {
    src: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    name: "Nevera 215 Lts",
    city: "Medellin",
    brand: "Haceb",
    price: "3.250.000",
    seller: "Haceb",
    logo: "https://www.haceb.com/wcsstore/Global/images/logo/haceb-logo-white.png",
    discount: "2.750.000",
    description: "Producto de alta calidad",
    rating: 4,
  };

  return (
    <Grid container width="100%" marginBottom="15px">
      <Grid item xs={12} md={6}>
        <Box
          component="img"
          sx={{ width: "100%" }}
          src={`${product.src}`}
          alt={`${product.name}`}
        ></Box>
      </Grid>
      <Grid item xs={12} md={6} sx={{ padding: { xs: "15px", md: "20px" } }}>
        <StyledTypography
          sx={{
            fontSize: { md: "28px" },
            color: "#772CE8",
            fontWeight: "bold",
          }}
        >
          {product.name}
        </StyledTypography>
        <StyledTypography
          sx={{ fontSize: { md: "18px" }, fontWeight: "bold" }}
        >
          Precio:
        </StyledTypography>
        <Grid item width="50%" display="flex">
          <StyledTypography
            sx={{
              fontSize: { md: "18px" },
              color: "#772CE8",
              textDecoration: "line-through",
              fontWeight: "bold",
            }}
          >
            $ {product.price}
          </StyledTypography>
          <StyledTypography
            sx={{
              fontSize: { md: "18px" },
              color: "#772CE8",
              fontWeight: "bold",
            }}
          >
            $ {product.discount}
          </StyledTypography>
        </Grid>
        <StyledTypography
          sx={{
            fontSize: {md: "18px" },
          }}
        >
          <Box component='span' fontWeight='bold' >Vendido por: </Box> {product.seller}
        </StyledTypography>
        <StyledTypography
          sx={{
            fontSize: {md: "18px" },
          }}
        >
          <Box component='span' fontWeight='bold' >Ciudad: </Box> {product.city}
        </StyledTypography>
        <StyledTypography
          sx={{
            fontSize: { md: "18px" },
          }}
        >
          <Box component='span' fontWeight='bold' >Marca: </Box>{product.brand}
        </StyledTypography>
        <StyledTypography
          sx={{
            fontSize: { md: "18px" },
          }}
        >
          <Box component='span' fontWeight='bold' >Rating: </Box>{product.rating}
        </StyledTypography>
        <StyledTypography
          sx={{
            fontSize: { md: "18px" },
          }}
        >
          <Box component='span' fontWeight='bold' >Descripción: </Box> {product.description}
        </StyledTypography>
      </Grid>
    </Grid>
  );
};

export default ProductDetail;
