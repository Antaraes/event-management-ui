import React from "react";
import Form from "./Form";
import useSubscribe from "../../hooks/useSubscribe";
const SubscriptionPaymentForm = () => {
  //   const { name, email, phone, payment, onSubmit, onChange } = useSubscribe();
  const config = [
    {
      labelText: "Full Name",
      labelId: "Full Name",
      type: "text",
      tag: "Input",
      value: "name",
      required: true,
    },
    {
      labelText: "Email Address",
      labelId: "email",
      type: "email",
      tag: "Input",
      value: "email",
      required: true,
    },

    {
      labelText: "Payment Method",
      labelId: "paymentMethod",
      tag: "select",
      value: "payment",
      required: true,
      options: [
        {
          value: "kpay",
          label: "Kpay",
        },
        {
          value: "wave",
          label: "Wave",
        },
        {
          value: "PayPal",
          label: "PayPal",
        },
      ],
    },
  ];
  return <Form config={config} btnText={"Purchase"} onChange={() => console.log("hello")} />;
};

export default SubscriptionPaymentForm;
