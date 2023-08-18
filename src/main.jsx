import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import { Login } from './pages/login.jsx';
import { ErrorPage } from './pages/ErrorPage.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Usuários } from './pages/Usuários.jsx';
import { Cadastro } from './pages/Cadastro.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/usuários",
    element: <Usuários/>,
  },
  {
    path: "/cadastro",
    element: <Cadastro/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
