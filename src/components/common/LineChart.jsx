import React, { useEffect, useState } from "react";
import Chart from "react-google-charts";

const LineChart = ({ lineData }) => {
  const [lineChartData, setLineChartData] = useState([]);

  useEffect(() => {
    if (lineData.length > 0) {
      setLineChartData(lineData);
    }
  }, [lineData]);
  return (
    <>
      {lineChartData.length > 0 && (
        <Chart
          width={"100%"}
          height={"300px"}
          chartType="LineChart"
          loader={<div>Loading Chart</div>}
          data={lineData}
          options={{
            title: "Sales and Expenses Over Time",
            curveType: "function",
            legend: { position: "bottom" },
          }}
          rootProps={{ "data-testid": "1" }}
        />
      )}
    </>
  );
};

export default LineChart;
