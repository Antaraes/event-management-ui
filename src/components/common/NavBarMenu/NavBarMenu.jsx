import React, { useState } from "react";
import NavButton from "../NavButton/NavButton";
import { useDispatch, useSelector } from "react-redux";

const NavBarMenu = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const navButtons = [
    {
      title: "Upcoming",
      path: "/event?type=upcoming",
    },
    {
      title: "All Events",
      path: "/event?type=all",
    },
    {
      title: isAuthenticated ? "Dashboard" : "Become an Organizer",
      path: isAuthenticated
        ? "/organizer/dashboard"
        : "/organizer/subscriptions",
    },
    {
      title: isAuthenticated ? "Invoices" : "Create Event",
      path: isAuthenticated ? "/organizer/invoices" : "/user/login",
    },
  ];

  const renderContent = () => {
    return (
      <>
        {navButtons.map((item) => (
          <NavButton title={item.title} href={item.path} key={item.title} />
        ))}
      </>
    );
  };

  return (
    <div className="bg-[#ffffff3a] text-[0.8rem] sm:text-[1rem] relative z-50">
      {renderContent()}
    </div>
  );
};

export default NavBarMenu;
