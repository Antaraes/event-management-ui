"use client";
import { FC } from "react";
import useLogin from "../../hooks/use-login";
import Form from "./Form";

const LoginForm = ({}) => {
  const { email, password, onChange, onSubmit } = useLogin();
  const config = [
    {
      labelText: "Email ",
      labelId: "email",
      type: "email",
      value: email,
      required: true,
    },
    {
      labelText: "Password ",
      labelId: "password",
      type: "password",
      value: password,
      required: true,
    },
  ];
  return <Form config={config} btnText="Login" onChange={onChange} onSubmit={onSubmit} />;
};

export default LoginForm;
