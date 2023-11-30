import React from "react";
import Input from "../Input";
import useEventRegister from "../../../hooks/useEventRegister";
import DatePicker from "../DatePicker";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setEventData } from "../../../redux/global/globalSlice";
import { useParams } from "react-router-dom";

const CreateEventForm = ({ setEventFormData }) => {
  //console.log(eventData);

  const handleChange = (fieldName, value) => {
    setEventFormData((prevFormData) => ({
      ...prevFormData,
      [fieldName]: value,
    }));
  };
  return (
    <div className="mx-24 mt-8 p-6 border-2 rounded-xl ">
      <h1 className="text-2xl font-semibold text-center pb-6">
        Create an Event
      </h1>
      <form action="" className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="flex flex-col gap-2 ml-8">
          <label className="text-lg font-light transition-all duration-300 focus:text-secondary">
            Event Name :
          </label>
          <input
            type="text"
            className="p-1  w-4/5 bg-transparent border-b focus:outline-none focus:border-secondary"
          />
        </div>

        <div className="flex mt-4 flex-col gap-2  ml-8 ">
          <label className="text-lg font-light transition-all duration-300 focus:text-secondary">
            Event Location :
          </label>
          <input
            type="text"
            className="p-1 w-4/5 bg-transparent border-b focus:outline-none focus:border-secondary"
          />
        </div>

        <div className="flex mt-4 flex-col gap-2 ml-8">
          <label className=" text-lg font-light transition-all duration-300 focus:text-secondary">
            Contact :
          </label>
          <input
            type="text"
            className="p-1  w-4/5 bg-transparent border-b focus:outline-none focus:border-secondary"
          />
        </div>

        <div className="flex  mt-4 h-auto gap-2 justify-around">
          <div className="w-2/5 flex flex-col gap-1">
            <label className="text-lg pb-3 transition-all duration-300 focus:text-secondary">
              Event Start Date :
            </label>

            <input
              type="date"
              min={new Date().toISOString().split("T")[0]}
              className="p-1  bg-transparent border-b focus:outline-none focus:border-secondary"
            />
          </div>
          <div className="w-2/5 flex flex-col gap-1">
            <label className="text-lg pb-3 transition-all duration-300 focus:text-secondary">
              Event End Date :
            </label>

            <input
              type="date"
              min={new Date().toISOString().split("T")[0]}
              className="p-1  bg-transparent border-b focus:outline-none focus:border-secondary"
            />
          </div>
        </div>

        <div className="flex  mt-4 h-auto gap-2 justify-around">
          <div className="w-2/5 flex flex-col gap-1">
            <label className="text-lg pb-2 transition-all duration-300 focus:text-secondary">
              Ticket Open Date :
            </label>

            <input
              type="date"
              min={new Date().toISOString().split("T")[0]}
              className="p-1  bg-transparent border-b focus:outline-none focus:border-secondary"
            />
          </div>
          <div className="w-2/5 flex flex-col gap-1">
            <label className="text-lg pb-3 transition-all duration-300 focus:text-secondary">
              Ticket Close Date :
            </label>

            <input
              type="date"
              min={new Date().toISOString().split("T")[0]}
              className="p-1  bg-transparent border-b focus:outline-none focus:border-secondary"
            />
          </div>
        </div>

        <div className="flex mt-4 flex-col gap-2  ml-8 ">
          <div className="flex gap-3">
            <label className="text-lg pb-3 font-light transition-all duration-300 focus:text-secondary">
              Imgae Urls :
            </label>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </div>
          <div className="flex gap-3">
            <input
              type="text"
              className="p-1 w-4/5 bg-transparent border-b focus:outline-none focus:border-secondary"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 12h-15"
              />
            </svg>
          </div>
        </div>
        <div className="flex mt-4 flex-col gap-2  ml-8 col-span-2 h-52">
          <label className="text-lg font-light transition-all duration-300 focus:text-secondary">
            Description :
          </label>
          <textarea className="bg-transparent border rounded-lg p-3 h-full" />
        </div>
      </form>
    </div>
  );
};

export default CreateEventForm;
