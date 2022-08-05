import { Grid, Typography } from "@mui/material";
import React from "react";

interface data {
  tittle: string;
}

const Tittle = ({ tittle }: data) => {
  return (
      <Grid container>
        <Grid sx={{ width: "100%" }}>
          <Typography
            sx={{
              color: "#772CE8",
              textAlign: "center",
              my: "15px",
              typography: { xs: "h5", sm: "h4", md: "h3" },
            }}
          >
            {tittle}
          </Typography>
        </Grid>
      </Grid>
  );
};

export default Tittle;
