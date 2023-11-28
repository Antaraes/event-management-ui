import React, { useState } from "react";
import NavButton from "../NavButton/NavButton";
import { useDispatch } from "react-redux";

const NavBarMenu = () => {
  const dispatch = useDispatch();

  const btn = [
    {
      title: "Upcoming",
      path: "/event",
    },
    {
      title: "Trending",
      path: "/event",
    },
    {
      title: "All Events",
      path: "/event",
    },
    {
      title: "Become an Organizer",
      path: "/organizer/subscriptions",
    },
    {
      title: "Create Event",
      path: "/user/login",
    },
  ];

  return (
    <div className="bg-sidemenu/10 text-[0.8rem] sm:text-[1rem] relative z-50">
      {btn.map((item) => {
        return <NavButton title={item.title} href={item.path} key={item.title} />;
      })}
    </div>
  );
};

export default NavBarMenu;
