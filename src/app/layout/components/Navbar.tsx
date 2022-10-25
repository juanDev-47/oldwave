import * as React from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
// import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
// @ts-ignore
import oldWaveLogo from "../../assets/logo/oldwave-logo-horizontal.png";
// @ts-ignore
import login2x from "../../assets/icons/login-icon@2x.png";
// @ts-ignore
import carrito2x from "../../assets/icons/carrito-icon@2x.png";
import { useNavigate } from "react-router-dom";
//@ts-ignore
import { useContextProvider } from "../../context/contextProvider.tsx";

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

  const { setShowCart, session, setSession } = useContextProvider();

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

          {session?.message !== "Ok" ? (
            <Box sx={{ display: { md: "block", xs: "none" } }}>
              <StyledButtonBar
                onClick={() => {
                  navigate("/login");
                }}
                color="inherit"
              >
                Registrate o inicia sesión
              </StyledButtonBar>
            </Box>
          ) : (
            <>
              <Box sx={{ display: { md: "block", xs: "none" } }}>
                <StyledButtonBar
                  onClick={() => {
                    navigate("/");
                  }}
                  color="inherit"
                >
                  Hola {session?.user?.userName}!!
                </StyledButtonBar>
              </Box>
              <Box sx={{ display: { md: "block", xs: "none" } }}>
                <StyledButtonBar
                  onClick={() => {
                    navigate("/order");
                  }}
                  color="inherit"
                >
                  Ver mis pedidos
                </StyledButtonBar>
              </Box>
            </>
          )}

          {session?.message !== "Ok" ? (
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={() => {
                navigate("/login");
              }}
              sx={{ mr: 2 }}
            >
              <img src={login2x} className="h-6" alt="oldWavePerfil" />
            </IconButton>
          ) : (
            <Box sx={{ display: { md: "block", xs: "none" } }}>
              <StyledButtonBar
                onClick={() => {
                  setSession({});
                  localStorage.removeItem("sessionData");
                }}
                color="inherit"
              >
                Log out
              </StyledButtonBar>
            </Box>
          )}
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => {
              setShowCart(true);
            }}
          >
            <img src={carrito2x} className="h-6" alt="oldWaveCar" />
          </IconButton>
        </Toolbar>
      </StyledAppBar>
    </Box>
  );
}
