import React from "react";
import { IoIosDesktop } from "react-icons/io";

const Card = (props) => {
  return (
    <div className="response__card">
      <div className="response__icon">{props.icon}</div>
      <div className="response__descrip">{props.title}</div>
      <div className="response__exp">{props.description}</div>
    </div>
  );
};
export default Card;
