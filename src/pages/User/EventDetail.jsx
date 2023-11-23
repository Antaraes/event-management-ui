import EventDetailCarousel from "../../components/carousel/EventDetailCarousel";
import EventDetailText from "../../components/carousel/EventDetailText";

const EventDetail = () => {
  return (
    <div className="px-16 mt-10">
      <EventDetailCarousel />
      <EventDetailText />
    </div>
  );
};

export default EventDetail;
