import { Grid, Typography, Box, styled } from "@mui/material";
import React from "react";

const StyledTypography = styled(Typography)`
  font-size: 22px;
  padding-top: 10px;
  width: 100%;
  font-weight: 700;
  text-align: center;
  ${(props) => props.theme.breakpoints.up("xs")} {
    font-size: 22px;
  }
`;

const OrderByUser = ({ orders }) => {
  const pipe = (value => {
    return new Intl.NumberFormat("es-CO", {
      currency: "COP",
      style: "currency",
      minimumFractionDigits: 0,
    }).format(parseInt(value));
  })
  return (
    <Grid container>
      <Grid item xs={12} sx={{ my: 10 }}>
        <StyledTypography variant="h1">Mis pedidos</StyledTypography>
      </Grid>
      <Grid container xs={12} md={10} sx={{margin: '0 auto'}}>
        {orders.map((order) => (
          <>
            <Typography variant="h6" sx={{ pt: 10, fontWeight: 600 }}>pedido numero: {order.orderId}</Typography>
            <Grid container xs={12} sx={{border: '1px solid black' }}  key={order.orderId}>
              {order.orderItems.map((product) => (
                <Grid xs={12} sx={{my: 2}} container key={product.productName}>
                  <Grid item md={2}>
                    <Box width='100px' component='img' src={product.imageName} />
                  </Grid>
                  <Grid item md={2}>
                    <Typography >{product.productName}</Typography>
                  </Grid>
                  <Grid item md={2}>
                    <Typography >{pipe(product.discount)}</Typography>
                  </Grid>
                  <Grid item md={2}>
                    <Typography >{product.quantity}</Typography>
                  </Grid>                  
                  <Grid item md={2}>
                    <Typography >{pipe((product.quantity * product.discount))}</Typography>
                  </Grid>                  
                </Grid>
              ))}
            </Grid>
          </>
        ))}
      </Grid>
    </Grid>
  );
};

export default OrderByUser;
