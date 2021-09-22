import React from "react";
import companyLogo from "../assets/images/kg.svg";
import image from "../assets/images/img-2.png";
import { AiFillPropertySafety } from "react-icons/ai";

const Individualcase = React.forwardRef((props, ref) => {
  return (
    <div className="individualcase" ref={ref}>
      <div className="individualcase__left">
        <div className="individualcase__left--logo">
          <div className="individualcase__left--logo-logo">
            <img
              src={props.src}
              alt="Blogo"
              className="individualcase__left--logo-logo-img"
            />
          </div>
          <div className="individualcase__left--logo-description">
            {props.heading}
          </div>
        </div>
        <div className="individualcase__left--technologies">
          <div className="individualcase__left--technologies-item">ios</div>
          <div className="individualcase__left--technologies-item">Andriod</div>
          <div className="individualcase__left--technologies-item">Web</div>
        </div>
        <div className="individualcase__left--description">{props.text}</div>
        <button className="individualcase__left--button" style={props.styless}>
          View Case
        </button>
      </div>
      <div className="individualcase__right">
        <img
          src={props.image}
          alt="someimage"
          className="individualcase__right--image"
        />
      </div>
    </div>
  );
});
export default Individualcase;
