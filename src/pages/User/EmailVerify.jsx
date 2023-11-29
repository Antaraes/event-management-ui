import React from "react";
import emailIcon from "../../assets/icons/document-mail.png";

const EmailVerify = () => {
  return (
    <>
      <div className="flex justify-center items-center flex-col w-screen h-[80%]">
        <img src={emailIcon} alt="" className=" items-center" width={300} />
        <h1 className=" text-2xl font-extrabold text-center my-2">Check Your Email Box!</h1>
      </div>
    </>
  );
};

export default EmailVerify;
