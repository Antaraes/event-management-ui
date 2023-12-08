import React from "react";
import { Chart } from "react-google-charts";

export default function BarChart({data,options}) {
  return <div className="my-5 p-10 border border-black rounded-lg">
    <Chart
      chartType="Bar"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  </div>;
}
