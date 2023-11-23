import React from "react";
import LoginForm from "../../components/forms/LoginForm";

const LoginPage = () => {
  return (
    <>
      <div className="mx-[450px] px-9 pt-10 pb-20 border border-white mt-20 rounded-xl bg-slate-950">
        <h1 className="flex items-center justify-center mb-10 text-xl font-semibold">
          Please Enter Your Email and Password
        </h1>
        <div className="px-4">
          <LoginForm />
        </div>
      </div>
    </>
  );
};

export default LoginPage;
