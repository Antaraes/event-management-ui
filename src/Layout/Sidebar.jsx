import React from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import NavBarMenu from "../components/common/NavBarMenu/NavBarMenu";
import { useDispatch, useSelector } from "react-redux";
import { setDrawer, setUserActive } from "../redux/global/globalSlice";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isDrawer = useSelector((state) => state.global.isDrawer);
  const isUserActive = useSelector((state) => state.global.isUserActive);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(setDrawer(false));
  };

  return (
    <Drawer
      open={isDrawer}
      onClose={handleClose}
      direction="right"
      style={{
        backgroundColor: "#002C32",
        marginTop: "40px",
        borderTopLeftRadius: "20px",
        width: "310px",
        position: "relative",
        overflow: "hidden",
        position: "left",
      }}
    >
      <span className="h-14 w-[1000px] z-10 -left-[244px] overflow-hidden top-10 absolute -rotate-45 bg-navbrand/80"></span>
      <NavBarMenu />
      {isUserActive && (
        <div className="bg-[#ffffff1e] absolute ps-5 pt-10 py-20 w-full bottom-0 flex justify-center items-center gap-x-2 shadow-md">
          <Link to="/organizer/profile/655db72a40abeabdf4678ec9">
            <img
              className="w-[100px] h-[100px] rounded-[40px]"
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
            />
          </Link>
          <div className="px-5">
            <h2 className="text-lg text-start font-semibold truncate">
              <Link to="/organizer/profile/655db72a40abeabdf4678ec9">
                Username : Super Man
              </Link>
            </h2>
            <h5 className="text-[1rem] text-gray-200 text-start font-semibold truncate">
              <Link to="/organizer/profile/655db72a40abeabdf4678ec9">
                superman@gmail.com
              </Link>
            </h5>
            <div className="flex justify-end px-3 mt-5">
              <Link onClick={() => dispatch(setUserActive(false))} to="/">
                <button
                  className="px-2 py-1 rounded text-white bg-red-500"
                  onClick={() => {
                    dispatch(setUserActive(false));
                    handleClose(); 
                  }}
                >
                  Log out
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </Drawer>
  );
};

export default Sidebar;
