import { useParams } from "react-router";
import { useLocation, useNavigate } from "react-router-dom";
import { getEventById, getEvents } from "../../api/index";
import CardList from "../../components/Card/CardList";
import EventDetailCarousel from "../../components/carousel/EventDetailCarousel";
import EventDetailText from "../../components/carousel/EventDetailText";
import useFetchData from "../../hooks/useFetchData";
import PaginationServerSide from "../../components/common/PaginationServerSide";
import { useState, useEffect } from "react";

const EventDetail = () => {
  const { id: eventId } = useParams();
  const { data: eventDetail } = useFetchData(["event", eventId], () =>
    getEventById(eventId),
  );
  const userValue = JSON.parse(sessionStorage.getItem("user"));
  const [query, setQuery] = useState("?page=1&pageSize=6&sortBy=trending");
  const { data: allEvent } = useFetchData(["events", query], () =>
    getEvents(query),
  );

  const [page, setPage] = useState(1);

  useEffect(() => {
    const updatedQuery = `?page=${page}&pageSize=6&sortBy=trending`;
    setQuery(updatedQuery);
  }, [page]);
  const pageCount = Math.ceil(allEvent?.total / 6);

  return (
    <div className="px-2 pt-14 sm:px-2 md:px-3 lg:px-6 xl:px-10 2xl:px-16">
      <EventDetailCarousel thumbnail={eventDetail?.thumbnail} />
      {eventDetail && (
        <EventDetailText eventDetail={eventDetail} orgId={userValue?._id} />
      )}
      {allEvent && (
        <CardList data={allEvent?.content} link={"/event/detail/"} />
      )}
      {allEvent?.content && (
        <PaginationServerSide
          page={page}
          setPage={(value) => setPage(value)}
          pageCount={pageCount}
        />
      )}
    </div>
  );
};

export default EventDetail;
