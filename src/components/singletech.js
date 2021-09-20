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
            Flutter app development services for you to benefit from both
            powerful digital experience and simplicity regardless of device.It
            has only one codebase written in Dart, that works with both iOS and
            Android, frontend and backend. It means, you need one team, one
            codebase for one project, that can target both iOS and Android at a
            time. With budget always being a major constraint, Flutter
            development involves fewer resources to cover several platforms.
          </div>
        </div>
      </div>
    </div>
  );
};
export default SingleTech;
