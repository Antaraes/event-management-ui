import { useState, ChangeEvent, FormEvent } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router";
import * as api from "../api/index";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/auth/authSlice";
import { useCookies } from "react-cookie";
export default function useLogin() {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
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

  const attemptLogin = async (loginFunction) => {
    try {
      const res = await loginFunction({ email, password });
      console.log(res.data.user);

      const { user, accessToken, refreshToken, expiresIn } = res.data;
      setCookie("accessToken", accessToken);
      setCookie("refreshToken", refreshToken);
      sessionStorage.setItem("user", JSON.stringify(user));

      dispatch(setUser(user));
      toast.success("Login Successfully");

      if (loginFunction === api.organizerLogin) {
        navigate("/organizer/profile");
      } else if (loginFunction === api.staffLogin) {
        navigate("/admin/home");
      } else if (loginFunction === api.adminLogin) {
        navigate("/admin/home");
      }

      return true;
    } catch (error) {
      console.error(`Failed to login with ${loginFunction}`, error);
      return false;
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    const loginFunctions = [api.organizerLogin, api.staffLogin, api.adminLogin];

    try {
      for (const loginFunction of loginFunctions) {
        const success = await attemptLogin(loginFunction);
        if (success) {
          break;
        }
      }
    } catch (error) {
      toast.error("Failed to login account");
    }
  };

  return {
    email,
    password,
    onChange,
    onSubmit,
  };
}
