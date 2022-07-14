import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Box } from "@mui/material";
import carros from "../assets/icons/icon-carro@2x.png";
import electrodomesticos from "../assets/icons/icon-electrodomesticos@2x.png";

function Carousel1(props) {
  var items = [
    {
      label: "electrodomesticos",
      imgPath: electrodomesticos,
    },
    {
      label: "carros",
      imgPath: carros,
    },
  ];

  return (
    <Carousel
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
  );
}

function Item(props) {
  return (
    <Paper>
      <Box
        component="img"
        sx={{
          display: "inline",
          width: "auto",
        }}
        src={props.item.imgPath}
        alt={props.item.label}
      />
    </Paper>
  );
}

export default Carousel1;