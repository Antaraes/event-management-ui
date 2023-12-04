import React, { useState } from "react";
import NavButton from "../NavButton/NavButton";
import { useDispatch, useSelector } from "react-redux";
import * as api from "../../../api/index";

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
      path: isAuthenticated ? "/organizer/invoices" : "/organizer/create-event",
    },
    {
      title: isAuthenticated ? "Create Event" : "All Contributors",
      path: isAuthenticated ? "/organizer/create-event" : "/contributor",
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
    <div className="relative z-50 bg-[#ffffff3a] text-[0.8rem] sm:text-[1rem]">
      {renderContent()}
    </div>
  );
};

export default NavBarMenu;
