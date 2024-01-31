import React from "react";
import "~/components/Header/header.scss";
function Header() {
  return (
    <div className="header">
      <div className="header-view">
          <div className="loge-view">
            <img src='./LogoSWD.png' alt='logo' />
            <div className="logo-content"></div>
          </div>
      </div>
    </div>
  );
}
export default Header;
