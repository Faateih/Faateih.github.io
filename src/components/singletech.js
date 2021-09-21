import React from "react";
import Tech from "../assets/images/tech.webp";

const SingleTech = () => {
  return (
    <div className="singletech">
      <div className="singletech__left">
        <img src={Tech} alt="technology" className="singletech__left--image" />
      </div>
      <div className="singletech__right">
        <div className="singletech__right--inner">
          <div className="singletech__right--inner-heading">Flutter</div>
          <div className="singletech__right--inner-text">
            Flutter is Google’s framework to streamline multi-platform
            development. Being backed and actively maintained by the tech giant,
            it is the only framework with mobile SDK, that doesn’t require
            Javascript bridge for reactive styles. This leads to less time to
            get the working app and returns on capital. Our company is offering
            Flutter app development services for you.
          </div>
        </div>
      </div>
    </div>
  );
};
export default SingleTech;
