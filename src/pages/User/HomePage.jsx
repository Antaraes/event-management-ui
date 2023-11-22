import React, { useState } from "react";
import NavBarMenu from "../../components/common/NavBarMenu/NavBarMenu";
import SideDraw from "../../components/common/Drawer/SideDraw";

const HomePage = (props) => {
  return (
    <div className="h-screen w-screen bg-primary">
      <SideDraw open={props.open} onClose={props.toggleDrawer} />
    </div>
  );
};

export default HomePage;
