import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./routes";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "*",
    element: <Root />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
