import "./sidebar.scss"
import {FaUserEdit, FaCommentAlt} from "react-icons/fa"
import {RiLockPasswordFill} from "react-icons/ri"
import {MdOutlineMenuBook} from "react-icons/md"
const menu = [
    {
        title: "Edit Profile",
        icon: <FaUserEdit title="Edit Profile"/>,
        path: "/edit-profile",
    },
    {
        title: "Change Password",
        icon: <RiLockPasswordFill title="Change Password" ></RiLockPasswordFill>,
        path: "/change-password",
    },
    {
        title: "Contact",
        icon: <FaCommentAlt title="Edit Profile"/>,
        path: "/contact-us",
    },
    {
        title: "how to use",
        icon: <MdOutlineMenuBook title="Edit Profile"/>,
        path: "/how-to-use",
    },


]
export default menu;
