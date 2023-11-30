import React, { useState } from "react";
import useRegister from "../../hooks/useRegister";
import { Checkbox } from "@material-tailwind/react";
import Input from "./Input";
import Select from "./Select";
import ABAPay from "/payment/ABAPay.jpg";
import Kpay from "/payment/kpay.png";
import master from "/payment/master.png";
import visa from "/payment/visa.png";
import wave from "/payment/wave.png";
import Spinner from "../common/Spinner";
import { Link } from "react-router-dom";

const OrganizerRegisterForm = () => {
  const {
    name,
    email,
    password,
    phone,
    companyName,
    contact,
    accountLevel,
    bio,

    paymentDetails,
    handlePaymentDetailsChange,
    handlePayment,
    isLoading,
    onChange,
    onSubmit,
  } = useRegister();
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
  const config = [
    {
      labelText: "Full Name",
      labelId: "full_name",
      type: "text",
      onChange: (value) => onChange("name", value),
      tag: "input",
      value: name,
      required: true,
    },
    {
      labelText: "Email ",
      labelId: "email",
      type: "email",
      tag: "input",
      onChange: (event) => onChange("email", event),
      value: email,
      required: true,
    },
    {
      labelText: "Password ",
      labelId: "password",
      type: "password",
      onChange: (event) => onChange("password", event),
      tag: "input",
      value: password,
      required: true,
    },
    {
      labelText: "Phone ",
      labelId: "phone",
      type: "text",
      onChange: (event) => onChange("phone", event),
      tag: "input",
      value: phone,
      required: true,
    },
    {
      labelText: "Company Name",
      labelId: "company_name",
      type: "text",
      tag: "input",
      onChange: (event) => onChange("companyName", event),
      value: companyName,
      required: true,
    },
    {
      labelText: "Contact ",
      labelId: "contact",
      type: "text",
      onChange: (event) => onChange("contact", event),
      tag: "input",
      value: contact,
      required: true,
    },
    
    {
      labelText: "Bio ",
      labelId: "bio",
      onChange: (event) => onChange("bio", event),
      type: "text",
      tag: "input",
      value: bio,
    },
  ];
  return (
    <form className="mx-auto  text-black " action="#" method="POST" onSubmit={onSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="w-full">
          {config.map((item, index) => {
            if (item.tag === "select") {
              return (
                <Select
                  key={index}
                  labelId={item.labelId}
                  labelText={item.labelText}
                  onChange={item.onChange} // Pass the onChange prop here
                  value={item.value}
                  required={item.required}
                  options={item.options}
                />
              );
            } else {
              return (
                <Input
                  key={index}
                  labelId={item.labelId}
                  type={item.type}
                  onChange={item.onChange} // Pass the onChange prop here
                  value={item.value}
                  required={item.required}
                >
                  {item.labelText}
                </Input>
              );
            }
          })}
        </div>
        <div className="bg-[#FEFEFA] px-2 md:px-5 lg:px-10 py-10 w-full rounded-lg mb-5">
          <h1 className="text-2xl font-semibold mb-8 text-center">Payment System</h1>
          {items.map((item) => (
            <div key={item.id} className="mb-2">
              <label className="flex items-center">
                <Checkbox
                  checked={checkedItems[item.id] || false}
                  onChange={() => handleCheckboxChange(item.id)}
                />

                <img src={item.img} width={50} height={50} className="rounded ml-2" alt="" />
                <span className="ml-3">{item.name}</span>
              </label>
              {checkedItems[item.id] && (
                <div className="my-7 gap-5">
                  <div>
                    <label className="text-sm">Enter Card Number or Phone Number</label>
                    <input
                      type="text"
                      onChange={(e) => {
                        handlePaymentDetailsChange(item.name, "phone", e.target.value);
                      }}
                      placeholder={`Card No. <or> Ph No. for ${item.name}`}
                      className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer tracking-wider"
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-end">
      <Link to={'/become-organizer'}>
      <button
          className="mr-3 flex px-5 py-2 mt-2 justify-center bg-gray-700 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-900 rounded-2xl tracking-wider"
        >
          Back
      </button>
      </Link>
        <button
          type="submit"
          className="flex px-5 py-2 mt-2 justify-center bg-blue-600 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-700 rounded-2xl tracking-wider"
        >
          {isLoading ? <Spinner sm /> : "Sign Up"}
        </button>
      </div>
    </form>
  );
};

export default OrganizerRegisterForm;
