import React from "react";

import { createBrowserRouter } from "react-router-dom";
import Home from "../page/Home";
import Login from "../page/Login";
import Signup from "../page/Signup";
import Forgot from "../page/forgot";
import UpdatePassword from "../page/UpdatePassword";
import RestaurantView from "../page/Order";
import PlaceOrder from "../page/placeOrder";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "signup",
    element: <Signup />,
  },
  {
    path: "forgot/password",
    element: <Forgot />,
  },
  {
    path: "update/password",
    element: <UpdatePassword />
  },
  {
    path: "order",
    element: <RestaurantView />,
    state: {
      isNewMealCreated: false
    }
  },
  {
    path: "order/complete",
    element: <PlaceOrder />
  }
]);
