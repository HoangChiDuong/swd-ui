import React from "react";
import ContentHeader from "./ContentHeader";
import '../styles/Content.css';
import Card from "./Card";
import StaffList from "./StaffList";
const Content = () => {
    return (
        <div className="content">
            <ContentHeader />
            <Card />
            <StaffList />
        </div>
    )
}

export default Content;