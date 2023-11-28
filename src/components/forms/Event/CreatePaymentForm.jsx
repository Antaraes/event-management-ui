import { Checkbox } from "@material-tailwind/react";
import React from "react";
import { useState } from "react";
import ABAPay from "/payment/ABAPay.jpg";
import Kpay from "/payment/kpay.png";
import Master from "/payment/master.png";
import VISA from "/payment/visa.png";
import wave from "/payment/wave.png";
import axios from "../../../api/axios";
import { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import { setPaymentType } from "../../../redux/global/globalSlice";
import SelectOption from "@material-tailwind/react/components/Select/SelectOption";

const CreatePaymentForm = () => {
  const { organizerId } = useParams();
  const [checkedItems, setCheckedItems] = useState({});
  const [items, setItems] = useState([]);
  const paymentImages = [
    {
      title: "ABAPay",
      img: ABAPay,
    },
    {
      title: "KPay",
      img: Kpay,
    },
    {
      title: "Master",
      img: Master,
    },
    {
      title: "VISA",
      img: VISA,
    },
    {
      title: "wave",
      img: wave,
    },
  ];
  const [selectedPaymentType, setSelectedPaymentType] = useState([]);

  const dispatchRedux = useDispatch();

  useEffect(() => {
    axios
      .get(`organizer-payment/all/${organizerId}`)
      .then((response) => {
        setItems(response.data);
        setCheckedItems(response.data._id);
        return response.data;
      })
      .then((response) => 
        setSelectedPaymentType(response)
      )
      .catch((error) => console.log(error.message));
    items.map((item) => {
      setSelectedPaymentType(item._id);
    });
  }, []);

  useEffect(() => {
    dispatchRedux(setPaymentType(checkedItems));
  }, [checkedItems]);

  console.log("useState", items);
  console.log("sele", selectedPaymentType);
  console.log(checkedItems);
  
  const handleCheckboxChange = (itemId) => {
    setCheckedItems((prevState) => {
      const updatedCheckedItems = { ...prevState };
      if (updatedCheckedItems[itemId]) {
        delete updatedCheckedItems[itemId];
      } else {
        updatedCheckedItems[itemId] = true;
      }  
      return updatedCheckedItems;
    });
  };
  

  return (
    <>
      <div className=" mt-8 text-white p-12 w-full rounded-lg">
        <h1 className="text-2xl mb-8">
          Please choose which Paymant System do you wanna use.
        </h1>

        {/* <div className="text-primary mb-[20px]">
          <select
            name="payments"
            id="payments"
            onChange={(e) =>
              setSelectedPaymentType({ paymentType: e.target.value })
            }
          >
            {items.map((item) => (
              <option value={item._id}>{item.name}</option>
            ))}
          </select>
        </div> */}

        {items.map((item) => (
          <div key={item._id} className="mb-10 ">
            <label className="flex items-center">
              <Checkbox
              onChange={() => handleCheckboxChange(item._id)}/>

              <img
                src={item.img}
                width={50}
                height={50}
                className="rounded ml-2"
                alt=""
              />
              <span className="ml-3">{item.name}</span>
            </label>
            {/* {checkedItems[item._id] && (
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
            )} */}
          </div>
        ))}
      </div>
    </>
  );
};

export default CreatePaymentForm;
