import { ThemeProvider } from "@mui/material";
import React from "react";

import { Routes, Route, BrowserRouter } from "react-router-dom";

// import {App} from '../App'
// @ts-ignore
// import Dashboard from '../pages/dashboard/Dashboard.tsx'
// @ts-ignore
import Home from "../pages/home/Home.tsx";
// @ts-ignore
import Login from "../pages/login/Login.tsx";
// @ts-ignore
import Product from "../pages/product/Product.tsx";
// @ts-ignore
import { oldwaveTheme } from "../themes/oldwaveTheme.tsx";

const { PUBLIC_URL } = process.env;

const AppRoutes: React.FC = () => {
  return (
    <ThemeProvider theme={oldwaveTheme}>
      <BrowserRouter basename={PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:name" element={<Product />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default AppRoutes;
