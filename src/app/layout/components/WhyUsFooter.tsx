import { Grid, Typography, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";
import iconCalidadGarantizada from "../../assets/icons/icon-calidad-garantizada.png";
import multiplesMediosDePago from "../../assets/icons/icon-multiples-medios-pago.png";
import envios from "../../assets/icons/icon-envios-todo-elpais.png";
import comprasSeguras from "../../assets/icons/icon-compras-seguras.png";

const StyledTypography = styled(Typography)`
  padding: 0 20px;
  color: #772CE8;
  font-size: { xs: "11px", md: "16px" };
  text-align: justify;
`;

const WhyUsFooter = () => {
  return (
    <Grid
      container
      sx={{
        width: "100%",
        background: "#c8f3fd",
        padding: { xs: "20px 0", md: "40px 0" },
      }}
      direction="row"
      justifyContent="center"
      alignItems="center"
      mb={"16px"}
      rowSpacing={{ xs: "15px" }}
    >
      <Grid
        item
        xs={6}
        md={3}
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
            src={comprasSeguras}
            alt={"icon-compras-seguras"}
          />
          <StyledTypography>
            Compras <br /> Seguras
          </StyledTypography>
        </Grid>
      </Grid>
      <Grid
        item
        xs={6}
        md={3}
        sx={{ display: "flex" }}
        justifyContent="center"
        alignItems="center"
        textAlign="center"
      >
        <Grid sx={{ display: "flex" }}>
          <Box
            component="img"
            sx={{
              height: { xs: "32px" },
            }}
            src={multiplesMediosDePago}
            alt={"multiplesMediosDePago"}
          />
          <StyledTypography>
            Multiples medios <br /> de pago
          </StyledTypography>
        </Grid>
      </Grid>
      <Grid
        item
        xs={6}
        md={3}
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
          <StyledTypography>
            Calidad <br /> Garantizada
          </StyledTypography>
        </Grid>
      </Grid>
      <Grid
        item
        xs={6}
        md={3}
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
            src={envios}
            alt={"envios-todo-elpais"}
          />
          <StyledTypography>
            Envio a <br /> todo el país
          </StyledTypography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default WhyUsFooter;
