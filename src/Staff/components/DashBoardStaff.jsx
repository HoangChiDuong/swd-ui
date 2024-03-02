import React from "react";
import { Content, Profile } from '../components'
import '../styles/AppStaff.css';

const DashboardStaff = () => {
    return (
        <div className="dashboard--content">
            <Content />
            <Profile />
        </div>
    )
}

export default DashboardStaff;