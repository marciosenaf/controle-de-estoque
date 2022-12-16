import { FaTh, FaRegChartBar, FaCommentAlt } from "react-icons/fa";
import { FaBoxes } from "react-icons/fa"
import { IoSettingsSharp } from "react-icons/io5"
import {AiFillHome} from "react-icons/ai"
// import {MdOutlineInventory} from "react-icons/md"
// import {GiCardboardBoxClosed} from "react-icons/gi"
// import { BiImageAdd } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { AiFillEdit } from "react-icons/ai";
import { BsCashCoin } from "react-icons/bs"
const menu = [

  {
    title: "Sales",
    icon: <BsCashCoin />,
    path: "/sales",
  },
  {
    title: "Inventory",
    icon: <FaBoxes />,
    path: "/inventory",
  },

  {
    title: "Profile",
    icon: <CgProfile />,
    path: "/profile",
  },
  {
    title: "Settings",
    icon: <IoSettingsSharp />,
    path: "/edit-profile"

  },
  {
    title: "Home",
    icon: <AiFillHome />,
    path: "/",
  },

];

export default menu;
