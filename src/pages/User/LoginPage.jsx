import React from "react";
import LoginForm from "../../components/forms/LoginForm";

const LoginPage = () => {
  return (
    <>
      <div className="w-[80%] sm:w-[40%]  mx-auto px-9 pt-10 pb-20 border border-white mt-20 rounded-xl bg-slate-950">
        <h1 className="flex text-center justify-center mb-10 text-xl font-semibold">
          Please Enter Your Email and Password
        </h1>
        <div className="px-0 md:px-5">
          <LoginForm />
        </div>
      </div>
    </>
  );
};

export default LoginPage;
