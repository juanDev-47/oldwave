import { Box, Grid } from "@mui/material";
import React from "react";
import bannerPc from "../../../assets/img/banner-auxilar-ordenadores.png";
import product1 from "../../../assets/img/producto1.png";
import product2 from "../../../assets/img/producto2.png";
import bannerCycle from "../../../assets/img/banner-auxiliar-bicicletas.png";
import product3 from "../../../assets/img/producto3.png";
import product4 from "../../../assets/img/producto4.png";

const Sales = () => {
  return (
    <Grid container xs={12} sx={{ padding: { xs: "5%" } }}>
      <Grid
        container
        display="flex"
        sx={{ alignItems: "baseline", marginBottom: "25px" }}
        item
        xs={12}
      >
        <Grid item xs={12} md={6} sx={{ height: { md: "100%" }, marginBottom: { xs: '20px'}  }}>
          <Box
            component="img"
            sx={{
              margin: "0 auto",
              height: "100%",
            }}
            src={bannerPc}
            alt="banner-pc"
          />
        </Grid>
        <Grid container item xs={12} md={6} sx={{ display: "flex" }}>
          <Grid item xs={6}>
            <Box
              component="img"
              sx={{
                margin: "0 auto",
                boxShadow: "0px 3px 6px #00000029",
                borderRadius: "20px",
                padding: "20px",
              }}
              src={product1}
              alt="producto1"
            />
          </Grid>
          <Grid item xs={6}>
            <Box
              component="img"
              sx={{
                margin: "0 auto",
                boxShadow: "0px 3px 6px #00000029",
                borderRadius: "20px",
                padding: "20px",
              }}
              src={product2}
              alt="producto2"
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid
        container
        display="flex"
        sx={{
          alignItems: "baseline",
          flexDirection: { xs: "row-reverse", md: "row" },
        }}
        item
        xs={12}
      >
        <Grid item xs={12} md={6} sx={{ height: { md: "100%" }, flexDirection: {md: 'row-reverse'}, marginBottom: { xs: '20px'} }}>
          <Box
            component="img"
            sx={{
              margin: "0 auto",
              height: "100%",
            }}
            src={bannerCycle}
            alt="banner-cycle"
          />
        </Grid>
        <Grid item xs={12} md={6} sx={{ display: "flex" }}>
          <Grid item xs={6}>
            <Box
              component="img"
              sx={{
                margin: "0 auto",
                boxShadow: "0px 3px 6px #00000029",
                borderRadius: "20px",
                padding: "20px",
              }}
              src={product3}
              alt="producto3"
            />
          </Grid>
          <Grid item xs={6}>
            <Box
              component="img"
              sx={{
                margin: "0 auto",
                boxShadow: "0px 3px 6px #00000029",
                borderRadius: "20px",
                padding: "20px",
              }}
              src={product4}
              alt="producto4"
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Sales;
