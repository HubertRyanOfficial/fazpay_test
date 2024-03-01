import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { UserProvider } from "./contexts/UserContext";

import "./index.css";

import Auth from "./routes/Main";
import Dashboard from "./routes/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Auth />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);

createRoot(document.getElementById("root")).render(
  <UserProvider>
    <RouterProvider router={router} />
  </UserProvider>
);
