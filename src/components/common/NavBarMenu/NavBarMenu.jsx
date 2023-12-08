import React, { useState } from "react";
import NavButton from "../NavButton/NavButton";
import { useDispatch, useSelector } from "react-redux";
import * as api from "../../../api/index";

const NavBarMenu = () => {
  const userValue = JSON.parse(sessionStorage.getItem("user"));

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
      title: userValue ? "Dashboard" : "Become an Organizer",
      path: userValue
        ? userValue.role === "admin"
          ? `admin/home`
          : "organizer/dashboard"
        : "/organizer/subscriptions",
    },
    {
      title: userValue ? "Invoices" : "Create Event",
      path: userValue ? "/organizer/invoices" : "/organizer/create-event",
    },
    {
      title: userValue ? "Create Event" : "All Contributors",
      path: userValue ? "/organizer/create-event" : "/contributor",
    },
  ];

  if (userValue) {
    navButtons.push({
      title: "Your events",
      path: "/organizer/eventList",
    });
  }

  const renderContent = () => {
    return (
      <>
        {navButtons.map((item, index) => (
          <NavButton title={item.title} href={item.path} key={index} />
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
