import React, { useState } from "react";

import { NavLink, useLocation } from "react-router-dom";

const NavButton = (props) => {
  const location = useLocation();
  console.log('location',location);
  const currentLocation = location.pathname.split('/')[1];
  console.log('currentLocation',currentLocation);

  console.log(currentLocation === props.href.replace("/", "") );

  const active = currentLocation === props.href.replace("/", "") ;
  return (
    <div className={`text-white ${active && 'bg-activeside/25'} w-screen text-start py-[10px] mr-[100px] z-100  ${active && 'hover:bg-activeside/25' } hover:bg-sidemenu/20`}>
      <NavLink className="ps-10" to={props.href}>
        {props.title}
      </NavLink>
    </div>
  );
};

export default NavButton;
