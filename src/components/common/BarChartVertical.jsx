import React, { useEffect, useState } from "react";
import Chart from "react-google-charts";

function BarChartVertical({ barDataProps }) {
  const [barData, setBarData] = useState([]);

  useEffect(() => {
    if (barDataProps?.length > 0) {
      setBarData(barDataProps);
    }
  }, [barDataProps]);

  return (
    <>
      {barData?.length > 0 ? (
        <Chart
          width={"100%"}
          height={"450px"}
          className="text-primary"
          chartType="Bar"
          loader={<div>Loading Chart</div>}
          data={barData}
          options={{
            title: "Total Ticket Sale",
          }}
          rootProps={{ "data-testid": "1" }}
        />
      ) : (
        <h2 className="border-b border-gray-400 pb-3 text-center text-xl ">
          No Bar Chart Data yet
        </h2>
      )}
    </>
  );
}

export default BarChartVertical;
