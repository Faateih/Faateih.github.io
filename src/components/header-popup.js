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
          <div
            className="header-popup-services__section-two--text"
            onMouseEnter={() => setIsOpen(false)}
          >
            Web Design and Development
          </div>
          <div
            className="header-popup-services__section-two--text"
            onMouseEnter={() => setIsOpen(true)}
          >
            Mobile Development
          </div>
          {isOpen === true && (
            <div className="header-popup-services__section-three">
              <div className="header-popup-services__section-three--text">
                iOS
                <div className="header-popup-services__section-three--text-span">
                  <AiOutlineRight />
                </div>
              </div>

              <div className="header-popup-services__section-three--text">
                Android
              </div>

              <div className="header-popup-services__section-three--text">
                Cross-platform
              </div>
            </div>
          )}

          <div
            className="header-popup-services__section-two--text"
            onMouseEnter={() => setIsOpen(false)}
          >
            {" "}
            Software Testing
          </div>
          <div
            className="header-popup-services__section-two--text"
            onMouseEnter={() => setIsOpen(false)}
          >
            UX/UI Design
          </div>
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
            <div className="header-popup-technologies-two__text">React</div>
          </div>
          <div className="extra">
            <div className="header-popup-technologies-two__text">
              React Native
            </div>
          </div>
          <div className="extra">
            <div className="header-popup-technologies-two__text">Flutter</div>
          </div>
          <div className="extra">
            <div className="header-popup-technologies-two__text">Python</div>
          </div>
          <div className="extra">
            <div className="header-popup-technologies-two__text">Node Js</div>
          </div>
          <div className="extra">
            <div className="header-popup-technologies-two__text">
              Type Script
            </div>
          </div>
          <div className="extra">
            <div className="header-popup-technologies-two__text">AWS</div>
          </div>
          <div className="extra">
            <div className="header-popup-technologies-two__text">SASS</div>
          </div>
          <div className="extra">
            <div className="header-popup-technologies-two__text">Hewlet</div>
          </div>
          <div className="extra">
            <div className="header-popup-technologies-two__text">Kotlin</div>
          </div>
          <div className="extra">
            <div className="header-popup-technologies-two__text">Java</div>
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
