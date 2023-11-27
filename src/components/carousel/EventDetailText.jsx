import { Link } from "react-router-dom";

const EventDetailText = ({ eventDetail }) => {
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
  return (
    <div className="text-white py-0 w-full">
      <h1 className="text-3xl mt-5">Event Detail</h1>
      <div className="flex justify-between items-center text-lg mt-7">
        <div className="flex justify-evenly">
          <div className="bg-secondary py-2 px-6 rounded-3xl">Trending</div>
          <div className="bg-secondary py-2 px-6 rounded-3xl ml-3 hidden md:block lg:block xl:block 2xl:block">
            Open Now
          </div>
          <div className="bg-secondary py-2 px-6 rounded-3xl ml-3 md:hidden lg:hidden xl:hidden 2xl:hidden">
            Open
          </div>
        </div>

        <Link
          to="/create-ticket"
          className="bg-purchase py-2 px-6 rounded-xl ml-3 hidden md:block lg:block xl:block 2xl:block hover:bg-amber-800"
        >
          go to purchase
        </Link>
      </div>
      <div className="mt-7 flex flex-col gap-8">
        <h2 className="text-3xl border-b border-white w-fit font-semibold">
          {eventDetail.name}
        </h2>
        <div className="flex flex-col gap-4">
          <span>
            Event Start Date <i className="fa-solid fa-calendar-days"></i> :{" "}
            {formatDate(eventDetail.eventStartDate)}
          </span>

          <span>
            Event End Date <i className="fa-solid fa-calendar-days"></i> :{" "}
            {formatDate(eventDetail.eventEndDate)}
          </span>

          <span>
            Location <i className="fa-solid fa-location-dot"></i> :{" "}
            {eventDetail.location}
          </span>

          <span>
            Contact <i className="fa-solid fa-address-card"></i> :{" "}
            {eventDetail.contact}
          </span>

          <span className="text-2xl">
            Tickets can be purchase starting from (
            {formatDate(eventDetail.ticketOpenDate)}) to (
            {formatDate(eventDetail.ticketCloseDate)})
          </span>
        </div>
        <p className="text-lg">{eventDetail.description}</p>
      </div>
    </div>
  );
};

export default EventDetailText;
