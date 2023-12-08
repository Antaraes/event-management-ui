import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <div className="h-screen w-screen">
      <Sidebar />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
