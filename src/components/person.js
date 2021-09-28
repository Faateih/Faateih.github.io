import React from "react";
import FarazBhai from "../assets/frazbhai.jpg";

const Person = (props) => {
  return (
    <a href={props.href} className="aboutus__sectionthree--parttwo-three-p1">
      <img
        src={props.src}
        alt="hr"
        className="aboutus__sectionthree--parttwo-three-p1-image"
      />
      <div className="aboutus__sectionthree--parttwo-three-p1-text">
        {props.name}
      </div>
      <div className="aboutus__sectionthree--parttwo-three-p1-text-2">
        {props.designation}
      </div>
    </a>
  );
};
export default Person;
