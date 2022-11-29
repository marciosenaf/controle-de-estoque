import { FaTh, FaRegChartBar, FaCommentAlt } from "react-icons/fa";
import { BiImageAdd } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { AiFillEdit } from "react-icons/ai";
import {BsCashCoin} from "react-icons/bs"

const menu = [
  {
    title: "Sales",
    icon: <BsCashCoin />,
    path: "/sales",
  },
  {
    title: "Inventory",
    icon: <FaTh />,
    path: "/inventory",
  },
  {
    title: "Add Product",
    icon: <BiImageAdd />,
    path: "/add-product",
  },
  {
    title: "Account",
    icon: <FaRegChartBar />,
    childrens: [
      {
        title: "Profile",
        icon: <CgProfile />,
        path: "/profile",
      },
      {
        title: "Edit Profile",
        icon: <AiFillEdit />,
        path: "/edit-profile",
      },
    ],
  },
  {
    title: "Report Bug",
    icon: <FaCommentAlt />,
    path: "/contact-us",
  },
];

export default menu;
