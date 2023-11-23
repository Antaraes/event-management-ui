import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import {setDrawer} from '../redux/global/globalSlice'
import { useSelector } from "react-redux";
import Sidebar from "./Sidebar";

const Navbar = () => {  
  const dispatch = useDispatch();
  
  return (
    <div className="bg-primary z-50 w-full flex justify-between fixed">
      <div className="h-10 w-[145px] bg-navbrand relative px-3 rounded-br-3xl overflow-hidden flex">
        <p className="h-full pt-[5px] text-xl font-bold text-sidemenu cursor-pointer">EVENTHUB</p>
        <span className="h-20 w-[30px] bg-sidebar absolute rotate-45 top-0 right-0"></span>
      </div>
      <div className="h-10 w-[200px] bg-navbrand relative px-3 rounded-bl-3xl overflow-hidden flex">
        <p className="h-full pt-[5px] text-xl font-bold text-sidemenu ml-5">
          <NavLink to="/" activeClassName="text-active">Home</NavLink>
        </p>
        <p className="h-full pt-[5px] text-xl font-bold text-sidemenu ml-5 cursor-pointer" onClick={()=>dispatch(setDrawer())}>
          Menu
        </p>
        <span className="h-20 w-[30px] bg-sidebar absolute rotate-45 top-0 right-0"></span>
      </div>
      {/* <Sidebar /> */}
    </div>
  );
};

export default Navbar;