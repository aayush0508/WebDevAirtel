import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route
} from "react-router-dom";
import "./index.css";
import Root from "./routes/root";
import Header from "./routes/Header";
import Link1 from "./routes/link1";
import Link2 from "./routes/link2";






const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "link1",
        element: <Link1 />

      },
      {
        path: "link2",
        element: <Link2 />

      },

    ]
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
