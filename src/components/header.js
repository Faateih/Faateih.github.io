import React from "react";
import HeaderButton from "./header-button";
import HeaderText from "./headertext";
import HeaderPopup from "./header-popup";
import companyLogo from "../assets/images/loogo.png";
import { useState } from "react";
import { useEffect } from "react";
import { findAllByTestId } from "@testing-library/dom";

const Header = (props) => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  return (
    <div style={{ position: "fixed", zIndex: 2000, width: "100%" }}>
      <div className="header" style={props.style}>
        <div className="header__logo">
          <img src={companyLogo} alt="Blogo" className="header__logo--image" />
        </div>
        <div className="header__menu">
          <HeaderText
            to={`/aboutus`}
            text="About Us"
            onMouseEnter={() => {
              setIsOpen1(false);
              setIsOpen2(false);
              setIsOpen3(false);
              setIsOpen4(true);
            }}
            onMouseLeave={() => {
              setIsOpen4(false);
            }}
          />

          <HeaderText
            to={`/services1`}
            text="Services"
            onMouseEnter={() => {
              setIsOpen1(true);
              setIsOpen2(false);
              setIsOpen3(false);
              setIsOpen4(false);
            }}
            onMouseLeave={() => {
              setIsOpen1(false);
            }}
          />

          <HeaderText
            to={`/technologies`}
            text="Technology"
            onMouseEnter={() => {
              setIsOpen2(true);
              setIsOpen1(false);
              setIsOpen3(false);
              setIsOpen4(false);
            }}
            onMouseLeave={() => {
              setIsOpen2(false);
            }}
          />
          <HeaderText text="Cases" to={`/newpage`} />
          <HeaderText
            to={`/blogs`}
            text="Blog"
            onMouseEnter={() => {
              setIsOpen3(true);
              setIsOpen1(false);
              setIsOpen2(false);
              setIsOpen4(false);
            }}
            onMouseLeave={() => {
              setIsOpen3(false);
            }}
          />
        </div>
        {isOpen1 === true && (
          <div
            className="header__pop"
            onMouseEnter={() => {
              setIsOpen1(true);
              setIsOpen2(false);
              setIsOpen3(false);
            }}
            onMouseLeave={() => {
              setIsOpen1(false);
            }}
          >
            <HeaderPopup popupname="services" />
          </div>
        )}
        {isOpen2 === true && (
          <div
            className="header__pop"
            onMouseEnter={() => {
              setIsOpen2(true);
              setIsOpen1(false);
              setIsOpen3(false);
            }}
            onMouseLeave={() => {
              setIsOpen2(false);
            }}
          >
            <HeaderPopup popupname="technologies" />
          </div>
        )}
        {isOpen4 === true && (
          <div
            className="header__pop"
            onMouseEnter={() => {
              setIsOpen4(true);
              setIsOpen2(false);
              setIsOpen3(false);
              setIsOpen1(false);
            }}
            onMouseLeave={() => {
              setIsOpen4(false);
            }}
          >
            <HeaderPopup popupname="aboutus" />
          </div>
        )}
        {isOpen3 === true && (
          <div
            className="header__pop"
            onMouseEnter={() => {
              setIsOpen3(true);
              setIsOpen1(false);
              setIsOpen2(false);
            }}
            onMouseLeave={() => {
              setIsOpen3(false);
            }}
          >
            <HeaderPopup popupname="blog" />
          </div>
        )}
        <div className="header__button">
          <HeaderButton />
        </div>
      </div>
    </div>
  );
};
export default Header;
