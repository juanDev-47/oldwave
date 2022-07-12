import { Grid } from "@mui/material";
// @ts-ignore
import Header from "./components/Header.tsx";
// @ts-ignore
import Navbar from "./components/Navbar.tsx";
// @ts-ignore
import Carousel2 from "./components/Carousel2.tsx";

function App() {
  return (
    <Grid container sx={{ height: "100vh" }}>
      <Grid item xs={12} display={"block"}>
        <Navbar />
        <Header />
        <Carousel2 />
      </Grid>
    </Grid>
  );
}

export default App;
