import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import useFetchData from "../../hooks/useFetchData";
import { getEventByOrganizerId, getEvents } from "../../api/index";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useSelector } from "react-redux";
import * as api from "../../api/index";
import Cookies from "js-cookie";

const OrganizerEventList = () => {
  const navigate = useNavigate();
  const [init, setInit] = useState(true);
  const [disabledRow, setDisabledRows] = useState([]);
  const [events, setEvents] = useState([]);
  const [cookies, setCookie, removeCookie] = useCookies(["accessToken"]);

  const user = JSON.parse(sessionStorage.getItem("user"));
  const organizerId = user._id;
  console.log("organizerId: ", user._id);
  //toekn is not dynamically
  // const token =
  //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySW5mbyI6eyJpZCI6IjY1NjgxOWU2ZWQzN2I1YjA1MGYxOWNkOSIsImVtYWlsIjoibGlub2VAZ2FtaWwuY29tIiwicm9sZSI6Im9yZ2FuemllciJ9LCJpYXQiOjE3MDE2NzE2MTcsImV4cCI6MTcwMTc1ODAxN30.OgX-sgPiX8Fin_fCl8GUaeFbTfwegEhG7VufYBHOuAc";
  // const decoded = jwtDecode(token);
  // const organizerId = decoded.UserInfo.id;

  // console.log("decoded", decoded, cookies, organizerId);
  // if (organizerId == "656819e6ed37b5b050f19cd9") {
  //   console.log("true");
  // }

  const fetchData = async () => {
    try {
      const response = await api.getEventsByOrganizerId();
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
    <div className="h-full w-full bg-primary/10">
      <div className="h-full w-full px-[50px] pt-[50px]">
        <div className="mt-8">
          <table className="w-full table-fixed text-[#ccc]">
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
                    <td className="justify-center border px-4 py-2 text-center">
                      {event.name}
                    </td>
                    <td className="justify-center border px-4 py-2 text-center">
                      {event.eventStartDate}
                    </td>
                    <td className="justify-center border px-4 py-2 text-center">
                      {event.eventEndDate}
                    </td>
                    <td className="justify-center border px-4 py-2 text-center">
                      {event.location}
                    </td>
                    <td className="justify-center border px-4 py-2 text-center">
                      <div>
                        <button
                          onClick={() => handleDetail(index, event._id)}
                          className="rounded bg-transparent px-3 py-1 text-lime-400 hover:bg-lime-500 hover:text-white focus:outline-none"
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
