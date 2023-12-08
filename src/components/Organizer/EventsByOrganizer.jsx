import React from "react";
import { Link } from "react-router-dom";

const EventsByOrganizer = ({ event }) => {
  const formatDate = (date) => {
    const eventDate = new Date(date);
    const day = eventDate.getDate();
    const month = eventDate.toLocaleString("en-US", { month: "numeric" });
    const year = eventDate.getFullYear();
    const formattedDate = `${day}.${month}.${year}`;
    return formattedDate;
  };
  return (
    <div className="bg-gray-300 mb-4 w-[90%] h-32 p-4 rounded-lg flex gap-4 relative flex-col">
      <h2 className="text-lg font-medium">{event.name}</h2>
      <span>
        {formatDate(event.eventStartDate)} - {formatDate(event.eventEndDate)}
      </span>
      <Link
        to={`/organizer/dashboard?event=${event._id}`}
        className="absolute right-2 bottom-2 hover:-translate-y-1 transition-all duration-300 hover:text-secondary hover:border-b hover:border-secondary"
      >
        See more Detail...
      </Link>
    </div>
  );
};

export default EventsByOrganizer;
