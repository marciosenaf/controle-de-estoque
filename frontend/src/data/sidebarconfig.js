import {FaUserEdit, FaCommentAlt} from "react-icons/fa"
import {RiLockPasswordFill} from "react-icons/ri"
import {MdOutlineMenuBook} from "react-icons/md"
const menu = [
    {
        title: "Edit Profile",
        icon: <FaUserEdit/>,
        path: "/edit-profile",
    },
    {
        title: "Change Password",
        icon: <RiLockPasswordFill/>,
        path: "/change-password",
    },
    {
        title: "Contact",
        icon: <FaCommentAlt/>,
        path: "/contact-us",
    },
    {
        title: "how to use",
        icon: <MdOutlineMenuBook/>,
        path: "/how-to-use",
    },


]
export default menu;
