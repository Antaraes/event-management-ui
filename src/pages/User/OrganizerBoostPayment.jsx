import React from "react";
import { useLocation, useParams } from "react-router-dom";
import EventDetailCarousel from "../../components/carousel/EventDetailCarousel";
import CreatePaymentForm from "../../components/forms/Event/CreatePaymentForm";
import { useState } from "react";
import { useEffect } from "react";
import axios from "../../api/axios";

const OrganizerBoostPayment = () => {
  const location = useLocation();
  const { organizerId } = useParams();
  const [event, setEvents] = useState(null);
  const selectedEvent = location.state.selectedEvent;

  useEffect(() => {
    setEvents(selectedEvent);
  }, []);

  console.log(event);

  const handleBoost = () =>{
    const id = event._id;
    console.log(id);
    axios.post(`/event/boost/${id}`).then((res) => {
      console.log(res, 'success');
      // window.location.reload(`/organizer/profile/${organizerId}`);
    })
    .catch((err) => {
        console.log(err);
    });
  }
  return (
    <div className="py-[130px]">
      <div className="items-center justify-center flex mt-[-80px]">
        ID : {selectedEvent?._id}/ Name: {selectedEvent?.name}/ Start Date:{" "}
        {selectedEvent?.eventStartDate}/ End Date: {selectedEvent?.eventEndDate}
        / Location: {selectedEvent?.location}/
      </div>
      {/* <CreatePaymentForm /> */}
      <button
        onClick={handleBoost}
        className="bg-transparent justify-center items-center mx-[800px] my-[100px]  text-lime-400 px-3 py-1 rounded hover:bg-lime-500 hover:text-white focus:outline-none"
      >
        Boost
      </button>{" "}
    </div>
  );
};

export default OrganizerBoostPayment;
