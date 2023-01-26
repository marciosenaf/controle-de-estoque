import "./sidebar.scss"
import { FaUserEdit, FaCommentAlt } from "react-icons/fa"
import { RiLockPasswordFill } from "react-icons/ri"
import { MdOutlineMenuBook } from "react-icons/md"
const menu = [
    {
        title: "Edit Profile",
        icon: <FaUserEdit style={{ color: '#0a1930', }} title="Edit Profile" />,
        path: "/edit-profile",
    },
    {
        title: "Change Password",
        icon: <RiLockPasswordFill style={{ color: '#0a1930', }} title="Change Password" />,
        path: "/change-password",
    },
    {
        title: "Contact",
        icon: <FaCommentAlt style={{ color: '#0a1930', }} title="Edit Profile" />,
        path: "/contact-us",
    },
    {
        title: "how to use",
        icon: 
            <MdOutlineMenuBook style={{ color: '#0a1930', }}/>
            ,
        path: "/how-to-use",
    },


]
export default menu;
