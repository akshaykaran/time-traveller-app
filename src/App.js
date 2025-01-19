import React from "react";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import Home from "./Components/Home";
import WaitingList from "./Components/WaitingList";

const App = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <AppRoutes />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/waiting-list",
          element: <WaitingList />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
};
export default App;
