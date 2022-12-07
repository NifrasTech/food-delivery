import { Box } from '@mui/system'
import { Grid } from '@mui/material';
import FoodItem from './MenuItem';
import TopBar from '../layout/TopBar'
import Bottom from '../layout/Bottom'

function Menu(){
    return (
        <>
        <TopBar />
        <Box sx={{ marginBottom: "65px", marginTop:"10px", padding:'5px'}}>
          <Grid container spacing={2}>   
                <FoodItem/>        
                <FoodItem/>        
                <FoodItem/>        
                <FoodItem/>        
                <FoodItem/>        
                <FoodItem/>        
                <FoodItem/>        
            </Grid>
        </Box>
        <Bottom />
        </>
    );
}

export default Menu
