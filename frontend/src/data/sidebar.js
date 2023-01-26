import { FaBoxes } from "react-icons/fa"
import { IoSettingsSharp } from "react-icons/io5"
import {AiFillHome} from "react-icons/ai"
import { CgProfile } from "react-icons/cg";
import { BsCashCoin } from "react-icons/bs"
const menu = [

  {
    title: "Sales",
    icon: <BsCashCoin style={{ color: '#0a1930', }} title="Sales" />,
    path: "/sales",
  },
  {
    title: "Inventory",
    icon: <FaBoxes style={{ color: '#0a1930', }} title="Inventory" />,
    path: "/inventory",
  },

  {
    title: "Profile",
    icon: <CgProfile style={{ color: '#0a1930', }} title="Profile" />,
    path: "/profile",
  },
  {
    title: "Settings",
    icon: <IoSettingsSharp style={{ color: '#0a1930', }} title="Settings" />,
    path: "/edit-profile"

  },
  {
    title: "Home",
    icon: <AiFillHome style={{ color: '#0a1930', }} title="Home" />,
    path: "/",
  },

];

export default menu;
