import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { styled } from "@mui/material/styles";
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
// @ts-ignore
import { useContextProvider } from "../../../context/contextProvider.tsx";


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
      categoryId: '4f276a8a-2b7c-4b09-953a-e794e19c96da'
      // categoryId: 'd4f107a0-2901-420c-8d4c-57995ed656c1'
    },
    {
      label: "Motos",
      imgPath: motos,
      categoryId: '9faa9ac8-53f5-43fa-91e1-0a60b76c8122'
      // categoryId: '6577ecee-cb8b-4b2b-8764-fb1d9895c29e'
    },
    {
      label: "Ropa",
      imgPath: ropa,
      categoryId: 'a40f1a9c-671c-47d3-8ff8-864c50c271d6'
      // categoryId: '468b4d3a-4549-422c-a464-5243a142da13'
    },
    {
      label: "Deporte",
      imgPath: deporte,
      categoryId: '20f28ce1-26c0-4ced-bf59-065def757ece'
      // categoryId: '23314ba0-df2d-45dc-abbb-d7be7c26db81'
    },
    {
      label: "Muebles",
      imgPath: muebles,
      categoryId: 'f8e2357f-cbe8-4a40-b9bf-dbd905d1df43'
      // categoryId: '57efeaf7-b3a9-4585-89ba-f13a6a176b39'
    },
    {
      label: "Computadores",
      imgPath: computadores,
      categoryId: '0a6a0267-0095-4be0-a1be-4c516ba0b6ef'
      // categoryId: '9d5360b2-dec3-41cc-9035-2db96017a6e7'
    },
    {
      label: "Celulares",
      imgPath: celular,
      categoryId: '9f2a8b05-7550-45f2-ac1f-6e2db9e7eb9a'
      // categoryId: '90c09e93-6dea-44f5-8b9b-eabdfac7a0c1'
    },
    {
      label: "TV, Audio y foto",
      imgPath: tv,
      categoryId: 'c697f242-d119-40b9-960f-b79320306a0f'
      // categoryId: '9809becd-2dde-418e-99e7-d8bc48b96114'
    },
    {
      label: "Electrodomésticos",
      imgPath: electrodomesticos,
      categoryId: 'e0e83f5e-7e88-481b-ad67-4712c4cdc782'
      // categoryId: 'b7a7bd57-e29d-4608-bff8-fc1d49c5d1bd'
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
            items: 7,
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
  const { setCategory } = useContextProvider();
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
        onClick={ () => setCategory(props.item.categoryId) }
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
