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
  getEventsByOrganizerId,
} from "../../api/index";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import EventsByOrganizer from "../../components/Organizer/EventsByOrganizer";

const OrganizerDashboard = () => {
  const location = useLocation();
  const { organizerId } = useParams();
  const [queryParams, setQueryParams] = useState("");
  const navigate = useNavigate();

  //init query keys
  const [barDataQueryKey, setBarDataQueryKey] = useState([
    "organizer-dashboard-bardata",
    organizerId,
  ]);
  const [overviewDataQueryKey, setOverviewDataQueryKey] = useState([
    "organizer-dashboard-overview",
    organizerId,
  ]);

  //fetch datas
  const { data: chartData } = useFetchData(barDataQueryKey, () =>
    getOrganizerDashboardBarChartData(organizerId, queryParams)
  );
  const { data: allEventsByOrganizer } = useFetchData(
    ["event", organizerId],
    () => getEventsByOrganizerId(organizerId)
  );

  const { data: overviewData } = useFetchData(overviewDataQueryKey, () =>
    getOrganizerDashboardOverviewData(organizerId, queryParams)
  );

  const searchParams = new URLSearchParams(location.search);
  const eventValue = searchParams.get("event");
  useEffect(() => {
    if (eventValue !== null) {
      setQueryParams(`event=${eventValue}`);

      if (barDataQueryKey.length < 3) {
        setBarDataQueryKey((prevQueryKey) => [...prevQueryKey, eventValue]);
      } else {
        setBarDataQueryKey((prevQueryKey) => [
          ...prevQueryKey.slice(0, 2),
          eventValue,
        ]);
      }

      if (overviewDataQueryKey.length < 3) {
        setOverviewDataQueryKey((prevQueryKey) => [
          ...prevQueryKey,
          eventValue,
        ]);
      } else {
        setOverviewDataQueryKey((prevQueryKey) => [
          ...prevQueryKey.slice(0, 2),
          eventValue,
        ]);
      }

      window.scrollTo(0, 0);
    }
  }, [location.search]);

  const handleBackClick = () => {
    setQueryParams("");
    setBarDataQueryKey(["organizer-dashboard-bardata", organizerId]);
    setOverviewDataQueryKey(["organizer-dashboard-overview", organizerId]);
    navigate(`/organizer/dashboard/${organizerId}`);
  };

  return (
    <>
      <div className="w-full overflow-hidden">
        <div className="flex flex-col md:flex-row justify-between items-center px-5 md:px-20 mx-auto pt-16 mb-3">
          <h1 className="text-3xl mb-4 md:mb-0">
            Organizer Dashboard{" "}
            {allEventsByOrganizer &&
              queryParams &&
              allEventsByOrganizer.map((event) =>
                event._id === eventValue ? `(${event.name})` : ""
              )}
          </h1>

          <Link to="/create-event">
            <span className="px-3 py-2 rounded bg-green-400 font-semibold">
              Create event
            </span>
          </Link>
        </div>
        <div className="bg-white rounded-2xl text-primary grid grid-cols-1 md:grid-cols-2 p-5 md:p-8 mx-auto w-[90%] md:w-[85%] border-2 border-gray-900 min-h-[90vh] max-h-fit mb-5">
          {queryParams && (
            <span
              onClick={handleBackClick}
              className="flex w-fit p-1 hover:text-blue-700 gap-2 items-center hover:border-b border-blue-700 hover:-translate-y-1 duration-300 transition-all cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
                />
              </svg>

              <span className=" hidden sm:block">
                {" "}
                Back to overall dashboard{" "}
              </span>
            </span>
          )}

          <div className="text-black h-fit col-span-2 md:w-full">
            {overviewData && (
              <OverviewBlock overviewData={overviewData} key={overviewData} />
            )}
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
              {allEventsByOrganizer &&
                allEventsByOrganizer.map((event) => (
                  <EventsByOrganizer key={event._id} event={event} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrganizerDashboard;
