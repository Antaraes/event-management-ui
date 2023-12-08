import { useState, ChangeEvent, FormEvent } from "react";
import { toast } from "react-hot-toast";
export default function useCreateTicket() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    totalSelectedTicketPrice: "",
    boughtTicket: [],
  });
  const { email, name, payment } = formData;
  const onChange = (field, event) => {
    setFormData({ ...formData, [field]: event.target.value });
  };
  const onSubmit = (event) => {
    event.preventDefault();

    if (email.trim() == "" || name.trim() == "") {
      toast.error("Field Cannot be Blank!");
      return;
    }
  };
  return {
    ...formData,
    onChange,
    onSubmit,
  };
}
