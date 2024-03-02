import React from "react";
import Sidebar from "./components/Sidebar";
import Content from "./components/Contents";
import Profile from "./components/Profile";
import '../Staff/styles/AppStaff.css';
import { Outlet } from "react-router-dom";

const AppStaff = () => {
    return (
        <main className="dashboard">
            <Sidebar />
            <div className="dashboard--content">
                <Outlet />
            </div>
        </main>
    )
}

export default AppStaff;