import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter,  RouterProvider } from "react-router-dom";
import Home from './Pages/Home.jsx';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Term from './Pages/Term';




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
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
