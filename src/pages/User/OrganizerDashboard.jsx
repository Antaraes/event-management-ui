import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import PieChart from "../../components/common/PieChart";
import BarChartVertical from "../../components/common/BarChartVertical";
import LineChart from "../../components/common/LineChart";
import OverviewBlock from "../../components/common/OverviewBlock";
import useFetchData from "../../hooks/useFetchData";
import {
  getOrganizerDashboardBarChartData,
  getOrganizerDashboardOverviewData,
} from "../../api/index";
import { Link, useLocation, useParams } from "react-router-dom";
import EventsByOrganizer from "../../components/Organizer/EventsByOrganizer";

const OrganizerDashboard = () => {
  const location = useLocation();
  const { organizerId } = useParams();
  const [queryParams, setQueryParams] = useState("");
  const [queryKey, setQueryKey] = useState([
    "organizer-dashboard-bardata",
    organizerId,
  ]);

  const { data: chartData } = useFetchData(queryKey, () =>
    getOrganizerDashboardBarChartData(organizerId, queryParams)
  );

  const { data: overviewData } = useFetchData(
    ["organizer-dashboard-overview", organizerId],
    () => getOrganizerDashboardOverviewData(organizerId)
  );
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const eventValue = searchParams.get("event");

    if (eventValue !== null) {
      setQueryParams(`event=${eventValue}`);

      if (queryKey.length < 3) {
        setQueryKey((prevQueryKey) => [...prevQueryKey, eventValue]);
      } else {
        setQueryKey((prevQueryKey) => [
          ...prevQueryKey.slice(0, 2),
          eventValue,
        ]);
      }

      window.scrollTo(0, 0);
    }
  }, [location.search]);

  const pieChartData = [
    ["Color", "Tickets"],
    ["Kpay", 20],
    ["Wave", 15],
    ["A+", 3],
    ["AYA Pay", 5],
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
      <div className="w-full overflow-hidden">
        <div className="flex flex-col md:flex-row justify-between items-center px-5 md:px-20 mx-auto pt-16 mb-3">
          <h1 className="text-3xl mb-4 md:mb-0">Organizer Dashboard</h1>
          <Link to="/create-event">
            <span className="px-3 py-2 rounded bg-green-400 font-semibold">
              Create event
            </span>
          </Link>
        </div>
        <div className="bg-white rounded-2xl text-primary grid grid-cols-1 md:grid-cols-2 p-5 md:p-8 mx-auto w-[90%] md:w-[85%] border-2 border-gray-900 min-h-[90vh] max-h-fit mb-5">
          <div className="text-black h-fit col-span-2 md:w-full">
            {overviewData && <OverviewBlock overviewData={overviewData} />}
          </div>
          <div className="flex flex-col mb-4 w-full col-span-2 ">
            <div className="block h-fit w-full md:pr-4 mb-4 md:mb-0">
              <h2 className="text-xl">Total Tickets Sell - Bar Chart</h2>
              {chartData && (
                <BarChartVertical
                  barDataProps={chartData.totalTicketSaleByType}
                />
              )}
            </div>
            <div className="text-black p-3 w-full h-fit  md:pl-4">
              <h2 className="text-xl">Popular Payment</h2>
              {chartData && (
                <PieChart pieChartData={chartData.toalTicketByPayment} />
              )}
            </div>
            <div className="text-black w-full h-fit">
              <h2 className="text-xl">Line Chart</h2>
              {chartData && (
                <LineChart lineData={chartData.totalTicketSaleByEvent} />
              )}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-3">
              <h1 className=" sm:col-span-2  lg:col-span-3 p-3 mt3 mb-2 font-medium text-xl">
                Your Events
              </h1>
              {[...Array(6)].map((_, index) => (
                <EventsByOrganizer key={index} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrganizerDashboard;
