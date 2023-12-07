import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ImageSlider from "../../../components/carousel/imageSlider";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const OrganizerEventDetail = () => {
  const [data, setData] = useState([]);

  const { id } = useParams();

  const formatDate = (date) => {
    const eventDate = new Date(date);
    const day = eventDate.getDate();
    const month = eventDate.toLocaleString("en-US", { month: "long" });
    const year = eventDate.getFullYear();
    const formattedDate = `${day}-${month}-${year} ${
      eventDate.toDateString().split(" ")[0]
    }`;
    return formattedDate;
  };

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/v1/event/find/" + id)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);
  return (
    <div className="text-black">
      <h1 className="my-2 w-full border-b border-black pb-1 text-[20px] font-bold tracking-wider">
        <span className="px-2">{data.name}</span>
      </h1>
      <div className="px-5 py-2 text-[15px] font-semibold">
        <div className="p-5">
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
        className="w-[900px] h-[300px] flex items-center justify-center"
      >{
        data.thumbnail?.map((url,index)=>(
        <SwiperSlide key={index}><img src={url} alt="" className='w-full h-full object-cover'/></SwiperSlide>
        ))
      }
      </Swiper>
        </div>
        <h1 className="mb-2">
          <i className="fa-solid fa-calendar-days"></i> {"\t"} Start Date :
          {"\t"}
          {formatDate(data.eventStartDate)}
        </h1>
        <h1 className="mb-2">
          <i className="fa-solid fa-calendar-days"></i> {"\t"} End Date :{"\t"}
          {formatDate(data.eventEndDate)}
        </h1>
        <h1 className="mb-2">
          <i className="fa-solid fa-address-card"></i>
          {"\t"}Contact :{"\t"}
          {data.contact}
        </h1>
        <h1 className="mb-2">
          <i className="fa-solid fa-location-dot"></i>
          {"\t"}Location :{"\t"}
          {data.location}
        </h1>
        <h1 className="mb-2">
          Description :{"\t"}
          <span className="font-normal">{data.description}</span>
        </h1>
      </div>
    </div>
  );
};

export default OrganizerEventDetail;
