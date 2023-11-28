import { Checkbox } from "@material-tailwind/react";
import React from "react";
import { useState } from "react";
import ABAPay from "/payment/ABAPay.jpg";
import Kpay from "/payment/kpay.png";
import master from "/payment/master.png";
import visa from "/payment/visa.png";
import wave from "/payment/wave.png";
const CreatePaymentForm = () => {
  const [checkedItems, setCheckedItems] = useState({});

  const items = [
    {
      id: 1,
      name: "ABAPay",
      img: ABAPay,
    },
    {
      id: 2,
      name: "KPay",
      img: Kpay,
    },
    {
      id: 3,
      name: "Master Card",
      img: master,
    },
    {
      id: 4,
      name: "Visa",
      img: visa,
    },
    {
      id: 5,
      name: "Wave",
      img: wave,
    },
  ];

  const handleCheckboxChange = (itemId) => {
    setCheckedItems((prevState) => ({
      ...prevState,
      [itemId]: !prevState[itemId],
    }));
  };
  return (
    <>
      <div className=" mt-8 text-white p-12 w-full rounded-lg">
        <h1 className="text-2xl mb-8">Please choose which Paymant System do you wanna use.</h1>
        {items.map((item) => (
          <div key={item.id} className="mb-10 ">
            <label className="flex items-center">
              <Checkbox
                checked={checkedItems[item.id] || false}
                onChange={() => handleCheckboxChange(item.id)}
              />

              <img src={item.img} width={50} height={50} className="rounded ml-2" alt="" />
              <span className="ml-3">{item.name}</span>
            </label>
            {checkedItems[item.id] && (
              <div className="my-7 grid grid-cols-2 gap-5">
                <div>
                  <label>Enter Card Number or Phone Number</label>
                  <input
                    type="text"
                    placeholder={`Card No. <or> Ph No. for ${item.name}`}
                    className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer tracking-wider"
                  />
                </div>
                <div>
                  <label>Choose QR Code</label>
                  <input
                    type="file"
                    className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer tracking-wider"
                    accept="image/*"
                  />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default CreatePaymentForm;
