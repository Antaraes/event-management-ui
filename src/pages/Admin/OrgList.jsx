import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const OrgList = () => {
  const [data, setData] = useState([]);
  const [events, setEvents] = useState([]);
  const [orgList,setOrgList] = useState([]);

  useEffect(() => {
    // Fetch data from the first API
    const fetchData = async () => {
        try {
            const responseOrganizers = await axios.get("http://localhost:8080/api/v1/organizer/all");
            setData(responseOrganizers.data.content);
            console.log(responseOrganizers.data);

            const responseEvents = await axios.get("http://localhost:8080/api/v1/event");
            setEvents(responseEvents.data.content);
            console.log('Event--------------', responseEvents.data);

            const updatedOrgList = data.map((data) => {
                const list = events.filter((event) => event.organizer === data._id);
                return {
                    _id: data._id,
                    name: data.name,
                    email: data.email,
                    phone: data.phone,
                    companyName: data.companyName,
                    accountStatus: data.accountStatus,
                    accountLevel: data.accountLevel,
                    isVerify: data.isVerify,
                    eventCount: list.length > 0 ? list.length : 0,
                };
            });

            setOrgList(updatedOrgList);
            console.log('orgList: ', updatedOrgList);
        } catch (error) {
            console.error(error);
        }
    };

    fetchData();
}, [orgList]);

console.log('orgList: ', orgList);
  const rows =
    orgList.length > 0
      ? orgList.map((item, index) => ({
          id: item._id,
          col1: index + 1,
          col2: item.name,
          col3: item.companyName,
          col4: item.email,
          col5: item.phone,
          col6: item.isVerify,
          col7: item.accountStatus,
          col8: item.eventCount
        }))
      : [];

  const columns = [
    { field: "col1", headerName: "No", width: 50 },
    { field: "col2", headerName: "Organizer-name", width: 150 },
    { field: "col3", headerName: "Company-name", width: 150 },
    { field: "col4", headerName: "email", width: 200 },
    { field: "col5", headerName: "phone", width: 150 },
    { field: "col6", headerName: "Verify", width: 100, type: "boolean", editable: true},
    { field: "col7", headerName: "status", width: 150 },
    { field: "col8", headerName: "Event-count", width: 150 },
  ];
  return (
    <div className="w-full">
      <DataGrid
        rows={rows}
        columns={columns}
        
      />
    </div>
  );
};

export default OrgList;
