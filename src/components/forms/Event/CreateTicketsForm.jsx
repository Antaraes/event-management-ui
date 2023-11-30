import React, { useState } from "react";

import Input from "../Input";
import { Checkbox } from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { setTicketData } from "../../../redux/global/globalSlice";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import TicketTypeCard from "./TicketTypeCard";

const CreateTicketsForm = ({ ticketTypesData, setTicketTypesData }) => {
  const [ticketType, setTicketType] = useState({
    type: "",
    quantity: 0,
    price: 0,
  });

  const handleTicketTypeChange = (fieldName, value) => {
    setTicketType((prevTicketTypeData) => ({
      ...prevTicketTypeData,
      [fieldName]:
        fieldName === "quantity" || fieldName === "price"
          ? parseInt(value, 10)
          : value,
    }));
  };
  console.log(ticketTypesData);
  const handleAddTicketType = () => {
    console.log("add");
    setTicketTypesData((prevTicketTypesData) => [
      ...prevTicketTypesData,
      ticketType,
    ]);

    setTicketType({
      type: "",
      quantity: 0,
      price: 0,
    });
  };
  return (
    <div className="min-h-[60vh] max-h-fit mt-8 w-full">
      <h1 className="text-3xl">
        Add Ticket Type For Your Event{" "}
        <span className="text-2xl font-light">
          (Example : type=VIP , quantity=20, amount per ticket=10000)
        </span>
      </h1>

      <div className="h-14 mt-10 ml-16 flex gap-8 items-center mx-auto w-fit pb-3  border-b ">
        <div className="flex gap-1 items-center">
          <lable>Ticket Type Name : </lable>
          <input
            value={ticketType.type}
            onChange={(e) => handleTicketTypeChange("type", e.target.value)}
            className="p-2 rounded-lg text-black focus:outline-none"
            type="text"
            placeholder="example: VIP"
          />
        </div>

        <div className="flex gap-1 items-center">
          <lable>Ticket Quantity : </lable>
          <input
            className="p-2 rounded-lg text-black focus:outline-none"
            type="number"
            placeholder="example: 20"
          />
        </div>

        <div className="flex gap-1 items-center">
          <lable>Amount Per Ticket : </lable>
          <input
            className="p-2 rounded-lg text-black focus:outline-none"
            type="text"
            placeholder="example: 20,000"
          />
        </div>

        <svg
          onClick={handleAddTicketType}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-8 h-8 rounded-full cursor-pointer bg-green-400 opacity-60 hover:opacity-100 transition-all duration-300"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </div>
      <div>
        {ticketTypesData.length > 0 &&
          ticketTypesData.map((ticketTypeData) => <TicketTypeCard />)}
      </div>
    </div>
  );
};

export default React.memo(CreateTicketsForm);
