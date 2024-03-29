import { RxDashboard } from "react-icons/rx";
import { FaThList } from "react-icons/fa";
import { TbFileReport, TbMessage, TbReport } from "react-icons/tb";
import { IoHelpBuoyOutline, IoLogOutOutline } from "react-icons/io5";
import { BiHelpCircle } from "react-icons/bi";
import { FiUser } from "react-icons/fi";
import { IoMdLogOut } from "react-icons/io";
import { FcExpired, FcSettings } from "react-icons/fc";
import {
  MdOutlineAccountBalanceWallet,
  MdOutlinePayments,
  MdPayment,
} from "react-icons/md";
import { TbFileInvoice } from "react-icons/tb";
import { TfiMenuAlt } from "react-icons/tfi";
import { BsFileText } from "react-icons/bs";

import {
  AiOutlineDeliveredProcedure,
  AiOutlineFileText,
  AiOutlineSetting,
  AiOutlineUser,
} from "react-icons/ai";
import { CiDeliveryTruck } from "react-icons/ci";
import { GiSteeringWheel } from "react-icons/gi";
export const DBcontroller = [
  {
    id: 1,
    label: "Dashboard",
    icon: <RxDashboard size={20} />,
    href: "/driver",
  },
  {
    id: 2,
    label: "Profile",
    icon: <AiOutlineUser size={20} />,
    href: "profile",
  },
  {
    id: 3,
    label: "My Rides",
    icon: <AiOutlineFileText size={20} />,
    href: "ride",
  },
  {
    id: 4,
    label: "My Document",
    icon: <AiOutlineDeliveredProcedure size={20} />,
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
    icon: <AiOutlineUser size={20} />,
    href: "profile",
  },
  {
    id: 3,
    label: "Order History",
    icon: <AiOutlineFileText size={20} />,
    href: "order",
  },

  {
    id: 4,
    label: "Drivers",
    icon: <GiSteeringWheel size={20} />,
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
    icon: <CiDeliveryTruck size={20} />,
    href: "vehicles",
  },
  {
    id: 5,
    label: "Expiring Documents",
    icon: <FcExpired size={20} />,
    href: "expired",
  },
  {
    id: 6,
    label: "Invoices",
    icon: <TbFileInvoice size={20} />,
    href: "invoice",
  },
  {
    id: 7,
    label: "Rider Invoices",
    icon: <TbFileInvoice size={20} />,
    href: "rider/invoice",
  },
  {
    id: 9,
    label: "Compensation",
    icon: <IoHelpBuoyOutline size={20} />,
    href: "compensation",
  },
  {
    id: 10,
    label: "Daily Reports",
    icon: <TbFileReport size={20} />,
    href: "daily/report",
  },
  {
    id: 11,
    label: "Weekly Reports",
    icon: <TbReport size={20} />,
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
    icon: <IoMdLogOut />,
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
