import React from "react";
import HeaderButton from "./header-button";
import HeaderText from "./headertext";
import HeaderPopup from "./header-popup";
import companyLogo from "../assets/images/logo.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">
        <img src={companyLogo} alt="Blogo" className="header__logo--image" />
      </div>
      <div className="header__menu">
        <HeaderText />
        <HeaderText />
        <HeaderText />
        <HeaderText />
        <HeaderText />
        <HeaderText />
      </div>
      <div className="header__pop">
        <HeaderPopup />
      </div>
      <div className="header__button">
        <HeaderButton />
      </div>
    </div>
  );
};
export default Header;
