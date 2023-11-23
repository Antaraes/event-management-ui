import React from "react";
import NavButton from "../NavButton/NavButton";

const NavBarMenu = () => {
  return (
    <div className="bg-sidemenu/10 relative z-50">
      {btn.map((item) => (
        <NavButton
          className="z-40"
          title={item.title}
          href={item.path}
          key={item.title}
        />
      ))}
    </div>
  );
};

export default NavBarMenu;

const btn = [
  {
    title: "Upcoming",
    path: "/upcoming",
  },
  {
    title: "All Events",
    path: "/allEvents",
  },
  {
    title: "Become an Organizer",
    path: "/user/register",
  },
  {
    title: "Create Event",
    path: "/user/register",
  },
  {
    title: "Trending",
    path: "/Trending",
  },
];
