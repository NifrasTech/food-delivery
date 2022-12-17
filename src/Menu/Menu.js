import React from 'react'
import { Box } from '@mui/system'
import { Grid } from '@mui/material';
import FoodItem from './MenuItem';
import TopBar from '../layout/TopBar'
import Bottom from '../layout/Bottom'
import ItemView from './ItemView';

function Menu(){
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

    return (
        <>
        <TopBar />
        <Box sx={{ marginBottom: "65px", marginTop:"10px", padding:'5px'}}>
          <Grid container spacing={2}>   
                <FoodItem handleClickOpen={handleClickOpen}/>        
                <FoodItem handleClickOpen={handleClickOpen}/>        
                <FoodItem handleClickOpen={handleClickOpen}/>        
                <FoodItem handleClickOpen={handleClickOpen}/>        
                <FoodItem handleClickOpen={handleClickOpen}/>        
                <FoodItem handleClickOpen={handleClickOpen}/>        
                <FoodItem handleClickOpen={handleClickOpen}/>        
        
            </Grid>
        </Box>
        <Bottom />
        <ItemView handleClose={handleClose} open={open}></ItemView>
        </>
    );
}

export default Menu
