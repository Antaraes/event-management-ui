import React, { useState } from "react";
import AdminPaymentCard from "./AdminPaymentCard";
import AlertModal from "../common/AlertModal";
import useFetchData from "../../hooks/useFetchData";
import OTPComponent from "../common/OtpComponent";
import {
  getUpgradePayments,
  addUpgradePayment,
  getOTPCode,
} from "../../api/index";
import toast from "react-hot-toast";

const UPGRADEPAYMENTSELECTBOXVALUES = [
  "Kpay",
  "Wave",
  "Paypal",
  "AyaPay",
  "A+",
];

const AdminPaymentComponent = () => {
  const [formData, setFormData] = useState({ name: "", phone: "" });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    data: upgradePayments,
    isLoading,
    refetch,
  } = useFetchData(["upgrade-payments"], () => getUpgradePayments());
  const [shouldAddFormAppear, setShouldAddFormAppear] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const OTPSuccessFunc = async () => {
    try {
      const responseData = await addUpgradePayment(formData);
      setShouldAddFormAppear(false);
      setIsModalOpen(false);
      toast.success("Successfully Added :3");
      refetch();
    } catch (error) {
      toast.error("Something went Wrong TwT");
    }
  };

  const handleAddNewPayment = () => {
    if (formData.name.trim() == "" || formData.phone.trim() == "") {
      toast.error("Field cannot be empty !!");
      return;
    }
    getOTPCode("linthit2745@gmail.com");
    setIsModalOpen(true);
  };

  return (
    <div className="mt-3 grid h-fit w-[90%] grid-cols-2 gap-4 overflow-auto rounded-2xl border border-blue-gray-100 p-6 text-gray-700">
      {upgradePayments &&
        upgradePayments.map((upgradePayment) => (
          <AdminPaymentCard
            key={upgradePayment._id}
            upgradePayment={upgradePayment}
            refetch={refetch}
          />
        ))}
      {isLoading && <p>Loading....</p>}

      {shouldAddFormAppear && (
        <div className="group relative my-0 flex max-h-[200px] min-h-[140px]  cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed border-blue-gray-100 p-2 hover:border-solid">
          <div className="flex flex-col items-center justify-center gap-4 p-1">
            <div className="flex items-center gap-2">
              <label>Payment Type : </label>
              <select
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="cursor-pointer rounded-xl bg-blue-gray-50 p-1 focus:outline-blue-gray-100"
              >
                <option value="" disabled hidden>
                  Select payment
                </option>
                {UPGRADEPAYMENTSELECTBOXVALUES.map((value, index) => (
                  <option className="rounded-md" key={index} value={value}>
                    {value}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-center gap-2">
              <label>Number : </label>
              <input
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                type="number"
                className="w-[60%] border-b border-gray-600 bg-transparent p-1 focus:outline-none"
              />
            </div>
            <div className="flex w-full justify-end gap-4">
              <button
                onClick={handleAddNewPayment}
                className="w-3/6 cursor-pointer rounded-xl bg-blue-gray-200 bg-opacity-70 p-1 transition-all duration-200 hover:bg-blue-gray-100 hover:bg-opacity-100"
              >
                Add
              </button>
            </div>
          </div>
          <svg
            onClick={() => {
              setShouldAddFormAppear(!shouldAddFormAppear);
              if (!shouldAddFormAppear) {
                setFormData({ name: "", phone: "" });
              }
            }}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="absolute -top-2  right-0 h-5 w-5 rounded-full bg-red-400 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
      )}

      <div
        onClick={() => {
          setShouldAddFormAppear(!shouldAddFormAppear);
          if (!shouldAddFormAppear) {
            setFormData({ name: "", phone: "" });
          }
        }}
        className={`group flex max-h-[200px] min-h-[140px]  cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed border-blue-gray-100  p-2 hover:border-solid`}
      >
        {shouldAddFormAppear ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="block h-[40%] w-[40%] text-center opacity-40 group-hover:opacity-100 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="block h-[40%] w-[40%] text-center opacity-40 group-hover:opacity-100 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        )}
      </div>
      {isModalOpen && (
        <AlertModal
          isModal={setIsModalOpen}
          children={
            <OTPComponent
              className="text-white"
              successFunc={OTPSuccessFunc}
              failFunc={() => toast.error("Incorrect Pin, Try Again")}
              email={"linthit2745@gmail.com"}
            />
          }
        />
      )}
    </div>
  );
};

export default AdminPaymentComponent;
