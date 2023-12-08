import React, { useEffect, useState } from "react";

const TicketTypeCard = ({
  ticketTypeData: ticketTypePros,
  index,
  setTicketTypesData,
  handleRemoveTicketType,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [ticketType, setTicketType] = useState(null);
  const [editingTicketType, setEditingTicketType] = useState(null);
  useEffect(() => {
    setTicketType(ticketTypePros);
    setEditingTicketType(ticketTypePros);
  }, [ticketTypePros]);

  const handleTicketTypeChange = (fieldName, value) => {
    setEditingTicketType((prevTicketTypeData) => ({
      ...prevTicketTypeData,
      [fieldName]:
        fieldName === "quantity" || fieldName === "price"
          ? parseInt(value, 10)
          : value,
    }));
  };

  const handleTicketEditConfirmAction = (isConfirm) => {
    setIsEditing(false);
    if (isConfirm) {
      setTicketType(editingTicketType);
      setTicketTypesData((prevTicketTypesData) => {
        const updatedTicketTypesData = [...prevTicketTypesData];
        updatedTicketTypesData[index] = editingTicketType;
        return updatedTicketTypesData;
      });

      return;
    }
    setEditingTicketType(ticketType);
  };

  const renderIconContent = () => {
    if (isEditing) {
      return (
        <>
          <div className="flex justify-end md:justify-evenly gap-6 md:gap-0 w-full md:w-[10%]">
            <svg
              onClick={() => handleTicketEditConfirmAction(true)}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 opacity-60 hover:opacity-100 hover:text-green-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>

            <svg
              onClick={() => handleTicketEditConfirmAction(false)}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 opacity-60 hover:opacity-100 hover:text-red-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </>
      );
    }

    return (
      <>
        <div className="flex justify-end gap-6 lg:gap-0 lg:justify-evenly w-full md:w-[10%]">
          <svg
            onClick={() => setIsEditing(true)}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 opacity-60 hover:opacity-100 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
            />
          </svg>
          <svg
            onClick={() => handleRemoveTicketType(index)}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 opacity-60 hover:opacity-100 cursor-pointer hover:text-red-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            />
          </svg>
        </div>
      </>
    );
  };

  return (
    <div className="mx-auto min-h-16 max-h-auto bg-gray-800  border-b border-black rounded-lg bg-opacity-40 flex flex-col md:flex-row  gap-2 md:gap-8 md:items-center p-3 justify-around">
      <div className="flex items-center">
        <label>Ticket Type : </label>
        <input
          className={`p-2 bg-transparent w-[5rem] focus:outline-none focus:border-secondary ${
            isEditing ? "border-b" : ""
          }`}
          onChange={(e) => handleTicketTypeChange("type", e.target.value)}
          disabled={!isEditing}
          type="text"
          value={editingTicketType?.type}
        />
      </div>
      <div className="flex items-center">
        <label>Ticket Quantity :</label>
        <input
          className={`p-2 bg-transparent w-[5rem] focus:outline-none focus:border-secondary ${
            isEditing ? "border-b" : ""
          }`}
          onChange={(e) => handleTicketTypeChange("quantity", e.target.value)}
          disabled={!isEditing}
          type="text"
          value={editingTicketType?.quantity}
        />
      </div>
      <div className="flex items-center">
        <label>Price By Ticket :</label>
        <input
          className={`p-2 bg-transparent w-[5rem] focus:outline-none focus:border-secondary ${
            isEditing ? "border-b" : ""
          }`}
          onChange={(e) => handleTicketTypeChange("price", e.target.value)}
          disabled={!isEditing}
          type="text"
          value={editingTicketType?.price}
        />
      </div>
      {renderIconContent()}
    </div>
  );
};

export default TicketTypeCard;
