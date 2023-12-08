import React, { useEffect, useState } from "react";
import useFetchData from "../../hooks/useFetchData";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  getOrganizerProfile,
  updateOrganizerProfile,
  getAllPaymentFromOrganizer,
} from "../../api/index";
import toast from "react-hot-toast";
import OrganizerProfilePayments from "../../components/Organizer/OrganizerProfilePayments";
import OrganizerProfileAddPaymentForm from "../../components/Organizer/OrganizerProfileAddPaymentForm";
import { useSelector } from "react-redux";

function OrganizerProfile() {
  const navigate = useNavigate();

  const { data: organizerDetail, isLoading: isOrganizerDetailLoading } = useFetchData(
    ["organizer"],
    () => getOrganizerProfile()
  );
  const {
    data: organizerPayment,
    isLoading: isOrganizerPaymentLoading,
    refetch: refetchOrganizerPayment,
  } = useFetchData(["organizer-payment"], () => getAllPaymentFromOrganizer());

  const [isPaymentAdd, setIsPaymentAdd] = useState(false);
  const [organizerData, setOrganizerData] = useState(null);
  const [shouldUpdateBtnAppear, setShouldUpdateBtnAppear] = useState(false);
  const isAuthenticated = useSelector((state) => state.auth.user);
  console.log("🚀 ~ file: OrganizerEventList.jsx:20 ~ OrganizerEventList ~ isAuthenticated:", isAuthenticated)
  useEffect(() => {
    if (organizerDetail) setOrganizerData(organizerDetail);
  }, [organizerDetail]);

  const handleInputChange = (name, e) => {
    setOrganizerData((prevData) => ({
      ...prevData,
      [name]: e.target.value,
    }));
    setShouldUpdateBtnAppear(true);
  };

  const handleUpdateClick = () => {
    const { name, companyName, contact, bio } = organizerData;
    if (name.trim() == "" || companyName.trim() == "" || contact.trim() == "" || bio.trim() == "") {
      toast.error("Field Shouldnt Be Black");
      return;
    }
    const updatedData = { name, companyName, contact, bio };
    updateOrganizerProfile(updatedData);
    navigate("/");
    toast.success("Successfully Updated!");
  };

  return (
    <>
      <div className="bg-gray-800 bg-opacity-60 min-h-full sm:min-h-[93vh] max-h-fit w-full sm:w-[80%] md:w-[90%] mb-2 mx-auto pt-14 border-2 border-gray-900 p-6 sm:p-10 rounded-lg shadow-sm shadow-slate-800">
        <div className="flex mt-3 flex-col sm:flex-row gap-6 w-full h-auto  max-h-fit  justify-between">
          <div className="flex gap-10 justify-around bg-white  p-6 text-primary w-full md:w-[40%] rounded-lg">
            <img
              className="object-cover rounded-full min-h-[130px] max-h-[130px] min-w-[130px] max-w-[130px] md:min-h-[100px] md:max-h-[100px] md:min-w-[100px] md:max-w-[100px] lg:min-h-[130px] lg:max-h-[130px] lg:min-w-[130px] lg:max-w-[130px] shadow-lg shadow-gray-800"
              src={organizerDetail?.thumbnail}
            />
            <div className="flex flex-col justify-around gap-4">
              <span>
                {organizerData && organizerDetail.name}
                {isOrganizerDetailLoading && "Loading..."}
              </span>
              <div className="flex gap-1 flex-col justify-end">
                <span>
                  Account Level : {organizerData && organizerDetail.accountLevel}
                  {isOrganizerDetailLoading && "Loading..."}
                </span>
                <Link
                  to={"/organizer/subscriptions"}
                  className="bg-secondary text-white p-2 w-fit rounded-md"
                >
                  Upgrade
                </Link>
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
                  {isOrganizerDetailLoading && "Loading....."}
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
                  {isOrganizerDetailLoading && "Loading....."}
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
                  {isOrganizerDetailLoading && "Loading....."}
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
                  {isOrganizerDetailLoading && "Loading....."}
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

        <div className="mt-6 sm:mt-0 h-auto sm:h-[280px] flex flex-col sm:flex-row gap-6 ">
          <div className="w-full sm:w-[50%] flex flex-col gap-4 mt-3">
            <span>Contact :</span>
            {organizerData && (
              <textarea
                value={organizerData.contact}
                onChange={(e) => handleInputChange("contact", e)}
                className="w-full h-[240px] rounded-lg bg-transparent border-2 border-gray-900 focus:outline-none p-3"
              />
            )}
            {isOrganizerDetailLoading && "Loading...."}
          </div>
          <div className="w-full sm:w-[50%] flex flex-col gap-4 mt-3  ">
            <div className="w-full flex justify-between items-center">
              <span>Your Payments :</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className={`w-6 h-6 mr-4 ${
                  isPaymentAdd ? "cursor-not-allowed disabled" : "cursor-pointer"
                }`}
                onClick={() => setIsPaymentAdd(true)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div className="border-2 border-gray-900 h-[240px]  rounded-lg w-full p-3 overflow-auto grid grid-cols-1 lg:grid-cols-2">
              {organizerPayment &&
                organizerPayment.map((payment) => (
                  <OrganizerProfilePayments
                    key={payment._id}
                    payment={payment}
                    refetchOrganizerPayment={refetchOrganizerPayment}
                  />
                ))}

              {isOrganizerPaymentLoading && "Loading...."}
              {isPaymentAdd && (
                <OrganizerProfileAddPaymentForm
                  cancelAction={() => setIsPaymentAdd(false)}
                  // email={organizerDetail.email}
                  refetchOrganizerPayment={refetchOrganizerPayment}
                />
              )}
            </div>
          </div>
        </div>

        <div className="mt-6 sm:mt-0 h-auto sm:h-[280px] flex flex-col sm:flex-row gap-6 w-full ">
          <div className="w-full flex flex-col gap-4 mt-3">
            <span>Bio :</span>
            {organizerData && (
              <textarea
                value={organizerData.bio}
                onChange={(e) => handleInputChange("bio", e)}
                className="w-full h-[240px] rounded-lg bg-transparent border-2 border-gray-900 focus:outline-none p-3"
              />
            )}
            {isOrganizerDetailLoading && "Loading...."}
          </div>
        </div>
        <div className="flex justify-end p-3">
          {shouldUpdateBtnAppear && (
            <button className=" bg-secondary p-2 rounded-lg" onClick={handleUpdateClick}>
              Update
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default OrganizerProfile;
