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
import RegisterPage from "./pages/User/RegisterPage";
function App() {
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
          index: true,
          element: <HomePage />,
        },
        {
          path: "/subscriptions",
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
