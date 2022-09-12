import {
  Grid,
  Typography,
  Box,
  styled,
  IconButton,
  Button,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../../home/components/Carousel1.css";
// @ts-ignore
import { useContextProvider } from "../../../context/contextProvider.tsx";
// @ts-ignore
import useCart from "../../../layout/components/cart/services/useCart.ts";
import {
  ArrowCircleLeftSharp,
  ArrowCircleRightSharp,
} from "@mui/icons-material";

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
  const { setSearch, setCategory, cart } = useContextProvider();
  const location:any = useLocation();
  const [addCart, setAddCart] = useState(false);
  const [index, setIndex] = useState();

  useEffect(() => {
    setIndex(
      cart.findIndex((item: { id: any }) => item.id === location.state.id)
    );
  }, [cart, location.state.id]);

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
  };
  useEffect(() => {
    onTop();
    setSearch("");
    setCategory("");
  }, [routePath, setSearch, setCategory]);

  const { increase, decrease, addToCart } = useCart(location.state);

  return (
    <Grid container width="100%" marginBottom="15px">
      <Grid item xs={12} md={6}>
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
            <img src={location.state.seller.logo} alt="Foto" />
          </IconButton>
        </Grid>
        <Grid container sx={{ display: "flex" }}>
          <Box display={"flex"} flexDirection="column">
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#772CE8",
                color: "white",
                width: "100%",
                height: "30px",
                fontSize: "14px",
                fontWeight: "bold",
                marginTop: "10px",
              }}
              onClick={() => {
                setAddCart(true);
                addToCart(location.state);
              }}
            >
              Agregar al carrito
            </Button>
            {addCart && (
              <>
                <Box display={"flex"} justifyContent={"center"}>
                  <IconButton
                    onClick={() => {
                      decrease(location.state);
                    }}
                    aria-label="delete"
                  >
                    <ArrowCircleLeftSharp />
                  </IconButton>
                  <Typography sx={{ fontSize: 14, margin: "10px 10px 0 10px" }}>
                    {!cart[index] ? 1 : cart[index].cantidad}
                  </Typography>
                  <IconButton
                    onClick={() => {
                      increase(location.state);
                    }}
                    aria-label="delete"
                  >
                    <ArrowCircleRightSharp />
                  </IconButton>
                </Box>
              </>
            )}
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

function ImageDetail({ item }) {
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
