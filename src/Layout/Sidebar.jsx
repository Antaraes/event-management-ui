import React from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import NavBarMenu from "../components/common/NavBarMenu/NavBarMenu";
import { useDispatch, useSelector } from "react-redux";
import { setDrawer, setUserActive } from "../redux/global/globalSlice";
import { Link, useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import * as api from "../api/index";
import { logout } from "../redux/auth/authSlice";
import toast from "react-hot-toast";
import { useCookies } from "react-cookie";

const Sidebar = () => {
  const navigate = useNavigate();
  const isDrawer = useSelector((state) => state.global.isDrawer);
  const dispatch = useDispatch();
  const [cookie, setCookie, removeCookie] = useCookies();

  const userValue = JSON.parse(sessionStorage.getItem("user"));
  const handleClose = () => {
    dispatch(setDrawer(false));
  };

  const handleLogout = () => {
    sessionStorage.removeItem("user");
    dispatch(setUserActive(false));
    dispatch(logout());
    removeCookie("user");
    api.logout();
    navigate("/");
    dispatch(setDrawer(false));
    toast.success("Log out Successfully");
  };

  return (
    <Drawer
      open={isDrawer}
      onClose={handleClose}
      direction="right"
      style={{
        backgroundColor: "#002C32",
      }}
      className="right -0 relative mt-[40px] min-w-[320px] overflow-hidden sm:rounded-tl-2xl"
    >
      <span className="absolute -left-[376.3px] top-10 z-10 h-14 w-[1200px] -rotate-[62deg]  overflow-hidden bg-navbrand/40"></span>
      <NavBarMenu />
      {userValue && (
        <div className="absolute bottom-0 z-50  flex w-full flex-wrap items-center  justify-evenly gap-x-2 bg-[#ffffff3a] py-11  pt-3 shadow-md">
          <Link to={`/organizer/profile`}>
            <img
              className="h-[60px] w-[60px] rounded-full object-cover"
              src={`${userValue.thumbnail}`}
              alt=""
            />
          </Link>
          <div className="px-5">
            <p className="font-semibol truncate text-start text-lg">
              {userValue.name}
            </p>
            <p className="truncate text-start text-base ">{userValue.email}</p>

            {/* <div className="mt-5 flex justify-end px-3">
              <Link
                onClick={() => {
                  dispatch(setUserActive(false));
                  handleClose();
                }}
                to="/"
                className="rounded bg-red-500 px-2 py-1 text-xs text-white"
              >
                Log out
              </Link>
            </div> */}
          </div>
          <i
            onClick={handleLogout}
            className="fa-solid fa-right-from-bracket cursor-pointer transition-all duration-300 hover:-translate-y-1"
          ></i>
        </div>
      )}
    </Drawer>
  );
};

export default Sidebar;
