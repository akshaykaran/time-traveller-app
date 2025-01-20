import React from "react";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import Home from "./pages/Home";
import WaitingList from "./pages/WaitingList";
import ContactUs from "./pages/ContactUs";

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
        {
          path: "/contacts",
          element: <ContactUs />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
};
export default App;
