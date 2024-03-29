import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./component/Navbar/Navbar";
import Footer from "./component/Footer/Footer";
import GetDriverHelp from "./component/DriverDB/GetHelp/GetHelp";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  AddPayment,
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
  Messages,
} from "./component/DriverDB";

import {
  FleetProfile,
  FleetDriver,
  OrderHistory,
  Vehicles,
  FleetInvoice,
  RiderInvoice,
  Compensation,
  DailyReport,
  WeeklyReport,
  FleetPayouts,
  FleetDashboard,
  FleetSetting,
} from "./component/Fleet";

import AccessInfo from "./pages/AccessInfo/AccessInfo";
import LessonVideo from "./pages/LessonVideo/LessonVideo";
import AboutXcab from "./component/PassengerDB/GetHelp/HelpButton/AboutXcab/AboutXcab";
import AppFeatures from "./component/PassengerDB/GetHelp/HelpButton/AppFeatures/AppFeatures";
import UsingRide from "./component/PassengerDB/GetHelp/HelpButton/UsingApp/UsingRide";
import AccountData from "./component/PassengerDB/GetHelp/HelpButton/AccoutData/AccoutData";
import PaymentPricing from "./component/PassengerDB/GetHelp/HelpButton/PaymentPricing/PaymentPricing";
import InterP from "./component/PassengerDB/InterP/InterP";
import FleetDB from "./pages/FleetDB/FleetDB";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import SetForgetPwd from "./pages/authPages/SetPwd/SetPwd";

import { useCustomerProfileMutation } from "./features/slice/profile/profileApiSlice";
import { setUserInfo } from "./features/slice/auth/auth";

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
        path: "/signUp",
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
    path: "/new-password",
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
        path: "add-payment",
        element: <AddPayment />,
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
        element: <Messages />,
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
        element: <FleetDriver />,
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
        element: <FleetSetting />,
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
  const auth = useSelector((state) => state.auth);
  const [customerProfile] = useCustomerProfileMutation();
  useEffect(() => {
    async function getProfile() {
      const res = await customerProfile().unwrap();
      await dispatch(setUserInfo(res.data));
    }
    getProfile();
  }, []);

  const initialOptions = {
    "client-id":
      "Adl8qsO1uEX1hhDG7wgNV221E-58_g1Iq55S3IwV_ZclaP7y3O9YWE0KxkjNCOfM8YtqfPbfmQRxCcFM",
    currency: "USD",
    intent: "capture",
  };

  return (
    <PayPalScriptProvider options={initialOptions}>
      <RouterProvider router={router} />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
    </PayPalScriptProvider>
  );
}
export default App;
