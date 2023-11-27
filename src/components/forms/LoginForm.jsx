import { FC } from "react";
import useLogin from "../../hooks/uselogin";
import Form from "./Form";

const LoginForm = ({}) => {
  const { email, password, onChange, onSubmit } = useLogin();
  const config = [
    {
      labelText: "Email ",
      labelId: "email",
      type: "email",
      value: email,
      onChange: (event) => onChange("email", event),
      required: false,
    },
    {
      labelText: "Password ",
      labelId: "password",
      type: "password",
      onChange: (event) => onChange("password", event),
      value: password,
      required: false,
    },
  ];
  return <Form config={config} btnText="Login" onChange={onChange} onSubmit={onSubmit} />;
};

export default LoginForm;
