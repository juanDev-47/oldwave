import { Box, Grid, Typography, Button } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import "./Carousel1.css";
import { useNavigate } from "react-router-dom";

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

function CarouselProduct({ allDataResults }): any {
  const navigate = useNavigate();
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
      {allDataResults.length > 0 && (
        <Grid
          container
          item
          width="100%"
          maxWidth="1333px"
          justifyContent="center"
        >
          {allDataResults.map((item: any, i: React.Key | null | undefined) => (
            <Item key={i} item={item} navigate={navigate} />
          ))}
        </Grid>
      )}
    </Grid>
  );
}

function Item({ item, navigate}) {
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
        navigate(`/product/${item.name}`, { state: item  });
      }}
      item
      xs={6}
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
          <StyledButtonVar>Agregar al carrito</StyledButtonVar>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default CarouselProduct;
