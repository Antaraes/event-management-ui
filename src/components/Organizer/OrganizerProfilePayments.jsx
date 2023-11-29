import React from "react";
import { useState } from "react";
import AlertModal from "../common/AlertModal";
import ConfirmAlert from "../common/ConfirmAlert";
import { useEffect } from "react";
import { getOTPCode, updateOrganizerPayment } from "../../api/index";
import toast from "react-hot-toast";
import OtpComponent from "../common/OtpComponent";

const OrganizerProfilePayments = ({
  email,
  payment,
  refetchOrganizerPayment,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [formData, setFormData] = useState(null);
  const availablePays = ["Kpay", "Wave", "Paypal"];
  const [isOTPOpen, setIsOTPOpen] = useState(false);

  const handleCancelEditing = () => {
    setIsEditing(false);
    setFormData(payment);
  };

  const renderContent = () => {
    if (isEditing) {
      return (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5 text-green-500 hover:text-white hover:bg-green-500 hover:w-full rounded-full transition-all duration-200"
            onClick={() => setIsConfirmModalOpen(true)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5 text-red-500 hover:bg-red-500 hover:text-white hover:w-full rounded-full transition-all duration-200"
            onClick={handleCancelEditing}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </>
      );
    }
    return (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-5 h-5 opacity-30 hover:opacity-100 hover:-translate-y-1 transition-all duration-200"
          onClick={() => setIsEditing(true)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
          />
        </svg>

        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-5 h-5 opacity-30 hover:opacity-100 hover:-translate-y-1 hover:text-red-500 transition-all duration-200"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
          />
        </svg> */}
      </>
    );
  };

  const handleConfirm = () => {
    getOTPCode("lin@gmailcom");
    setIsOTPOpen(true);
  };

  const OTPSuccesFunc = () => {
    updateOrganizerPayment(formData._id, formData)
      .then(() => {
        setIsConfirmModalOpen(false);
        setIsEditing(false);
        setIsOTPOpen(false);
        refetchOrganizerPayment();
        toast.success("Updated Successfully");
      })
      .catch((error) => {
        toast.error(`Something went Wrong`);
      });
  };

  const handleCancel = () => {
    setIsConfirmModalOpen(false);
  };

  const handleInputChange = (name, e) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: e.target.value,
    }));
  };

  useEffect(() => {
    if (payment) {
      setFormData(payment);
    }
  }, [payment]);

  return (
    <div className="h-20 rounded-lg border-2 border-white m-2 p-2 flex flex-col gap-2  border-opacity-40 ">
      {isEditing ? (
        <select
          className="bg-transparent w-[60%] focus:outline-none border-b border-white border-opacity-25 focus:border-opacity-100"
          value={formData.name}
          onChange={(e) => handleInputChange("name", e)}
          autoFocus
        >
          {availablePays.map((paymentMethod) => (
            <option
              className="text-black"
              key={paymentMethod}
              value={paymentMethod}
            >
              {paymentMethod}
            </option>
          ))}
        </select>
      ) : (
        <span className="text-lg">{payment.name}</span>
      )}

      <div className="flex justify-between items-center">
        {isEditing ? (
          <input
            className="bg-transparent w-[60%] focus:outline-none border-b border-white border-opacity-25 focus:border-opacity-100"
            value={formData.phone}
            onChange={(e) => handleInputChange("phone", e)}
          />
        ) : (
          <span className="text-base">{payment.phone}</span>
        )}

        <div className="flex justify-between gap-3 items-center">
          {renderContent()}
        </div>
      </div>
      {isConfirmModalOpen && (
        <AlertModal
          isModal={setIsConfirmModalOpen}
          children={
            <ConfirmAlert
              handleConfirm={handleConfirm}
              handleCancel={handleCancel}
              titleText={`Do You Want To Update This ${payment.name} ?`}
              confirmMessage={"Update"}
            />
          }
        />
      )}

      {isOTPOpen && (
        <AlertModal
          isModal={setIsOTPOpen}
          children={
            <OtpComponent
              email={"lin27@gmail.com"}
              successFunc={OTPSuccesFunc}
              failFunc={() => toast.error("Invalid Pin. Try Again")}
            />
          }
        />
      )}
    </div>
  );
};

export default OrganizerProfilePayments;
