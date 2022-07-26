import React from "react";
// @ts-ignore
import Carousel2 from "./components/Carousel2.tsx";
// @ts-ignore
import Tittle from "./components/Tittle.tsx";
// @ts-ignore
import Carousel1 from "./components/Carousel1.tsx";
// @ts-ignore
import Layout from "../../layout/Layout.tsx";

const Home = () => {
  return (
    <Layout>
      <Carousel2 />
      <Tittle tittle="¿Qué estás buscando hoy?" />
      <Carousel1 /> 
    </Layout>
  );
};

export default Home;
