import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import OrganizerAction from "./OrganizerAction";
import { useMemo } from "react";
import Active from "./component/Active";

const OrgList = () => {
  const [data, setData] = useState([]);
  const [events, setEvents] = useState([]);
  const [orgList, setOrgList] = useState([]);
  const [rowId, setRowId] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/v1/organizer/all")
      .then((response) => {
        setData(response.data.content);
        console.log(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/v1/event")
      .then((response) => {
        setEvents(response.data.content);
        console.log("Event--------------", response.data);
      })
      .catch((err) => console.log(err));
  }, [data]);

  console.log("orgList: ", orgList);
  const rows =
    data.length > 0
      ? data.map((item, index) => ({
          id: item._id,
          col1: index + 1,
          col2: item.name,
          col3: item.companyName,
          col4: item.email,
          col5: item.phone,
          col6: item.isVerify,
          col7: item.accountStatus,
          action: item._id
        }))
      : [];

  const columns = useMemo(
    () => [
      { field: "col1", headerName: "No", width: 50,
      editable: false },
      { field: "col2", headerName: "Organizer-name", width: 150 ,
      editable: false},
      { field: "col3", headerName: "Company-name", width: 150 ,
      editable: false},
      { field: "col4", headerName: "email", width: 200 ,
      editable: false},
      { field: "col5", headerName: "phone", width: 130 ,
      editable: false},
      {
        field: "col6",
        headerName: "Verify",
        width: 100,
        type: "boolean",
        editable: false,
      },
      {
        field: "col7",
        headerName: "status",
        width: 80,
        align: "center",
        headerAlign: "center",
        renderCell: (params) => <Active status={params.value} />
      },
      {
        field: "action",
        headerName: "Detail",
        renderCell: (params) => (
          <OrganizerAction id={params.value} />
        ),
        width: 100,
        align: "center",
        headerAlign: "center",
      },
    ],
    [rowId],
  );
  return (
    <div className="w-auto max-w-full text-center min-h-screen">
      <DataGrid
        rows={rows}
        columns={columns}
        getRowId={(rows) => rows.id}
        checkboxSelection
        initialState={{
          ...orgList.initialState,
          pagination: { paginationModel: { pageSize: 10 } },
        }}
        pageSizeOptions={[10, 25, 50]}
      />
    </div>
  );
};

export default OrgList;
