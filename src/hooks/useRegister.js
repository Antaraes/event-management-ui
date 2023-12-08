import React, { useState } from "react";
import { useMutation } from "react-query";
import toast from "react-hot-toast";
import * as api from "../api/index";
import { useNavigate } from "react-router-dom";
const useRegister = () => {
  const [paymentDetails, setPaymentDetails] = useState({});

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    companyName: "",
    contact: "",
    accountLevel: 0,
    bio: "",
    payment: [],
  });
  // Function to handle payment details change
  const handlePaymentDetailsChange = (name, field, value) => {
    setFormData((prevData) => {
      const existingPayment = prevData.payment.find((item) => item.name === name);
      if (existingPayment) {
        return {
          ...prevData,
          payment: prevData.payment.map((item) =>
            item.name === name ? { ...item, [field]: value } : item
          ),
        };
      } else {
        return {
          ...prevData,
          payment: [
            ...prevData.payment,
            {
              name: name,
              [field]: value,
            },
          ],
        };
      }
    });
  };

  const onChange = (field, event) => {
    setFormData({ ...formData, [field]: event.target.value });
  };
  const createOrganzier = async (data) => {
    const { data: response } = await api.organizerSignup(data);
    console.log(data);
    return response.data;
  };
  const { mutate, isLoading } = useMutation(createOrganzier, {
    onSuccess: (data) => {
      console.log(data);
      toast.success("Login Sucessfully");
      navigate("/verify");
    },
    onError: (error) => {
      alert("there was an error");
      console.log(error);
    },
  });
  const onSubmit = (event) => {
    event.preventDefault();
    mutate(formData);
  };
  return {
    ...formData,
    handlePaymentDetailsChange,
    isLoading,
    onChange,
    onSubmit,
  };
};

export default useRegister;
