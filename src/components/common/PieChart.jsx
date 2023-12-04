import React, { useEffect, useState } from "react";
import Chart from "react-google-charts";

function PieChart({ pieChartData }) {
  const [pieData, setPieData] = useState([]);
  useEffect(() => {
    if (pieChartData?.length > 0) {
      setPieData(pieChartData);
    }
  }, [pieChartData]);

  return (
    <>
      {pieData?.length > 0 ? (
        <Chart
          width={"100%"}
          height={"300px"}
          chartType="PieChart"
          loader={<div>Loading Chart</div>}
          data={pieData}
          options={{
            title: "Ticket Distribution",
            backgroundColor: "transparent",
            chartArea: {
              left: 10,
              top: 10,
              width: "90%",

              height: "80%",
            },
            legend: {
              textStyle: {
                color: "#000",
              },
            },
          }}
          rootProps={{ "data-testid": "2" }}
        />
      ) : (
        <h2 className="border-b border-gray-400 pb-3 text-center text-xl ">
          No Pie Chart Data yet
        </h2>
      )}
    </>
  );
}

export default PieChart;
