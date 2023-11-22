import React, { useState } from "react";
import { Chart } from "react-google-charts";
import PieChart from "../../components/common/PieChart";
import BarChartVertical from "../../components/common/BarChartVertical";
import LineChart from "../../components/common/LineChart";
import OverviewBlock from "../../components/common/OverviewBlock";

const OrganizerDashboard = () => {
  const pieChartData = [
    ["Color", "Tickets"],
    ["Kpay", 20],
    ["Wave", 15],
    ["A+", 3],
    ["AYA Pay", 5],
  ];

  const barDataProps = [
    ["Ticket Type", "Mon", "Tue", "Wed", "Thu", "Fri"],
    ["Normal", 12, 8, 6, 10, 15],
    ["VIP", 1, 5, 3, 8, 10],
    ["VVIP", 3, 2, 1, 5, 3],
  ];

  const lineData = [
    ["Week", "Sales", "Expenses"],
    ["week1", 1000, 400],
    ["week2", 1170, 460],
    ["week3", 660, 1120],
    ["week4", 1030, 540],
  ];

  return (
    <>
      <h1 className="text-3xl mx-auto p-4 text-center">Organizer Dashboard</h1>
      <div className="bg-white rounded-2xl text-primary  grid grid-cols-2  p-8 mx-auto w-[85%] border-2 border-gray-900 min-h-[90vh] max-h-fit">
        <div>
          <h2 className="text-xl">Total Tickets Sell - Bar Chart</h2>
          <BarChartVertical barDataProps={barDataProps} />
        </div>
        <div className="text-black p-3 h-fit">
          <h2 className="text-xl">Pie Chart Example</h2>
          <PieChart pieChartData={pieChartData} />
        </div>
        <div className="text-black  h-fit">
          <h2 className="text-xl">Line Chart</h2>
          <LineChart lineData={lineData} />
        </div>
        <div className="text-black  h-fit">
          <h2 className="text-xl">Overview</h2>
          <OverviewBlock />
        </div>
      </div>
    </>
  );
};

export default OrganizerDashboard;
