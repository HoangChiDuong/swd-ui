import { Outlet } from "react-router-dom";
import { Sidebar } from "../components";
import { useDispatch } from "react-redux";
import { getCardAdmin, getMonthAdmin, getNewContract } from "~/redux/Actions/AdminActions";
import { useEffect } from "react";

const BaseLayout = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCardAdmin());
        dispatch(getMonthAdmin());
        dispatch(getNewContract())
    }, [dispatch]);

    return (
        <main className="page-wrapper">
            {/* left of page */}
            <Sidebar />
            {/* right side/content of the page */}
            <div className="content-wrapper">
                <Outlet />
            </div>
        </main>
    );
};

export default BaseLayout;