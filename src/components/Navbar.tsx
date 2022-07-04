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



const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: '#FFFFFF',
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
          <Button color="inherit">Login</Button>
        </Toolbar>
          <Toolbar className="flex" >
            <IconButton
              size="small"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
              className="m-"
            >
              <img src={oldWaveLogo} className="h-6 w-24" alt="oldWave" />
            </IconButton>
            <Button color="inherit">Home</Button>
            
          </Toolbar>
        </StyledAppBar>
      </Box>
    </ThemeProvider>
  );
}
