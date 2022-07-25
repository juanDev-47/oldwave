import { Grid, Typography, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";

const StyledTypography = styled(Typography)`
  padding: 0 20px;
  color: #ffffff;
  font-size: { xs: "11px", md: "16px" };
  text-align: justify;
`;

const WhyUsFooter = () => {
  return (
    <Grid
      container
      sx={{
        width: "100%",
        background: "#772CE8",
        padding: { xs: "20px 0", md: "40px 0" },
      }}
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={{ xs: 3, md: 2 }}
    >
      <Grid
        item
        sm={12}
        md={5}
        sx={{ display: "block" }}
        justifyContent="center"
        alignItems="center"
        textAlign="center"
      >
        <Grid sx={{marginLeft: "10%" }}>
          <StyledTypography
            fontSize={{ xs: "18px", md: "26px" }}
            fontWeight={700}
          >
            Subscríbete a nuestro boletín
          </StyledTypography>
          <StyledTypography fontSize={{ xs: "14px", md: "18px" }}>
            Recibe información de nuestras ofertas
          </StyledTypography>
        </Grid>
      </Grid>
      <Grid
        sm={12}
        md={7}
        item
        sx={{ display: "flex" }}
        justifyContent="center"
        alignItems="center"
        textAlign="center"
      >
        <Grid sx={{ display: "flex" }}>
          <StyledTypography>
            Multiples medios <br /> de pago
          </StyledTypography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default WhyUsFooter;
