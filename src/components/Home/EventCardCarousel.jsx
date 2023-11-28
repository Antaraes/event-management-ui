import React from "react";
import EventCard from "./EventCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCoverflow, } from "swiper/modules";

import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import 'swiper/css/effect-coverflow';

const EventCardCarousel = ({events}) => {
    return ( 
      <>
        <Swiper className="md:hidden"
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, Pagination]}
        slidesPerView={'1'}
        navigation
        pagination
        autoplay
        centeredSlides={true}
        loop={true}
        spaceBetween={60}
        style={{
          "--swiper-pagination-color": "#FFFFFF",
          "--swiper-pagination-bullet-inactive-color": "#999999",
          "--swiper-pagination-bullet-inactive-opacity": "1",
          "--swiper-pagination-bullet-size": "10px",
          "--swiper-pagination-bullet-horizontal-gap": "6px"
        }}
      >
        {events.map((event, index) => {
          return <SwiperSlide key={index} size={1}>
            <EventCard key={index} event={event} />
          </SwiperSlide>;
        })}
        </Swiper>
        <Swiper className="hidden md:block"
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, Pagination]}
        slidesPerView={'2'}
        navigation
        pagination
        autoplay
        centeredSlides={true}
        loop={true}
        spaceBetween={60}
        style={{
          "--swiper-pagination-color": "#FFFFFF",
          "--swiper-pagination-bullet-inactive-color": "#999999",
          "--swiper-pagination-bullet-inactive-opacity": "1",
          "--swiper-pagination-bullet-size": "10px",
          "--swiper-pagination-bullet-horizontal-gap": "6px"
        }}
      >
        {events.map((event, index) => {
          return <SwiperSlide key={index} size={1}>
            <EventCard key={index} event={event} />
          </SwiperSlide>;
        })}
      </Swiper>
      </>
     );
}
 
export default EventCardCarousel;