import React, { useEffect } from "react";
import '../styles/StaffList.css'
import { BiLogoHtml5 } from "react-icons/bi";
import avatar from '~/assets/avatar.jpg';
import { useDispatch, useSelector } from "react-redux";
import { listStaff } from "~/redux/Actions/UserActions";

const StaffList = () => {



    const staffList = useSelector((state) => state.staffList.users);

    // const { loading, error, users } = staffList;


    return (
        <div className="staff--list">
            <div className="list--header">
                <h2>Nhân Viên</h2>
                <select>
                    <option value="busy">Đang Bận</option>
                    <option value="free">Đang Rảnh </option>
                </select>
            </div>
            <div className="list--container">
                {staffList?.map((item) => (
                    <div className="list">
                        <div className="staff--detail">
                            <img src={avatar} />
                            <h2>{item.userName}</h2>
                        </div>
                        <span>{item.email}</span>
                        <span>{item.status === true ? "Đang rảnh" : "Đang Bận"}</span>
                        <span>{item.phone}</span>
                        <span className="staff--todo">:</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default StaffList;