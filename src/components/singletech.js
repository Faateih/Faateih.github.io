import React from "react";

import Tech from "../assets/images/tech.webp";

const SingleTech = (props) => {
  return (
    <div className="singletech" id={props.id}>
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
