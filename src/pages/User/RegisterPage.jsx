import React from "react";
import OrganizerRegisterForm from "../../components/forms/OrganizerRegisterForm";

const RegisterPage = () => {
  return (
    <>
      <div className="w-[80%] mx-auto p-5   border border-white my-2 rounded-xl bg-slate-950">
        <h1 className="flex items-center justify-center mb-10 text-xl font-semibold tracking-wider">
          Restration
        </h1>
        <div className=" ">
          <OrganizerRegisterForm />
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
