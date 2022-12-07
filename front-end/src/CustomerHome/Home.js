import Carousel from './Carousel';
import Categories from './Categories';
import PopularFood from './PopularFood';
import { Box } from '@mui/system';
import TopBar from '../layout/TopBar'
import Bottom from '../layout/Bottom'

function Home(){
    return (
      <>
        <TopBar />
        <Box sx={{ marginBottom: "65px", marginTop: "10px" }}>
          <Carousel />
          <Categories />
          <PopularFood />
        </Box>
        <Bottom />
      </>
    );
}

export default Home
