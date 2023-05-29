import React from "react";

import { createBrowserRouter  } from "react-router-dom";
import Home from "../page/Home";
import Login from "../page/Login";
import Signup from "../page/Signup";
import Forgot from "../page/Forgot";


export const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "login",
        element: <Login />
    },
    {
        path: "signup",
        element: <Signup />
    },
    {
        path: "forgot",
        element: <Forgot />
    }
]);
