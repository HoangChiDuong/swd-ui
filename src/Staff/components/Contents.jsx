import React from "react";
import ContentHeader from "./ContentHeader";
import "../styles/Content.css";
import Card from "./Card";
import StaffList from "./StaffList";
import { useSelector } from "react-redux";
const Content = () => {
  const staff = useSelector((state) => state.auth.login.currentUser);

  return (
    <div className="content">
      <ContentHeader />
      {staff.ManageId === "" && (
        <>
          <Card />
          <StaffList />
        </>
      )}
      {staff.ManageId !== "" && (
        <>
        
          
        </>
      )}
    </div>
  );
};

export default Content;
