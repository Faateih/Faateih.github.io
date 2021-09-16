import React from "react";
import FarazBhai from "../assets/frazbhai.jpg";

const Person = () => {
  return (
    <a
      href="www.linkedin.com"
      className="aboutus__sectionthree--parttwo-three-p1"
    >
      <img
        src={FarazBhai}
        alt="hr"
        className="aboutus__sectionthree--parttwo-three-p1-image"
      />
      <div className="aboutus__sectionthree--parttwo-three-p1-text">
        hello world
      </div>
      <div className="aboutus__sectionthree--parttwo-three-p1-text-2">
        hello world
      </div>
    </a>
  );
};
export default Person;
