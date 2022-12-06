import React from 'react';
import ReactDOM from 'react-dom/client';
import Bottom from './layout/Bottom';
import TopBar from './layout/TopBar';
import { createTheme,ThemeProvider} from '@mui/material/styles';
import Carousel from './CustomerHome/Carousel';
import Categories from './CustomerHome/Categories';
import PopularFood from './CustomerHome/PopularFood';
import { Box } from '@mui/system';

const root = ReactDOM.createRoot(document.getElementById('root'));
const theme = createTheme({
  palette: {
      primary: {
        main: '#FD630C',
      },
      secondary: {
        main: '#edf2ff',
      },
    },
})

root.render(
  
  <React.StrictMode>
    <ThemeProvider  theme={theme}>
    <TopBar/>
    <Box sx={{marginBottom: '65px'}}>
      <Carousel/>
      <Categories/>
      <PopularFood/>
    </Box>
    <Bottom />
    </ThemeProvider>
  </React.StrictMode>
);
