import React from "react";
import imageone from "../assets/images/cov_me.png.webp";
import imagetwo from "../assets/images/sg_main_.png.webp";
import Tilt from "react-tilt";
import Aos from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from 'react';
const CasesCard = (props) => {
  useEffect(() => {
    Aos.init({duration: 1500});
}, []);
  return (
    <div className="casescard" data-aos='fade-up'>
      <Tilt className="casescard__left">
        <div className="casescard__left--image">
          <img
            src={props.src}
            alt="Blo"
            className="casescard__left--image-img"
          />
        </div>
        <div className="casescard__left--description">
          <span className="casescard__left--description-span">
            {props.span}
          </span>{" "}
          -{props.text}
        </div>
      </Tilt>
      <Tilt className="casescard__right">
        <div className="casescard__right--image">
          <img
            src={props.source2}
            alt="Bl"
            className="casescard__right--image-img"
          />
        </div>
        <div className="casescard__right--description">
          <span className="casescard__right--description-span">
            {props.span2}
          </span>{" "}
          {props.text2}
        </div>
      </Tilt>
    </div>
  );
};
export default CasesCard;
