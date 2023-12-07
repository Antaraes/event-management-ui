import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { BoostPayment } from "../subscription/BoostPayment";

const EventDetailText = ({ eventDetail, orgId }) => {
  const [isPaymentShow, setIsPaymentShow] = useState(false);
  const { id: eventId } = useParams();
  const [isOrg, setIsIrg] = useState(false);
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

  let response ;
  if(orgId !== undefined) {
    response = axios
      .get(`http://localhost:8080/api/v1/organizer/all/${orgId}`)
      .then((res) => res ? setIsIrg(true) : setIsIrg(false) )
      .catch((err) => console.log(err));
  }

  const boostEvent = (info) => {
    
    console.log('Info',info);
    axios.post(`http://localhost:8080/api/v1/event/boost`, {
      body: info
    }).then((res) => {
      alert('Successfully Boost the event')
    })
    .catch((err) => {
        console.log(err);
    });
  }

  return (
    <>
      {
        isPaymentShow &&
        <BoostPayment
          title="Event Boost Payment"
          eventId={eventId}
          isShow={setIsPaymentShow}
          onSubmit={boostEvent}
      />}
      <div className="text-white py-0 w-full">
        <div className="flex justify-between items-center text-lg mt-7">
          <div className="flex justify-evenly font-serif text-sm lg:text-lg">
            <div className="bg-transparent border border-secondary text-secondary py-1 px-3 rounded-lg">
              Trending
            </div>

            <div className="bg-transparent border border-secondary text-secondary py-1 px-3 rounded-lg ml-3 hidden md:block">
              Open Now
            </div>

            <div className="bg-transparent border border-secondary text-secondary py-1 px-3 rounded-lg ml-3 text-[15px] md:hidden">
              Open
            </div>
          </div>

          {isOrg ? (
            <button
              onClick={() => setIsPaymentShow(true) }
              className="bg-purchase py-2 px-5 rounded-3xl ml-2 md:ml-0 hover:bg-amber-800 hidden md:block"
            >
              Boost
            </button>
          ) : (
            <Link
              to={`/buy-ticket/${eventId}`}
              className="bg-purchase py-2 px-5 rounded-3xl ml-2 md:ml-0 hover:bg-amber-800 hidden md:block"
            >
              go to purchase
            </Link>
          )}
        </div>

        <div className="mt-2 md:mt-7 flex flex-col gap-8 justify-center md:p-0 items-center md:items-start">
          <div className="border-b border-white flex justify-between items-center w-full pb-1 m-0">
            <h2 className="text-xl lg:text-2xl font-semibold font-serif">
              {eventDetail.name} {eventDetail._id}
            </h2>
            <Link
              to="/create-ticket"
              className="bg-purchase py-2 px-5 rounded-3xl hover:bg-amber-800 md:hidden"
            >
              purchase
            </Link>
          </div>

          <div className="flex flex-col gap-4 text-[15px] md:text-[18px] font-extralight">
            <span>
              <i className="fa-solid fa-calendar-days"></i> {"\t"} Start Date :
              {"\t"}
              {formatDate(eventDetail.eventStartDate)}
            </span>

            <span>
              <i className="fa-solid fa-calendar-days"></i> {"\t"} End Date :
              {"\t"}
              {formatDate(eventDetail.eventEndDate)}
            </span>

            <span>
              <i className="fa-solid fa-location-dot"></i>
              {"\t"}Location :{"\t"}
              {eventDetail.location}
            </span>

            <span>
              <i className="fa-solid fa-address-card"></i>
              {"\t"}Contact :{"\t"}
              {eventDetail.contact}
            </span>

            <span className="text-[17px] md:text-[20px] lg:text-[22px]">
              Tickets can be purchased starting from (
              {formatDate(eventDetail.ticketOpenDate)}) to (
              {formatDate(eventDetail.ticketCloseDate)})
            </span>
          </div>

          <p className="text-[15px] md:text-[18px] pb-5">
            {eventDetail.description}
          </p>
        </div>
      </div>
    </>
  );
};

export default EventDetailText;
