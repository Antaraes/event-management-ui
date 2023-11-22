import React, { useEffect, useState } from "react";
import Chart from "react-google-charts";

function BarChartVertical({ barDataProps }) {
  const [barData, setBarData] = useState([]);

  useEffect(() => {
    if (barDataProps.length > 0) {
      setBarData(barDataProps);
    }
  }, [barDataProps]);

  return (
    <>
      {barData.length > 0 && (
        <Chart
          width={"500px"}
          height={"300px"}
          className="text-primary"
          chartType="Bar"
          loader={<div>Loading Chart</div>}
          data={barData}
          options={{
            title: "Total Ticket Sale",
          }}
          rootProps={{ "data-testid": "1" }}
        />
      )}
    </>
  );
}

export default BarChartVertical;
