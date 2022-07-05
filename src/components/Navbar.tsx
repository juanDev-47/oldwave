import * as React from "react";
import { styled} from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Button, ThemeProvider } from "@mui/material";
// @ts-ignore
import { oldwaveTheme } from "../themes/oldwaveTheme.tsx";
import oldWaveLogo from "../assets/logo/oldwave-logo-horizontal.png";
import login2x from "../assets/icons/login-icon@2x.png";



const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: '#FFFFFF',
  color: 'red',
}));

const StyledButtonBar = styled(Button)(({ theme }) => ({
  backgroundColor: '#F4F6FA',
  hover: {
    backgroundColor: '#F4F6FA',
  },
  borderRadius: '20px',
  padding: '8px 30px', 
  color: '#000000',
}));


export default function SearchAppBar() {
  return (
    <ThemeProvider theme={oldwaveTheme}>
      <Box sx={{ flexGrow: 1 }}>
        <StyledAppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <img src={oldWaveLogo} className="h-6 w-24" alt="oldWave" />
          </IconButton>
          <div className="flex-grow"></div>
          <StyledButtonBar color="inherit">Registrate o inicia sesión</StyledButtonBar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <img src={login2x} className="h-6 mx-4" alt="oldWave" />
          </IconButton>
        </Toolbar>
        </StyledAppBar>
      </Box>
    </ThemeProvider>
  );
}
