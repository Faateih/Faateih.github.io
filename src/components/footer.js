import React from "react";
import FooterContent from "../components/footercontent";
import Logo from "../assets/images/loogo.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__heading">
        <img src={Logo} alt="cbsols logo" className="footer__heading--logo" />
      </div>

      <div className="footer__main">
        <div className="footer__main--one">
          <FooterContent name="footerone" />
        </div>
        <div className="footer__main--two">
          <FooterContent name="footertwo" />
        </div>
        <div className="footer__main--three">
          <FooterContent name="footertwo" />
        </div>
        <div className="footer__main--four">
          <FooterContent name="footerthree" />
        </div>
      </div>
    </div>
  );
};
export default Footer;
