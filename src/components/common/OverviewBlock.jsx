import React from "react";

const OverviewBlock = ({ overviewData }) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 h-fit mt-4 mb-24">
        <div className="bg-gradient-to-r from-green-300 to-green-400 rounded-lg  h-32 p-3 w-[95%] flex flex-wrap justify-between items-center">
          <div className="w-full flex justify-between items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
              />
            </svg>
            <span className="text-2xl text-end mr-6 font-medium ">
              {overviewData.totalTicketsSold}
            </span>
          </div>

          <span className="text-lg border-t w-full border-gray-800 pt-1 col-span-2 text-end">
            {overviewData.totalTicketsSold == 1 ? "Ticket" : "Tickets"} Sold
          </span>
        </div>
        <div className="bg-gradient-to-r from-yellow-300 to-yellow-400 rounded-lg  h-32 p-3 w-[95%]  flex flex-wrap justify-between items-center">
          <div className="w-full flex justify-between items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="text-2xl font- ">
              {overviewData.totalPrice} MMK
            </span>
          </div>

          <span className="text-lg text-end w-full border-t border-gray-900 pt-2 ">
            Received
          </span>
        </div>
        <div className="bg-gradient-to-r from-pink-300 to-pink-300 rounded-lg justify-around h-32 p-3 w-[95%]  flex flex-col ">
          <div className="w-full flex justify-between items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
              />
            </svg>
            <span className="text-2xl font-medium mr-3">
              {overviewData.allTotalAvaliableTickets}
            </span>
          </div>

          <span className="text-lg border-t w-full border-gray-800 pt-1 col-span-2 text-end">
            {overviewData.allTotalAvaliableTickets == 1 ? "Ticket" : "Tickets"}{" "}
            Avaliable
          </span>
        </div>
        <div className="bg-blue-400 rounded-lg justify-around h-32 p-3 w-[95%] flex flex-col ">
          <div className="w-full flex justify-between items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
              />
            </svg>
            <span className="text-2xl font-medium ">
              {overviewData.ticketsLeftToSell}{" "}
            </span>
          </div>
          <span className="text-lg border-t w-full border-gray-800 pt-1 col-span-2 text-end">
            {overviewData.ticketsLeftToSell == 1 ? "Ticket" : "Tickets"} Left To
            Sell
          </span>
        </div>
      </div>
    </>
  );
};

export default OverviewBlock;
