import { Grid, Card, Typography, CardContent, CardMedia, Box} from '@mui/material';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

function FoodItem({handleClickOpen}){

    return (
      <Grid item xs={6} md={2}>
        <Card sx={{ maxWidth: 345, borderRadius:'15px', position:'relative'}}>
            <Box onClick={handleClickOpen}>
          <CardMedia
            component="img"
            height='130'
            image="https://via.placeholder.com/100x100"
          />
          <CardContent sx={{textAlign: 'center'}}>
          <Typography variant="body2" color="text.secondary">
              Pizza
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              Rs. 700.00
            </Typography>
            
          </CardContent>
          </Box>
            <FavoriteBorderOutlinedIcon color="primary" size='small' aria-label="add" sx={{position:'absolute', top:'5px', right:'5px'}}  />
        </Card>
      </Grid>
    );
}

export default FoodItem