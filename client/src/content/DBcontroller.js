import { RxDashboard } from "react-icons/rx";
import { FaUserAlt } from "react-icons/fa";
import { FaThList } from "react-icons/fa";
import { TbMessage } from "react-icons/tb";
import { IoLogOutOutline } from "react-icons/io5";
import { BiHelpCircle } from "react-icons/bi";
import { FcSettings } from "react-icons/fc";
import { MdPayment } from "react-icons/md";
import { TbFileInvoice } from "react-icons/tb";
import { TfiMenuAlt } from "react-icons/tfi";
import { BsFillFilePostFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import logoutUser from "../features/Auths";
export const DBcontroller = [
  {
    id: 1,
    label: "Dashboard",
    icon: <RxDashboard />,
    href: "/driver",
  },
  {
    id: 2,
    label: "Profile",
    icon: <FaUserAlt />,
    href: "profile",
  },
  {
    id: 3,
    label: "My Rides",
    icon: <FaThList />,
    href: "ride",
  },
  {
    id: 4,
    label: "My Document",
    icon: <BsFillFilePostFill />,
    href: "document",
  },
  {
    id: 4,
    label: "Messages",
    icon: <TbMessage />,
    href: "message",
  },
  {
    id: 4,
    label: "Vehicles",
    icon: <TbMessage />,
    href: "vehicle",
  },
  {
    id: 5,
    label: "Rider Invoices",
    icon: <TbFileInvoice />,
    href: "invoice",
  },
  {
    id: 6,
    label: "Invoices",
    icon: <RxDashboard />,
    href: "xlcabinvoice",
  },
  {
    id: 7,
    label: "Balance Reports",
    icon: <RxDashboard />,
    href: "balance",
  },
  {
    id: 8,
    label: "Tax Reports",
    icon: <RxDashboard />,
    href: "tax",
  },
  {
    id: 9,
    label: "Payout",
    icon: <MdPayment />,
    href: "payout",
  },
  {
    id: 10,
    label: "Setting",
    icon: <FcSettings />,
    href: "setting",
  },
  {
    id: 11,
    label: "Get Help",
    icon: <BiHelpCircle />,
    href: "help",
  },
];

export const FleetDB = [
  {
    id: 1,
    label: "Dashboard",
    icon: <RxDashboard />,
    href: "dashboard",
  },
  {
    id: 2,
    label: "Profile",
    icon: <FaUserAlt />,
    href: "profile",
  },
  {
    id: 3,
    label: "Order History",
    icon: <FaThList />,
    href: "order",
  },

  {
    id: 4,
    label: "Drivers",
    icon: <BsFillFilePostFill />,
    href: "drivers",
  },
  {
    id: 4,
    label: "messages",
    icon: <TbMessage />,
    href: "message",
  },
  {
    id: 4,
    label: "Vehicles",
    icon: <TbMessage />,
    href: "vehicles",
  },
  {
    id: 5,
    label: "Expiring Documents",
    icon: <TbFileInvoice />,
    href: "expired",
  },
  {
    id: 6,
    label: "Invoices",
    icon: <RxDashboard />,
    href: "invoice",
  },
  {
    id: 7,
    label: "Rider Invoices",
    icon: <RxDashboard />,
    href: "rider/invoice",
  },
  {
    id: 9,
    label: "Compensation",
    icon: <RxDashboard />,
    href: "compensation",
  },
  {
    id: 10,
    label: "Daily Reports",
    icon: <RxDashboard />,
    href: "daily/report",
  },
  {
    id: 11,
    label: "Weekly Reports",
    icon: <RxDashboard />,
    href: "Weekly/report",
  },
  {
    id: 12,
    label: "Payout",
    icon: <MdPayment />,
    href: "payout",
  },
  {
    id: 13,
    label: "Setting",
    icon: <FcSettings />,
    href: "setting",
  },
  {
    id: 14,
    label: "Logout",
    icon: <BiHelpCircle />,
  },
];
export const passengercontroller = [
  {
    id: 1,
    label: "Dashboard",
    icon: <RxDashboard />,
    href: "/customer",
  },
  {
    id: 11,
    label: "Trips",
    icon: <TfiMenuAlt />,
    href: "trip",
  },

  {
    id: 3,
    label: "Booking",
    icon: <FaThList />,
    href: "booking",
  },
  {
    id: 4,
    label: " Messages",
    icon: <TbMessage />,
    href: "messages",
  },
  {
    id: 5,
    label: "Become a Partner",
    icon: <TbFileInvoice />,
    href: "local/Partner",
  },
  {
    id: 6,
    label: "International Partnership ",
    icon: <RxDashboard />,
    href: "international/Partner",
  },

  {
    id: 8,
    label: "Profile",
    icon: <RxDashboard />,
    href: "profile",
  },
  {
    id: 9,
    label: "Setting",
    icon: <RxDashboard />,
    href: "setting",
  },
  {
    id: 9,
    label: "Get Help",
    icon: <MdPayment />,
    href: "help",
  },
];
