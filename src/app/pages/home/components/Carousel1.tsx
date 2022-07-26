import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { hslToRgb, styled } from "@mui/material/styles";
import "./Carousel1.css";
import carros from "../../../assets/icons/icon-carro.png";
import motos from "../../../assets/icons/icon-moto.png";
import ropa from "../../../assets/icons/icon-ropa.png";
import deporte from "../../../assets/icons/icon-deporte.png";
import muebles from "../../../assets/icons/icon-mueble.png";
import computadores from "../../../assets/icons/icon-computadores.png";
import celular from "../../../assets/icons/icon-celular.png";
import tv from "../../../assets/icons/icon-tv.png";
import electrodomesticos from "../../../assets/icons/icon-electrodomesticos.png";

const StyledTypography = styled(Typography)`
  font-size: {{ xs: "10px", md: "14px" }};
  padding: 0;
  color: #5C5E64;
  

`;

function Carousel1(props) {
  var items = [
    {
      label: "Carros",
      imgPath: carros,
    },
    {
      label: "Motos",
      imgPath: motos,
    },
    {
      label: "Ropa",
      imgPath: ropa,
    },
    {
      label: "Deporte",
      imgPath: deporte,
    },
    {
      label: "Muebles",
      imgPath: muebles,
    },
    {
      label: "Computadores",
      imgPath: computadores,
    },
    {
      label: "Celulares",
      imgPath: celular,
    },
    {
      label: "TV, Audio y foto",
      imgPath: tv,
    },
    {
      label: "Electrodomésticos",
      imgPath: electrodomesticos,
    },
  ];

  return (
    <Grid container justifyContent={"center"} sx={{ paddingBottom: "15px" }}>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className="carouselClass"
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
            items: 3,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 4,
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
        width: "100px",
        ":hover": {
          cursor: "pointer",
          color: "#772CE8",
        },
      }}
    >
      <Box
        component="img"
        sx={{
          padding: "15px 20px",
          margin: "0 auto",
          ":hover": {
            borderRadius: "10px",
            boxShadow: "1px 5px 15px 2px rgba(119,44,232,0.9)",
            filter: "invert(26%) sepia(100%) saturate(5483%) hue-rotate(261deg) brightness(92%) contrast(97%)"
          },
        }}
        src={props.item.imgPath}
        alt={props.item.label}
      />
      <StyledTypography
        sx={{
          ":hover": {
            color: "#772CE8",
          },
        }}
      >
        {props.item.label}
      </StyledTypography>
    </Grid>
  );
}

export default Carousel1;
