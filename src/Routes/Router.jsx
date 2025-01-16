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
          element: <ClassDetails></ClassDetails>,
        },
        {
          path: "/Teach-On-Edurock",
          element: <TeachOnEdurock></TeachOnEdurock>,
        },
        {
          path: "/Payment/:id",
          element: <Payment></Payment>,
        }
      ]
    },
    {
      path: "/Dashboard",
      element: <DashboardRoot></DashboardRoot>,
      children:[
        {
          path: "/Dashboard",
          element: <Dashboard></Dashboard>,
        },
        {
          path: "/Dashboard/TeacherRequest",
          element: <TeacherRequest></TeacherRequest>,
        },
        {
          path: "/Dashboard/My-enroll-class",
          element: <MyEnrolledClasses></MyEnrolledClasses>,
        },
        {
          path: "/Dashboard/Enroll-Class-Details/:id",
          element: <EnrollClassDetails></EnrollClassDetails>
        }
      ]
    }
  ]);