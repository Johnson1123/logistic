import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./component/Navbar/Navbar";
import Footer from "./component/Footer/Footer";
import { loadUser, logoutUser } from "./features/Auths";
import {
  Home,
  OTP,
  LoginDriver,
  LoginCustomer,
  PassengerDB,
  Profile,
  UserSignup,
  Whattolearn,
  ForgetPwd,
  Newpwd,
  Experiencedriver,
  WatToGo,
  StartTraining,
  Techdrive,
  FormTab,
  Tab,
  Mylearnnig,
  DriverDB,
} from "./pages";

import {
  Dashboard,
  Booking,
  Message,
  PassengerProfile,
  ProfileSetting,
  GetHelp,
  Trip,
} from "./component/PassengerDB/index";

import {
  DriverDashboard,
  DriverProfile,
  Myride,
  Mydocument,
  Vehicle,
  XlcabInvoice,
  BalanceReport,
  TaxReport,
  Payout,
  Setting,
} from "./component/DriverDB";

import {
  FleetProfile,
  FleetDriver,
  OrderHistory,
  DriversList,
  Vehicles,
  FleetInvoice,
  RiderInvoice,
  Compensation,
  DailyReport,
  WeeklyReport,
  FleetPayouts,
  FleetDashboard,
} from "./component/Fleet";

import Signupbanner from "./pages/Signupbanner/Signupbanner";
import AccessInfo from "./pages/AccessInfo/AccessInfo";
import LessonVideo from "./pages/LessonVideo/LessonVideo";
import AboutXcab from "./component/PassengerDB/GetHelp/HelpButton/AboutXcab/AboutXcab";
import AppFeatures from "./component/PassengerDB/GetHelp/HelpButton/AppFeatures/AppFeatures";
import UsingRide from "./component/PassengerDB/GetHelp/HelpButton/UsingApp/UsingRide";
import AccountData from "./component/PassengerDB/GetHelp/HelpButton/AccoutData/AccoutData";
import PaymentPricing from "./component/PassengerDB/GetHelp/HelpButton/PaymentPricing/PaymentPricing";
import Wattogo from "./component/InternaltionalP/Wattogo/Wattogo";
import { TbRipple } from "react-icons/tb";
import InterP from "./component/PassengerDB/InterP/InterP";
import FleetDB from "./pages/FleetDB/FleetDB";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import About from "./pages/Footers/About/About";
import Privacy from "./pages/Footers/Privacy/Privacy";
import Safety from "./pages/Footers/Safety/Safety";
import Intro from "./pages/Footers/Intro/Intro";
import Service from "./pages/Footers/Service/Service";
import Testimonial from "./pages/Footers/Testimonials/Testimonial";
import Customer from "./pages/register/Customer/Customer";
import Driver from "./pages/register/Driver/Driver";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "profile",
        element: <Profile />,
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
        path: "/xlcab",
        element: <Intro />,
      },
      {
        path: "/service",
        element: <Service />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/privacy",
        element: <Privacy />,
      },
      {
        path: "/testimonial",
        element: <Testimonial />,
      },
      {
        path: "/safety",
        element: <Safety />,
      },
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  // {
  //   path: "/signupuser",
  //   element: <UserSignup />,
  // },
  {
    path: "/customer/register",
    element: <Customer />,
  },
  {
    path: "/driver/register",
    element: <Driver />,
  },
  {
    path: "/login/driver",
    element: <LoginDriver />,
  },
  {
    path: "/login/customer",
    element: <LoginCustomer />,
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
    path: "/db",
    element: <DriverDB />,
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
    path: "/customer",
    element: <PassengerDB />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "profile",
        element: <PassengerProfile />,
      },
      {
        path: "trip",
        element: <Trip />,
      },
      {
        path: "booking",
        element: <Booking />,
      },
      {
        path: "messages",
        element: <Message />,
      },
      {
        path: "international/Partner",
        element: <InterP />,
      },

      {
        path: "profile",
        element: <PassengerProfile />,
      },
      {
        path: "setting",
        element: <ProfileSetting />,
      },
      {
        path: "help",
        element: <GetHelp />,
      },
      {
        path: "help/ride",
        element: <AboutXcab />,
      },
      {
        path: "help/account",
        element: <AccountData />,
      },
      {
        path: "help/payment",
        element: <PaymentPricing />,
      },
      {
        path: "help/app",
        element: <AppFeatures />,
      },
      {
        path: "help/using/ride",
        element: <UsingRide />,
      },
    ],
  },
  {
    path: "/driver",
    element: <DriverDB />,
    children: [
      {
        path: "dashboard",
        element: <DriverDashboard />,
      },
      {
        path: "profile",
        element: <DriverProfile />,
      },
      {
        path: "ride",
        element: <Myride />,
      },
      {
        path: "document",
        element: <Mydocument />,
      },
      {
        path: "message",
        element: <Message />,
      },
      {
        path: "vehicle",
        element: <Vehicle />,
      },
      {
        path: "invoice",
        element: <XlcabInvoice />,
      },
      {
        path: "xlcabInvoice",
        element: <XlcabInvoice />,
      },
      {
        path: "balance",
        element: <BalanceReport />,
      },
      {
        path: "tax",
        element: <TaxReport />,
      },
      {
        path: "payout",
        element: <Payout />,
      },
      {
        path: "setting",
        element: <Setting />,
      },
      {
        path: "help",
        element: <Setting />,
      },
      {
        path: "Logout",
        element: <Setting />,
      },
    ],
  },
  {
    path: "/fleet",
    element: <FleetDB />,
    children: [
      {
        path: "dashboard",
        element: <FleetDashboard />,
      },
      {
        path: "profile",
        element: <FleetProfile />,
      },
      {
        path: "order",
        element: <OrderHistory />,
      },
      {
        path: "drivers",
        element: <FleetDriver />,
      },
      {
        path: "message",
        element: <DriversList />,
      },
      {
        path: "vehicles",
        element: <Vehicles />,
      },
      {
        path: "expired",
        element: <Vehicle />,
      },
      {
        path: "invoice",
        element: <FleetInvoice />,
      },
      {
        path: "rider/invoice",
        element: <RiderInvoice />,
      },
      {
        path: "compensation",
        element: <Compensation />,
      },
      {
        path: "daily/report",
        element: <DailyReport />,
      },
      {
        path: "Weekly/report",
        element: <WeeklyReport />,
      },
      {
        path: "Payout",
        element: <FleetPayouts />,
      },
      {
        path: "setting",
        element: <Setting />,
      },
    ],
  },
]);

