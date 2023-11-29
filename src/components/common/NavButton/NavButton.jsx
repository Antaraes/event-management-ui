import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setDrawer } from "../../../redux/global/globalSlice";

const NavButton = (props) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const currentLocation = location.pathname.split("/")[2];
  const active = currentLocation === props.href.split("/")[2];

  const handleClick = () => {
    props.active && props.active(props.href);
  };
    
  const handleDrawer = (e) => {
    dispatch(setDrawer())
  }

  return (
    <NavLink
      className={`text-white text-start py-[10px] mr-[100px] z-100 ps-14 text-[1rem] block w-full
      ${
        active && "bg-activeside/25"
      } hover:bg-sidemenu/20`}
      to={props.href}
      active={handleClick}
      onClick={(e) => handleDrawer(e)}
    >
      {props.title}
    </NavLink>
  );
};


export default NavButton;
