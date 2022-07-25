import React from 'react'
import { Grid } from "@mui/material";
// @ts-ignore
import Navbar from './components/Navbar.tsx';
// @ts-ignore
import Header from './components/Header.tsx';
// @ts-ignore
import WhyUsFooter from './components/WhyUsFooter.tsx';
// @ts-ignore
import SubscriptionOldWave from './components/SubscriptionOldWave.tsx';

const Layout = ({children}): any => {
  return (
    <Grid container sx={{ height: "100vh" }}>
      <Grid item xs={12} display={"block"}>
        <Navbar /> 
        <Header />
        {children}
        <WhyUsFooter />
        <SubscriptionOldWave />
      </Grid>
    </Grid>
  );
}

export default Layout
