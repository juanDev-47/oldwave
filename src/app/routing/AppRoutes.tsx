import React from 'react'

import {Routes, Route, BrowserRouter} from 'react-router-dom'

// import {App} from '../App'
// @ts-ignore
// import Dashboard from '../pages/dashboard/Dashboard.tsx'
// @ts-ignore
import Home from '../pages/home/Home.tsx'

const {PUBLIC_URL} = process.env

const AppRoutes: React.FC = () => {

  return (
    <BrowserRouter basename={PUBLIC_URL}>
      <Routes>
        <Route element={<Home />} path="/" />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
