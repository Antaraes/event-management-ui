import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <div className="h-screen w-screen bg-primary">
      <Sidebar />
      <Navbar />
      <div className="p-5">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
