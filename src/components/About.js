import React from 'react';
import Person from './person';
import FarazBhai from '../../src/assets/frazbhai.jpg'
import { useState } from "react";
import { AiOutlineDown } from "react-icons/ai";
import { AiOutlineUp } from "react-icons/ai";
import {useEffect} from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

function About() {
    const [isShow, setIsShow] = useState(false);
    useEffect(() => {
        Aos.init({duration: 1500});
 }, []);

    return (
      <div className="aboutus__sectionthree" id="aboutsectionthree" data-aos='fade-up'>
        <div className="aboutus__sectionthree--partone">
          <div className="aboutus__sectionthree--partone-text">
            Meet The Team
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
            <div data-aos='fade-up'
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
    )
}

export default About
