import ContributorCard from "./ContributorCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCoverflow, } from "swiper/modules";

import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import 'swiper/css/effect-coverflow';

const ContributorCarousel = ({contributors}) => {
    return ( 
        <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, Pagination]}
        slidesPerView={'5'}
        loop={true}
        spaceBetween={40}
        style={{
          "--swiper-pagination-color": "#FFFFFF",
          "--swiper-pagination-bullet-inactive-color": "#999999",
          "--swiper-pagination-bullet-inactive-opacity": "1",
          "--swiper-pagination-bullet-size": "10px",
          "--swiper-pagination-bullet-horizontal-gap": "6px"
        }}
      >
        {contributors.map((contributor, index) => {
          return  <SwiperSlide key={index}>
            <ContributorCard contributor={contributor} />
          </SwiperSlide>;
        })}
      </Swiper>
     );
}
 
export default ContributorCarousel;