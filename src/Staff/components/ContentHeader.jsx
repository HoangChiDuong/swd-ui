import React from "react";
import { BiSearch, BiNotification } from "react-icons/bi";
import { useSelector } from "react-redux";

const ContentHeader = () => {
    const staff = useSelector((state) => state.auth.login.currentUser);
    return (
        <div className="content--header">
            {(staff.ManageId === "") ? <h1 className="header-title">Thống Kê</h1> : <h1 className="header-title">Công Việc</h1>}

            <div className="header--activity">
                <div className="search-box">
                    <input type="text" placeholder="Tìm kiếm ở đây..." />
                    <BiSearch className="icon" />
                </div>
                <div className="notify">
                    <BiNotification className="icon" />
                </div>
            </div>
        </div>
    )
}

export default ContentHeader;