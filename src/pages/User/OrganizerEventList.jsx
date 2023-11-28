import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import useFetchData from "../../hooks/useFetchData";
import { getEventByOrganizerId, getEvents } from "../../api/index";
import { useState } from "react";
import { useEffect } from "react";
import axios from "../../api/axios";

const OrganizerEventList = () => {
  const navigate = useNavigate();
  const { organizerId } = useParams();
  const [init, setInit] = useState(true);
  const [disabledRow, setDisabledRows] = useState([]);
  const [events, setEvents] = useState([]);

  //http://localhost:8080/api/v1/event/events-by-organizer/655db72a40abeabdf4678ec9

  const fetchData = async () => {
    try {
      const response = await axios.get(`/event/events-by-organizer/${organizerId}`);
      console.log(response.data);
      setEvents(response.data);
    } catch (error) {
      console.error(error);
    }
  };


  const handleBoost = (index) => {
    navigate(`/organizer/eventList/655dea0d4b7cb74d641075c2/boostPayment`, {
      state: { selectedEvent: events[index] },
    });
  };

  const handleDetail = (index) => {
    navigate(`/organizer/eventList/655dea0d4b7cb74d641075c2/detail`, {
      state: { selectedEvent: events[index] },
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

  // const events = [
  //   {
  //     id: "1",
  //     name: "name1",
  //     startDate: "30/12/2023",
  //     endDate: "30/12/2023",
  //     location: "yangon",
  //   },
  //   {
  //     id: "2",
  //     name: "name2",
  //     startDate: "30/12/2023",
  //     endDate: "30/12/2023",
  //     location: "yangon",
  //   },
  //   {
  //     id: "3",
  //     name: "name3",
  //     startDate: "30/12/2023",
  //     endDate: "30/12/2023",
  //     location: "yangon",
  //   },
  //   {
  //     id: "4",
  //     name: "name4",
  //     startDate: "30/12/2023",
  //     endDate: "30/12/2023",
  //     location: "yangon",
  //   },
  //   {
  //     id: "5",
  //     name: "name5",
  //     startDate: "30/12/2023",
  //     endDate: "30/12/2023",
  //     location: "yangon",
  //   },
  // ];

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
                      {init && !disabledRow[index] ? (
                        <button
                          onClick={() => handleShowAction(index)}
                          className="bg-transparent text-lime-400 px-3 py-1 rounded hover:bg-lime-500 hover:text-white focus:outline-none"
                        >
                          ...
                        </button>
                      ) : null}
                      {disabledRow[index] ? (
                        <div>
                          <button
                            onClick={() => handleDetail(index)}
                            className="bg-transparent text-lime-400 px-3 py-1 rounded hover:bg-lime-500 hover:text-white focus:outline-none"
                          >
                            Detail
                          </button>
                          <button
                            onClick={() => handleBoost(index)}
                            className="bg-transparent text-deep-orange-300 px-3 py-1 rounded hover:bg-deep-orange-500 hover:text-white focus:outline-none"
                          >
                            Boost
                          </button>
                        </div>
                      ) : null}
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
