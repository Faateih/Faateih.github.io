import React from "react";

import { FiFacebook } from "react-icons/fi";
import { RiTwitterLine } from "react-icons/ri";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import {FiMapPin} from 'react-icons/fi';
import {AiOutlineMail} from 'react-icons/ai';
import {BiPhoneCall} from 'react-icons/bi';


const FooterContent = (props) => {
  return (
    <div className="footercontent">
      {props.name === "footerone" && (
        <div className="footercontent__one">
          <div className="footercontent__one--heading">Lorem Ipsum</div>
          <div className="footercontent__one--content">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged
          </div>
        </div>
      )}
      {props.name === "footertwo" && (
        <div className="footercontent__two">
          <div className="footercontent__two--heading">Lorem Ipsum</div>
          <div className="footercontent__two--content">
            <div className="footercontent__two--content-text">hello world</div>
            <div className="footercontent__two--content-text">hello world</div>
            <div className="footercontent__two--content-text">hello world</div>
            <div className="footercontent__two--content-text">hello world</div>
            <div className="footercontent__two--content-text">hello world</div>
          </div>
        </div>
      )}
      {props.name === "footerthree" && (
        <div className="footercontent__three">
          <div className="footercontent__three--heading">Contact Us</div>
          <div className='footers'>
            <div className='footers__location'><FiMapPin/><span className='footers__locspan'> DHA Rahbar</span></div>
                        <div className='footers__email'><AiOutlineMail/><span className='footers__mail'>cbsolpro@gmail.com</span></div>
                        <div className='footers__call'><BiPhoneCall/> <span className='footers__num'>+92-XXX-XXXXXX</span></div>
                        </div>
          <div className="footercontent__three--content">
            <div className="footercontent__three--content-social">
              <FiFacebook className="footercontent__three--content-social-facebook" />
              <RiTwitterLine className="footercontent__three--content-social-twitter" />
              <AiOutlineInstagram className="footercontent__three--content-social-instagram" />
              <AiOutlineLinkedin className="footercontent__three--content-social-linkedin" />
            </div>
            
            <div className="footercontent__three--content-text">
              It is a long established fact that a reader will be distracted
            </div>
            <div className="footercontent__three--content-text">
              It is a long established fact that a reader will be distracted
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default FooterContent;
