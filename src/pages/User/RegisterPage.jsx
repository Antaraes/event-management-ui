import React from "react";
import OrganizerRegisterForm from "../../components/forms/OrganizerRegisterForm";

const RegisterPage = () => {
  return (
    <>
      <div className="mx-[400px] px-9 pt-10 pb-5 border border-white mt-20 rounded-xl bg-slate-950">
        <h1 className="flex items-center justify-center mb-10 text-xl font-semibold tracking-wider">
          Restration
        </h1>
        <div className="px-0">
          <OrganizerRegisterForm />
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
