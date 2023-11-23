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

export default function ImageSlider() {
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
        className="mySwiper"
      >
        <SwiperSlide><img src="https://live.staticflickr.com/8115/8675071784_b7a0544ab5_h.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://live.staticflickr.com/8115/8675071784_b7a0544ab5_h.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://live.staticflickr.com/8115/8675071784_b7a0544ab5_h.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://live.staticflickr.com/8115/8675071784_b7a0544ab5_h.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://live.staticflickr.com/8115/8675071784_b7a0544ab5_h.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://live.staticflickr.com/8115/8675071784_b7a0544ab5_h.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://live.staticflickr.com/8115/8675071784_b7a0544ab5_h.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://live.staticflickr.com/8115/8675071784_b7a0544ab5_h.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://live.staticflickr.com/8115/8675071784_b7a0544ab5_h.jpg" alt="" /></SwiperSlide>
      </Swiper>
    </>
  );
}
