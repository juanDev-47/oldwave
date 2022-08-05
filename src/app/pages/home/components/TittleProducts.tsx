import { Grid, Typography } from "@mui/material";
import React from "react";
import './Carousel1.css';
import "@fontsource/poppins";


interface data {
  tittle: string;
}


const TittleProducts = ({ tittle }: data) => {
  return (
      <Grid container>
        <Grid sx={{ width: "100%" }}>
          <Typography
            sx={{
              color: "#772CE8",
              textAlign: "center",
              my: "15px",
              typography: { xs: "h5", sm: "h4", md: "h3" },
              fontFamily: ["Roboto", "sans-serif"],
            }}
          >
            {tittle}
          </Typography>
        </Grid>
      </Grid>
  );
};

export default TittleProducts;
