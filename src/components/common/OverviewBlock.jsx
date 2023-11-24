import React from "react";

const OverviewBlock = ({ overviewData }) => {
  return (
    <>
      <div className="grid grid-cols-2 gap-4 h-[160px] ">
        <div className="bg-green-400 rounded-lg justify-around h-32 p-3 w-64   flex flex-col ">
          <span className="text-2xl font-bold ">
            {overviewData.totalTicketsSold}
          </span>

          <span className="text-lg">
            {overviewData.totalTicketsSold == 1 ? "Ticket" : "Tickets"} Sold
          </span>
        </div>
        <div className="bg-yellow-300 rounded-lg justify-around h-32 p-3 w-64   flex flex-col ">
          <span className="text-2xl font-semibold ">
            {overviewData.totalPrice} MMK
          </span>

          <span className="text-lg">Received</span>
        </div>
        <div className="bg-pink-400 rounded-lg justify-around h-32 p-3 w-64   flex flex-col ">
          <span className="text-2xl font-semibold ">
            {overviewData.allTotalAvaliableTickets} Tickets
          </span>

          <span className="text-lg">Avaliable</span>
        </div>
        <div className="bg-blue-400 rounded-lg justify-around h-32 p-3 w-64   flex flex-col ">
          <span className="text-2xl font-semibold ">
            {overviewData.ticketsLeftToSell}{" "}
            {overviewData.ticketsLeftToSell == 1 ? "Ticket" : "Tickets"}
          </span>

          <span className="text-lg">Left To Sell</span>
        </div>
      </div>
    </>
  );
};

export default OverviewBlock;
