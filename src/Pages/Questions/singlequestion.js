import { PROPERTY_TYPES } from "@babel/types";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { BiPlus } from "react-icons/bi";
import Aos from "aos";
import "aos/dist/aos.css";

const SingleQuestion = (props) => {
  const [ansOpen, setAnsOpen] = useState(false);
  const rotateStyle = {
    transform: "rotate(-45deg)",
    transition: "all .3s",
  };
  useEffect(() => {
    Aos.init({ duration: 300 });
  }, []);
  return (
    <>
      <div
        className="questions__ques"
        onClick={() => {
          setAnsOpen(!ansOpen);
        }}
      >
        <div className="questions__ques--bold">
          {props.question}
          <span
            className="questions__ques--plus"
            style={ansOpen ? rotateStyle : { transition: "all .3s" }}
          >
            <BiPlus />
          </span>
        </div>
      </div>
      <div className="questions__border-down"></div>
      {ansOpen === true && (
        <>
          <div className="questions__ques--ans" data-aos='fade-down'>{props.answer}</div>
          <div className="questions__border-down" data-aos='fade-down'></div>
        </>
      )}
    </>
  );
};
export default SingleQuestion;
