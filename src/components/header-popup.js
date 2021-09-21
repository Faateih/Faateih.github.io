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
            to="services1#webdesignanddevelopment"
            className="header-popup-services__section-two--text"
            onMouseEnter={() => setIsOpen(false)}
          >
            Web Design and Development
          </Link>
          <Link
            to="services1#mobiledevelopment"
            className="header-popup-services__section-two--text"
            onMouseEnter={() => setIsOpen(true)}
          >
            Mobile Development
          </Link>
          {isOpen === true && (
            <div className="header-popup-services__section-three">
              <Link
                to="services1#ios"
                className="header-popup-services__section-three--text"
              >
                iOS
                <div className="header-popup-services__section-three--text-span">
                  <AiOutlineRight />
                </div>
              </Link>

              <Link
                to="services1#android"
                className="header-popup-services__section-three--text"
              >
                Android
              </Link>

              <Link
                to="services1#crossplatform"
                className="header-popup-services__section-three--text"
              >
                Cross-platform
              </Link>
            </div>
          )}

          <Link
            to="services1#softwaretesting"
            className="header-popup-services__section-two--text"
            onMouseEnter={() => setIsOpen(false)}
          >
            {" "}
            Software Testing
          </Link>
          <Link
            to="services1#uiuxdesign"
            className="header-popup-services__section-two--text"
            onMouseEnter={() => setIsOpen(false)}
          >
            UX/UI Design
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

          <div className="header-popup-services__section-two--text">
            {" "}
            Careers
          </div>
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
              to="Technologies#react"
              className="header-popup-technologies-two__text"
            >
              React
            </Link>
          </div>
          <div className="extra">
            <Link
              to="Technologies#reactnative"
              className="header-popup-technologies-two__text"
            >
              React Native
            </Link>
          </div>
          <div className="extra">
            <Link
              to="Technologies#flutter"
              className="header-popup-technologies-two__text"
            >
              Flutter
            </Link>
          </div>
          <div className="extra">
            <Link
              to="Technologies#python"
              className="header-popup-technologies-two__text"
            >
              Python
            </Link>
          </div>
          <div className="extra">
            <Link
              to="Technologies#nodejs"
              className="header-popup-technologies-two__text"
            >
              Node Js
            </Link>
          </div>
          <div className="extra">
            <Link
              to="Technologies#typescript"
              className="header-popup-technologies-two__text"
            >
              Type Script
            </Link>
          </div>
          <div className="extra">
            <Link
              to="Technologies#aws"
              className="header-popup-technologies-two__text"
            >
              AWS
            </Link>
          </div>
          <div className="extra">
            <Link
              to="Technologies#sass"
              className="header-popup-technologies-two__text"
            >
              SASS
            </Link>
          </div>
          <div className="extra">
            <Link
              to="Technologies#hewlet"
              className="header-popup-technologies-two__text"
            >
              Hewlet
            </Link>
          </div>
          <div className="extra">
            <Link
              to="Technologies#kotlin"
              className="header-popup-technologies-two__text"
            >
              Kotlin
            </Link>
          </div>
          <div className="extra">
            <Link
              to="Technologies#java"
              className="header-popup-technologies-two__text"
            >
              Java
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
