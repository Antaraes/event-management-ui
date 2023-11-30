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
import * as api from "../../../api/index";

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
    try {
      api
        .getAllPaymentFromOrganizer()
        .then((response) => {
          setItems(response.data);
          setCheckedItems(response.data._id);
          return response.data;
        })
        .then((response) => setSelectedPaymentType(response))
        .catch((error) => console.log(error.message));
      items.map((item) => {
        setSelectedPaymentType(item._id);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    dispatchRedux(setPaymentType(checkedItems));
  }, [checkedItems]);

  // console.log("useState", items);
  // console.log("sele", selectedPaymentType);
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
      <div className=" mt-8 text-white p-12 w-full rounded-lg  flex flex-col items-center justify-center">
        <h1 className="text-2xl mb-8">Please choose which Paymant System do you wanna use.</h1>

        {items.map((item) => (
          <div
            key={item._id}
            className="h-[80px] w-[500px] px-[20px] py-[10px] relative mb-10 border flex justify-between "
          >
            <div className=" flex items-center">
              <img src={item.img} width={50} height={50} className="rounded ml-2 " alt="" />
              <span className="mx-10">
                {item.name}&nbsp;({item.phone})
              </span>
            </div>
            <div className=" flex items-center justify-end">
              <Checkbox onChange={() => handleCheckboxChange(item._id)} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CreatePaymentForm;
