import React from "react";

import Tech from "../assets/images/tech.webp";
import Aos from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from 'react';

const SingleTech = (props) => {
  useEffect(() => {
    Aos.init({duration: 2000});
}, []);
  return (
    <div className="singletech" id={props.id} data-aos='fade-up'>
      <div className="singletech__left">
        <img src={Tech} alt="technology" className="singletech__left--image" />
      </div>
      <div className="singletech__right">
        <div className="singletech__right--inner">
          <div className="singletech__right--inner-heading">
            {props.heading}
          </div>
          <div className="singletech__right--inner-text">
            {props.description}
          </div>
        </div>
      </div>
    </div>
  );
};
export default SingleTech;
