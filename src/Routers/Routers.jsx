import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import AllClasses from "../Pages/AllClasses/AllClasses";
import TeachOn from "../Pages/TeachOn/TeachOn";

import SignIn from "../Credentials/SignIn";
import SignUp from "../Credentials/SignUp";

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
         path: "/teachOn",
         element: <TeachOn></TeachOn>
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
  }
]);
