import React from 'react'
import { Link } from "react-router-dom"
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Box from '@mui/material/Box';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';
import Personicon from '@mui/icons-material/Person2';
import MenuIcon from '@mui/icons-material/MenuBook';

function Bottom() {
  const pathname = window.location.pathname
  const [value, setValue] = React.useState(pathname);
  return (
    <Box sx={{position: 'fixed', bottom: 0, left: 0, right: 0, paddingTop:'20px'}}>
      <Box elevation={3} >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}

          sx={{borderStartEndRadius:'20px', borderStartStartRadius:'20px', boxShadow: 3}}
        >
          <BottomNavigationAction component={Link} to="/" value={'/'} label="Home" icon={<HomeIcon />} />
          <BottomNavigationAction component={Link} to="/menu" value={'/menu'} label="Menu" icon={<MenuIcon />} />
          <BottomNavigationAction label="Profile" icon={<Personicon />} />
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        </BottomNavigation>
      </Box>
    </Box>
  );
}

export default Bottom;
