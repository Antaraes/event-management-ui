import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({ toggleBackdrop }) => {
  return (
    <div className="bg-primary w-full flex justify-between fixed">
      <div className="h-10 w-[145px] bg-navbrand relative px-3 rounded-br-3xl overflow-hidden flex">
        <p className="h-full pt-[5px] text-xl font-bold text-sidemenu">EVENTHUB</p>
        <span className="h-20 w-[30px] bg-sidebar absolute rotate-45 top-0 right-0"></span>
      </div>
      <div className="h-10 w-[200px] bg-navbrand relative px-3 rounded-bl-3xl overflow-hidden flex">
        <p className="h-full pt-[5px] text-xl font-bold text-sidemenu ml-5">
          <NavLink to="/home" activeClassName="text-active">Home</NavLink>
        </p>
        <p className="h-full pt-[5px] text-xl font-bold text-sidemenu ml-5" onClick={toggleBackdrop}>
          Menu
        </p>
        <span className="h-20 w-[30px] bg-sidebar absolute rotate-45 top-0 right-0"></span>
      </div>
    </div>
  );
};

export default Navbar;