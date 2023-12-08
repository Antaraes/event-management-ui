import React, { useState, useEffect } from "react";
import {
  RouterProvider,
  createBrowserRouter,
  useLocation,
} from "react-router-dom";
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
import BecomeAnOrganizer from "./pages/User/BecomeAnOrganizer";
import { useSelector } from "react-redux";
import OrganizerEventList from "./pages/User/OrganizerEventList";
import OrganizerBoostPayment from "./pages/User/OrganizerBoostPayment";
import * as api from "./api/index";
import OrganizerInvoices from "./pages/User/OrganizerInvoices";
import ProtectedRoute from "./helper/ProtectedRoute";
import { useCookies } from "react-cookie";
import Verification from "./pages/User/Verification";
import EmailVerify from "./pages/User/EmailVerify";

import Dashboard from "./pages/Admin/Dashboard";
import Profile from "./pages/Admin/Profile";

import OrgList from "./pages/Admin/OrgList";
import OrganizerDetail from "./pages/Admin/OrganizerDetail";
import OrganizerEventDetail from "./pages/Admin/component/organizerEventDetail";

import EventList from "./pages/Admin/EventList";
import AdminProfileCard from "./components/Admin/AdminProfileCard";
import SuccessTicketPage from "./pages/User/SuccessTicketPage";
function App() {
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  const [isOpen, setIsOpen] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);

  console.log(user, isAuthenticated);

  useEffect(() => {
    const { accessToken } = cookies;
    console.log("accessToken", accessToken);
    const checkTokenExpiration = async () => {
      if (accessToken) {
        try {
          if (30 * 1000 - Date.now() < 5 * 60 * 1000) {
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
  console.log("document.cookie", document.cookie);

  const router = createBrowserRouter([
    {
      path: "/verification/:userId/:verifyToken",
      element: <Verification />,
    },
    {
      path: "verify",
      element: <EmailVerify />,
    },
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
          path: "/buy-ticket/:eventId",
          element: <BuyTicket />,
        },

        {
          path: "/ticket-success",
          element: <SuccessTicketPage />,
        },
        {
          path: "/organizer",
          element: <ProtectedRoute />,
          children: [
            {
              path: "/organizer/create-event",
              element: <CreateEvent />,
            },
            {
              path: "/organizer/profile",
              element: <OrganizerProfile />,
            },
            {
              path: "/organizer/dashboard",
              element: <OrganizerDashboard />,
            },
            {
              path: "/organizer/invoices/",
              element: <OrganizerInvoices />,
            },
            {
              path: "/organizer/subscriptions",
              element: <Subscription />,
            },
            {
              path: "/organizer/eventList",
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
          path: "/contributor/detail/:organizerId",
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
        {
          path: "become-organizer",
          element: <BecomeAnOrganizer />,
        },
      ],
    },
    {
      path: "/admin",
      element: <AdminLayout />,
      children: [
        {
          path: "/admin/home",
          element: <Dashboard />,
        },
        {
          path: "/admin/profile/:adminId",
          element: <Profile />,
        },
        {
          path: "/admin/organizer",
          element: <OrgList />,
        },
        {
          path: "/admin/organizer/:id",
          element: <OrganizerDetail />,
        },
        {
          path: "/admin/event",
          element: <EventList />,
        },
        {
          path: "/admin/event/:id",
          element: <OrganizerEventDetail />,
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
