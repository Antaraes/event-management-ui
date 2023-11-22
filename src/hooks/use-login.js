import { useState, ChangeEvent, FormEvent } from "react";
import { toast } from "react-hot-toast";
export default function useLogin() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;
  const onChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  const onSubmit = (event) => {
    event.preventDefault();
    login({ email, password })
      .unwrap()
      .then(() => {
        toast.success("Login Sucessfully");
      })
      .catch(() => {
        toast.error("Failed to login account");
      });
  };
  return {
    email,
    password,
    onChange,
    onSubmit,
  };
}
