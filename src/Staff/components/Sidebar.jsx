import React from "react";
import { BiHome, BiBookAlt, BiTask } from "react-icons/bi";
import {
    IoLogOutOutline,
} from "react-icons/io5";
import { RiProductHuntLine } from "react-icons/ri";
import { LiaFileContractSolid } from "react-icons/lia";
import "../styles/Sidebar.css";
import logo from '~/assets/LogoSWD.png'
import { logOut } from "~/redux/apiRequest";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Sidebar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const staff = useSelector((state) => state.auth.login.currentUser);
    const handleLogOut = () => {
        logOut(dispatch, navigate);
    };
    return (
        <div className="menu">
            <div className="logo">
                <img src={logo} />
            </div>
            <div className="menu--list">
                <a href="/staff/dashboard" className="item active">
                    <BiHome className="icon" />
                    {(staff.ManageId === "") ? "Thống Kê" : "Công Việc"}
                </a>
            </div>
            {(staff.ManageId === "") && (
                <>
                    <div className="menu--list">
                        <a href="/staff/assignment" className="item">
                            <BiTask className="icon" />
                            Yêu Cầu Báo Giá
                        </a>
                    </div>
                    <div className="menu--list">
                        <a href="/staff/product" className="item">
                            <RiProductHuntLine className="icon" />
                            Sản Phẩm
                        </a>
                    </div>
                    {/* <div className="menu--list">
                <a href="/staff/product" className="item">
                    <LiaFileContractSolid className="icon" />
                    Tạo Hợp Đồng
                </a>
            </div> */}

                </>
            )}
            <div className="menu--list">
                <a className="item" onClick={handleLogOut}>
                    <IoLogOutOutline className="icon" />

                    Đăng Xuất
                </a>
            </div>

        </div>
    )
}

export default Sidebar;