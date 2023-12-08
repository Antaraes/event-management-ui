import React from "react";
import SummaryCard from "../../components/Admin/SummaryCard";
import BarChart from "../../components/Admin/Charts/BarChart";
import LineChart from "../../components/Admin/Charts/LineChart";
import useFetchData from "../../hooks/useFetchData";
import { getAllPaymentFromOrganizer, getTotalEvents, getTotalOrganizers } from "../../api";
import { useState } from "react";

const Dashboard = () => {

  const { data: events } = useFetchData('[events]',() => getTotalEvents());
  const { data: organizers } = useFetchData('[organizers]',() => getTotalOrganizers());

  console.log(events && events);

  const userBarData = [
    ["Year", "Normal", "Premium", "Bluemark"],
    ["2014", 1000, 400, 200],
    ["2015", 1170, 460, 250],
    ["2016", 660, 1120, 300],
    ["2017", 1030, 540, 350],
  ];

  const userBarOptions = {
    chart: {
      title: "Organizer Subscriptions Per Year",
      subtitle: "Total Subscribed Organizers: 2014-2017",
    },
  };

  const userLineData = [
    ["Day", "Normal", "Premium", "BlueMark"],
    [1, 38, 88, 48],
    [2, 39, 65, 34],
    [3, 24, 57, 27],
    [4, 17, 18, 15],
    [5, 19, 16, 14],
    [6, 8, 16, 7],
    [7, 6, 13, 6],
    [8, 13, 22, 16],
    [9, 19, 49, 18],
    [10, 18, 39, 16],
    [11, 3, 9, 7],
    [12, 6, 4, 2],
    [13, 8, 3, 6],
    [14, 2, 2, 4],
  ];

  const userLineOptions = {
    chart: {
      title: "Organizer Subscriptions Per Day",
      subtitle: "Total Subscribed Organizers: December",
    },
  };

  const invoiceLineData = [
    ["Day", "Upgrade", "Boost"],
    [1, 38, 88],
    [2, 39, 65],
    [3, 24, 57],
    [4, 17, 18],
    [5, 19, 16],
    [6, 8, 16],
    [7, 6, 13],
    [8, 13, 22],
    [9, 19, 49],
    [10, 18, 39],
    [11, 3, 9],
    [12, 6, 4],
    [13, 8, 3],
    [14, 2, 2],
  ];

  const invoiceLineOptions = {
    chart: {
      title: "Organizer Subscriptions Payment Per Day",
      subtitle: "Total Payments By Organizers: December",
    },
  };

  const eventLineData = [
    ["Day", "Event"],
    [1, 38],
    [2, 39],
    [3, 24],
    [4, 17],
    [5, 19],
    [6, 8],
    [7, 6],
    [8, 13],
    [9, 19],
    [10, 18],
    [11, 3],
    [12, 6],
    [13, 8],
    [14, 2],
  ];

  const eventLineOptions = {
    chart: {
      title: "Events Created By Organizers Per Day",
      subtitle: "Total Event Created By Organizers: December",
    },
  };

  return (
    <div>
      <SummaryCard totalEvent={events && events.total} totalOrganizer={organizers && organizers} />
      <BarChart data={userBarData} options={userBarOptions} />
      <LineChart data={userLineData} options={userLineOptions} />
      <LineChart data={invoiceLineData} options={invoiceLineOptions} />
      <LineChart data={eventLineData} options={eventLineOptions} />
    </div>
  );
};

export default Dashboard;
