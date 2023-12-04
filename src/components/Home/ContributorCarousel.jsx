import ContributorCard from "./ContributorCard";
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
import useFetchData from "../../hooks/useFetchData";
import { fetchOrganizers } from "../../api/index";
import { useEffect, useState } from "react";

const ContributorCarousel = () => {
  const { data: contributors } = useFetchData(["contributors-homepage"], () =>
    fetchOrganizers("?sortBy=blueMark"),
  );
  const [firstFiveContributors, setFirstFiveContributors] = useState(null);

  useEffect(() => {
    if (contributors) {
      setFirstFiveContributors(contributors.content.slice(0, 5));
    }
  }, [contributors]);

  return (
    <>
      <Swiper
        className="hidden sm:block"
        modules={[
          Navigation,
          Pagination,
          Scrollbar,
          A11y,
          Autoplay,
          Pagination,
        ]}
        slidesPerView={"5"}
        loop={true}
        spaceBetween={40}
        style={{
          "--swiper-pagination-color": "#FFFFFF",
          "--swiper-pagination-bullet-inactive-color": "#999999",
          "--swiper-pagination-bullet-inactive-opacity": "1",
          "--swiper-pagination-bullet-size": "10px",
          "--swiper-pagination-bullet-horizontal-gap": "6px",
        }}
      >
        {firstFiveContributors &&
          firstFiveContributors.map((contributor, index) => {
            return (
              <SwiperSlide key={index}>
                <ContributorCard contributor={contributor} />
              </SwiperSlide>
            );
          })}
      </Swiper>
      <Swiper
        className="sm:hidden"
        modules={[
          Navigation,
          Pagination,
          Scrollbar,
          A11y,
          Autoplay,
          Pagination,
        ]}
        slidesPerView={"3"}
        loop={true}
        spaceBetween={40}
        style={{
          "--swiper-pagination-color": "#FFFFFF",
          "--swiper-pagination-bullet-inactive-color": "#999999",
          "--swiper-pagination-bullet-inactive-opacity": "1",
          "--swiper-pagination-bullet-size": "10px",
          "--swiper-pagination-bullet-horizontal-gap": "6px",
        }}
      >
        {firstFiveContributors &&
          firstFiveContributors.map((contributor, index) => {
            return (
              <SwiperSlide key={index}>
                <ContributorCard contributor={contributor} />
              </SwiperSlide>
            );
          })}
      </Swiper>
      <div className="mt-4 flex items-center justify-center">
        <Link to="/contributor">
          <button className="rounded-md bg-orange-400 px-4 py-1 text-center text-white md:px-6 md:py-2 md:text-[18px] lg:text-[20px]">
            See more
          </button>
        </Link>
      </div>
    </>
  );
};

export default ContributorCarousel;
