import React, { useState } from "react";

const useRegister = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    companyName: "",
    contact: "",
    accountLevel: 0,
    bio: "",
  });
  const { name, email, password, phone, companyName, contact, accountLevel, bio } = formData;
  const onChange = (field, event) => {
    setFormData({ ...formData, [field]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log("====================================");
    console.log(formData);
    console.log("====================================");
    // registerables({}).then(())
  };
  return {
    name,
    email,
    password,
    phone,
    companyName,
    contact,
    accountLevel,
    bio,
    isLoading,
    onChange,
    onSubmit,
  };
};

export default useRegister;
