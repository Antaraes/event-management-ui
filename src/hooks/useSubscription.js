import { useState, ChangeEvent, FormEvent } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router";
import * as api from "../api/index";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/auth/authSlice";
export default function useScriptions() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    subscription: {
      accountLevelId: 0,
    },
    payment: {
      amount: "",
      upgradePayment: "",
    },
  });
  const onChange = (field, event) => {
    setFormData({ ...formData, [field]: event.target.value });
  };
  const onSubmit = (event) => {
    event.preventDefault();

    if (!formData) {
      console.error("Form data is not defined.");
      return;
    }

    api
      .subscription(formData)
      .then((res) => {
        console.log(res);

        if (res.status === 200) {
          toast.success("Success Subscribe");
        } else {
          console.error(`Unexpected status code: ${res.status}`);
          toast.error("Failed to subscribe");
        }
        navigate("/organizer/profile");
      })
      .catch((error) => {
        if (error.response) {
          console.error(
            `Server responded with status code: ${error.response.status}`,
          );
        } else if (error.request) {
          console.error("No response received from the server.");
        } else {
          console.error("Error setting up the request:", error.message);
        }

        toast.error("Failed to subscribe");
      });
  };
  return {
    ...formData,
    onChange,
    onSubmit,
  };
}
