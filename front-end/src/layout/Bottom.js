import React from 'react'
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArchiveIcon from '@mui/icons-material/Archive';
import AddIcon from '@mui/icons-material/Add';

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

          sx={{borderStartEndRadius:'20px', borderStartStartRadius:'20px'}}
        >
          <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Archive" icon={<ArchiveIcon />} />
        </BottomNavigation>
      </Box>

      <Fab size="large" sx={{position: 'absolute', bottom: 60, right: 16,}} color="secondary" aria-label="add">
        <AddIcon />
      </Fab>
    </Box>
  );
}

export default Bottom;
