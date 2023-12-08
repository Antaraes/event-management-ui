import React from "react";

import { Link, useLocation, useNavigate } from "react-router-dom";
import SuccessTicketCard from "../../components/Ticket/SuccessTicketCard/SuccessTicketCard";

const SuccessTicketPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log("location.state", location.state);

  return (
    <div
      style={{ background: "#000" }}
      className="flex max-h-fit  min-h-[80vh] flex-col items-center gap-8 pt-14 sm:gap-12 "
    >
      <div className="mt-10 flex h-auto flex-col items-center gap-3 px-1 text-base sm:text-lg lg:text-3xl">
        <h1 className="text-center font-semibold">
          You Have Successfully Bought a Ticket
        </h1>
        <h1 className="animate-bounce pt-3">♡⸜(˶˃ ᵕ ˂˶)⸝♡</h1>
      </div>
      <SuccessTicketCard ticketDetail={location.state} />
      <div className="mb-10   flex w-[80%] justify-center gap-4 sm:w-auto sm:gap-12">
        <button
          onClick={() => navigate(-1)}
          className="flex cursor-pointer items-center gap-2 rounded-lg bg-secondary bg-opacity-70 p-2 shadow transition-all duration-700 hover:bg-opacity-100 hover:shadow-md hover:shadow-secondary"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
            />
          </svg>
          <span className=""> Buy More Tickets</span>
        </button>

        <Link
          to={"/"}
          className="flex cursor-pointer items-center gap-2 rounded-lg bg-secondary bg-opacity-70 p-2 shadow transition-all duration-700 hover:bg-opacity-100 hover:shadow-md hover:shadow-secondary"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>

          <span className="">Back To Home</span>
        </Link>
      </div>
    </div>
  );
};

export default SuccessTicketPage;
