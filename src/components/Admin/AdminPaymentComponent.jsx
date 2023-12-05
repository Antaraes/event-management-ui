import React from "react";
import AdminPaymentCard from "./AdminPaymentCard";

const AdminPaymentComponent = () => {
  return (
    <div className="mt-3 grid max-h-screen min-h-fit w-[90%] grid-cols-2 gap-4 overflow-auto rounded-2xl border border-blue-gray-100 p-6 text-gray-700">
      {[...Array(7)].map((_, index) => (
        <AdminPaymentCard key={index} />
      ))}
    </div>
  );
};

export default AdminPaymentComponent;
