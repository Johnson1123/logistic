import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet
} from "react-router-dom";
import Navbar from './component/Navbar/Navbar'
import Footer from './component/Footer/Footer'
import { 
  Home,InterP, LocalP, OTP,
  Loginuser, Login, NotFound,
  PassengerDB, Profile, UserSignup,
  ForgetPwd, Newpwd, Experiencedriver, WatToGo, StartTraining, Techdrive
} from './pages';
import Signupbanner from './pages/Signupbanner/Signupbanner';
import Background from './component/Background/Background';

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
        path: "/tosignUp",
        element: <Signupbanner />,
      },
      {
        path: "/home",
        element: <Home />
      },
      {
        path: "/",
        element: <Home />
      },
    ]
  },
  {
    path: "/signupuser",
    element: <UserSignup />,
  },
  {
    path: "/loginuser",
    element: <Loginuser />,
  },
  {
    path: "/otp",
    element: <OTP />,
  },
  {
    path: "/forgetpwd",
    element: <ForgetPwd />,
  },
  {
    path: "/newpwd",
    element: <Newpwd />,
  },
  {
    path: "/experience",
    element: <Experiencedriver />,
  },
  {
    path: "/wattogo",
    element: <WatToGo />,
  },
  {
    path: "/stn",
    element: <StartTraining />,
  },
  {
    path: "/techdrive",
    element: <Techdrive />,
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
