import { Grid, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/styles";
import React from "react";
// @ts-ignore
import { oldwaveTheme } from "../themes/oldwaveTheme.tsx";

interface data {
  tittle: string;
}

const Tittle = ({ tittle }: data) => {
  return (
    <ThemeProvider theme={oldwaveTheme}>
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
    </ThemeProvider>
  );
};

export default Tittle;
