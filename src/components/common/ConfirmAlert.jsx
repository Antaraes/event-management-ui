import React from "react";

const ConfirmAlert = ({
  handleConfirm,
  confirmMessage,
  handleCancel,
  titleText,
  shouldTextWhite,
}) => {
  return (
    <div
      className={`flex h-72 w-full  flex-col justify-between overflow-hidden rounded-md p-3 ${
        shouldTextWhite ? "text-white" : ""
      }`}
    >
      <div className="flex flex-col gap-3">
        <h1 className="mx-auto w-full text-center text-sm">Confirm Alert</h1>

        <h1 className="mx-auto w-full text-center text-xl">{titleText}</h1>
      </div>

      <div className="mb-6 flex justify-between">
        <button
          onClick={handleCancel}
          className="ml-10 w-24 rounded-lg bg-gray-900 bg-opacity-60 p-3 hover:bg-opacity-100"
        >
          Cancel
        </button>
        <button
          onClick={handleConfirm}
          className="mr-10 w-24 rounded-lg bg-gray-900 bg-opacity-60 p-3 hover:bg-opacity-100"
        >
          {confirmMessage}
        </button>
      </div>
    </div>
  );
};

export default ConfirmAlert;
