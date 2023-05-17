import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useNavigate,
} from "react-router-dom";
import Navbar from "./component/Navbar/Navbar";
import Footer from "./component/Footer/Footer";
import { loadUser, logoutUser } from "./features/Auths";
import GetDriverHelp from "./component/DriverDB/GetHelp/GetHelp";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import {
  Home,
  OTP,
  LoginDriver,
  LoginCustomer,
  PassengerDB,
  Profile,
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
  Signupbanner,
  DriverDB,
  Privacy,
  About,
  Safety,
  Testimonial,
  Service,
  Customer,
  Driver,
  Intro,
  NotFound,
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

import AccessInfo from "./pages/AccessInfo/AccessInfo";
import LessonVideo from "./pages/LessonVideo/LessonVideo";
import AboutXcab from "./component/PassengerDB/GetHelp/HelpButton/AboutXcab/AboutXcab";
import AppFeatures from "./component/PassengerDB/GetHelp/HelpButton/AppFeatures/AppFeatures";
import UsingRide from "./component/PassengerDB/GetHelp/HelpButton/UsingApp/UsingRide";
import AccountData from "./component/PassengerDB/GetHelp/HelpButton/AccoutData/AccoutData";
import PaymentPricing from "./component/PassengerDB/GetHelp/HelpButton/PaymentPricing/PaymentPricing";
import { TbRipple } from "react-icons/tb";
import InterP from "./component/PassengerDB/InterP/InterP";
import FleetDB from "./pages/FleetDB/FleetDB";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { DateCalendar } from "@mui/x-date-pickers";
import { loadProfile } from "./features/customer/putCustomer";
import axiosInstance from "./api";
import SetForgetPwd from "./pages/authPages/SetPwd/SetPwd";
import axios from "axios";

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
    path: "/setpassword",
    element: <SetForgetPwd />,
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
    path: "/lessondb",
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
    path: "/customer",
    element: <PassengerDB />,
    children: [
      {
        path: "/customer",
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
        path: "/driver",
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
        element: <GetDriverHelp />,
      },
      {
        path: "help/become/driver",
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
  {
    path: "*",
    element: <NotFound />,
  },
]);

function App() {
  const dispatch = useDispatch();
  // let updateToken = async () => {
  //   let response = await fetch(
  //     "https://techvonix.onrender.com/api/v1/auth/token/refresh",
  //     {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${access}`,
  //       },
  //       body: JSON.stringify({ refresh: refreshToken }),
  //     }
  //   );
  //   let data = await response.json();
  //   if (response.status === 200 || response.status === 201) {
  //     setAccess(data?.access);
  //     localStorage.setItem("authToken", JSON.stringify(data));
  //   } else {
  //     dispatch(logoutUser());
  //   }
  //   if (isLoading) {
  //     setIsLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   if (isLoading) {
  //     updateToken();
  //   }
  //   let hrs2 = 1000 * 60 * 60 * 2;

  //   let interval = setInterval(() => {
  //     if (refreshToken) {
  //       updateToken();
  //     }
  //   }, hrs2);
  //   return () => clearInterval(interval);
  // }, [access, isLoading, dispatch]);
  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const res = await axiosInstance.get(
  //         "https://techvonix.onrender.com/api/v1/profile/"
  //       );
  //       localStorage.setItem("profile", JSON.stringify(res));
  //     } catch (err) {
  //       console.log(err);
  //       dispatch(logoutUser());
  //     }
  //   })();
  // }, []);

  function getLocalAccessToken() {
    const accessToken = window.localStorage.getItem("accessToken");
    return accessToken;
  }

  function getLocalRefreshToken() {
    const refreshToken = window.localStorage.getItem("refreshToken");
    return refreshToken;
  }

  const instance = axios.create({
    baseURL: "techvonix.onrender.com/api/v1",
    headers: {
      "Content-Type": "application/json",
    },
  });

  instance.interceptors.request.use(
    (config) => {
      const token = getLocalAccessToken();
      if (token) {
        config.headers = {
          Authorization: `Bearer ${JSON.stringify(token)}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        };
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    (res) => {
      return res;
    },
    async (err) => {
      const originalConfig = err.config;

      if (err.response) {
        // Access Token was expired
        if (err.response.status === 401 && !originalConfig._retry) {
          originalConfig._retry = true;

          try {
            const rs = await refreshToken();
            const { accessToken } = rs.data.access;
            window.localStorage.setItem("accessToken", accessToken);
            // config.headers = {
            //   Authorization: `Bearer ${accessToken}`,
            //   Accept: "application/json",
            //   "Content-Type": "application/json",
            // };
            instance.defaults.headers.common["Authorization"] =
              "Bearer " + JSON.parse(accessToken);

            return instance(originalConfig);
          } catch (_error) {
            if (_error.response && _error.response.data) {
              return Promise.reject(_error.response.data);
            }

            return Promise.reject(_error);
          }
        }

        if (err.response.status === 403 && err.response.data) {
          return Promise.reject(err.response.data);
        }
      }

      return Promise.reject(err);
    }
  );

  function signin() {
    return instance.post("/auth/signin", {
      username: "zkoder",
      password: "12345678",
    });
  }

  function refreshToken() {
    const body = JSON.stringify({
      refresh:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjg0Mjg1NjIzLCJpYXQiOjE2ODQyNzQ4MjMsImp0aSI6ImVkZjcyOGE1YjI3NTQ5ZjRhMGNlOWNjMmZlMzAyYWEzIiwidXNlcl9pZCI6IjQ4YzMwNmI1LWU5M2QtNGRlYy1hMDVkLWRmZWI1YTZmNWE2NSJ9.WdlaRF5V-QsvbAAA-q59UyJbl96tfxBl-WNv3ph71mI",
    });
    return axios.post("/auth/refreshtoken", body);
  }

  function getUserContent() {
    return instance.get(
      "https://techvonix.onrender.com/api/v1/auth/token/refresh"
    );
  }

  // async function login() {
  //   var resultElement = document.getElementById("getResult1");
  //   resultElement.innerHTML = "";

  //   try {
  //     const res = await signin();

  //     const { accessToken, refreshToken } = res.data;
  //     window.localStorage.setItem("accessToken", accessToken);
  //     window.localStorage.setItem("refreshToken", refreshToken);

  //     resultElement.innerHTML =
  //       "<pre>" +
  //       JSON.stringify({ accessToken, refreshToken }, null, 2) +
  //       "</pre>";
  //   } catch (err) {
  //     resultElement.innerHTML = err;
  //   }
  // }

  // async function getData() {
  //   var resultElement = document.getElementById("getResult2");
  //   resultElement.innerHTML = "";

  //   try {
  //     const res = await getUserContent();

  //     resultElement.innerHTML =
  //       "<pre>" + JSON.stringify(res.data, null, 2) + "</pre>";
  //   } catch (err) {
  //     resultElement.innerHTML =
  //       "<pre>" + JSON.stringify(err, null, 2) + "</pre>";
  //   }
  // }

  // function clearOutput1() {
  //   var resultElement = document.getElementById("getResult1");
  //   resultElement.innerHTML = "";
  // }

  // function clearOutput2() {
  //   var resultElement = document.getElementById("getResult2");
  //   resultElement.innerHTML = "";
  // }
  useEffect(() => {
    dispatch(loadUser(null));
  }, [dispatch]);
  useEffect(() => {
    getUserContent();
    console.log(getUserContent());
  }, [dispatch]);

  useEffect(() => {
    dispatch(loadProfile(null));
  }, [dispatch]);

  const initialOptions = {
    "client-id":
      "Adl8qsO1uEX1hhDG7wgNV221E-58_g1Iq55S3IwV_ZclaP7y3O9YWE0KxkjNCOfM8YtqfPbfmQRxCcFM",
    currency: "USD",
    intent: "capture",
  };

  return (
    <PayPalScriptProvider options={initialOptions}>
      <RouterProvider router={router} />;
    </PayPalScriptProvider>
  );
}
export default App;
