import { Grid } from "@mui/material";
// @ts-ignore
import Header from "./components/Header.tsx";
// @ts-ignore
import Navbar from "./components/Navbar.tsx";
// @ts-ignore
import Carousel2 from "./components/Carousel2.tsx";
// @ts-ignore
import Tittle from "./components/Tittle.tsx";

function App() {
  return (
    <Grid container sx={{ height: "100vh" }}>
      <Grid item xs={12} display={"block"}>
        <Navbar />
        <Header />
        <Carousel2 />
        <Tittle tittle="¿Qué estás buscando hoy?" />
      </Grid>
    </Grid>
  );
}

export default App;
