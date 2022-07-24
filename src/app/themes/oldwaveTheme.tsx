import { createTheme } from '@mui/material';
import '../assets/fonts/Poppins-SemiBold.ttf';
import '../assets/fonts/Poppins-Regular.ttf';

export const oldwaveTheme = createTheme({
    palette: {
      primary: {
        main: '#772CE8',
      },
    },
    typography: {
        fontFamily: [
          '"Poppins"',
          'Open Sans',
        ].join(','),
      },    
  });