import React, { useState } from "react";
import AdminPaymentCard from "./AdminPaymentCard";
import useFetchData from "../../hooks/useFetchData";
import { getUpgradePayments } from "../../api/index";

const UPGRADEPAYMENTSELECTBOXVALUES = [
  "Kpay",
  "Wave",
  "Paypal",
  "AyaPay",
  "A+",
];

const AdminPaymentComponent = () => {
  const [formData, setFormData] = useState({ name: "", phone: "" });

  const { data: upgradePayments, isLoading } = useFetchData(
    ["upgrade-payments"],
    () => getUpgradePayments(),
  );
  const [shouldAddFormAppear, setShouldAddFormAppear] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  console.log(formData);

  return (
    <div className="mt-3 grid h-fit w-[90%] grid-cols-2 gap-4 overflow-auto rounded-2xl border border-blue-gray-100 p-6 text-gray-700">
      {upgradePayments &&
        upgradePayments.map((upgradePayment) => (
          <AdminPaymentCard
            key={upgradePayment._id}
            upgradePayment={upgradePayment}
          />
        ))}
      {isLoading && <p>Loading....</p>}

      {shouldAddFormAppear && (
        <div className="group my-0 flex max-h-[200px] min-h-[140px]  cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed border-blue-gray-100 p-2 hover:border-solid">
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
          </div>
        </div>
      )}

      <div
        onClick={() => {
          setShouldAddFormAppear(!shouldAddFormAppear);
          if (!shouldAddFormAppear) {
            setFormData({ name: "", phone: "" });
          }
        }}
        className={`group my-0 flex max-h-[200px] min-h-[140px]  cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed border-blue-gray-100  p-2 hover:border-solid`}
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
    </div>
  );
};

export default AdminPaymentComponent;
