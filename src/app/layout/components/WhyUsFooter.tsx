import { Grid, Typography, Box } from "@mui/material";
import React from "react";
import iconCalidadGarantizada from "../../assets/icons/icon-calidad-garantizada@2x.png";

const WhyUsFooter = () => {
  return (
    <Grid
      container
      sx={{ width: "100%", background: "#c8f3fd" }}
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      <Grid
        item
        sm={6}
        xl={3}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          component="img"
          sx={{
            display: "inline",
            width: "auto",
          }}
          src={iconCalidadGarantizada}
          alt={"icon-calidad-garantizada"}
        />
      </Grid>
      <Grid
        item
        sm={6}
        xl={3}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <h1>Hola</h1>
      </Grid>
      <Grid
        item
        sm={6}
        xl={3}
        sx={{ display: "flex" }}
        justifyContent="center"
        alignItems="center"
        textAlign="center"
      >
        <Grid sx={{ display: "flex" }}>
          <Box
            component="img"
            sx={{
              width: "auto",
            }}
            src={iconCalidadGarantizada}
            alt={"icon-calidad-garantizada"}
          />
          <Typography variant="h5" color="#772ce8" noWrap>
            Calidad Garantizada
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        sm={6}
        xl={3}
        direction="row"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
      >
        <Typography variant="h1" color="initial">
          <h1>Hola</h1>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default WhyUsFooter;
