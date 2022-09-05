import { Box, Grid, Typography, Button } from "@mui/material";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { styled } from "@mui/material/styles";
import "./Carousel1.css";
import { useNavigate } from "react-router-dom";
// @ts-ignore
import useCart from "../../../layout/components/cart/services/useCart.ts";

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
  width: 80%;
`;

function CarouselProduct({ allDataCurrent }): any {
  const navigate = useNavigate();



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
        {allDataCurrent.map((item, i) => (
          <Item key={i} item={item} navigate={navigate} />
        ))}
      </Carousel>
    </Grid>
  );
}

function Item({item, navigate}) {

  const { addToCart } = useCart(item);
  
  let price = new Intl.NumberFormat("es-CO", {
    currency: "COP",
    style: "currency",
    minimumFractionDigits: 0,
  }).format(parseInt(item.price));
  let discount = new Intl.NumberFormat("es-CO", {
    currency: "COP",
    style: "currency",
    minimumFractionDigits: 0,
  }).format(parseInt(item.discount));
  return (
    <Grid
      onClick={() => {
        navigate(`/product/${item.name}`, { state: item });
      }}
      sx={{
        width: { xs: "165px", md: "190px" },
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
        src={item.images[0].url}
        alt={item.name}
      />
      <Grid container justifyContent="center" width="100%">
        <StyledTypography>{item.name}</StyledTypography>
        <StyledTypography style={{ color: "#772CE8" }}>
          {item.brand}
        </StyledTypography>
        <Grid container justifyContent="center">
          <Grid item xs={6}>
            <StyledTypography
              style={{ textDecoration: "line-through", width: "100%" }}
            >
              {price}
            </StyledTypography>
          </Grid>
          <Grid item xs={6}>
            <StyledTypography style={{ color: "#772CE8", width: "100%" }}>
              {discount}
            </StyledTypography>
          </Grid>
        </Grid>
        <Grid container justifyContent="center">
          <StyledButtonVar onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            addToCart()
          }} >Agregar al carrito</StyledButtonVar>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default CarouselProduct;
