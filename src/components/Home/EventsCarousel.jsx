import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCoverflow, } from "swiper/modules";
import { getEvents } from "../../api";
import useFetchData from "../../hooks/useFetchData";

import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import 'swiper/css/effect-coverflow';

import EventPreview from "../../components/Home/EventPreview";

const EventsCarousel = () => {

    const queryKey = ["events-today"]
    const {
    data: eventsData,
    isLoading: eventsLoading
  } = useFetchData(queryKey, () => getEvents('?page=1&pageSize=6&name=&eventStartDate=&eventEndDate=&isUpcoming=&location=&organizerId=&sortBy='));

    return ( 
        <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        autoplay
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        style={{
          "--swiper-pagination-color": "#FFFFFF",
          "--swiper-pagination-bullet-inactive-color": "#999999",
          "--swiper-pagination-bullet-inactive-opacity": "1",
          "--swiper-pagination-bullet-size": "10px",
          "--swiper-pagination-bullet-horizontal-gap": "6px"
        }}
      >
        {eventsData?.content?.map((event, index) => {
          return  <SwiperSlide key={index}>
            <EventPreview key={index} event={event} />
          </SwiperSlide>;
        })}
      </Swiper>
     );
}
 
export default EventsCarousel;