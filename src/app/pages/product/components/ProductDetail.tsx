import { Grid, Typography, Box, styled } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";

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
  const location = useLocation();


  return (
    <Grid container width="100%" marginBottom="15px">
      <Grid item xs={12} md={6}>
        <Box
          component="img"
          sx={{ width: "100%" }}
          src={`${location.state.images[0].url}`}
          alt={`${location.state.name}`}
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
          {location.state.name}
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
            $ {location.state.price}
          </StyledTypography>
          <StyledTypography
            sx={{
              fontSize: { md: "18px" },
              color: "#772CE8",
              fontWeight: "bold",
            }}
          >
            $ {location.state.discount}
          </StyledTypography>
        </Grid>
        <StyledTypography
          sx={{
            fontSize: {md: "18px" },
          }}
        >
          <Box component='span' fontWeight='bold' >Vendido por: </Box> {location.state.seller.name}
        </StyledTypography>
        <StyledTypography
          sx={{
            fontSize: {md: "18px" },
          }}
        >
          <Box component='span' fontWeight='bold' >Ciudad: </Box> {location.state.city}
        </StyledTypography>
        <StyledTypography
          sx={{
            fontSize: { md: "18px" },
          }}
        >
          <Box component='span' fontWeight='bold' >Marca: </Box>{location.state.brand}
        </StyledTypography>
        <StyledTypography
          sx={{
            fontSize: { md: "18px" },
          }}
        >
          <Box component='span' fontWeight='bold' >Rating: </Box>{location.state.rating}
        </StyledTypography>
        <StyledTypography
          sx={{
            fontSize: { md: "18px" },
          }}
        >
          <Box component='span' fontWeight='bold' >Descripción: </Box> {location.state.description}
        </StyledTypography>
      </Grid>
    </Grid>
  );
};

export default ProductDetail;
