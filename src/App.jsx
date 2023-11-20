import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./Layout/Layout";
import HomePage from "./pages/HomePage";
import AdminLayout from "./Layout/AdminLayout";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
      ],
    },
    {
      path: "/dashboard",
      element: <AdminLayout />,
      children: [{}],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
