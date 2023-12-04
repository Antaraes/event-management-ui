import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import useFetchData from "../../hooks/useFetchData";
import { getEventByOrganizerId, getEvents } from "../../api/index";
import { useState } from "react";
import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { useCookies } from "react-cookie";
import Cookies from "js-cookie";

const OrganizerEventList = () => {
  const navigate = useNavigate();
  const [init, setInit] = useState(true);
  const [disabledRow, setDisabledRows] = useState([]);
  const [events, setEvents] = useState([]);

  const [cookies, setCookie, removeCookie] = useCookies(["accessToken"]);

  //toekn is not dynamically
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySW5mbyI6eyJpZCI6IjY1NjgxOWU2ZWQzN2I1YjA1MGYxOWNkOSIsImVtYWlsIjoibGlub2VAZ2FtaWwuY29tIiwicm9sZSI6Im9yZ2FuemllciJ9LCJpYXQiOjE3MDE0MDg5ODYsImV4cCI6MTcwMTQ5NTM4Nn0.lD_lWDG4XFzgeF2um2TFSlZVX9OciX76Txj7YoAQCe0";
  const decoded = jwtDecode(token);
  const organizerId = decoded.UserInfo.id;

  console.log("decoded", decoded, cookies, organizerId);
  if (organizerId == "656819e6ed37b5b050f19cd9") {
    console.log("true");
  }

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/v1/event/events-by-organizer/656819e6ed37b5b050f19cd9`
      );
      console.log("response", response.data);
      setEvents(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDetail = (index, id) => {
    console.log(id, organizerId);
    navigate(`/event/detail/${id}`, {
      state: { selectedEvent: events[index], organizerId: { organizerId } },
    });
  };

  const handleShowAction = (index) => {
    const updatedDisabledRows = [...disabledRow];
    updatedDisabledRows[index] = !updatedDisabledRows[index];
    setDisabledRows(updatedDisabledRows);

    setTimeout(() => {
      if (init) {
        const initialDisabledRows = events.map(() => false);
        setDisabledRows(initialDisabledRows);
      }
    }, 5000);
  };

  useEffect(() => {
    const fetchDataAndInit = async () => {
      await fetchData();
      if (init) {
        const initialDisabledRows = events.map(() => false);
        setDisabledRows(initialDisabledRows);
      }
    };

    fetchDataAndInit();
  }, [init]);

  return (
    <div className="w-full h-full bg-primary/10">
      <div className="w-full h-full pt-[50px] px-[50px]">
        <div className="my-[20px] h-[300px] w-[1300px] mx-[10px] ">
          <table className="table-fixed w-full text-[#ccc]">
            <thead>
              <tr>
                <th className="border px-4 py-5 text-xl">Name</th>
                <th className="border px-4 py-5 text-xl">Event Start Date</th>
                <th className="border px-4 py-5 text-xl">Event End Date</th>
                <th className="border px-4 py-5 text-xl">Location</th>
                <th className="border px-4 py-5 text-xl">Action</th>
              </tr>
            </thead>
            <tbody>
              {events.map((event, index) => {
                return (
                  <tr key={index}>
                    <td className="border px-4 py-2 text-center justify-center">
                      {event.name}
                    </td>
                    <td className="border px-4 py-2 text-center justify-center">
                      {event.eventStartDate}
                    </td>
                    <td className="border px-4 py-2 text-center justify-center">
                      {event.eventEndDate}
                    </td>
                    <td className="border px-4 py-2 text-center justify-center">
                      {event.location}
                    </td>
                    <td className="border px-4 py-2 text-center justify-center">
                      <div>
                        <button
                          onClick={() => handleDetail(index, event._id)}
                          className="bg-transparent text-lime-400 px-3 py-1 rounded hover:bg-lime-500 hover:text-white focus:outline-none"
                        >
                          Detail
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrganizerEventList;
