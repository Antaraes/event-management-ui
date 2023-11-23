import React from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import NavBarMenu from "../components/common/NavBarMenu/NavBarMenu";
import { useDispatch, useSelector } from "react-redux";
import {setDrawer} from '../redux/global/globalSlice'
const Sidebar = () => {
  const isDrawer = useSelector((state) => state.global.isDrawer);
  console.log(isDrawer);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(setDrawer(false));
  };
  return (<Drawer
    open={isDrawer}
    onClose={handleClose}
    direction="right"
    style={{
      backgroundColor: "#002C32",
      marginTop: "40px",
      borderTopLeftRadius: "20px",
      width: "400px",
      position: "relative",
      overflow: "hidden",
      position: "left",
    }}
  >
    <span className="h-14 w-[1000px] z-10 -left-[244px] overflow-hidden  top-10 absolute -rotate-45 bg-navbrand/80"></span>
    <NavBarMenu/>
  </Drawer>);
};

export default Sidebar;
