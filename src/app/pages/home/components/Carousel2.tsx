import React from "react";
import { Box, Grid } from "@mui/material";
import fridayBanner from "../../../assets/img/banner-blackfriday@2x.png";
import bannerAux from "../../../assets/img/banner-auxilar-ordenadores@2x.png";
import "react-multi-carousel/lib/styles.css";
import "./Carousel1.css";
import Carousel from "react-multi-carousel";

function Carousel2(props) {
  var items = [
    {
      label: "Black Friday",
      imgPath: fridayBanner,
    },
    {
      label: "promotion",
      imgPath: bannerAux,
    },
  ];

  return (
    <Grid container sx={{ width: "100%" }}>
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
            items: 1,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 1,
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
    <Grid container width="100%">
      <Grid item={true} width='100%'>
        <Box
          component="img"
          sx={{
            width: "100%",
          }}
          src={props.item.imgPath}
          alt={props.item.label}
        />
      </Grid>
    </Grid>
  );
}

export default Carousel2;
