import React, { useEffect, useState } from "react";
import CardList from "../../components/Card/CardList";
import Filter from "../../components/Filter/Filter";
import useFetchData from "../../hooks/useFetchData";
import { getEvents } from "../../api";
import PaginationServerSide from "../../components/common/PaginationServerSide";

export default function Event() {
  const queryParams = new URLSearchParams(window.location.search);
  const type = queryParams.get("type");
  const term = queryParams.get("name");

  const [query, setQuery] = useState(
    "?page=1&pageSize=6&name=&eventStartDate=&eventEndDate=&isUpcoming=&location=&organizerId=&sortBy=",
  );
  const queryKey = ["events", query];
  const { data: eventsData, isLoading: eventsLoading } = useFetchData(
    queryKey,
    () => getEvents(query),
  );

  const pageSize = 6;

  const [page, setPage] = useState(1);
  const [name, setName] = useState(term ? term : "");
  const [eventDate, setEventDate] = useState({
    startDate: null,
    endDate: null,
  });
  const [isUpcoming, setIsUpcoming] = useState(type === "upcoming");
  const [isTrending, setIsTrending] = useState(true);
  const [location, setLocation] = useState("");

  useEffect(() => {
    const formattedStartDate = eventDate.startDate
      ? eventDate.startDate.toISOString()
      : "";
    const formattedEndDate = eventDate.endDate
      ? eventDate.endDate.toISOString()
      : "";

    const updatedQuery = `?page=${page}&pageSize=${pageSize}&name=${name}&eventStartDate=${formattedStartDate}&eventEndDate=${formattedEndDate}&isUpcoming=${isUpcoming}&location=${location}&sortBy=${
      isTrending ? "trending" : ""
    }`;
    setQuery(updatedQuery);
  }, [page, name, eventDate, isUpcoming, location, isTrending]);

  const pageCount = Math.ceil(eventsData?.total / pageSize);

  return (
    <div className="px-2 py-12 lg:px-10">
      <Filter
        setName={(value) => setName(value)}
        options={{
          inputs: [
            {
              label: "Title",
              type: "text",
              value: name,
              action: (value) => setName(value),
            },
            {
              label: "Event Date",
              type: "dateRangePicker",
              value: eventDate,
              action: (value) => setEventDate(value),
              disabled: isUpcoming,
            },
            {
              label: "Only Upcoming",
              type: "checkbox",
              value: isUpcoming,
              action: () => setIsUpcoming(!isUpcoming),
            },
            {
              label: "Sort by Trending",
              type: "checkbox",
              value: isTrending,
              action: () => setIsTrending(!isTrending),
            },
            {
              label: "Location",
              type: "text",
              value: location,
              action: (value) => setLocation(value),
            },
          ],
        }}
      />
      <CardList data={eventsData?.content} link={"/event/detail/"} />
      <PaginationServerSide
        page={page}
        setPage={(value) => setPage(value)}
        pageCount={pageCount}
      />
    </div>
  );
}
