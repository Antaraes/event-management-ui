import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import NavBarMenu from "../NavBarMenu/NavBarMenu";

const SideDraw = (props) => {
  return (
      <Drawer
        open={props.open}
        onClose={props.onClose}
        direction="right"
        style={{
          backgroundColor: "#002C32",
          marginTop: "40px",
          borderTopLeftRadius: "20px",
          width: "400px",
          position: "relative",
          overflow: "hidden",
          position: "left",
        }}
      >
        <span className="h-14 w-[1000px] z-10 -left-[244px] overflow-hidden  top-10 absolute -rotate-45 bg-navbrand/80"></span>
        <NavBarMenu/>
      </Drawer>
  );
};

export default SideDraw;