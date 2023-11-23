import React from "react";
import EventCard from "./EventCard";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";

import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-coverflow";
import { Link } from "react-router-dom";

const EventCardCarousel = ({ events }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, Pagination]}
      slidesPerView={"2"}
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
        "--swiper-pagination-bullet-horizontal-gap": "6px",
      }}
    >
      {events.map((event, index) => {
        return (
          <SwiperSlide key={index}>
            <Link to={`/event-detail/${index}`}>
              <EventCard key={index} event={event} />
            </Link>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default EventCardCarousel;
