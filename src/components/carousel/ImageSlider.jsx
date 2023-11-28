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

export default function ImageSlider(props) {
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
        className="w-[310px] h-[150px] md:w-[700px] md:h-[250px] lg:w-[1000px] lg:h-[400px] xl:w-[1200px] xl:h-[250px] 2xl:w[1000px] 2xl:h-[330px] flex items-center justify-center"
      >{
        props.images.map((image,index)=>(
        <SwiperSlide key={index}><img src={image.url} alt="" className='w-full h-full'/></SwiperSlide>
        ))
      }
      </Swiper>
    </>
  );
}