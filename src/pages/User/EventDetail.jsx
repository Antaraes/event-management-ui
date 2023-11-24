import CardList from "../../components/Card/CardList";
import EventDetailCarousel from "../../components/carousel/EventDetailCarousel";
import EventDetailText from "../../components/carousel/EventDetailText";

const EventDetail = () => {

  const events = [
    { id:1, name: "Event-1" },
    { id:2, name: "Event-2" },
    { id:3, name: "Event-3" },
    { id:4, name: "Event-4" },
    { id:5, name: "Event-5" },
    { id:6, name: "Event-6" }
  ]

  return (
    <div className="px-16 py-12">
      <EventDetailCarousel />
      <EventDetailText />
      <CardList data={events} link={'/event/detail/'} />
    </div>
  );
};

export default EventDetail;
