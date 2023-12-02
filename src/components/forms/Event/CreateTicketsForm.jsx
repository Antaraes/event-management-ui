import React, { useState } from "react";
import TicketTypeCard from "./TicketTypeCard";
import toast from "react-hot-toast";

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
  const handleAddTicketType = () => {
    if (
      ticketType.type.trim() == "" ||
      ticketType.price <= 0 ||
      ticketType.quantity <= 0
    ) {
      toast.error("Field Cannot be Black!!");
      return;
    }

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

  const handleRemoveTicketType = (indexToDelete) => {
    setTicketTypesData((prevTicketTypesData) => {
      const updatedTicketTypesData = prevTicketTypesData.filter(
        (_, index) => index !== indexToDelete
      );
      return updatedTicketTypesData;
    });
  };
  return (
    <div className="min-h-[10vh] md:min-h-[60vh] max-h-fit mt-8 w-full">
      <h1 className="text-xl text-center md:text-3xl">
        Add Ticket Type For Your Event{" "}
        <span className="text-sm block md:text-2xl font-light">
          (Example : type=VIP , quantity=20, amount per ticket=10000)
        </span>
      </h1>

      <div className="md:h-14 mt-10  flex flex-col md:flex-row flex-wrap h-auto gap-8 justify-start   items-end lg:items-center mx-auto w-fit pb-3  border-b mb-4">
        <div className="flex flex-col lg:flex-row gap-1 items-center ">
          <lable className="text-sm md:text-base">Ticket Type Name : </lable>
          <input
            value={ticketType.type}
            onChange={(e) => handleTicketTypeChange("type", e.target.value)}
            className="p-2 rounded-lg text-black focus:outline-none"
            type="text"
            placeholder="example: VIP"
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-1 items-center">
          <lable className="text-sm md:text-base">Ticket Quantity : </lable>
          <input
            value={ticketType.quantity}
            onChange={(e) => handleTicketTypeChange("quantity", e.target.value)}
            className="p-2 rounded-lg text-black focus:outline-none"
            type="number"
            placeholder="example: 20"
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-1 items-center">
          <lable className="text-sm md:text-base">Amount Per Ticket : </lable>
          <input
            value={ticketType.price}
            onChange={(e) => handleTicketTypeChange("price", e.target.value)}
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
      <div className="h-auto w-full">
        {ticketTypesData.length > 0 &&
          ticketTypesData.map((ticketTypeData, index) => (
            <TicketTypeCard
              ticketTypeData={ticketTypeData}
              index={index}
              setTicketTypesData={setTicketTypesData}
              handleRemoveTicketType={handleRemoveTicketType}
            />
          ))}
      </div>
    </div>
  );
};

export default React.memo(CreateTicketsForm);
