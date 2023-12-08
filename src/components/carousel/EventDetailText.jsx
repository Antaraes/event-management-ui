import { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { BoostPayment } from "../subscription/BoostPayment";
import * as api from "../../api/index";

const EventDetailText = ({ eventDetail, orgId }) => {
  const [isPaymentShow, setIsPaymentShow] = useState(false);
  const { id: eventId } = useParams();
  const navigate = useNavigate();
  const [isOrg, setIsOrg] = useState(false);
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

  let response;
  if (orgId !== undefined) {
    response = axios
      .get(`http://localhost:8080/api/v1/organizer/all/${orgId}`)
      .then((res) => (res ? setIsOrg(true) : setIsOrg(false)))
      .catch((err) => console.log(err));
  }

  const boostEvent = (info) => {
    console.log("Info", info);
    api
      .boostEvent({
        body: info,
      })
      .then((res) => {
        navigate("/organizer/eventList");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const currentDate = new Date();
  const ticketOpenDate = new Date(eventDetail.ticketOpenDate);
  const ticketCloseDate = new Date(eventDetail.ticketCloseDate);
  const isTicketOpen =
    currentDate >= ticketOpenDate && currentDate <= ticketCloseDate;

  return (
    <>
      {isPaymentShow && (
        <BoostPayment
          title="Event Boost Payment"
          eventId={eventId}
          isShow={setIsPaymentShow}
          onSubmit={boostEvent}
        />
      )}
      <div className="w-full py-0 text-white">
        <div className="mt-7 flex items-center justify-between text-lg">
          <div className="flex justify-evenly font-serif text-sm lg:text-lg">
            <div className="rounded-lg border border-secondary bg-transparent px-3 py-1 text-secondary">
              Trending
            </div>

            {isTicketOpen && (
              <div className="ml-3 rounded-lg border border-secondary bg-transparent px-3 py-1 text-[15px] text-secondary ">
                Open
              </div>
            )}
          </div>

          {orgId == eventDetail.organizer ? (
            <button
              onClick={() => setIsPaymentShow(true)}
              className="ml-2 hidden rounded-3xl bg-purchase px-5 py-2 hover:bg-amber-800 md:ml-0 md:block"
            >
              Boost
            </button>
          ) : (
            <Link
              to={`/buy-ticket/${eventId}`}
              className={`ml-2 hidden rounded-3xl bg-purchase px-5 py-2 hover:bg-amber-800 md:ml-0 md:block ${
                isTicketOpen ? "" : "hidden"
              }`}
            >
              go to purchase
            </Link>
          )}
        </div>

        <div className="mt-2 flex flex-col items-center justify-center gap-8 md:mt-7 md:items-start md:p-0">
          <div className="m-0 flex w-full items-center justify-between border-b border-white pb-1">
            <h2 className="font-serif text-xl font-semibold lg:text-2xl">
              {eventDetail.name}
            </h2>
            <Link
              to="/create-ticket"
              className="rounded-3xl bg-purchase px-5 py-2 hover:bg-amber-800 md:hidden"
            >
              purchase
            </Link>
          </div>

          <div className="flex flex-col gap-4 text-[15px] font-extralight md:text-[18px]">
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

          <p className="pb-5 text-[15px] md:text-[18px]">
            {eventDetail.description}
          </p>
        </div>
        <p className="pb-5 text-[15px] md:text-[18px]">
          {eventDetail.description}
        </p>
      </div>
    </>
  );
};

export default EventDetailText;
