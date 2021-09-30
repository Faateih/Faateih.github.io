import React from "react";
import HeaderButton from "./header-button";
import HeaderText from "./headertext";
import HeaderPopup from "./header-popup";
import companyLogo from "../assets/CBsollogo.png";
import { useState,useEffect } from "react";
import { NavLink } from "react-router-dom";
import {GiHamburgerMenu} from 'react-icons/gi';
import { HashLink as Link } from "react-router-hash-link";
import {FiFacebook} from 'react-icons/fi';
import {AiOutlineInstagram} from 'react-icons/ai';
import {AiOutlineLinkedin} from 'react-icons/ai';

import Aos from 'aos';
import 'aos/dist/aos.css';

const Header = (props) => {
  const [open,setOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  useEffect(() => {
    Aos.init({duration: 500});
}, []);
  return (
    <div style={{ position: "fixed", zIndex: 2000, width: "100vw"}}>
      <div className="header" style={props.style}>
      {open === true && <div className='navbr' data-aos='fade-right' data-aos-duration="400">
      <div className='navbr__color'>
          <ul className='navbr__ul'>
            <Link to='aboutus' target='_top' className='navbr__link'>About Us</Link>
            <Link to='services1' target='_top' className='navbr__link'>Services</Link>
            <Link to='technologies' target='_top' className='navbr__link'>Technology</Link>
            <Link to='product' target='_top' className='navbr__link'>Product</Link>
            {/* <li className='navbr__link'>Blog</li> */}
          </ul>
          <Link to='contactus' className='navbr__button'> Contact Us </Link>
          <div className='navbr__socials'>
              <FiFacebook className="navbr__social" />
              <AiOutlineInstagram className="navbr__social" />
              <AiOutlineLinkedin className= "navbr__social" />
              </div>
          </div>
        </div> }
      <div className='header__ham' onClick={()=> {
        setOpen(!open);
      }}><GiHamburgerMenu/></div>
        <NavLink to={"/"} className="header__logo" target='_top'>
          <img src={companyLogo} alt="Blogo" className="header__logo--image" />
        </NavLink>
        
        <div className="header__menu">
          <HeaderText
            styleee={props.styleee1}
            to={`/aboutus`} 
            text="About Us"
            onMouseEnter={() => {
              setIsOpen1(false);
              setIsOpen2(false);
              setIsOpen3(false);
              setIsOpen4(true);
            }}
            onMouseLeave={() => {
              setIsOpen4(false);
            }}
          />

          <HeaderText
            styleee={props.styleee2}
            to={`/services1`}
            text="Services"
            onMouseEnter={() => {
              setIsOpen1(true);
              setIsOpen2(false);
              setIsOpen3(false);
              setIsOpen4(false);
            }}
            onMouseLeave={() => {
              setIsOpen1(false);
            }}
          />

          <HeaderText
            styleee={props.styleee3}
            to={`/technologies`}
            text="Technology"
            onMouseEnter={() => {
              setIsOpen2(true);
              setIsOpen1(false);
              setIsOpen3(false);
              setIsOpen4(false);
            }}
            onMouseLeave={() => {
              setIsOpen2(false);
            }}
          />
          <HeaderText text="Product" to={`/product`} styleee={props.styleee4} />
          {/* <HeaderText
            styleee={props.styleee5}
            to={`/blogs`}
            text="Blog"
            onMouseEnter={() => {
              setIsOpen3(true);
              setIsOpen1(false);
              setIsOpen2(false);
              setIsOpen4(false);
            }}
            onMouseLeave={() => {
              setIsOpen3(false);
            }}
          /> */}
        </div>
          
        {isOpen1 === true && (
          <div
            className="header__pop"
            onMouseEnter={() => {
              setIsOpen1(true);
              setIsOpen2(false);
              setIsOpen3(false);
            }}
            onMouseLeave={() => {
              setIsOpen1(false);
            }}
          >
            <HeaderPopup popupname="services" />
          </div>
        )}
        {isOpen2 === true && (
          <div
            className="header__pop"
            onMouseEnter={() => {
              setIsOpen2(true);
              setIsOpen1(false);
              setIsOpen3(false);
            }}
            onMouseLeave={() => {
              setIsOpen2(false);
            }}
          >
            <HeaderPopup popupname="technologies" />
          </div>
        )}
        {isOpen4 === true && (
          <div
            className="header__pop"
            onMouseEnter={() => {
              setIsOpen4(true);
              setIsOpen2(false);
              setIsOpen3(false);
              setIsOpen1(false);
            }}
            onMouseLeave={() => {
              setIsOpen4(false);
            }}
          >
            <HeaderPopup popupname="aboutus" />
          </div>
        )}
        {/* {isOpen3 === true && (
          <div
            className="header__pop"
            onMouseEnter={() => {
              setIsOpen3(true);
              setIsOpen1(false);
              setIsOpen2(false);
            }}
            onMouseLeave={() => {
              setIsOpen3(false);
            }}
          >
            <HeaderPopup popupname="blog" />
          </div>
        )} */}
        <NavLink className="header__button" to='contactus'>
          <HeaderButton />
          </NavLink>
      </div>
    </div>
  );
};
export default Header;
