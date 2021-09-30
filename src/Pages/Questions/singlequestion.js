import { PROPERTY_TYPES } from "@babel/types";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { BiPlus } from "react-icons/bi";

const SingleQuestion = (props) => {
  const [ansOpen, setAnsOpen] = useState(false);
  const rotateStyle = {
    transform: "rotate(-45deg)",
    transition: "all .3s",
  };
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
          <div className="questions__ques--ans">{props.answer}</div>
          <div className="questions__border-down"></div>
        </>
      )}
    </>
  );
};
export default SingleQuestion;
