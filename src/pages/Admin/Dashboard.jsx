import React from "react";
import { DataGridPro } from "@mui/x-data-grid-pro";
import { useDemoData } from "@mui/x-data-grid-generator";
const Dashboard = () => {
  const { data } = useDemoData({
    dataSet: "Commodity",
    rowLength: 10,
    editable: true,
  });
  return (
    <div className="w-[90vw]">
      <DataGridPro
        {...data}
        loading={data.rows.length === 0}
        rowHeight={38}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </div>
  );
};

export default Dashboard;
