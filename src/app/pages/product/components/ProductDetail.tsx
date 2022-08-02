import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

interface product {  
  title: 'Producto 1',
}

// {product}:product

const ProductDetail = () => {
  return (
    <h1>hola</h1>
    // <Grid container width='100%' bgcolor='red' height='100vh' >
    //   <Grid item xs={12}>
    //     <Box component='span'>
    //       {product.title}
    //     </Box>
    //   </Grid>
    //   {/* <Grid item xs={12}></Grid> */}
    // </Grid>
  )
}

export default ProductDetail