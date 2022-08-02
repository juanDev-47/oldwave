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
// @ts-ignore
import { useContextProvider } from "../../context/contextProvider.tsx";
// @ts-ignore
import { getAllProducts } from "./services/services.ts";
// @ts-ignore
import ProductList from "./components/ProductList.tsx";

const Home = () => {
  const { search } = useContextProvider();

  const products = getAllProducts(search).then(res => console.log(res.products.data));
  console.log(products);

  return (
    <Layout>
      {search === "" ? (
        <>
          <Carousel2 />
          <Tittle tittle="¿Qué estás buscando hoy?" />
          <Carousel1 />
          <TittleProducts tittle="Productos más recientes" />
          <CarouselProduct />
        </>
      ) : (
          <ProductList />
      )}
    </Layout>
  );
};

export default Home;
