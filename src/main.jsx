import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter,  RouterProvider } from "react-router-dom";
import Home from './Pages/Home.jsx';
import Login from './Pages/Login';
import Register from './Pages/Register'
import RegisterUser from './pages/RegisterUser'
import RegisterPhoto from './Pages/RegisterPhoto'
import RegisterforRent from './Pages/RegisterforRent'
import Term from './Pages/Term';
import ForgotPW from './Pages/ForgotPW';
import ResetPW from './Pages/ResetPW';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/",
    element: <Home />
  },
  {
    path: "Login",
    element: <Login />
  },
  {
    path: "Register",
    element: <Register />
  },
  {
    path: "Term_of_service",
    element: <Term />
  },
  {
    path: "RegisterForUser",
    element: <RegisterUser />
  },
  {
    path: "RegisterForPhoto",
    element: <RegisterPhoto />
  },
  {
    path: "RegisterForRent",
    element: <RegisterforRent />
  },
  {
    path: "/ResetPassword",
    element: <ResetPW />
  },
  {
    path: "/ForgotPassword",
    element: <ForgotPW />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
