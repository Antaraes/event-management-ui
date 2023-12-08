import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  UserGroupIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  InformationCircleIcon,
  ServerStackIcon,
  RectangleStackIcon,
} from "@heroicons/react/24/solid";
import Dashboard from "../../pages/Admin/Dashboard";
import Profile from "../../pages/Admin/Profile";
// import { SignIn, SignUp } from "@/pages/auth";

const icon = {
  className: "w-5 h-5 text-inherit",
};

const userValue = JSON.parse(sessionStorage.getItem("user"));

export const routes = [
  {
    layout: "admin",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "dashboard",
        path: "/home",
      },
      {
        icon: <UserCircleIcon {...icon} />,
        name: "profile",
        path: `/profile/${userValue?._id}`,
      },
      {
        icon: <UserGroupIcon {...icon} />,
        name: "organizer",
        path: "/organizer",
      },
      {
        icon: <CalendarIcon {...icon} />,
        name: "event",
        path: "/event",
      },
    ],
  },
];

export default routes;
