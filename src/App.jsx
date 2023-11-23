import React, { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./index.css";
import Layout from "./Layout/Layout";
import HomePage from "./pages/User/HomePage";
import AdminLayout from "./Layout/AdminLayout";
import UserLayout from "./Layout/UserLayout";
import OrganizerProfile from "./pages/User/OrganizerProfile";
import OrganizerDashboard from "./pages/User/OrganizerDashboard";
import Subscription from "./pages/User/Subscription";
import LoginPage from "./pages/User/LoginPage";
import { Toaster } from "react-hot-toast";

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
      path: "/",
      element: <Layout toggleDrawer={toggleDrawer} isOpen={isOpen} />,
      children: [
        {
          index: true,
          element: <HomePage open={isOpen} toggleDrawer={toggleDrawer} />,
        },
      ],
    },
    {
      path: "/Trending",
      element: <Layout toggleDrawer={toggleDrawer} isOpen={isOpen} />,
      children: [
        {
          index: true,
          element: <HomePage open={isOpen} toggleDrawer={toggleDrawer} />,
        },
      ],
    },

    {
      path: "/Upcoming",
      element: <Layout toggleDrawer={toggleDrawer} isOpen={isOpen} />,
      children: [
        {
          index: true,
          element: <HomePage open={isOpen} toggleDrawer={toggleDrawer} />,
        },
      ],
    },
    {
      path: "/CreateEvent",
      element: <Layout toggleDrawer={toggleDrawer} isOpen={isOpen} />,
      children: [
        {
          index: true,
          element: <HomePage open={isOpen} toggleDrawer={toggleDrawer} />,
        },
        {
          path: "/CreateEvent/subscriptions",
          element: <Subscription />,
        },
      ],
    },
    {
      path: "/organizer",
      element: <UserLayout />,
      children: [
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
