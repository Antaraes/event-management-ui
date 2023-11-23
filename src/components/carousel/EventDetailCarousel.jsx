import ImageSlider from "./imageSlider";
import 'swiper/css' 
import 'swiper/css/navigation'
import 'swiper/css/thumbs'


const EventDetailCarousel = () => {

  const images= [
    {
      url: 'https://live.staticflickr.com/8523/8675150036_8fd47b4425_b.jpg'
    },
    {
      url: 'https://live.staticflickr.com/8115/8675071784_b7a0544ab5_h.jpg'
    },
    {
      url: 'https://live.staticflickr.com/8253/8674046441_c61b4e4276_h.jpg'
    },
    {
      url: 'https://live.staticflickr.com/8523/8675150036_8fd47b4425_b.jpg'
    },
    {
      url: 'https://live.staticflickr.com/8523/8675150036_8fd47b4425_b.jpg'
    },
    {
      url: 'https://live.staticflickr.com/8523/8675150036_8fd47b4425_b.jpg'
    }
  ]

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-[800px] h-[500px]">
        <ImageSlider images={images}/>
      </div>
    </div>
  )
};

export default EventDetailCarousel;
