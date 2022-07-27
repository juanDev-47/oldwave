import { Box, Grid, Typography, Button } from "@mui/material";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { styled } from "@mui/material/styles";
import "./Carousel1.css";
import iphone11pro from "../../../assets/img/iphone11pro@2x.png";

// interface data {
//   name: string,
//   brand: string,
//   price: Number,
//   discount: Number,
//   image: string,
// }

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
  fontSize: '10px',
}));

const StyledTypography = styled(Typography)`
  font-size: 14px;
  padding-top: 10px;
  width: 80%;
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
      justifyContent={"center"}
      sx={{ paddingBottom: "15px", height: "400px" }}
    >
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className="carouselProductClass"
        containerClass="container"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass="classItem"
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 5,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 2,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 3,
          },
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
    </Grid>
  );
}

function Item(props) {
  return (
    <Grid
      sx={{
        width: { xs: "165px", md: "180px" },
        height: "330px",
        borderRadius: "8px",
        opacity: "1",
        border: "1px solid #E2E2E2",
        bgcolor: "#f7f7f7",
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
        <Grid container justifyContent='center' >
          <Grid item xs={6}>
            <StyledTypography style={{ textDecoration: "line-through", width: '100%' }}>
              {props.item.price}
            </StyledTypography>
          </Grid>
          <Grid item xs={6}>
            <StyledTypography style={{ color: "#772CE8", width: '100%' }} >{props.item.discount}</StyledTypography>
          </Grid>
        </Grid>
        <Grid container justifyContent='center'>
          <StyledButtonVar>Agregar al carrito</StyledButtonVar>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default CarouselProduct;
