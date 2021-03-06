import React from 'react'

import {Routes, Route, BrowserRouter} from 'react-router-dom'

// import {App} from '../App'
// @ts-ignore
// import Dashboard from '../pages/dashboard/Dashboard.tsx'
// @ts-ignore
import Home from '../pages/home/Home.tsx'
// @ts-ignore
import Product from '../pages/product/Product.tsx'

const {PUBLIC_URL} = process.env

const AppRoutes: React.FC = () => {

  return (
    <BrowserRouter basename={PUBLIC_URL}>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Product />} path="/product/:name" />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
