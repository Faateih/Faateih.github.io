import React from "react";
import Medical from "../assets/images/medical.png";
import { FaStar } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

const BlogsCard = (props) => {
  return (
    <div className="blogscard" id={props.id}>
      <div className="blogscard__image">
        <img src={Medical} alt="cardpic" className="blogscard__image--img" />
      </div>
      <div className="blogscard__category">
        HEALTHCARE & TELEMEDICINE, UNCATEGORIZED
      </div>
      <div className="blogscard__description">
        How to Develop a Remote Patient Monitoring App
      </div>
      <div className="blogscard__explanation">
        Seeking considerable advice on RPM development? Check out our remote
        patient monitoring so...
      </div>
      <div className="blogscard__seendetail">
        <div className="blogscard__seendetail--one">Sep 08 . 13 min read</div>
        <div className="blogscard__seendetail--two">
          <div className="blogscard__seendetail--two-left">
            <FaStar />
            <span>0</span>
          </div>
          <div className="blogscard__seendetail--two-right">
            <FaEye />
            <span>96</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BlogsCard;
