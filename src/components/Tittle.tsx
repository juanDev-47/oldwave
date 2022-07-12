import { Grid, Typography } from '@mui/material';
import React from 'react'

interface data {
  tittle: string;
}

const Tittle = ({tittle}:data) => {
  return (
    <Grid container  >
      <Grid xs={12}>
        <Typography variant="h3" sx={{color: '#772CE8', textAlign: 'center'}}>
        {tittle}
        </Typography>
      </Grid>
    </Grid>
  )
}

export default Tittle