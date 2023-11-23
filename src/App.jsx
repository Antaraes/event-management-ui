import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import Layout from "./Layout/Layout";
import HomePage from "./pages/User/HomePage";
import AdminLayout from "./Layout/AdminLayout";
import UserLayout from "./Layout/UserLayout";
import Event from './pages/User/Event'
import Contributor from "./pages/User/Contributor";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        }
      ],
    },
    {
      path: "/event",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Event/>,
        }
      ],
    },
    {
      path: "/contributor",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Contributor/>,
        }
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
