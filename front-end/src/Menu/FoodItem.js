import { Divider, Skeleton, Grid } from '@mui/material';

function FoodItem(){
    return (
        <Grid item xs={6}>
                    <Skeleton animation={false} variant="rectangular" height={150} />
        </Grid>
    )
}

export default FoodItem