import { useState, ChangeEvent, FormEvent } from "react";
import { toast } from "react-hot-toast";
export default function useLogin() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;
  const onChange = (field, event) => {
    setFormData({ ...formData, [field]: event.target.value });
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
