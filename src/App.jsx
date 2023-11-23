import React, { useState } from "react";
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
import OrganizerProfile from "./pages/User/OrganizerProfile";
import OrganizerDashboard from "./pages/User/OrganizerDashboard";
import Subscription from "./pages/User/Subscription";
import LoginPage from "./pages/User/LoginPage";
import RegisterPage from "./pages/User/RegisterPage";
import { Toaster } from "react-hot-toast";
import CreateEvent from "./pages/User/CreateEvent";
import BuyTicket from "./pages/User/BuyTicket";
import PageNotFound from "./pages/PageNotFound";

function App() {
  const [isOpen, setIsOpen] = useState(false);

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
          path: "/subscriptions",
          element: <Subscription />,
        },
        {
          path: "/create-event",
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
              path: "/organizer",
              element: <Organizer />,
            },
            {
              path: "/organizer/profile/:organizerId",
              element: <OrganizerProfile />,
            },
            {
              path: "/organizer/dashboard/:organizerId",
              element: <OrganizerDashboard />,
            },
          ],
        },
        {
          path: "/event",
          element: <Event />,
        },
        {
          path: "/event/:id",
          element: <EventDetail />,
        },
      ],
    },
    {
      path: "/admin",
      element: <AdminLayout />,
      children: [{}],
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
