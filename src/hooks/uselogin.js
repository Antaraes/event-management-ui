import { useState, ChangeEvent, FormEvent } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router";
import * as api from "../api/index";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/auth/authSlice";
export default function useLogin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
    api
      .organizerLogin({ email, password })
      .then((res) => {
        console.log(res.data.user);
        dispatch(setUser(res.data.user));
        toast.success("Login Sucessfully");
        navigate("/organizer/profile");
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
