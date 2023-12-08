import ImageSlider from "./imageSlider";
import 'swiper/css' 
import 'swiper/css/navigation'
import 'swiper/css/thumbs'


const EventDetailCarousel = ({thumbnail}) => {

  return (
    <div className="h-full flex items-center justify-center">
      <div className="">
        <ImageSlider images={thumbnail}/>
      </div>
    </div>
  )
};

export default EventDetailCarousel;
 