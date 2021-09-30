import React from "react";
import { NavLink } from "react-router-dom";
import Aos from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from 'react';

const Cases = React.forwardRef((props,ref) => {
  useEffect(() => {
    Aos.init({duration: 1500});
}, []);
  return (
    <div className="cases" ref={ref} data-aos='fade-up'>
      <div className="cases__border"></div>
      <div className="cases__heading">
        Haven't found the case in your business sector?
      </div>

      <NavLink to="/contactus" className="cases__button">
        Contact Us
      </NavLink>
    </div>
  );
});
export default Cases;
