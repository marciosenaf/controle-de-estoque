import { FaBoxes } from "react-icons/fa"
import { IoSettingsSharp } from "react-icons/io5"
import {AiFillHome} from "react-icons/ai"
import { CgProfile } from "react-icons/cg";
import { BsCashCoin } from "react-icons/bs"
const menu = [

  {
    title: "Sales",
    icon: <BsCashCoin title="Sales" />,
    path: "/sales",
  },
  {
    title: "Inventory",
    icon: <FaBoxes title="Inventory" />,
    path: "/inventory",
  },

  {
    title: "Profile",
    icon: <CgProfile title="Profile" />,
    path: "/profile",
  },
  {
    title: "Settings",
    icon: <IoSettingsSharp title="Settings" />,
    path: "/edit-profile"

  },
  {
    title: "Home",
    icon: <AiFillHome title="Home" />,
    path: "/",
  },

];

export default menu;
