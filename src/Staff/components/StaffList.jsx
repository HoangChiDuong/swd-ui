import React from "react";
import '../styles/StaffList.css'
import { BiLogoHtml5 } from "react-icons/bi";
import avatar from '~/assets/avatar.jpg';

const StaffList = () => {
    const staff = [
        {
            image: avatar,
            name: "Thanh Lee",
            status: "ban",
            duration: "20 hour before"
        },
        {
            image: avatar,
            name: "Thanh Lee",
            status: "ban",
            duration: "20 hour before"
        },
        {
            image: avatar,
            name: "Thanh Lee",
            status: "ban",
            duration: "20 hour before"
        },
    ]
    return (
        <div className="staff--list">
            <div className="list--header">
                <h2>Staffs</h2>
                <select>
                    <option value="busy">Busy</option>
                    <option value="free">Free</option>
                </select>
            </div>
            <div className="list--container">
                {staff.map((item) => (
                    <div className="list">
                        <div className="staff--detail">
                            <img src={avatar} />
                            <h2>{item.name}</h2>
                        </div>
                        <span>{item.duration}</span>
                        <span>{item.status}</span>
                        <span>{item.cost}</span>
                        <span className="staff--todo">:</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default StaffList;