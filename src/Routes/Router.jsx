import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Root from "../Pages/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import ForgetPassword from "../Pages/Auth/ForgetPassword";
import Classes from "../Pages/Classes/Classes";
import ClassDetails from "../Pages/Classes/ClassDetails";
import TeachOnEdurock from "../Pages/Teach/TeachOnEdurock";
import Dashboard from "../Pages/Dashboard/Dashboard";
import DashboardRoot from "../Pages/DashboardRoot";
import Payment from "../Pages/Payment/Payment";
import TeacherRequest from "../Pages/Dashboard/TeacherRequest/TeacherRequest";
import MyEnrolledClasses from "../Pages/Dashboard/MyEnrolledClasses/MyEnrolledClasses";
import EnrollClassDetails from "../Pages/Dashboard/MyEnrolledClasses/EnrollClassDetails";
import Users from "../Pages/Dashboard/Users/Users";
import MyProfile from "../Pages/Dashboard/MyProfile/MyProfile";
import AddClass from "../Pages/Dashboard/MyCLasses/AddClass";
import AllClasses from "../Pages/AllClasses/AllClasses";
import MyClasses from "../Pages/Dashboard/MyCLasses/MyClasses";
import MyCLassUpdate from "../Pages/Dashboard/MyCLasses/MyCLassUpdate";
import MyClassDetails from "../Pages/Dashboard/MyCLasses/MyClassDetails";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import UserRoute from "./UserRoute";
import TeacherRoute from "./TeacherRoute";
import Error404 from "../Pages/ErrorPage/Error404";
import AboutUs from "../Pages/AboutUs/AboutUs";


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
        {
          path: "/Classes",
          element: <Classes></Classes>,
        },
        {
          path: "/Class-Details/:id",
          element: <PrivateRoute><ClassDetails></ClassDetails></PrivateRoute>,
        },
        {
          path: "/Teach-On-Edurock",
          element: <PrivateRoute><TeachOnEdurock></TeachOnEdurock></PrivateRoute>,
        },
        {
          path: "/Payment/:id",
          element: <PrivateRoute><Payment></Payment></PrivateRoute>,
        },
        {
          path: "*",
          element: <Error404></Error404>,
        },
        {
          path: "/AboutUs",
          element: <AboutUs></AboutUs>,
        }
      ]
    },
    {
      path: "/Dashboard",
      element: <PrivateRoute><DashboardRoot></DashboardRoot></PrivateRoute>,
      children:[
        {
          path: "/Dashboard",
          element: <Dashboard></Dashboard>,
        },
        {
          path: "/Dashboard/TeacherRequest",
          element: <AdminRoute><TeacherRequest></TeacherRequest></AdminRoute>,
        },
        {
          path: "/Dashboard/My-enroll-class",
          element: <UserRoute><MyEnrolledClasses></MyEnrolledClasses></UserRoute>,
        },
        {
          path: "/Dashboard/Enroll-Class-Details/:id",
          element: <UserRoute><EnrollClassDetails></EnrollClassDetails></UserRoute>,
        },
        {
          path: "/Dashboard/Users",
          element: <AdminRoute><Users></Users></AdminRoute>,
        },
        {
          path: "/Dashboard/My-Profile",
          element: <MyProfile></MyProfile>,
        },
        {
          path: "/Dashboard/AddClass",
          element:  <TeacherRoute><AddClass></AddClass></TeacherRoute>,
        },
        {
          path: "/Dashboard/AllClasses",
          element: <AdminRoute><AllClasses></AllClasses></AdminRoute>,
        },
        {
          path: "/Dashboard/MyClasses",
          element: <TeacherRoute><MyClasses></MyClasses></TeacherRoute>,
        },
        {
          path: "/Dashboard/MyClassUpdate/:id",
          element: <TeacherRoute><MyCLassUpdate></MyCLassUpdate></TeacherRoute>,
        },
        {
          path: "/Dashboard/MyClassDetails/:id",
          element: <MyClassDetails></MyClassDetails>,
        }
      ]
    }
  ]);