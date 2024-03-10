import React, { useEffect } from "react";
import { Content, Profile } from '../components'
import '../styles/AppStaff.css';
import { useDispatch, useSelector } from "react-redux";
import { listStaff } from "~/redux/Actions/UserActions";
import { listProducts } from "~/redux/Actions/ProductActions";

const DashboardStaff = () => {
    const userAuth = useSelector((state) => state.auth.login.currentUser);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listStaff(userAuth.Id));
        dispatch(listProducts())
    }, [dispatch]);
    return (
        <div className="dashboard--content">
            <Content />
            <Profile />
        </div>
    )
}

export default DashboardStaff;