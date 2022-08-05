import * as React from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
// import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import oldWaveLogo from "../../assets/logo/oldwave-logo-horizontal.png";
import login2x from "../../assets/icons/login-icon@2x.png";
import carrito2x from "../../assets/icons/carrito-icon@2x.png";
import { useNavigate } from "react-router-dom";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: "#FFFFFF",
  color: "#772CE8",
}));

const StyledButtonBar = styled(Button)(({ theme }) => ({
  backgroundColor: "#F4F6FA",
  hover: {
    backgroundColor: "red",
  },
  borderRadius: "20px",
  padding: "8px 30px",
  color: "#000000",
  marginRight: "15px",
}));

export default function Navbar() {
  const navigate = useNavigate();

  return (
      <Box sx={{ flexGrow: 1 }}>
        <StyledAppBar position="static">
          <Toolbar>
            <Box sx={{ display: { md: "none", xs: "block" } }}>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={() => {
                navigate("/");
              }}
            >
              <img src={oldWaveLogo} className="h-6 w-24" alt="oldWave" />
            </IconButton>
            <div className="flex-grow"></div>
            <Box sx={{ display: { md: "block", xs: "none" } }}>
              <StyledButtonBar color="inherit">
                Registrate o inicia sesión
              </StyledButtonBar>
            </Box>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <img src={login2x} className="h-6" alt="oldWavePerfil" />
            </IconButton>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <img src={carrito2x} className="h-6" alt="oldWaveCar" />
            </IconButton>
          </Toolbar>
        </StyledAppBar>
      </Box>
  );
}
