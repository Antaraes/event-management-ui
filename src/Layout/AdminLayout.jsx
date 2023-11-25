import React from "react";
import Sidebar from "../components/Admin/sidebar";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="flex w-full">
      
      <Sidebar/> 
      
      <Outlet/>
    </div>
  );
};

export default AdminLayout;
