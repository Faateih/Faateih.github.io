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
      <div className="cases__description">
        Discover more projects developed by our software development company
      </div>

      <NavLink to="/newpage" className="cases__button">
        View More Cases
      </NavLink>
    </div>
  );
});
export default Cases;
