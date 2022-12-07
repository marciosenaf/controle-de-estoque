import { FaTh, FaRegChartBar, FaCommentAlt } from "react-icons/fa";
import {FaBoxes} from "react-icons/fa"
import {MdOutlineInventory} from "react-icons/md"
import {GiCardboardBoxClosed} from "react-icons/gi"
// import { BiImageAdd } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { AiFillEdit } from "react-icons/ai";
import {BsCashCoin} from "react-icons/bs"
import {FaCashRegister} from "react-icons/fa"
const menu = [
  {
    title: "Sales",
    icon: <BsCashCoin />,
    path: "/sales",
  },
  {
    title: "Add Sales",
    icon: <FaCashRegister />,
    path: "/add-sales",
  },
  {
    title: "Inventory",
    icon: <FaBoxes/>,
    path: "/inventory",
  },
  {
    title: "Add Product",
    icon: <GiCardboardBoxClosed />,
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
