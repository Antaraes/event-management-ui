import React from "react";
//import Sidebar from "../components/Admin/sidebar";
import { Outlet } from "react-router-dom";
import { Cog6ToothIcon } from "@heroicons/react/24/solid";
import { IconButton } from "@material-tailwind/react";
import { useMaterialTailwindController, setOpenConfigurator } from "../context";
import Sidenav from "../widgets/layout/sidenav";
import routes from "../utils/Admin/routes";

import Configurator from "../widgets/layout/Configurator";
import Footer from "../widgets/layout/Footer";
import DashboardNavbar from "../widgets/layout/dashboardNavbar";

const AdminLayout = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [controller, dispatch] = useMaterialTailwindController();
  const { sidenavType } = controller;

  return (
    <div className="flex w-full bg-white">
      <Sidenav
        routes={routes}
        brandImg={
          sidenavType === "dark" ? "/img/logo-ct.png" : "/img/logo-ct-dark.png"
        }
      />
      <div className="p-4 xl:ml-80">
        <div className="w-[600px]">
          <DashboardNavbar />
          {/* <Configurator /> */}
          <IconButton
            size="lg"
            color="white"
            className="fixed bottom-8 right-8 z-40 rounded-full shadow-blue-gray-900/10"
            ripple={false}
            onClick={() => setOpenConfigurator(dispatch, true)}
          >
            <Cog6ToothIcon className="h-5 w-5" />
          </IconButton>
        </div>
        <Outlet />

        <div className="text-blue-gray-600">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
