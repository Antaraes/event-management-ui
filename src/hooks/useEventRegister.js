import { useState, ChangeEvent, FormEvent } from "react";
import { toast } from "react-hot-toast";
export default function useEventRegister() {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    eventStartDate: "",
    eventEndDate: "",
    ticketOpenDate: "",
    ticketCloseDate: "",
    contact: "",
    location: "",
    thumbnail: "",
    ticket: [],
    description: "",
  });
  const {
    name,
    eventStartDate,
    eventEndDate,
    ticketOpenDate,
    ticketCloseDate,
    contact,
    location,
    thumbnail,
    description,
  } = formData;
  const onChange = (field, event) => {
    setFormData({ ...formData, [field]: event.target.value });
  };
  const onSubmit = (event) => {
    event.preventDefault();
    console.log(formData)
  };
  return {
    name,
    eventStartDate,
    eventEndDate,
    ticketOpenDate,
    ticketCloseDate,
    contact,
    location,
    thumbnail,
    description,
    onChange,
    onSubmit,
  };
}
