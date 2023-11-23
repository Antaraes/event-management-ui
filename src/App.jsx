import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import Layout from "./Layout/Layout";
import HomePage from "./pages/User/HomePage";
import AdminLayout from "./Layout/AdminLayout";
import UserLayout from "./Layout/UserLayout";
import Sidebar from "./components/Admin/sidebar";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [{}],
    },
    {
      path: "/organizer",
      element: <UserLayout />,
      children: [{}],
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
  return <RouterProvider router={router} />;
}

export default App;
