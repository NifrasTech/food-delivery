import React from 'react'
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArchiveIcon from '@mui/icons-material/Archive';
import HomeIcon from '@mui/icons-material/Home';
import Personicon from '@mui/icons-material/Person2';
import MenuIcon from '@mui/icons-material/MenuBook';

function Bottom() {
  const [value, setValue] = React.useState(0);

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
          <BottomNavigationAction label="Home" icon={<HomeIcon />} />
          <BottomNavigationAction label="Menu" icon={<MenuIcon />} />
          <BottomNavigationAction label="Profile" icon={<Personicon />} />
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        </BottomNavigation>
      </Box>
    </Box>
  );
}

export default Bottom;
