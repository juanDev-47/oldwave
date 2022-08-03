import React, { useEffect, useState } from "react";
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
import {
  getAllProducts,
  getProductByCategory,
  getCurrentProducts,
} from "./services/services.ts";
// @ts-ignore
import ProductList from "./components/ProductList.tsx";

import CircularProgress from "@mui/material/CircularProgress";
import { Box, Typography } from "@mui/material";

const Home = () => {
  const { search, category } = useContextProvider();

  const [allDataResults, setAllDataResults] = useState([]);
  const [allDataCurrent, setAllDataCurrent] = useState([]);
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState(false);

  const products = (search) => {
    setLoading(true);
    getAllProducts(search).then((res) => {
      setAllDataResults(res.data.data);
      setLoading(false);
    });
  };

  const currentProducts = () => {
    setLoading(true);
    getCurrentProducts().then((res) => {
      setAllDataCurrent(res.data.data);
      setLoading(false);
    });
  };

  const productsByCategory = (idCategory) => {
    setLoading(true);
    getProductByCategory(idCategory).then((res) => {
      setAllDataResults(res.data.data);
      setLoading(false);
    });
  };

  useEffect(() => {
    currentProducts();
  }, [category]);

  useEffect(() => {
    if (search !== "") {
      setContent(false);
      products(search);
    } else if (search === "") {
      setContent(true);
    }
  }, [search]);

  useEffect(() => {
    // console.log(category);
    if (category !== "") {
      setContent(false);
      productsByCategory(category);
    } else if (category === "") {
      setContent(true);
    }
  }, [category]);

  return (
    <Layout>
      {loading ? (
        <Box sx={{ margin: 8 }} width="100%" textAlign="center">
          <CircularProgress />
        </Box>
      ) : content ? (
        <>
          <Carousel2 />
          <Tittle tittle="¿Qué estás buscando hoy?" />
          <Carousel1 />
          <TittleProducts tittle="Productos más recientes" />
          <CarouselProduct allDataCurrent={allDataCurrent} />
        </>
      ) : Array.isArray(allDataResults) && allDataResults.length > 0 ? (
        <>
          <ProductList allDataResults={allDataResults} />
          <Carousel1 />
        </>
      ) : (
        <>
          <Typography margin={4} textAlign="center" variant="h5">
            ¡No se han encontrado resultados!
          </Typography>
        </>
      )}
    </Layout>
  );
};

export default Home;
