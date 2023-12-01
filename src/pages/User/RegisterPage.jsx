import React from "react";
import OrganizerRegisterForm from "../../components/forms/OrganizerRegisterForm";
import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <>
      <div className="w-[80%] mx-auto p-5 border border-white my-2 rounded-xl bg-slate-950">
        <h1 className="flex items-center justify-center mb-10 text-xl font-semibold tracking-wider">
          Restration
        </h1>
        <div className=" ">
          <OrganizerRegisterForm />
        </div>

        <Typography className="text-center mt-3">
          If you have an account, you can{" "}
          <Link to={"/user/login"} className="text-blue-500">
            login
          </Link>{" "}
          with your created account to become an organizer
        </Typography>
      </div>
    </>
  );
};

export default RegisterPage;
