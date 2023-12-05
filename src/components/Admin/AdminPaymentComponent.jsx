import React from "react";
import AdminPaymentCard from "./AdminPaymentCard";
import useFetchData from "../../hooks/useFetchData";
import { getUpgradePayments } from "../../api/index";
const AdminPaymentComponent = () => {
  const { data: upgradePayments } = useFetchData(["upgrade-payments"], () =>
    getUpgradePayments(),
  );
  return (
    <div className="mt-3 grid h-fit w-[90%] grid-cols-2 gap-4 overflow-auto rounded-2xl border border-blue-gray-100 p-6 text-gray-700">
      {upgradePayments &&
        upgradePayments.map((upgradePayment) => (
          <AdminPaymentCard
            key={upgradePayment._id}
            upgradePayment={upgradePayment}
          />
        ))}

      <div className="group my-0 flex max-h-[200px] min-h-[140px]  cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed border-blue-gray-100 p-2 hover:border-solid">
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
      </div>
    </div>
  );
};

export default AdminPaymentComponent;
