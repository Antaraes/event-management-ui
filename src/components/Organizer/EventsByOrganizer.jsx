import React from "react";
import { Link } from "react-router-dom";

const EventsByOrganizer = ({ index }) => {
  return (
    <div className="bg-gray-300 mb-4 w-[90%] h-32 p-4 rounded-lg flex gap-4 relative flex-col">
      <h2 className="text-lg font-medium">Jazz Event Myanmar </h2>
      <span>12.12.2023 - 24.12.2023</span>
      <Link
        to={`/organizer/dashboard/655db72a40abeabdf4678ec9?event=${index}`}
        className="absolute right-2 bottom-2 hover:-translate-y-1 transition-all duration-300 hover:text-secondary hover:border-b hover:border-secondary"
      >
        See more Detail...
      </Link>
    </div>
  );
};

export default EventsByOrganizer;
