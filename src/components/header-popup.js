import React from "react";
import { useState } from "react";
import { AiOutlineRight } from "react-icons/ai";
import { HashLink as Link } from "react-router-hash-link";

const HeaderPopup = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  if (props.popupname === "services") {
    return (
      <div className="header-popup-services">
        <div className="header-popup-services__section-one"></div>
        <div className="header-popup-services__section-two">
          <Link
            to="services#Web Applications"
            className="header-popup-services__section-two--text"
            onMouseEnter={() => setIsOpen(false)}
          >
            Web Application
          </Link>
          <Link
            to="services#Mobile Application"
            className="header-popup-services__section-two--text"
            onMouseEnter={() => setIsOpen(true)}
          >
            Mobile Application
          </Link>
          {isOpen === true && (
            <div className="header-popup-services__section-three">
              <Link
                to="services#ios"
                className="header-popup-services__section-three--text"
              >
                iOS
                <div className="header-popup-services__section-three--text-span">
                  <AiOutlineRight />
                </div>
              </Link>

              <Link
                to="services#android"
                className="header-popup-services__section-three--text"
              >
                Android
              </Link>

              <Link
                to="services#crossplatform"
                className="header-popup-services__section-three--text"
              >
                Cross-platform
              </Link>
            </div>
          )}

          <Link
            to="services#Software Testing"
            className="header-popup-services__section-two--text"
            onMouseEnter={() => setIsOpen(false)}
          >
            {" "}
            Software Testing
          </Link>
          <Link
            to="services#UI/UX Design"
            className="header-popup-services__section-two--text"
            onMouseEnter={() => setIsOpen(false)}
          >
            UX/UI Design
          </Link>
          <Link
            to="services#Data Security"
            className="header-popup-services__section-two--text"
            onMouseEnter={() => setIsOpen(false)}
          >
            Data Security
          </Link>
          <Link
            to="services#Project Management"
            className="header-popup-services__section-two--text"
            onMouseEnter={() => setIsOpen(false)}
          >
            Project Management
          </Link>
        </div>
      </div>
    );
  }
  if (props.popupname === "aboutus") {
    return (
      <div className="header-popup-services">
        <div className="header-popup-services__section-one"></div>
        <div className="header-popup-services__section-two">
          <Link
            to="aboutus#aboutsectiontwo"
            className="header-popup-services__section-two--text"
          >
            Our Company
          </Link>
          <Link
            to="aboutus#aboutsectionthree"
            className="header-popup-services__section-two--text"
          >
            Our Team
          </Link>

          <Link to='aboutus#aboutussectionfour'
          className="header-popup-services__section-two--text">
            {" "}
            Careers
          </Link>
        </div>
      </div>
    );
  }
  if (props.popupname === "technologies") {
    return (
      <div className="header-popup-technologies">
        <div className="header-popup-technologies-one"></div>
        <div className="header-popup-technologies-two">
          <div className="extra">
            <Link
              to="Technologies#ReactJs"
              className="header-popup-technologies-two__text"
            >
              React Js
            </Link>
          </div>
          <div className="extra">
            <Link
              to="Technologies#ReactNative"
              className="header-popup-technologies-two__text"
            >
              React Native
            </Link>
          </div>
          
          <div className="extra">
            <Link
              to="Technologies#NodeJs"
              className="header-popup-technologies-two__text"
            >
              Node Js
            </Link>
          </div>
          <div className="extra">
            <Link
              to="Technologies#TypeScript"
              className="header-popup-technologies-two__text"
            >
              Type Script
            </Link>
          </div>
          <div className="extra">
            <Link
              to="Technologies#AWS"
              className="header-popup-technologies-two__text"
            >
              AWS
            </Link>
          </div>
          <div className="extra">
            <Link
              to="Technologies#GraphQL"
              className="header-popup-technologies-two__text"
            >
              Graph QL
            </Link>
          </div>
          
        </div>
      </div>
    );
  } else if (props.popupname === "blog") {
    return (
      <div className="header-popup-blog">
        <div className="header-popup-blog-one"></div>
        <div className="header-popup-blog-two">
          <div className="header-popup-blog-two__heading">
            Most Popular Articles
          </div>
          <div className="header-popup-blog-two__text">
            How to Develop a Telemedicine App: Full Guide
          </div>
          <div className="header-popup-blog-two__text">
            How to Make a Workout App: Tips and Monetization Checklist
          </div>
          <div className="header-popup-blog-two__text">
            How to Make a Medical App: What You Need to Know
          </div>
          <div className="header-popup-blog-two__text">
            How to Create a Social Media App: Complete Tutorial for 2020
          </div>
          <div className="header-popup-blog-two__text">
            Pitfalls You Should Avoid When Developing a mHealth App
          </div>
        </div>
        <div className="header-popup-blog-three">
          <div className="header-popup-blog-three__heading">
            Most Popular Articles
          </div>
          <div className="header-popup-blog-three__text">
            How to Develop a Telemedicine App: Full Guide
          </div>
          <div className="header-popup-blog-three__text">
            How to Make a Workout App: Tips and Monetization Checklist
          </div>
          <div className="header-popup-blog-three__text">
            How to Make a Medical App: What You Need to Know
          </div>
          <div className="header-popup-blog-three__text">
            How to Create a Social Media App: Complete Tutorial for 2020
          </div>
          <div className="header-popup-blog-three__text">
            Pitfalls You Should Avoid When Developing a mHealth App
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};
export default HeaderPopup;
