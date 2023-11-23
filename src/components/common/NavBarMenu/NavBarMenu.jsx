import React from "react";
import NavButton from "../NavButton/NavButton";


const NavBarMenu = () => {
  
  return (
    <div className="bg-sidemenu/10 relative z-50">
      {btn.map((item) => (
        <NavButton className="z-40" title={item.title} href={item.path} key={item.title} />
      ))}
    </div>
  );
};

export default NavBarMenu;

const btn = [
  {
    title : "Upcoming",
    path : "/event"
  },
  {
    title : "All Events",
    path : "/event"
  },
  {
    title : "Become an Organizer",
    path : "/BecomeAnOrganizer"
  },
  {
    title : "Create Event",
    path : "/user/login"
  },
  {
    title : "Trending",
    path : "/event"
  },
]