import React from "react";
import Cbsol from "../assets/images/loogo.png";
import FarazBhai from "../assets/frazbhai.jpg";
import Picture from "../assets/images/blue.jpg";
import { useState } from "react";
import { AiOutlineDown } from "react-icons/ai";
import { AiOutlineUp } from "react-icons/ai";
import Person from "./person";

const AboutUsMain = () => {
  const [isShow, setIsShow] = useState(false);
  return (
    <div className="aboutus">
      <div className="aboutus__sectionone" id="aboutsectionone">
        <img
          src={Picture}
          alt="backgroundimage"
          className="aboutus__sectionone--image"
        />
        <div className="aboutus__sectionone--text">We are CbSol</div>
      </div>
      <div className="aboutus__sectiontwo" id="aboutsectiontwo">
        <div className="aboutus__sectiontwo--partone">
          <h1 className="aboutus__sectiontwo--partone-heading">About us</h1>
          <div className="aboutus__sectiontwo--partone-logo"></div>
        </div>
        <div className="aboutus__sectiontwo--parttwo">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </div>
      </div>
      <div className="aboutus__sectionthree" id="aboutsectionthree">
        <div className="aboutus__sectionthree--partone">
          <div className="aboutus__sectionthree--partone-text">
            Meet the team
          </div>
        </div>
        <div className="aboutus__sectionthree--parttwo">
          <div className="aboutus__sectionthree--parttwo-one">
            <a
              className="aboutus__sectionthree--parttwo-one-p1"
              href="www.facebook.com"
            >
              <img
                src={FarazBhai}
                alt="hr"
                className="aboutus__sectionthree--parttwo-one-p1-image"
              />
              <div className="aboutus__sectionthree--parttwo-one-p1-text">
                hello world
              </div>
              <div className="aboutus__sectionthree--parttwo-three-p1-text-2">
                hello world
              </div>
            </a>
            <a
              href="www.linkedin.com"
              className="aboutus__sectionthree--parttwo-one-p1"
            >
              <img
                src={FarazBhai}
                alt="hr"
                className="aboutus__sectionthree--parttwo-one-p1-image"
              />
              <div className="aboutus__sectionthree--parttwo-one-p1-text">
                hello world
              </div>
              <div className="aboutus__sectionthree--parttwo-three-p1-text-2">
                hello world
              </div>
            </a>
          </div>
          <div className="aboutus__sectionthree--parttwo-two">
            {isShow === false && (
              <AiOutlineDown
                onClick={() => {
                  setIsShow(!isShow);
                }}
                className="aboutus__sectionthree--parttwo-two-icon"
              />
            )}
            {isShow === true && (
              <AiOutlineUp
                onClick={() => {
                  setIsShow(!isShow);
                }}
                className="aboutus__sectionthree--parttwo-two-icon"
              />
            )}
          </div>
          {isShow === true && (
            <div
              className="aboutus__sectionthree--parttwo-three"
              onMouseLeave={() => setIsShow(true)}
            >
              <Person />
              <Person />
              <Person />
              <Person />
              <Person />
              <Person />
              <Person />
              <Person />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default AboutUsMain;
