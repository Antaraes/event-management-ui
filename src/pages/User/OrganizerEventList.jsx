import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import useFetchData from "../../hooks/useFetchData";
import { getEventByOrganizerId } from "../../api/index";

const OrganizerEventList = () => {
  const navigate = useNavigate();
  const { organizerId } = useParams();
  const fetchData = async () => {
    try {
    } catch (err) {
      console.log(err);
    }
  };
  // const getData = useFetchData(
  //     [organizerId],
  //     async () => await getEventByOrganizerId(organizerId)
  // )

  // const {data, isLoading, error} = getData;

  // if(isLoading){
  //     return (<p>Loading...</p>);
  // }
  // if(error){
  //     return (<p>Error: {error.message}</p>)
  // }

  // console.log(data);

  const handleBoost = (index) => {
    navigate(`/organizer/eventList/655dea0d4b7cb74d641075c2/boostPayment`, { state: { selectedEvent: events[index] } });
  };

  const events = [
    {
      name: "name1",
      startDate: "30/12/2023",
      endDate: "30/12/2023",
      location: "yangon",
    },
    {
      name: "name2",
      startDate: "30/12/2023",
      endDate: "30/12/2023",
      location: "yangon",
    },
    {
      name: "name3",
      startDate: "30/12/2023",
      endDate: "30/12/2023",
      location: "yangon",
    },
    {
      name: "name4",
      startDate: "30/12/2023",
      endDate: "30/12/2023",
      location: "yangon",
    },
    {
      name: "name5",
      startDate: "30/12/2023",
      endDate: "30/12/2023",
      location: "yangon",
    },
  ];

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
                <th className="border px-4 py-5 text-xl">Boost</th>
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
                      {event.startDate}
                    </td>
                    <td className="border px-4 py-2 text-center justify-center">
                      {event.endDate}
                    </td>
                    <td className="border px-4 py-2 text-center justify-center">
                      {event.location}
                    </td>
                    <td className="border px-4 py-2 text-center justify-center">
                      <button
                        onClick={() => handleBoost(index)}
                        className="bg-transparent text-lime-400 px-3 py-1 rounded hover:bg-lime-500 hover:text-white focus:outline-none"
                      >
                        Boost
                      </button>
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
