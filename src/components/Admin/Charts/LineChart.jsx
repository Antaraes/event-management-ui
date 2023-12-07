import React from 'react'
import { Chart } from "react-google-charts";

export default function LineChart({ data, options }) {
  return <div className="my-5 p-5 border border-black rounded-lg">
    <Chart
      chartType="Line"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
    </div>
}
