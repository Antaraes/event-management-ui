import React from "react";

const ConfirmAlert = ({
  handleConfirm,
  confirmMessage,
  handleCancel,
  titleText,
}) => {
  return (
    <div className="h-72 w-full p-3  overflow-hidden rounded-md flex flex-col justify-between">
      <h1 className="mx-auto text-xl text-center w-full">{titleText}</h1>

      <div className="flex justify-between mb-6">
        <button
          onClick={handleCancel}
          className="ml-10 bg-gray-900 p-3 w-24 rounded-lg bg-opacity-60 hover:bg-opacity-100"
        >
          Cancel
        </button>
        <button
          onClick={handleConfirm}
          className="mr-10 bg-gray-900 p-3 w-24 rounded-lg bg-opacity-60 hover:bg-opacity-100"
        >
          {confirmMessage}
        </button>
      </div>
    </div>
  );
};

export default ConfirmAlert;
