import React from "react";
import AlertModal from "../common/AlertModal";
import ConfirmAlert from "../common/ConfirmAlert";
import OtpComponent from "../common/OtpComponent";
import { useState } from "react";
import toast from "react-hot-toast";
import { addOrganizerPayment, getOTPCode } from "../../api/index";
import { useParams } from "react-router-dom";

const OrganizerProfileAddPaymentForm = ({
  cancelAction,
  email,
  refetchOrganizerPayment,
}) => {
  const { organizerId } = useParams();
  const availablePays = ["Kpay", "Wave", "Paypal"];
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [isOTPOpen, setIsOTPOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: availablePays[0],
    phone: "",
  });
  const handleInputChange = (name, e) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: e.target.value,
    }));
  };

  const handleAddClick = () => {
    if (formData.name.trim() == "" || formData.phone.trim() == "") {
      toast.error("Fields Cannot be Blank");
      return;
    }
    setIsConfirmModalOpen(true);
  };

  const handleConfirmClick = () => {
    setIsOTPOpen(true);
    getOTPCode({ email: "lin27@gail.com" });
  };

  const OTPSuccessFunc = async () => {
    try {
      const payment = {
        payment: [
          {
            name: formData.name,
            phone: formData.phone,
            organizer: organizerId,
          },
        ],
      };
      const response = await addOrganizerPayment(payment);
      setIsOTPOpen(false);
      setIsConfirmModalOpen(false);
      refetchOrganizerPayment();
      cancelAction();
      toast.success("Added new Payment");
    } catch (error) {
      toast.error("Failed to add payment. Try Again");
    }
  };
  return (
    <div className="h-20 rounded-lg border-2 border-white m-2 p-2 flex flex-col gap-2  border-opacity-40 ">
      <select
        className="bg-transparent w-[60%] p-1 focus:outline-none border-b border-white border-opacity-25 focus:border-opacity-100"
        value={formData.name}
        onChange={(e) => handleInputChange("name", e)}
        autoFocus
      >
        {availablePays.map((paymentMethod) => (
          <option
            key={paymentMethod}
            className="text-black"
            value={paymentMethod}
          >
            {paymentMethod}
          </option>
        ))}
      </select>

      <div className="flex justify-between items-center">
        <input
          className="bg-transparent w-[60%] focus:outline-none border-b border-white border-opacity-25 focus:border-opacity-100"
          value={formData.phone}
          placeholder="Payment phone no."
          type="text"
          pattern="[0-9]*"
          inputMode="numeric"
          onChange={(e) => handleInputChange("phone", e)}
          onInput={(e) => {
            e.target.value = e.target.value.replace(/[^0-9]/g, "");
          }}
        />

        <div className="flex justify-between gap-3 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            onClick={handleAddClick}
            className="w-5 h-5  hover:bg-green-600 rounded-full hover:-translate-y-1 transition-all duration-200"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            onClick={cancelAction}
            class="w-5 h-5 text-red-500 hover:text-white  hover:bg-red-600 rounded-full hover:-translate-y-1 transition-all duration-200 "
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
      </div>
      {isConfirmModalOpen && (
        <AlertModal
          isModal={setIsConfirmModalOpen}
          children={
            <ConfirmAlert
              handleConfirm={handleConfirmClick}
              handleCancel={() => setIsConfirmModalOpen(false)}
              titleText={`Do You Want To Add This ${formData.name} ?`}
              confirmMessage={"Add"}
            />
          }
        />
      )}

      {isOTPOpen && (
        <AlertModal
          isModal={setIsOTPOpen}
          children={
            <OtpComponent
              successFunc={OTPSuccessFunc}
              failFunc={() => toast.error("Incorrect Pin. Try Again")}
              email={"lin27@gmail.com"}
            />
          }
        />
      )}
    </div>
  );
};

export default OrganizerProfileAddPaymentForm;
