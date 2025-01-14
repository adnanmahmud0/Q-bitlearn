import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Root from "../Pages/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import ForgetPassword from "../Pages/Auth/ForgetPassword";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:
      [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path:"/Register",
          element:<Register></Register>,
        },
        {
          path: "/Forget-Password",
          element: <ForgetPassword></ForgetPassword>,
        },
      ]
    },
  ]);