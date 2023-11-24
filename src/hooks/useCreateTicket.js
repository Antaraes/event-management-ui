import { useState, ChangeEvent, FormEvent } from "react";
import { toast } from "react-hot-toast";
export default function useCreateTicket() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
  });
  const { email, name } = formData;
  const onChange = (field, event) => {
    setFormData({ ...formData, [field]: event.target.value });
  };
  const onSubmit = (event) => {
    event.preventDefault();
  };
  return {
    email,
    name,
    onChange,
    onSubmit,
  };
}
