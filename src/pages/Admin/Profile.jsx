import React from "react";
import AdminProfileCard from "../../components/Admin/AdminProfileCard";
import AdminPaymentComponent from "../../components/Admin/AdminPaymentComponent";

const Profile = () => {
  return (
    <div className="flex max-h-fit min-h-screen w-[940px] gap-4 ">
      <AdminProfileCard />
      <AdminPaymentComponent />
    </div>
  );
};

export default Profile;
