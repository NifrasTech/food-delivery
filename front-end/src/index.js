import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { createTheme,ThemeProvider} from '@mui/material/styles';

import Home from './CustomerHome/Home';
import Menu from './Menu/Menu';


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
    <ThemeProvider theme={theme}>
      <Router>
        
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/menu" element={<Menu />}></Route>
        </Routes>
        
      </Router>
    </ThemeProvider>
  </React.StrictMode>
);
