import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

import NavBarMenu from "../components/common/NavBarMenu/NavBarMenu";

const Layout = ({toggleDrawer, isOpen}) => {
 return (
    <div className="h-screen w-screen bg-primary">
      <Navbar toggleBackdrop={toggleDrawer} />  
      <Outlet toggleDrawer={toggleDrawer} open={isOpen} />
      <Footer />
    </div>
  );
};

export default Layout;
