import Carousel from './Carousel';
import Categories from './Categories';
import PopularFood from './PopularFood';
import { Box } from '@mui/system';

function Home(){
    return (
        <Box sx={{ marginBottom: "65px", marginTop:"10px" }}>
          <Carousel />
          <Categories />
          <PopularFood />
        </Box>
    );
}

export default Home
