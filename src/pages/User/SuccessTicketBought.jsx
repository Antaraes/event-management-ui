import React from "react";
import { Link, useNavigate } from "react-router-dom";

const SuccessTicketBought = () => {
  const navigate = useNavigate();
  return (
    <div className="flex max-h-fit min-h-[80vh] flex-col items-center gap-8 pt-14 sm:gap-12 ">
      <div className="mt-10 flex h-auto flex-col items-center gap-3 px-1 text-base sm:text-lg lg:text-3xl">
        <h1 className="text-center font-semibold">
          You Have Successfully Bought a Ticket
        </h1>
        <h1 className="animate-bounce pt-3">♡⸜(˶˃ ᵕ ˂˶)⸝♡</h1>
      </div>
      <div className="relative mx-auto max-h-fit min-h-[15rem] w-[80%] rounded-xl border p-3 lg:w-[40%]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="absolute -z-40 h-full w-full opacity-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
          />
        </svg>
        <h3 className=" text-center text-2xl font-semibold">Ticket Voucher</h3>
        <div className="mt-5 grid grid-cols-1 gap-14 p-3 md:grid-cols-2">
          <span>Total Tickets : </span>
          <span>Total Amount : </span>
          <span>Paid Amount : </span>
          <span>Bought Tickets : </span>
          <span>Purchase Date : </span>
        </div>
      </div>
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

export default SuccessTicketBought;
