import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import AllClasses from "../Pages/AllClasses/AllClasses";
import TeachOn from "../Pages/TeachOn/TeachOn";
import Dashboard from "../Layouts/Dashboard";
import SignIn from "../Credentials/SignIn";
import SignUp from "../Credentials/SignUp";
import ClassDetails from "../Pages/ClassDetails/ClassDetails";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import MyProfile from "../Pages/Dashboard/MyProfile/MyProfile";
import TeacherReq from '../Pages/Dashboard/TeacherReq/TeacherReq';
import AdminAllClasses from "../Pages/Dashboard/AdminAllClasses/AdminAllClasses";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/allClasses",
        element: <AllClasses></AllClasses>
      }, 
      {
        path:'/classdetails/:id',
        element:<ClassDetails></ClassDetails>
      },
      {
         path: "/teachOn",
         element: <TeachOn></TeachOn>
      }
    ]
  },
  {
    path:'dashboard',
    element:<Dashboard></Dashboard>,
    children:[
      {
        path:'users',
        element:<AdminRoute><AllUsers></AllUsers></AdminRoute>,
      },
      {
        path:'myprofile',
        element:<PrivateRoute><MyProfile></MyProfile></PrivateRoute>
      },
      {
        path:'teacherreq',
        element:<TeacherReq></TeacherReq>
      },
      {
        path:'adminallclasses',
        element:<AdminAllClasses></AdminAllClasses>,
      }
    ]
  },
  {
    path:"/signin",
    element: <SignIn></SignIn>
  },
  {
    path:"/signup",
    element:<SignUp></SignUp>
  },
  {
    path:"*",
    element:<ErrorPage></ErrorPage>
  }
]);
