import React from "react";
import useRegister from "../../hooks/useRegister";
import Form from "./Form";
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
    isLoading,
    onChange,
    onSubmit,
  } = useRegister();
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
      labelText: "Account Level ",
      labelId: "account_level",
      type: "number",
      tag: "select",
      onChange: (event) => onChange("accountLevel", event),
      value: accountLevel,
      options: [
        {
          value: 0,
          label: "Free",
        },
        {
          value: 1,
          label: "Gold",
        },
        {
          value: 2,
          label: "Premium",
        },
      ],
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
    <Form
      config={config}
      isLoading={isLoading}
      btnText={"Sign Up"}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};

export default OrganizerRegisterForm;
