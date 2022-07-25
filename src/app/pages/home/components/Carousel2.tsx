import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Box, Grid } from "@mui/material";
import fridayBanner from "../../../assets/img/banner-blackfriday@2x.png";
import bannerAux from "../../../assets/img/banner-auxilar-ordenadores@2x.png";

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
    <Grid sx={{ width: "100%" }}>
      <Carousel
        index={2}
        duration={500}
        animation={"fade"}
        autoPlay={false}
        indicatorIconButtonProps={{
          style: {
            color: "#000000",
            backgroundColor: "#C5D3DD",
            margin: "0 3px",
          },
        }}
        activeIndicatorIconButtonProps={{
          style: {
            backgroundColor: "#772CE8", // 2
          },
        }}
        indicatorContainerProps={{
          style: {
            bottom: "35px",
            zIndex: "100",
            position: "relative",
          },
        }}
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
    <Paper >
      <Box
        component="img"
        sx={{
          width: "100%",
          height: "auto",
        }}
        src={props.item.imgPath}
        alt={props.item.label}
      />
    </Paper>
  );
}

export default Carousel2;
