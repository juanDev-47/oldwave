import * as React from "react";
import { styled} from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { Button, ThemeProvider, Typography } from "@mui/material";
// @ts-ignore
import { oldwaveTheme } from "../themes/oldwaveTheme.tsx";
import filterIcon from "../assets/icons/icon-filter@2x.png";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "20px",
  backgroundColor: "#FFFFFF",
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
  },
}));

const StyledIconSearch = styled(SearchIcon)(({ theme }) => ({
  color: "#772CE8",
  width: theme.spacing(4),
  height: theme.spacing(4),
}));

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  color: "inherit",
  backgroundColor: "#772CE8",
}));

const StyledButtonVar = styled(Button)(({ theme }) => ({
  color: "#FFFFFF",
  backgroundColor: "#772CE8",
  borderRadius: "20px",
  border: "1px solid #ffffff",
  margin: "0px 10px",
  padding: "5px 30px",
}));

export default function Header() {
  return (
    <ThemeProvider theme={oldwaveTheme}>
      <Box sx={{ flexGrow: 1 }}>
        <StyledAppBar position="static">
          <Toolbar>
            <Box sx={{ flexGrow: 1 }}>
              <Search>
                <SearchIconWrapper>
                  <StyledIconSearch />
                </SearchIconWrapper>
                <StyledInputBase placeholder="estoy buscando..." inputProps={{ "aria-label": "search" }} />
              </Search>
            </Box>
            <Box sx={{ display: { md: 'block', xs: 'none' } }}>
              <StyledButtonVar
                variant="contained"
              >
                Buscar
              </StyledButtonVar>
              <StyledButtonVar
                variant="contained"
              >
                <img src={filterIcon} className="h-4 mr-1" alt="oldwaveFilter" />
                <Typography variant="body1" sx={{ marginLeft: '5px'}}>Filtros</Typography>
              </StyledButtonVar>
            </Box>
          </Toolbar>
        </StyledAppBar>
      </Box>
    </ThemeProvider>
  );
}
