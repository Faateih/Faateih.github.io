import React from "react";
import Queries from "../Pages/Queries/Queries";
import SingleTech from "./singletech";

import mail from "../assets/umairbhai.jpg";
import mobil from "../assets/phone.svg";
import fb from "../assets/frazbhai.jpg";
import { FiSend } from "react-icons/fi";

const TechnologiesMain = (props) => {
  return (
    <div className="technologiesmain">
      <div className="technologiesmain__one">
        <h1 className="technologiesmain__one--text">{props.text}</h1>
      </div>
      <div className="technologiesmain__two">
        <SingleTech />
        <SingleTech />
        <SingleTech />
      </div>
    </div>
  );
};
export default TechnologiesMain;
