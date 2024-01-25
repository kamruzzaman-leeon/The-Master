import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import AllClasses from "../Pages/AllClasses/AllClasses";
import TeachOn from "../Pages/TeachOn/TeachOn";
import Dashboard from "../Layouts/Dashboard";
import SignIn from "../Credentials/SignIn";
import SignUp from "../Credentials/SignUp";
import ClassDetails from "../Pages/ClassDetails/ClassDetails";
import AllUsers from "../Pages/Dashboard/Admin/AllUsers/AllUsers";
import MyProfile from "../Pages/Dashboard/MyProfile/MyProfile";
import TeacherReq from '../Pages/Dashboard/Admin/TeacherReq/TeacherReq';
import AdminAllClasses from "../Pages/Dashboard/Admin/AdminAllClasses/AdminAllClasses";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";
import AddClass from "../Pages/Dashboard/Teacher/AddClass/AddClass";
import MyClasses from "../Pages/Dashboard/Teacher/MyClasses/MyClasses";
import TeacherRoute from "./TeacherRoute";
import MyClassDetails from "../Pages/Dashboard/Teacher/MyClassDetails/MyClassDetails";


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
        element:<PrivateRoute><ClassDetails></ClassDetails></PrivateRoute>
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
        element:<AdminRoute><TeacherReq></TeacherReq></AdminRoute>
      },
      {
        path:'adminallclasses',
        element:<AdminAllClasses></AdminAllClasses>,
      },
      {
        path:'teacher/addclass',
        element:<TeacherRoute><AddClass></AddClass></TeacherRoute>
      },
      {
        path:'teacher/myclass',
        element:<TeacherRoute><MyClasses></MyClasses></TeacherRoute>
      },
      {
        path:'teacher/myclassdetails/:id',
        element:<MyClassDetails></MyClassDetails>
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
