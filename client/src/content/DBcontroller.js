import { RxDashboard } from "react-icons/rx";
import { FaUserAlt } from "react-icons/fa";
import { FaThList } from "react-icons/fa";
import { TbMessage } from "react-icons/tb";
import { IoLogOutOutline } from "react-icons/io5";
import { BiHelpCircle } from "react-icons/bi";
import { FiUser } from "react-icons/fi";
import { FcSettings } from "react-icons/fc";
import {
  MdOutlineAccountBalanceWallet,
  MdOutlinePayments,
  MdPayment,
} from "react-icons/md";
import { TbFileInvoice } from "react-icons/tb";
import { TfiMenuAlt } from "react-icons/tfi";
import { BsFileText, BsFillFilePostFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import logoutUser from "../features/Auths";
import { AiOutlineSetting } from "react-icons/ai";
import { CiDeliveryTruck } from "react-icons/ci";
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
    icon: <FaUserAlt size={20} />,
    href: "profile",
  },
  {
    id: 3,
    label: "My Rides",
    icon: <FaThList size={20} />,
    href: "ride",
  },
  {
    id: 4,
    label: "My Document",
    icon: <BsFillFilePostFill size={20} />,
    href: "document",
  },
  {
    id: 4,
    label: "Messages",
    icon: <TbMessage size={20} />,
    href: "message",
  },
  {
    id: 4,
    label: "Vehicles",
    icon: <CiDeliveryTruck size={20} />,
    href: "vehicle",
  },
  {
    id: 5,
    label: "Rider Invoices",
    icon: <TbFileInvoice size={20} />,
    href: "invoice",
  },
  {
    id: 6,
    label: "Invoices",
    icon: <BsFileText size={20} />,
    href: "xlcabinvoice",
  },
  {
    id: 7,
    label: "Balance Reports",
    icon: <MdOutlineAccountBalanceWallet size={20} />,
    href: "balance",
  },
  {
    id: 8,
    label: "Tax Reports",
    icon: <MdOutlinePayments size={20} />,
    href: "tax",
  },
  {
    id: 9,
    label: "Payout",
    icon: <MdPayment size={20} />,
    href: "payout",
  },
  {
    id: 10,
    label: "Setting",
    icon: <AiOutlineSetting size={20} />,
    href: "setting",
  },
  {
    id: 11,
    label: "Get Help",
    icon: <BiHelpCircle size={20} />,
    href: "help",
  },
];

export const FleetDB = [
  {
    id: 1,
    label: "Dashboard",
    icon: <RxDashboard size={20} />,
    href: "dashboard",
  },
  {
    id: 2,
    label: "Profile",
    icon: <FaUserAlt size={20} />,
    href: "profile",
  },
  {
    id: 3,
    label: "Order History",
    icon: <FaThList size={20} />,
    href: "order",
  },

  {
    id: 4,
    label: "Drivers",
    icon: <BsFillFilePostFill size={20} />,
    href: "drivers",
  },
  {
    id: 4,
    label: "messages",
    icon: <TbMessage size={20} />,
    href: "message",
  },
  {
    id: 4,
    label: "Vehicles",
    icon: <TbMessage size={20} />,
    href: "vehicles",
  },
  {
    id: 5,
    label: "Expiring Documents",
    icon: <TbFileInvoice size={20} />,
    href: "expired",
  },
  {
    id: 6,
    label: "Invoices",
    icon: <RxDashboard size={20} />,
    href: "invoice",
  },
  {
    id: 7,
    label: "Rider Invoices",
    icon: <RxDashboard size={20} />,
    href: "rider/invoice",
  },
  {
    id: 9,
    label: "Compensation",
    icon: <RxDashboard size={20} />,
    href: "compensation",
  },
  {
    id: 10,
    label: "Daily Reports",
    icon: <RxDashboard size={20} />,
    href: "daily/report",
  },
  {
    id: 11,
    label: "Weekly Reports",
    icon: <RxDashboard size={20} />,
    href: "Weekly/report",
  },
  {
    id: 12,
    label: "Payout",
    icon: <MdPayment size={20} />,
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
  // {
  //   id: 5,
  //   label: "Become a Partner",
  //   icon: <TbFileInvoice />,
  //   href: "local/Partner",
  // },
  // {
  //   id: 6,
  //   label: "International Partnership ",
  //   icon: <RxDashboard />,
  //   href: "international/Partner",
  // },

  {
    id: 8,
    label: "Profile",
    icon: <FiUser />,
    href: "profile",
  },
  {
    id: 8,
    label: "Payment",
    icon: <MdOutlinePayments />,
    href: "add-payment",
  },
  {
    id: 9,
    label: "Setting",
    icon: <AiOutlineSetting />,
    href: "setting",
  },
  {
    id: 9,
    label: "Get Help",
    icon: <MdPayment />,
    href: "help",
  },
];
