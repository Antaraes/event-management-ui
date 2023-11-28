import React, { useState } from "react";
import OTPInput from "react-otp-input";
import * as api from "../../api/index";

const OtpComponent = ({ email, successFunc, failFunc }) => {
  const [otp, setOtp] = useState("");
  const resetOTPCodehandle = () => {
    api.getOTPCode({ email: email });
  };

  const verifyOTPCode = async (code) => {
    try {
      const response = await api.verifyOTPcode({ code: code });
      const isConfirm = response.data;

      console.log(isConfirm.tokenValidates);

      if (!isConfirm.tokenValidates) {
        failFunc();
        setOtp("");
        return;
      }

      successFunc();
    } catch (error) {
      console.error("Error verifying OTP code:", error);
    }
  };

  return (
    <div className="flex bg-primary justify-center flex-col mt-10 items-center gap-24 rounded-lg shadow-sm shadow-slate-800  w-full mx-auto  h-[88vh]">
      <div className="flex relative justify-center flex-col w-[60%] gap-4 items-center">
        <h1 className="text-4xl font-bold text-center border-b-2 border-secondary w-fit">
          OTP CODE
        </h1>
        <p className="font-light  text-center w-full">
          Check Your Email For OTP <i className="fa-regular fa-envelope"></i>
        </p>
      </div>

      <OTPInput
        value={otp}
        onChange={setOtp}
        numInputs={6}
        renderSeparator={<span className="ml-3 mr-3">.</span>}
        shouldAutoFocus={true}
        inputStyle={{
          width: "3rem",
          height: "3rem",
          padding: ".75rem",
          color: "#111",
          fontWeight: "bold",
          borderRadius: ".375rem",
          fontSize: "1.50rem",
          textAlign: "center",
          border: "1px solid fff",
          outline: "none",
          transition: "border-color 0.3s ease",
        }}
        containerStyle={{
          display: "block",
        }}
        renderInput={(props) => <input {...props} />}
      />
      <div className="flex justify-between w-[80%] mt-6">
        <button
          className="underline decoration-secondary hover:-translate-y-1 duration-300 transition-all hover:text-secondary"
          onClick={resetOTPCodehandle}
        >
          Resent OTP Code
        </button>
        <button
          className="bg-secondary p-3 w-24 rounded-md text-white hover:-translate-y-1 duration-300 transition-all"
          onClick={() => verifyOTPCode(otp)}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default OtpComponent;
