import React, { useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Content from "./components/Contents";
import Profile from "./components/Profile";
import '../Staff/styles/AppStaff.css';
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { infoUser, listStaff, listStaffStatus } from "~/redux/Actions/UserActions";
import { listProducts } from "~/redux/Actions/ProductActions";
import { listRequest } from "~/redux/Actions/RequestActions";

const AppStaff = () => {
    const userAuth = useSelector((state) => state.auth.login.currentUser);


    const deletePro = useSelector((state) => state.deleteProduct);


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listStaffStatus(userAuth.Id));
        dispatch(listStaff(userAuth.Id));
        dispatch(listProducts());
        dispatch(listRequest());
        dispatch(infoUser(userAuth.Id));
    }, [dispatch]);
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