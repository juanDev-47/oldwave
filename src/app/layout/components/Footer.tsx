import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  IconButton,
  Box,
  Typography,
} from "@mui/material";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import experimentality from "../../assets/experimentality-vtex.png";
import logo from "../../assets/logo/oldwave-logo-vertical.png";
import facebook from "../../assets/icons/icon-facebook.png";
import instagram from "../../assets/icons/icon-instagram.png";

const Footer = () => {
  return (
    <Grid
      container
      sx={{
        width: "100%",
      }}
      justifyContent="center"
      alignItems="center"
      spacing={{ xs: 3, md: 2 }}
    >
      <Grid
        container
        item
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        width={{ xs: "100%" }}
        sx={{ margin: { xs: "10px", md: "10px 0" } }}
      >
        <Grid
          xs={12}
          md={3}
          sx={{
            width: "100%",
            height: "180px",
            display: { xs: "none", md: "block" },
          }}
        >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <img src={logo} alt="oldWave" />
          </IconButton>
        </Grid>
        <Grid xs={12} md={3} sx={{ width: "100%", height:{ md: '200px'} }}>
          <Grid sx={{ display: { xs: "none", md: "inline" } }}>
            <Grid margin={2}>
              <Grid container justifyContent="left" textAlign="left">
                <Typography
                  sx={{ fontSize: { md: "20px", xs: "17px" } }}
                  color="#772CE8"
                >
                  <Box component="span" sx={{ fontWeight: "bold" }}>
                    old
                  </Box>
                  wave
                </Typography>
                <Box
                  width="100%"
                  sx={{ fontSize: { md: "14px", xs: "12px" } }}
                  component="a"
                  href="#"
                >
                  ¿Quienes somos?
                </Box>
                <Box
                  width="100%"
                  sx={{ fontSize: { md: "14px", xs: "12px" } }}
                  component="a"
                  href="#"
                >
                  Nuestras tiendas
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Accordion sx={{ display: { xs: "block", md: "none" } }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography
                sx={{ fontSize: { md: "20px", xs: "17px" } }}
                color="#772CE8"
              >
                <Box component="span" sx={{ fontWeight: "bold" }}>
                  old
                </Box>
                wave
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container justifyContent="left" textAlign="left">
                <Box
                  width="100%"
                  sx={{ fontSize: { md: "14px", xs: "12px" } }}
                  component="a"
                  href="#"
                >
                  ¿Quienes somos?
                </Box>
                <Box
                  width="100%"
                  sx={{ fontSize: { md: "14px", xs: "12px" } }}
                  component="a"
                  href="#"
                >
                  Nuestras tiendas
                </Box>
              </Grid>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid xs={12} md={3} sx={{ width: "100%", height:{ md: '200px'} }}>
          <Grid sx={{ display: { xs: "none", md: "inline" } }}>
            <Grid margin={2}>
              <Grid container justifyContent="left" textAlign="left">
                <Typography
                  sx={{ fontSize: { md: "20px", xs: "17px" } }}
                  color="#772CE8"
                >
                  <Box component="span" sx={{ fontWeight: "bold" }}>
                    Links de interés
                  </Box>
                </Typography>
                <Box
                  width="100%"
                  sx={{ fontSize: { md: "14px", xs: "12px" } }}
                  component="a"
                  href="#"
                >
                  Preguntas frecuentes
                </Box>
                <Box
                  width="100%"
                  sx={{ fontSize: { md: "14px", xs: "12px" } }}
                  component="a"
                  href="#"
                >
                  Términos y condiciones
                </Box>
                <Box
                  width="100%"
                  sx={{ fontSize: { md: "14px", xs: "12px" } }}
                  component="a"
                  href="#"
                >
                  Politicas de devoluciones
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Accordion sx={{ display: { xs: "block", md: "none" } }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography
                sx={{ fontSize: { md: "20px", xs: "17px" } }}
                color="#772CE8"
              >
                Links de interés
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container justifyContent="left" textAlign="left">
                <Box
                  width="100%"
                  sx={{ fontSize: { md: "14px", xs: "12px" } }}
                  component="a"
                  href="#"
                >
                  Preguntas frecuentes
                </Box>
                <Box
                  width="100%"
                  sx={{ fontSize: { md: "14px", xs: "12px" } }}
                  component="a"
                  href="#"
                >
                  Términos y condiciones
                </Box>
                <Box
                  width="100%"
                  sx={{ fontSize: { md: "14px", xs: "12px" } }}
                  component="a"
                  href="#"
                >
                  Politicas de devoluciones
                </Box>
              </Grid>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid xs={12} md={3} sx={{ width: "100%", height:{ md: '200px'} }}>
          <Grid sx={{ display: { xs: "none", md: "inline" } }}>
            <Grid margin={2}>
              <Grid container justifyContent="left" textAlign="left">
                <Typography
                  sx={{ fontSize: { md: "20px", xs: "17px" } }}
                  color="#772CE8"
                >
                  <Box component="span" sx={{ fontWeight: "bold" }}>
                    Contácto
                  </Box>
                </Typography>
                <Box
                  width="100%"
                  sx={{ fontSize: { md: "14px", xs: "12px" } }}
                  component="a"
                  href="#"
                >
                  servicioalcliente@oldwave.co
                </Box>
                <Box
                  width="100%"
                  sx={{ fontSize: { md: "14px", xs: "12px" } }}
                  component="a"
                  href="#"
                >
                  Teléfono: 316 1924
                </Box>

                <Grid display="block">
                  <Typography
                    marginTop={2}
                    sx={{ fontSize: { md: "20px", xs: "17px" } }}
                    color="#772CE8"
                  >
                    <Box component="span" sx={{ fontWeight: "bold" }}>
                      Redes sociales
                    </Box>
                  </Typography>
                  <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 1 }}
                  >
                    <img src={facebook} alt="oldWave-facebook" />
                  </IconButton>
                  <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                  >
                    <img src={instagram} alt="oldWave-instagram" />
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Accordion sx={{ display: { xs: "block", md: "none" } }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography
                sx={{ fontSize: { md: "20px", xs: "17px" } }}
                color="#772CE8"
              >
                Contácto
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container justifyContent="left" textAlign="left">
                <Box
                  width="100%"
                  sx={{ fontSize: { md: "14px", xs: "12px" } }}
                  component="a"
                  href="#"
                >
                  servicioalcliente@oldwave.co
                </Box>
                <Box
                  width="100%"
                  sx={{ fontSize: { md: "14px", xs: "12px" } }}
                  component="a"
                  href="#"
                >
                  Teléfono: 316 1924
                </Box>

                <Typography
                  marginTop={2}
                  sx={{ fontSize: { md: "20px", xs: "17px" } }}
                  color="#772CE8"
                >
                  <Box component="span" sx={{ fontWeight: "bold" }}>
                    Redes sociales
                  </Box>
                  <Grid>
                    <IconButton
                      size="large"
                      edge="start"
                      color="inherit"
                      aria-label="menu"
                      sx={{ mr: 2 }}
                    >
                      <img src={facebook} alt="oldWave-facebook" />
                    </IconButton>
                    <IconButton
                      size="large"
                      edge="start"
                      color="inherit"
                      aria-label="menu"
                      sx={{ mr: 2 }}
                    >
                      <img src={instagram} alt="oldWave-instagram" />
                    </IconButton>
                  </Grid>
                </Typography>
              </Grid>
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>

      <Grid
        sm={12}
        container
        item
        justifyContent="center"
        alignItems="center"
        textAlign="center"
      >
        <Typography variant="body2" sx={{ marginLeft: "5px" }}>
          Old wave © 2020 | Powered by:
        </Typography>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <img src={experimentality} alt="oldWave" />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default Footer;
