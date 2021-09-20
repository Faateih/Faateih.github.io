import React from "react";
import FooterContent from "../components/footercontent";
import Logo from "../assets/images/loogo.png";

const Footer = () => {
  return (
    <div className="footer1">
      <div className="footer1__heading">
        <img src={Logo} alt="cbsols logo" className="footer1__heading--logo" />
      </div>

      <div className="footer1__main">
        <div className="footer1__main--one">
          <FooterContent name="footerone" />
        </div>
        <div className="footer1__main--two">
          <FooterContent name="footertwo" />
        </div>
        <div className="footer1__main--three">
          <FooterContent name="footertwo" />
        </div>
        <div className="footer1__main--four">
          <FooterContent name="footerthree" />
        </div>
      </div>
    </div>
  );
};
export default Footer;
