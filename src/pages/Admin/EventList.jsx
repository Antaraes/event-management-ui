import React, { useState, useEffect } from "react";
import { DataGridPro } from "@mui/x-data-grid-pro";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import axios from "axios";
import { format } from "date-fns";
import { useDemoData } from "@mui/x-data-grid-generator";

const EventList = () => {
  const [events, setEvents] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [total, setTotal] = useState();
  console.log("🚀 ~ file: EventList.jsx:13 ~ EventList ~ total:", total)

  const VISIBLE_FIELDS = ['name', 'rating', 'country', 'dateCreated', 'isAdmin'];

  const { data } = useDemoData({
    dataSet: 'Employee',
    visibleFields: VISIBLE_FIELDS,
    rowLength: 100,
  });

  const fetchTotal = async () => {
    try{
      const data = await axios.get(
        `http://localhost:8080/api/v1/event`
      );
      const total = data.data.total;
      console.log("🚀 ~ file: EventList.jsx:27 ~ fetchTotal ~ total:", total)
      return total;
    }catch(e){
      console.error("Error fetching events:", error);
      throw error;
    }
  }

  const calculateColumnBuffer = (pageSize, totalRows) => {
    // You can customize the logic for calculating the column buffer here.
    // The minimum buffer is set to 5 for demonstration purposes.
    const minimumBuffer = 5;
    const dynamicBuffer = Math.max(minimumBuffer, Math.ceil(totalRows / pageSize));
    return dynamicBuffer;
  };

  useEffect(() => {
    const fetch = async () =>{
      try{
        const data = await fetchTotal();
        console.log("🚀 ~ file: EventList.jsx:38 ~ fetch ~ data:", data)
        setTotal(data);
      }
      catch(e){
        console.error("Error fetching events:", error);
        throw error;
      }
    }
    fetch();
  }, [])

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/v1/event?page=${page}&pageSize=1000`,
      );
      const eventData = response.data.content.map((event, index) => ({
        ...event,
        index: index + 1,
        name: event.name ? event.name : "event Name not found",
        contact: event.contact ? event.contact : "contact not found",
        location: event.location ? event.location : "location not found",
        eventStartDate: event.eventStartDate
          ? format(new Date(event.eventStartDate), "dd-MM-yyyy")
          : "event start date not found",
        eventEndDate: event.eventEndDate
          ? format(new Date(event.eventEndDate), "dd-MM-yyyy")
          : "event end date not found",
        ticketStartDate: event.ticketStartDate
          ? format(new Date(event.ticketStartDate), "dd-MM-yyyy")
          : "ticket start date not found",
        ticketEndDate: event.ticketEndDate
          ? format(new Date(event.ticketEndDate), "dd-MM-yyyy")
          : "ticket end date not found",
        organizerId: event.organizer
          ? event.organizer._id
          : "organizer Id not found",
        organizerName: event.organizer
          ? event.organizer.name
          : "organizer name not found",
        organizerEmail: event.organizer
          ? event.organizer.email
          : "organizer email not found",
        organizerPhone: event.organizer
          ? event.organizer.phone
          : "organizer phone not found",
        organizerCompany: event.organizer
          ? event.organizer.companyName
          : "organizer company not found",
        organizerContact: event.organizer
          ? event.organizer.contact
          : "organizer contact not found",
        organierAccountLevel: event.organizer
          ? event.organizer.accountLevel
          : "organier account level not found",
        organierBio: event.organizer
          ? event.organizer.bio
          : "organier bio not found",
      }));
      console.log(response);
      return eventData;
    } catch (error) {
      console.error("Error fetching events:", error);
      throw error;
    }
  };

  useEffect(() => {
    const fetchDataAndSetState = async () => {
      try {
        const data = await fetchData();
        // console.log("🚀 ~ file: EventList.jsx:65 ~ fetchDataAndSetState ~ data:", data)
        setEvents(data);
        // setTotal(data.content.total);
      } catch (error) {
        console.error("Error setting events:", error);
      }
    };

    fetchDataAndSetState();
  }, [page, pageSize]);

  const handleChange = (e) => {
    setPageSize(e.target.value);
  };

  return (
    <div className="w-[70vw]">
      <div className="flex">
        {/* <div className="items-center justify-center">
          <label className="text-black" htmlFor="pageInput">
            Page:
          </label>
          <input
            type="number"
            id="pageInput"
            className="m-2 w-16 border p-2 text-black"
            value={page}
            onChange={(e) => setPage(parseInt(e.target.value, 10))}
          />
        </div> */}
        {/* <div className="items-center justify-center">
          <label className="text-black" htmlFor="pageSizeInput">
            Size:
          </label>
          <select
            className="m-2 w-16 border p-3 text-black"
            onChange={(e) => handleChange(e)}
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
          </select>
        </div> */}
        {/* <div style={{ height: 400, width: '100%' }}>
      <DataGrid {...data} slots={{ toolbar: GridToolbar }} />
    </div> */}
      </div>

      <DataGrid
        rows={events}
        columns={[
          { field: '_id', headerName: 'ID', width: 200 },
          { field: "index", headerName: "No", width: 20 },
          { field: "name", headerName: "Event Name", width: 200 },
          { field: "eventStartDate", headerName: "Start Date", width: 200 },
          { field: "eventEndDate", headerName: "End Date", width: 200 },
          {
            field: "ticketStartDate",
            headerName: "Ticket Start Date",
            width: 200,
          },
          { field: "ticketEndDate", headerName: "Ticket End Date", width: 200 },
          { field: "contact", headerName: "Contact", width: 200 },
          { field: "location", headerName: "Location", width: 200 },
          { field: "organizerName", headerName: "Organizer Name", width: 200 },
          { field: "organizerCompany", headerName: "Organizer Company", width: 200 },
          { field: "organizerContact", headerName: "Organizer Contact", width: 200 },
          { field: "organierAccountLevel", headerName: "Organizer Account Level", width: 200 },
          { field: "organierBio", headerName: "Organizer Bio", width: 200 },
          { field: "organizerId", headerName: "Organizer Id", width: 200 },
          {
            field: "organizerPhone",
            headerName: "Organizer Phone",
            width: 200,
          },
          {
            field: "organizerEmail",
            headerName: "Organizater's email",
            width: 200,
          },
        ]}
        slots={{ toolbar: GridToolbar }}
        initialState={{
          ...events,
          pagination: { paginationModel: { pageSize: pageSize } },
        }}
        rowCount={total}
        columnBuffer={calculateColumnBuffer(pageSize, total)}
        pageSizeOptions={[5, 10, 25, 50, 100]}
        loading={events.length === 0}
        rowHeight={38}
        disableRowSelectionOnClick
        getRowId={(row) => row._id}
      />
    </div>
  );
};

export default EventList;
