import React from "react";

import { FiFacebook } from "react-icons/fi";
import { RiTwitterLine } from "react-icons/ri";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FiMapPin } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { HashLink as Link } from "react-router-hash-link";
import { Link as Linkk } from "react-router-dom";

const FooterContent = (props) => {
  return (
    <div className="footercontent">
      {props.name === "footerone" && (
        <div className="footercontent__one">
          <div className="footercontent__one--heading">Our Company</div>
          <div className="footercontent__one--content">
            We exist to provide web and mobile application service with having a
            dedicated, talented and qualified team of developers, designers,
            user experience professionals and unmatched experience to our
            clients.
          </div>
        </div>
      )}
      {props.name === "footertwo" && (
        <div className="footercontent__two">
          <div className="footercontent__two--heading">About Us</div>
          <div className="footercontent__two--content">
            <Link
              to="aboutus#aboutus"
              className="footercontent__two--content-text"
            >
              Our Company
            </Link>
            <Link
              to="aboutus#aboutsectionthree"
              className="footercontent__two--content-text"
            >
              Our Team
            </Link>
            <Link
              to="aboutus#aboutussectionfour"
              className="footercontent__two--content-text"
            >
              Careers
            </Link>
          </div>
        </div>
      )}
      {props.name === "footerfour" && (
        <div className="footercontent__two">
          <div className="footercontent__two--heading">Technology</div>
          <div className="footercontent__two--content">
            <Link
              to="technologies#react"
              className="footercontent__two--content-text"
            >
              React jS
            </Link>
            <Link
              to="technologies#aws"
              className="footercontent__two--content-text"
            >
              AWS
            </Link>
            <Link
              to="technologies#reactnative"
              className="footercontent__two--content-text"
            >
              React Native
            </Link>
            <Link
              to="technologies#nodejs"
              className="footercontent__two--content-text"
            >
              Node jS
            </Link>
            <Link
              to="technologies#typescript"
              className="footercontent__two--content-text"
            >
              Type Script
            </Link>
          </div>
        </div>
      )}
      {props.name === "footerfive" && (
        <div className="footercontent__two">
          <div className="footercontent__two--heading">Services</div>
          <div className="footercontent__two--content">
            <Link
              to="services#webdesignanddevelopment"
              className="footercontent__two--content-text"
            >
              Web Application
            </Link>
            <Link
              to="services#mobiledevelopment"
              className="footercontent__two--content-text"
            >
              Mobile Application
            </Link>
            <Link
              to="services#softwaretesting"
              className="footercontent__two--content-text"
            >
              Software Testing
            </Link>
            <Link
              to="services#uxuidesign"
              className="footercontent__two--content-text"
            >
              UI/UX Design
            </Link>
            <Link to="services" className="footercontent__two--content-text">
              Data Security
            </Link>
            <Link to="services" className="footercontent__two--content-text">
              Project Management
            </Link>
          </div>
        </div>
      )}
      {props.name === "footerthree" && (
        <div className="footercontent__three">
          <div className="footercontent__three--heading">Contact Us</div>
          <div className="footers">
            <div className="footers__location">
              <FiMapPin />
              <span className="footers__locspan"> DHA Rahbar, Lahore</span>
            </div>
            <div className="footers__email">
              <AiOutlineMail />
              <span className="footers__mail">careers@cbsolpro.com</span>
            </div>
            <div className="footers__call">
              <BiPhoneCall />{" "}
              <span className="footers__num">+92-303-9093600</span>
            </div>
          </div>
          <div className="footercontent__three--content">
            <div className="footercontent__three--content-social">
              <Linkk
                className="hello"
                to={{
                  pathname: "https://www.facebook.com/cbsolpro",
                }}
                target="_blank"
              >
                <FiFacebook className="footercontent__three--content-social-facebook" />
              </Linkk>
              <Link
                className="hello"
                to={{
                  pathname: "https://www.instagram.com/cbsolpro/",
                }}
                target="_blank"
              >
                <AiOutlineInstagram className="footercontent__three--content-social-instagram" />
              </Link>
              <Link
                className="hello"
                to={{
                  pathname: "https://www.linkedin.com/company/cbsolpro",
                }}
                target="_blank"
              >
                <AiOutlineLinkedin className="footercontent__three--content-social-linkedin" />
              </Link>
            </div>
            <div className="footercontent__three--content-text">
              &copy; Copyright by CbSol 2021
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default FooterContent;
