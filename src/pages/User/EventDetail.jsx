import { useParams } from "react-router";
import { getEventById, getEvents } from "../../api/index";
import CardList from "../../components/Card/CardList";
import EventDetailCarousel from "../../components/carousel/EventDetailCarousel";
import EventDetailText from "../../components/carousel/EventDetailText";
import useFetchData from "../../hooks/useFetchData";

const EventDetail = () => {
  const { id: eventId } = useParams();
  const { data: eventDetail } = useFetchData(["event", eventId], () =>
    getEventById(eventId)
  );

  const { data: allEvent } = useFetchData(["events"], () => getEvents());

  return (
    <div className="px-2 sm:px-2 md:px-3 lg:px-6 xl:px-10 2xl:px-16 pt-14">
      <EventDetailCarousel />
      {eventDetail && <EventDetailText eventDetail={eventDetail} />}
      {allEvent && <CardList data={allEvent} link={"/event/detail/"} />}
    </div>
  );
};

export default EventDetail;
