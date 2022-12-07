import { Box } from '@mui/system'
import { Grid } from '@mui/material';
import FoodItem from './FoodItem';

function Menu(){
    return (
        <Box sx={{ marginBottom: "65px", marginTop:"10px"}}>
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
    );
}

export default Menu