function App() {
  const auth = useSelector((state) => state.auth);
  const tokenData = JSON.parse(localStorage.getItem("token"));
  const refreshToken = tokenData?.data?.refresh;
  const dispatch = useDispatch();

  localStorage.setItem("authToken", tokenData?.data?.access);
  const [isLoading, setIsLoading] = useState(true);
  const [access, setAccess] = useState(
    localStorage.getItem("authToken")
      ? localStorage.getItem("authToken")
      : localStorage.getItem("token")?.data?.access
  );
  let updateToken = async () => {
    let response = await fetch(
      "https://techvonix.onrender.com/api/v1/auth/token/refresh",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${access}`,
        },
        body: JSON.stringify({ refresh: refreshToken }),
      }
    );

    let data = await response.json();

    if (response.status === 200) {
      setAccess(response.data);
      localStorage.setItem("accessToken", JSON.stringify(data));
    } else {
      dispatch(logoutUser());
    }

    if (isLoading) {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isLoading) {
      updateToken();
    }

    let fourMinutes = 1000 * 60 * 2;

    let interval = setInterval(() => {
      if (refreshToken) {
        updateToken();
      }
    }, fourMinutes);
    return () => clearInterval(interval);
  }, [access, dispatch, isLoading]);

  useEffect(() => {
    (async () => {
      try {
        if (auth.user_id) {
          let response = await fetch(
            "https://techvonix.onrender.com/api/v1/profile/",
            {
              method: "get",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${access}`,
              },
            }
          );
          console.log(response);
          if (response.status === 200) {
            localStorage.setItem(
              "profile",
              JSON.stringify(response?.data?.data)
            );
          }
        }
      } catch (err) {
        dispatch(logoutUser());
      }
    })();
  }, [auth.user_id, dispatch]);

  useEffect(() => {
    dispatch(loadUser(null));
  }, [dispatch]);

  useEffect(() => {
    dispatch(loadUser(null));
  }, [dispatch]);

  return <RouterProvider router={router} />;
}
export default App;
