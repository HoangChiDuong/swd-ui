import React from "react";
import { BiHome, BiBookAlt, BiTask } from "react-icons/bi";
import "../styles/Sidebar.css";
import logo from '~/assets/LogoSWD.png'
const Sidebar = () => {
    return (
        <div className="menu">
            <div className="logo">
                <img src={logo} />
            </div>
            <div className="menu--list">
                <a href="/staff/dashboard" className="item active">
                    <BiHome className="icon" />
                    DashBoard
                </a>
            </div>
            <div className="menu--list">
                <a href="/staff/assignment" className="item">
                    <BiTask className="icon" />
                    Assignment
                </a>
            </div>
            <div className="menu--list">
                <a href="/staff" className="item">
                    <BiHome className="icon" />
                    Product
                </a>
            </div>
            <div className="menu--list">
                <a href="/staff" className="item">
                    <BiHome className="icon" />
                    Logout
                </a>
            </div>
        </div>
    )
}

export default Sidebar;