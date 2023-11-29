import React, { useState } from "react";
import { useEffect } from "react";
import useFetchData from "../../hooks/useFetchData";
import * as api from "../../api/index";
import successIcon from "../../assets/icons/pngwing.com.png";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Spinner } from "@material-tailwind/react";
const Verification = () => {
  const navigate = useNavigate();
  const { userId, verifyToken } = useParams();
  const [isSuccess, setIsSuccess] = useState();
  useEffect(() => {
    const data = api
      .verification(userId, verifyToken)
      .then((data) => setIsSuccess(data.data.success));
  }, []);
  console.log(isSuccess);
  if (isSuccess) {
    return (
      <div className="w-screen h-screen flex flex-col justify-center items-center ">
        <img src={successIcon} alt="" className=" items-center" width={200} />
        <h1 className=" text-2xl font-extrabold text-center my-2">Verifed!</h1>

        <h4 className="text-center text-gray-300 my-3">You have Successfully created Accoount</h4>
        <Button className="bg-white text-black" onClick={() => navigate("/user/login")}>
          OK
        </Button>
      </div>
    );
  }
  return (
    <>
      <div className="w-screen h-screen flex flex-col justify-center items-center ">
        {isSuccess ? (
          <>
            <img src={successIcon} alt="" className=" items-center" width={200} />
            <h1 className=" text-2xl font-extrabold text-center my-2">Verifed!</h1>

            <h4 className="text-center text-gray-300 my-3">
              You have Successfully created Accoount
            </h4>
            <Button className="bg-white text-black" onClick={() => navigate("/user/login")}>
              OK
            </Button>
          </>
        ) : (
          <Spinner lg />
        )}
      </div>
    </>
  );
};

export default Verification;
