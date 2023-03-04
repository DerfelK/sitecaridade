import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import { Calendario, Caridade, Contato, Fotos, Fundamentos, Historia } from './Pages';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "historia",
    element: <Historia />,
  },
  {
    path: "fundamentos",
    element: <Fundamentos />,
  },
  {
    path: "fotos",
    element: <Fotos />,
  },
  {
    path: "calendario",
    element: <Calendario />,
  },
  {
    path: "/fotos",
    element: <Fotos />,
  },
  {
    path: "/caridade",
    element: <Caridade />,
  },
  {
    path: "/contato",
    element: <Contato />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
