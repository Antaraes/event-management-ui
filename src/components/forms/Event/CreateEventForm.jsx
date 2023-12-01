import React, { useState } from "react";

const CreateEventForm = ({ setEventFormData, eventFormData }) => {
  const [imageUrilInputCount, setImageUrilInputCount] = useState(1);

  const handleChange = (fieldName, value) => {
    setEventFormData((prevFormData) => ({
      ...prevFormData,
      [fieldName]: value,
    }));
  };

  const handleRemoveImageUrlInputClick = (index) => {
    setImageUrilInputCount(imageUrilInputCount - 1);
    setEventFormData((prevFormData) => {
      const newThumbnailArray = [...prevFormData.thumbnail];
      newThumbnailArray.splice(index, 1);
      prevFormData.thumbnail = newThumbnailArray;
      return prevFormData;
    });
  };

  const handleImageInputChange = (e, index) => {
    const { value } = e.target;
    setEventFormData((prevFormData) => {
      const newThumbnailArray = [...prevFormData.thumbnail];
      newThumbnailArray[index] = value;
      return { ...prevFormData, thumbnail: newThumbnailArray };
    });
  };
  const handleAddImageInput = () => {
    if (imageUrilInputCount < 4) {
      setImageUrilInputCount(imageUrilInputCount + 1);
      setEventFormData((prevFormData) => ({
        ...prevFormData,
        thumbnail: [...prevFormData.thumbnail, ""],
      }));
    }
  };

  return (
    <div className="mx-auto mt-8 lg:p-6  border-2 rounded-xl w-full">
      <h1 className="text-lg pt-4  lg:pt-0 lg:text-2xl font-semibold text-center pb-6">
        Create an Event
      </h1>
      <form action="" className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="flex flex-col gap-2 ml-8">
          <label className="text-lg font-light transition-all duration-300 focus:text-secondary">
            Event Name :
          </label>
          <input
            value={eventFormData.name}
            onChange={(e) => handleChange("name", e.target.value)}
            type="text"
            className="p-1 w-3/4 lg:w-4/5 bg-transparent border-b focus:outline-none focus:border-secondary"
          />
        </div>

        <div className="flex mt-4 flex-col gap-2  ml-8 ">
          <label className="text-lg font-light transition-all duration-300 focus:text-secondary">
            Event Location :
          </label>
          <input
            value={eventFormData.location}
            onChange={(e) => handleChange("location", e.target.value)}
            type="text"
            className="p-1 w-3/4 lg:w-4/5 bg-transparent border-b focus:outline-none focus:border-secondary"
          />
        </div>

        <div className="flex mt-4 flex-col gap-2 ml-8">
          <label className=" text-lg font-light transition-all duration-300 focus:text-secondary">
            Contact :
          </label>
          <input
            value={eventFormData.contact}
            onChange={(e) => handleChange("contact", e.target.value)}
            type="text"
            className="p-1  w-3/4 lg:w-4/5 bg-transparent border-b focus:outline-none focus:border-secondary"
          />
        </div>

        <div className="flex flex-wrap mt-4 h-auto gap-2 justify-around">
          <div className="w-5/6 md:w-2/5 flex flex-col gap-1">
            <label className="text-lg pb-3 transition-all duration-300 focus:text-secondary">
              Event Start Date :
            </label>

            <input
              value={eventFormData.eventStartDate}
              onChange={(e) => handleChange("eventStartDate", e.target.value)}
              type="date"
              min={new Date().toISOString().split("T")[0]}
              className="p-1  bg-transparent border-b focus:outline-none focus:border-secondary"
            />
          </div>
          <div className="w-5/6 md:w-2/5 flex flex-col gap-1">
            <label className="text-lg pb-3 transition-all duration-300 focus:text-secondary">
              Event End Date :
            </label>

            <input
              value={eventFormData.eventEndDate}
              onChange={(e) => handleChange("eventEndDate", e.target.value)}
              type="date"
              min={new Date().toISOString().split("T")[0]}
              className="p-1  bg-transparent border-b focus:outline-none focus:border-secondary"
            />
          </div>
        </div>

        <div className="flex flex-wrap mt-4 h-auto gap-2 justify-around">
          <div className="w-5/6 md:w-2/5 flex flex-col gap-1">
            <label className="text-lg pb-2 transition-all duration-300 focus:text-secondary">
              Ticket Open Date :
            </label>

            <input
              value={eventFormData.ticketOpenDate}
              onChange={(e) => handleChange("ticketOpenDate", e.target.value)}
              type="date"
              min={new Date().toISOString().split("T")[0]}
              className="p-1  bg-transparent border-b focus:outline-none focus:border-secondary"
            />
          </div>
          <div className="w-5/6 md:w-2/5 flex flex-col gap-1">
            <label className="text-lg pb-3 transition-all duration-300 focus:text-secondary">
              Ticket Close Date :
            </label>

            <input
              value={eventFormData.ticketCloseDate}
              onChange={(e) => handleChange("ticketCloseDate", e.target.value)}
              type="date"
              min={new Date().toISOString().split("T")[0]}
              className="p-1  bg-transparent border-b focus:outline-none focus:border-secondary"
            />
          </div>
        </div>

        <div className="flex mt-4 flex-col gap-2  ml-8 h-auto">
          <div className="flex gap-3">
            <label className="text-lg pb-3 font-light transition-all duration-300 focus:text-secondary">
              Imgae Urls :
            </label>
            <svg
              onClick={() => setImageUrilInputCount(imageUrilInputCount + 1)}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className={`w-6 h-6 ${
                imageUrilInputCount == 5
                  ? "hidden"
                  : "cursor-pointer hover:bg-green-400 hover:rounded-full transition-all duration-200"
              }`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </div>
          <div className="flex flex-col gap-3">
            {Array.from({ length: imageUrilInputCount }, (_, index) => (
              <div key={index} className="flex gap-3 pb-5 items-center">
                <input
                  type="text"
                  value={eventFormData.thumbnail[index] || ""}
                  onChange={(e) => handleImageInputChange(e, index)}
                  className="p-1 w-4/5 bg-transparent border-b focus:outline-none focus:border-secondary"
                />
                <svg
                  onClick={() => handleRemoveImageUrlInputClick(index)}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className={`w-6 h-6 ${
                    imageUrilInputCount == 1
                      ? "hidden"
                      : "cursor-pointer hover:bg-red-600 hover:text-black hover:rounded-full transition-all duration-200 "
                  }`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            ))}
          </div>
        </div>
        <div className="flex mt-4 flex-col gap-2 mx-3 h-96 my-6 md:ml-8 lg:col-span-2 md:h-52">
          <label className="text-lg font-light transition-all duration-300 focus:text-secondary">
            Description :
          </label>
          <textarea
            value={eventFormData.description}
            onChange={(e) => handleChange("description", e.target.value)}
            className="bg-transparent border rounded-lg p-3 h-full"
          />
        </div>
      </form>
    </div>
  );
};

export default CreateEventForm;