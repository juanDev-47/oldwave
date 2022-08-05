import { Grid, Typography, Box, styled, IconButton } from "@mui/material";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../../home/components/Carousel1.css";
// @ts-ignore
import { useContextProvider } from "../../../context/contextProvider.tsx";

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
  const { setSearch, setCategory } = useContextProvider();
  const location = useLocation();
  let price = new Intl.NumberFormat("es-CO", {
    currency: "COP",
    style: "currency",
    minimumFractionDigits: 0,
  }).format(parseInt(location.state.price));
  let discount = new Intl.NumberFormat("es-CO", {
    currency: "COP",
    style: "currency",
    minimumFractionDigits: 0,
  }).format(parseInt(location.state.discount));

  // function for gototop
  const routePath = useLocation();
  const onTop = () => {
    window.scrollTo(0, 0);
  }
  useEffect(() => {
    onTop()
    setSearch("");
    setCategory("");
  }, [routePath, setSearch, setCategory]);

  return (
    <Grid container width="100%" marginBottom="15px">
      <Grid
        item
        xs={12}
        md={6}
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
          {location.state.images.map((item, i) => (
            <ImageDetail key={i} item={item} />
          ))}
        </Carousel> 
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
        <StyledTypography sx={{ fontSize: { md: "18px" }, fontWeight: "bold" }}>
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
            {price}
          </StyledTypography>
          <StyledTypography
            sx={{
              fontSize: { md: "18px" },
              color: "#772CE8",
              fontWeight: "bold",
            }}
          >
            {discount}
          </StyledTypography>
        </Grid>
        <StyledTypography
          sx={{
            fontSize: { md: "18px" },
          }}
        >
          <Box component="span" fontWeight="bold">
            Stock:{" "}
          </Box>
          {location.state.stock} unidades
        </StyledTypography>
        <StyledTypography
          sx={{
            fontSize: { md: "18px" },
          }}
        >
          <Box component="span" fontWeight="bold">
            Vendido por:{" "}
          </Box>
          {location.state.seller.name}
        </StyledTypography>
        <StyledTypography
          sx={{
            fontSize: { md: "18px" },
          }}
        >
          <Box component="span" fontWeight="bold">
            Ciudad:{" "}
          </Box>{" "}
          {location.state.city}
        </StyledTypography>
        <StyledTypography
          sx={{
            fontSize: { md: "18px" },
          }}
        >
          <Box component="span" fontWeight="bold">
            Rating:{" "}
          </Box>
          {location.state.rating}
        </StyledTypography>
        <StyledTypography
          sx={{
            fontSize: { md: "18px" },
          }}
        >
          <Box component="span" fontWeight="bold">
            Descripción:{" "}
          </Box>{" "}
          {location.state.description}
        </StyledTypography>
        <Grid container sx={{ display: "flex" }}>
          <StyledTypography
            sx={{
              fontSize: { md: "18px" },
              width: "auto",
              marginRight: "20px",
            }}
          >
            <Box component="span" fontWeight="bold">
              Marca:{" "}
            </Box>
            {location.state.brand}
          </StyledTypography>
          <IconButton
            sx={{ width: "72px", height: "72px" }}
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <img src={location.state.seller.logo} alt="location.name" />
          </IconButton>
        </Grid>
      </Grid>
    </Grid>
  );
};

function ImageDetail({item}) {
  return (
    <Box
      component="img"
      sx={{
        width: "100%",
        borderRadius: "8px 8px 0 0",
      }}
      src={`${item.url}`}
      alt={`${item.imageName}`}
    ></Box>
  );
}

export default ProductDetail;
