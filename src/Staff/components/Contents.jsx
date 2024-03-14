import React from "react";
import ContentHeader from "./ContentHeader";
import '../styles/Content.css';
import Card from "./Card";
import StaffList from "./StaffList";
import { useSelector } from "react-redux";
import Task from "./Task";
const Content = () => {

    const staff = useSelector((state) => state.auth.login.currentUser);

    return (
        <div className="content">
            <ContentHeader />
            {(staff.ManageId === "") && (
                <>
                    <Card />
                    <StaffList />
                </>
            )}
            {(staff.ManageId !== "") && (
                <>
                    <Task />

                </>
            )}

        </div>
    )
}

export default Content;