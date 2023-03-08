import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet
} from "react-router-dom";
import Navbar from './component/Navbar/Navbar'
import Footer from './component/Footer/Footer'
import { Home,InterP, LocalP, Login, NotFound, PassengerDB, Profile } from './pages';

const Layout = () => {
  return <>
    <Navbar />
    <Outlet />
    <Footer />
  </>
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/profile",
        element: <Profile />
      },
      {
        path: "/InterP",
        element: <InterP />,
      },
      {
        path: "/",
        element: <Home />
      },
    ]
  },
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/login",
    element: <Login />
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}
export default App
