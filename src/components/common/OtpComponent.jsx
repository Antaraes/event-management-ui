import React, { useState } from "react";
import OTPInput from "react-otp-input";

const OtpComponent = () => {
  const [otp, setOtp] = useState("");

  return (
    <div className="flex justify-center flex-col items-center gap-24 rounded-lg shadow-sm shadow-slate-800 border-gray-900 border-2 w-[60%] mx-auto  h-[88vh]">
      <div className="flex justify-center flex-col w-[60%] gap-4 items-center">
        <h1 className="text-4xl font-bold text-center border-b-2 border-secondary w-fit">
          OTP CODE
        </h1>
        <p className="font-light ml-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ex
          ipsum, modi quasi dolorem alias odit, voluptatum possimus doloribus
          sequi dolore aliquam delectus repudiandae natus dolorum earum amet eum
          rem.
        </p>
      </div>

      <OTPInput
        value={otp}
        onChange={setOtp}
        numInputs={6}
        renderSeparator={<span className="ml-3 mr-3">.</span>}
        shouldAutoFocus={true}
        placeholder="0"
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
        <button className="underline decoration-secondary hover:-translate-y-1 duration-300 transition-all hover:text-secondary">
          Resent OTP Code
        </button>
        <button className="bg-secondary p-3 w-24 rounded-md text-white hover:-translate-y-1 duration-300 transition-all">
          Submit
        </button>
      </div>
    </div>
  );
};

export default OtpComponent;
