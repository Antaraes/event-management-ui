import React from "react";

const OverviewBlock = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-4 h-[160px] ">
        <div className="bg-green-400 rounded-lg justify-around h-32 p-3 w-64   flex flex-col ">
          <span className="text-2xl font-bold ">34</span>

          <span className="text-lg">Ticket Sold</span>
        </div>
        <div className="bg-yellow-300 rounded-lg justify-around h-32 p-3 w-64   flex flex-col ">
          <span className="text-2xl font-semibold ">1,562,500 MMK</span>

          <span className="text-lg">Received</span>
        </div>
        <div className="bg-pink-400 rounded-lg justify-around h-32 p-3 w-64   flex flex-col ">
          <span className="text-2xl font-semibold ">45 Ticket</span>

          <span className="text-lg">Left To Sell</span>
        </div>
        <div className="bg-blue-400 rounded-lg justify-around h-32 p-3 w-64   flex flex-col ">
          <span className="text-2xl font-semibold ">Sold 2.3 </span>

          <span className="text-lg">Tickets by day</span>
        </div>
      </div>
    </>
  );
};

export default OverviewBlock;
