import React, { useEffect, useState } from "react";
import ProfileEventCard from "../../components/User/ProfileEventCard";
import useFetchData from "../../hooks/useFetchData";
import { getOrganizerProfile } from "../../api/index";
import { useNavigate, useParams } from "react-router-dom";
import { updateOrganizerProfile } from "../../api/index";
import toast from "react-hot-toast";
function OrganizerProfile() {
  const navigate = useNavigate();
  const { organizerId } = useParams();
  const { data, error, isLoading } = useFetchData(
    ["organizer", organizerId],
    () => getOrganizerProfile(organizerId)
  );
  const [organizerData, setOrganizerData] = useState(null);
  const [shouldUpdateBtnAppear, setShouldUpdateBtnAppear] = useState(false);

  useEffect(() => {
    if (data) setOrganizerData(data);
  }, [data]);

  const handleInputChange = (name, e) => {
    setOrganizerData((prevData) => ({
      ...prevData,
      [name]: e.target.value,
    }));
    setShouldUpdateBtnAppear(true);
  };

  const handleUpdateClick = () => {
    const { name, companyName, contact, bio } = organizerData;
    if (
      name.trim() == "" ||
      companyName.trim() == "" ||
      contact.trim() == "" ||
      bio.trim() == ""
    ) {
      toast.error("Field Shouldnt Be Black");
      return;
    }
    const updatedData = { name, companyName, contact, bio };
    updateOrganizerProfile(organizerId, updatedData);
    navigate("/");
    toast.success("Successfully Updated!");
  };

  return (
    <>
      <div className="h-[92vh] w-[80%] mx-auto mt-10 border-2 border-gray-900 p-10 rounded-lg shadow-sm shadow-slate-800">
        <div className="flex gap-10 w-full h-auto justify-between">
          <div className="flex gap-10  justify-around bg-white  p-6 text-primary w-[40%] rounded-lg">
            <img
              className="object-cover rounded-full min-h-[130px] max-h-[130px] min-w-[130px] max-w-[130px] shadow-lg shadow-gray-800"
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAH8AfwMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAAAQUGBAMCB//EADQQAAIBAwIDBAgFBQAAAAAAAAABAgMEMQURIUGBUXFysRITIiQyMzRhFJGSwdEjQkNSYv/EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/EABYRAQEBAAAAAAAAAAAAAAAAAAABEf/aAAwDAQACEQMRAD8A/WgGCoAAAAAAAAAAAAAAAAEogLIBgMAAAAAAAFfd6rTotwopVJrL34Irp6ndzfzFHwxQwaEGep6pdwe7qKa7JRRZWeqUq7UKq9XUeOxjB3gAAAAAWQFkAwGAAAAFXrF46fu9J7SfGbXZ2Fo2km3hcWZStUdarOpLMnuIPkEAqBJAAvNIvHWj6iq95xW8W+aLIy1vVdCvCrHMXv0NT3YJVgAAAWQFkAwGAAAA8rrha1ts+rlt+RljWyipxcXhrZmUnB05yhLMXsyxK+QAAAAEmqo/Jp7/AOq8jMUqbq1YU45lJI1KWy2WEKRIAIoFkBZAMBgAAABT61aNS/EwXB/Hty+5cENJpprdPtAyQLi80jdudrLb/iXLuZXTtLmHxUKnSLZUeBJ707O5m/ZoVOsdvMsbPSVCSnc7Nrj6Cx1YEaLaNe81Ftw9j+S2HcCKAAAFkBZAMBgACHwW7eyKi+1RtunavZYdTm+4CxuLuhbfNntLlFcW+hXVtZk+FCkl95vcqm222223lsgqOueo3c/8zj4UkeTurh5r1P1s8QB7K6uI4uKv62etPUruG39VyXZJJnIALehrPKvSXig/2LKhc0bhb0aik+aw10MuTGUoSUoyakuafEYrWAqrDVfSap3TSb4Kp295akwAsgLIBgM87mp6m3qVX/bFvryAqtYvG5O2pvZL42uf2KsNttuXFt7tkFQAAAAAAAAAAAudIvfTX4eo/aS9hvmuwpj7pzlTqRnD4ovdAasLJ8wmpwjNYkk0fSyRRnHq30FTp5nbscerfQVOnmBnQQDSJBAIJBAAkEACQQAJBAKNNp/0VHwI6Fk59PXuVHwI6UuJlX//2Q=="
            />
            <div className="flex flex-col justify-around gap-4">
              <span>
                {organizerData && data.name}
                {isLoading && "Loading..."}
              </span>
              <div className="flex gap-1 flex-col justify-end">
                <span>
                  Account Level : {organizerData && data.accountLevel}
                  {isLoading && "Loading..."}
                </span>
                <button className="bg-secondary text-white p-2 rounded-md">
                  Upgrade
                </button>
              </div>
            </div>
          </div>
          <div className="flex gap-16">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <span>Name : </span>
                <div className="flex gap-2">
                  {organizerData && (
                    <input
                      type="text"
                      value={organizerData.name}
                      onChange={(e) => handleInputChange("name", e)}
                      className="w-[100%]  bg-transparent focus:outline-none border-b border-white"
                    />
                  )}
                  {isLoading && "Loading....."}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <span>Email : </span>
                <div className="flex gap-2">
                  {organizerData && (
                    <input
                      disabled
                      type="text"
                      value={organizerData.email}
                      onChange={(e) => handleInputChange("name", e)}
                      className="w-[100%] cursor-not-allowed bg-transparent focus:outline-none border-b border-white"
                    />
                  )}
                  {isLoading && "Loading....."}
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <span>Phone : </span>
                <div className="flex gap-2">
                  {organizerData && (
                    <input
                      type="number"
                      value={organizerData.phone}
                      onChange={(e) => handleInputChange("phone", e)}
                      className="w-[100%]  bg-transparent focus:outline-none border-b border-white"
                    />
                  )}
                  {isLoading && "Loading....."}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <span>Company Name : </span>
                <div className="flex gap-2">
                  {organizerData && (
                    <input
                      type="text"
                      value={organizerData.companyName}
                      onChange={(e) => handleInputChange("companyName", e)}
                      className="w-[100%]  bg-transparent focus:outline-none border-b border-white"
                    />
                  )}
                  {isLoading && "Loading....."}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 h-[280px] flex gap-3 ">
          <div className="w-[140%]  flex gap-4 flex-col">
            <span>Bio :</span>
            {organizerData && (
              <textarea
                value={organizerData.bio}
                onChange={(e) => handleInputChange("bio", e)}
                className="w-full h-[240px] rounded-lg bg-transparent border-2 border-gray-900 focus:outline-none p-3"
              />
            )}
            {isLoading && "Loading...."}
          </div>
          <div className="w-full  flex gap-4 flex-col">
            <span>Contact :</span>
            {organizerData && (
              <textarea
                value={organizerData.contact}
                onChange={(e) => handleInputChange("contact", e)}
                className="w-full h-[240px] rounded-lg bg-transparent border-2 border-gray-900 focus:outline-none p-3"
              />
            )}
            {isLoading && "Loading...."}
          </div>
        </div>
        <div className="flex justify-between p-3">
          {/* <button className=" bg-sidebar p-2 rounded-lg">Back</button> */}
          {shouldUpdateBtnAppear && (
            <button
              className=" bg-secondary p-2 rounded-lg"
              onClick={handleUpdateClick}
            >
              Update
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default OrganizerProfile;