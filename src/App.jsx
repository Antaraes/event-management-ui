import React, { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./Layout/Layout";
import HomePage from "./pages/User/HomePage";
import AdminLayout from "./Layout/AdminLayout";
import UserLayout from "./Layout/UserLayout";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const router = createBrowserRouter([
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
      ],
    },
    {
      path: "/organizer",
      element: <UserLayout />,
      children: [{}],
    },
    {
      path: "/admin",
      element: <AdminLayout />,
      children: [{}],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
