import React from "react";
// @ts-ignore
import Carousel2 from "./components/Carousel2.tsx";
// @ts-ignore
import Tittle from "./components/Tittle.tsx";
// @ts-ignore
import Carousel1 from "./components/Carousel1.tsx";
// @ts-ignore
import Layout from "../../layout/Layout.tsx";
// @ts-ignore
import TittleProducts from "./components/TittleProducts.tsx";
// @ts-ignore
import CarouselProduct from "./components/CarouselProduct.tsx";

const Home = () => {
  return (
    <Layout>
      <Carousel2 />
      <Tittle tittle="¿Qué estás buscando hoy?" />
      <Carousel1 /> 
      {/* here goes product component (ToDo) */}
      <TittleProducts tittle='Productos más recientes' />
      <CarouselProduct />
    </Layout>
  );
};

export default Home;
