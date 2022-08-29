import { Drawer, Grid, styled, Typography } from "@mui/material";
import React from "react";
import "./cart.css";

const StyledDrawer = styled(Drawer)`
"& .MuiDrawer-paper": {
  width: "400px",
},
`;

const Cart = () => {
  return (
    <Grid>
      <StyledDrawer
        open={true}
        onClose={() => {}}
        anchor="right"
        PaperProps={{ sx: { width: "400px", borderRadius: 2 } }}
      >
        <Typography>Cart</Typography>
      </StyledDrawer>
    </Grid>
  );
};

export default Cart;
