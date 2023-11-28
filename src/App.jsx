import React, { useState, useEffect } from "react";
import { RouterProvider, createBrowserRouter, useLocation } from "react-router-dom";
import EventDetailCarousel from "./components/carousel/EventDetailCarousel";
import EventDetailText from "./components/carousel/EventDetailText";
import OrgNameAndEvent from "./components/Organizer/OrgNameAndEvent";
import EventDetail from "./pages/User/EventDetail";
import "./index.css";
import Layout from "./Layout/Layout";
import HomePage from "./pages/User/HomePage";
import AdminLayout from "./Layout/AdminLayout";
import UserLayout from "./Layout/UserLayout";

import Sidebar from "./components/Admin/sidebar";
import Event from "./pages/User/Event";
import Contributor from "./pages/User/Contributor";
import OrganizerProfile from "./pages/User/OrganizerProfile";
import OrganizerDashboard from "./pages/User/OrganizerDashboard";
import Subscription from "./pages/User/Subscription";
import LoginPage from "./pages/User/LoginPage";
import RegisterPage from "./pages/User/RegisterPage";
import { Toaster } from "react-hot-toast";
import CreateEvent from "./pages/User/CreateEvent";
import BuyTicket from "./pages/User/BuyTicket";
import PageNotFound from "./pages/PageNotFound";
import { useSelector } from "react-redux";
import OrganizerEventList from "./pages/User/OrganizerEventList";
import OrganizerBoostPayment from "./pages/User/OrganizerBoostPayment";
import * as api from "./api/index";
import Cookies from "js-cookie";

function App() {
  const user = useSelector((state) => state.auth.user);
  console.log(user);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const checkTokenExpiration = async () => {
      const accessToken = Cookies.get("accessToken");
      console.log(accessToken);

      if (accessToken) {
        try {
          if (exp * 1000 - Date.now() < 5 * 60 * 1000) {
            await api.generateAccessToken();
          }
        } catch (error) {
          console.error("Error decoding access token:", error);
        }
      }
    };

    const intervalId = setInterval(checkTokenExpiration, 60 * 1000);

    return () => clearInterval(intervalId);
  }, []);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const router = createBrowserRouter([
    {
      path: "/user/login",
      element: <LoginPage />,
    },
    {
      path: "/user/register",
      element: <RegisterPage />,
    },
    {
      path: "/",
      element: <Layout />,

      children: [
        {
          path: "*",
          element: <PageNotFound />,
        },
        {
          index: true,
          element: <HomePage open={isOpen} toggleDrawer={toggleDrawer} />,
        },

        {
          path: "/create-event/:organizerId",
          element: <CreateEvent />,
        },
        {
          path: "/create-ticket",
          element: <BuyTicket />,
        },
        {
          path: "/organizer",
          children: [
            {
              path: "/organizer/profile/:organizerId",
              element: <OrganizerProfile />,
            },
            {
              path: "/organizer/dashboard/:organizerId",
              element: <OrganizerDashboard />,
            },
            {
              path: "/organizer/subscriptions",
              element: <Subscription />,
            },
            {
              path: "/organizer/eventList/:organizerId",
              element: <OrganizerEventList />,
            },
            {
              path: "/organizer/eventList/:organizerId/boostPayment",
              element: <OrganizerBoostPayment />,
            },
            {
              path: "/organizer/eventList/:organizerId/detail",
              element: <EventDetail />,
            },
          ],
        },
        {
          path: "/contributor",
          element: <Contributor />,
        },
        {
          path: "/contributor/detail/:id",
          element: <OrgNameAndEvent />,
        },
        {
          path: "/event",
          element: <Event />,
        },
        {
          path: "/event/detail/:id",
          element: <EventDetail />,
        },
      ],
    },
    {
      path: "/admin",
      element: <AdminLayout />,
      children: [
        {
          path: "/admin/sidebar",
          element: <Sidebar />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}

export default App;
