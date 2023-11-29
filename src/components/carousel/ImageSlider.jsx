import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../../assets/css/event-detail-caursel.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function ImageSlider({ images }) {
  
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-80 md:w-[600px] lg:w-[800px] xl:w-[900px] 2xl:w-[900px] flex items-center justify-center object-cover"
      >{
        images?.map((url,index)=>(
        <SwiperSlide key={index}><img src={url} alt="" /></SwiperSlide>
        ))
      }
      </Swiper>
    </>
  );
}