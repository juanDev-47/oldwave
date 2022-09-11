import {
  Avatar,
  Box,
  Button,
  Divider,
  Drawer,
  Grid,
  IconButton,
  Paper,
  styled,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
// @ts-ignore
import { useContextProvider } from "../../../context/contextProvider.tsx";
import {
  Close,
  ArrowCircleLeftSharp,
  ArrowCircleRightSharp,
} from "@mui/icons-material";
import "./cart.css";
// @ts-ignore
import useCart from "./services/useCart.ts";

const StyledDrawer = styled(Drawer)`
"& .MuiDrawer-paper": {
  width: "400px",
},
`;

const Cart = () => {
  const { cart, setShowCart, showCart } = useContextProvider();
  const [totalPrice, setTotalPrice] = useState(0);
  const { removeFromCart, increase, decrease, buildDTO } = useCart(cart);

  useEffect(() => {
    let total = 0;
    cart.forEach((item) => {
      total += item.discount * item.cantidad;
    });
    setTotalPrice(total);
  }, [cart]);

  const cartContent = cart.map((item) => (
    <Box key={item.id}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems={"start"}
        sx={{ pt: 2, pb: 2 }}
      >
        <Avatar
          src={item.images[0].url}
          sx={{ width: 96, height: 96, mr: 2 }}
        />
        <Box display={"flex"} flexDirection={"column"}>
          <Typography variant="h6" sx={{ fontSize: 14 }}>
            {item.name}
          </Typography>
          <Typography variant="subtitle2" sx={{ fontSize: 14 }}>
            {item.description}
          </Typography>
        </Box>
        <Typography variant="h6" justifyContent={"end"} sx={{ fontSize: 14 }}>
          {new Intl.NumberFormat("es-CO", {
            currency: "COP",
            style: "currency",
            minimumFractionDigits: 0,
          }).format(item.discount)}
        </Typography>
        <IconButton
          onClick={() => {
            removeFromCart(item);
          }}
          aria-label="delete"
        >
          <Close />
        </IconButton>
      </Box>
      {/* controls for add, rest and eliminate item  */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems={"start"}
        sx={{ pt: 2, pb: 2 }}
      >
        <Box display={"flex"}>
          <IconButton
            onClick={() => {
              decrease(item);
            }}
            aria-label="delete"
          >
            <ArrowCircleLeftSharp />
          </IconButton>
          <Typography sx={{ fontSize: 14, margin: "10px 10px 0 10px" }}>
            {item.cantidad}
          </Typography>
          <IconButton
            onClick={() => {
              increase(item);
            }}
            aria-label="delete"
          >
            <ArrowCircleRightSharp />
          </IconButton>
        </Box>
        <Typography variant="h6" justifyContent={"end"} sx={{ fontSize: 14 }}>
          SubTotal:{" "}
          {new Intl.NumberFormat("es-CO", {
            currency: "COP",
            style: "currency",
            minimumFractionDigits: 0,
          }).format(item.discount * item.cantidad)}
        </Typography>
      </Box>
      <Divider variant="fullWidth" />
    </Box>
  ));

  return (
    <Grid>
      <StyledDrawer
        open={showCart}
        onClose={() => setShowCart(false)}
        anchor="right"
        PaperProps={{
          sx: { width: { xs: "400px", md: "500px"}, borderRadius: 2 }
        }}
      >
        {cart && cart.length > 0 ? (
          <>
            <Box
              sx={{ p: 2 }}
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"space-between"}
              alignItems={"space-between"}
            >
              <Typography variant="h5">Carrito de compras</Typography>
              <IconButton
                onClick={() => {
                  setShowCart(false);
                }}
                aria-label="delete"
              >
                <Close />
              </IconButton>
            </Box>
            <Box sx={{ p: 2 }}>
              <Paper elevation={0} sx={{ mt: 2, mr: 1 }}>
                {cartContent}
              </Paper>
            </Box>
            <Box display="flex" justifyContent="center">
              <Typography variant="h6" sx={{ fontSize: 14 }}>
                Total Price:{" "}
                {new Intl.NumberFormat("es-CO", {
                  currency: "COP",
                  style: "currency",
                  minimumFractionDigits: 0,
                }).format(totalPrice)}
              </Typography>
            </Box>
            <Box display="flex" justifyContent="center">
              <Button
                variant="contained"
                sx={{ mt: 2, mb: 2, width: "80%" }}
                onClick={() => {
                  buildDTO();
                }}
              >
                Procesar compra
              </Button>
            </Box>
          </>
        ) : (
          <>
            <Box
              sx={{ p: 2 }}
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"space-between"}
              alignItems={"space-between"}
            >
              <Typography variant="h5">Carrito de compras</Typography>
              <IconButton
                onClick={() => {
                  setShowCart(false);
                }}
                aria-label="delete"
              >
                <Close />
              </IconButton>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
              }}
            >
              <Typography variant="h6" sx={{ fontSize: 14 }}>
                Tu carrito está vacío
              </Typography>
            </Box>
          </>
        )}
      </StyledDrawer>
    </Grid>
  );
};

export default Cart;
