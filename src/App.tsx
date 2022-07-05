import {Box, Grid} from '@mui/material';
// @ts-ignore
import Header from './components/Header.tsx';
// @ts-ignore
import Navbar from './components/Navbar.tsx';





function App() {
  return (
        <Grid
          container
          sx={{ height: '100vh'}}
        >
          <Grid item xs={12} display={'block'} > 
            <Navbar />
            <Box  sx={{ display: { md: 'block', xs: 'none' } }}>
              <Header />  
            </Box>
          </Grid>
        </Grid>
  );
}

export default App;


