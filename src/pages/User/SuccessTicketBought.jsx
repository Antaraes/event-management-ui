import React from "react";
import { Link, useNavigate } from "react-router-dom";

const SuccessTicketBought = () => {
  const navigate = useNavigate();
  return (
    <div className="pt-14 h-[80vh] flex flex-col items-center gap-8 sm:gap-12 lg:gap-24">
      <div className="h-auto mt-10 text-base sm:text-lg lg:text-3xl px-1 flex flex-col gap-3 items-center">
        <h1 className="font-semibold text-center">
          You Have Successfully Bought a Ticket
        </h1>
        <h1 className="pt-3 animate-bounce">♡⸜(˶˃ ᵕ ˂˶)⸝♡</h1>
      </div>
      <div className="flex   justify-center gap-4 sm:gap-12 mb-10 w-[80%] sm:w-auto">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 bg-secondary p-2 rounded-lg bg-opacity-70 cursor-pointer hover:bg-opacity-100 transition-all duration-700 hover:shadow-md shadow hover:shadow-secondary"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
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
          className="flex items-center gap-2 bg-secondary p-2 rounded-lg bg-opacity-70 cursor-pointer hover:bg-opacity-100 transition-all duration-700 hover:shadow-md shadow hover:shadow-secondary"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
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

export default SuccessTicketBought;
