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
  PassengerDB, Profile, UserSignup, Whattolearn,
  ForgetPwd, Newpwd, mylearnnig, Experiencedriver, WatToGo, StartTraining, Techdrive, FormTab, Tab, Mylearnnig
} from './pages';
import Signupbanner from './pages/Signupbanner/Signupbanner';
import Background from './component/Background/Background';
import AccessInfo from './pages/AccessInfo/AccessInfo';
import LessonVideo from './pages/LessonVideo/LessonVideo';

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
    path: "/tab",
    element: <Tab />,
  },
  {
    path: "/vdeatail",
    element: <FormTab />,
  },
  {
    path: "/techdrive",
    element: <Techdrive />,
  },
  {
    path: "/whattolearn",
    element: <Whattolearn />,
  },
  {
    path: "/lesson",
    element: <LessonVideo />,
  },
  {
    path: "/mylearning",
    element: <Mylearnnig />,
  },
  {
    path: "/info",
    element: <AccessInfo />,
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
