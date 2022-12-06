import React from 'react'
import Box from '@mui/material/Box'
import { Swiper, SwiperSlide } from "swiper/react"
// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import { Autoplay, Scrollbar } from "swiper";
import "./swiperstyle.css";

function Carousel() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{marginTop:"10px", height:'200px'}}>
      <Swiper
        scrollbar={{
          hide: true,
        }}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        modules={[Scrollbar, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://via.placeholder.com/500x250" /></SwiperSlide>
        <SwiperSlide><img src="https://via.placeholder.com/500x250" /></SwiperSlide>
        <SwiperSlide><img src="https://via.placeholder.com/500x250" /></SwiperSlide>
        <SwiperSlide><img src="https://via.placeholder.com/500x250" /></SwiperSlide>
      </Swiper>
    </Box>
  );
}

export default Carousel;
