import { Box, Grid, Typography, Button } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import "./Carousel1.css";
import iphone11pro from "../../../assets/img/iphone11pro@2x.png";

const StyledButtonVar = styled(Button)(({ theme }) => ({
  color: "#FFFFFF",
  backgroundColor: "#772CE8",
  ":hover": {
    cursor: "pointer",
    backgroundColor: "#7942cb",
  },
  borderRadius: "20px",
  border: "1px solid #ffffff",
  marginTop: "10px",
  padding: "5px 20px",
  fontSize: "10px",
}));

const StyledTypography = styled(Typography)`
  font-size: 14px;
  padding-top: 10px;
  width: 100%;
  text-align: center;
`;

function CarouselProduct(props) {
  var items = [
    {
      name: "iPhone 11 64GB Negro",
      brand: "Apple",
      price: "$3.250.000",
      discount: "$3.250.000",
      image: iphone11pro,
    },
    {
      name: "iPhone 11 64GB Negro",
      brand: "Apple",
      price: "$3.250.000",
      discount: "$3.250.000",
      image: iphone11pro,
    },
    {
      name: "iPhone 11 64GB Negro",
      brand: "Apple",
      price: "$3.250.000",
      discount: "$3.250.000",
      image: iphone11pro,
    },
    {
      name: "iPhone 11 64GB Negro",
      brand: "Apple",
      price: "$3.250.000",
      discount: "$3.250.000",
      image: iphone11pro,
    },
    {
      name: "iPhone 11 64GB Negro",
      brand: "Apple",
      price: "$3.250.000",
      discount: "$3.250.000",
      image: iphone11pro,
    },
  ];

  return (
    <Grid
      container
      sx={{
        width: "100%",
        paddingBottom: "15px",
        marginY: "25px",
      }}
      justifyContent="center"
      alignItems="center"
    >
      <Grid container item width='100%' maxWidth='1333px' justifyContent="center" >
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Grid>
    </Grid>
  );
}

function Item(props) {
  return (
    <Grid
      item
      xs={12}
      sm={4}
      md={3}
      lg={2}
      xl={2}
      sx={{
        marginBottom: "20px",
        width: { sm: "165px", md: "180px" },
        height: "330px",
        borderRadius: "8px",
        opacity: "1",
        border: "1px solid #E2E2E2",
        bgcolor: "#f7f7f7",
        marginRight: "20px",
      }}
    >
      <Box
        component="img"
        sx={{
          height: "160px",
          width: "100%",
          borderRadius: "8px",
        }}
        src={props.item.image}
        alt={props.item.name}
      />
      <Grid container justifyContent="center" width="100%">
        <StyledTypography>{props.item.name}</StyledTypography>
        <StyledTypography style={{ color: "#772CE8" }}>
          {props.item.brand}
        </StyledTypography>
        <Grid container justifyContent="center">
          <Grid item xs={6}>
            <StyledTypography
              style={{ textDecoration: "line-through", width: "100%" }}
            >
              {props.item.price}
            </StyledTypography>
          </Grid>
          <Grid item xs={6}>
            <StyledTypography style={{ color: "#772CE8", width: "100%" }}>
              {props.item.discount}
            </StyledTypography>
          </Grid>
        </Grid>
        <Grid container justifyContent="center">
          <StyledButtonVar>Agregar al carrito</StyledButtonVar>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default CarouselProduct;
