import React from "react";
import Queries from "../Pages/Queries/Queries";
import SingleTech from "./singletech";

import mail from "../assets/umairbhai.jpg";
import mobil from "../assets/phone.svg";
import fb from "../assets/frazbhai.jpg";
import { FiSend } from "react-icons/fi";

const TechnologiesMain = () => {
  return (
    <div className="technologiesmain">
      <div className="technologiesmain__one">
        <h1 className="technologiesmain__one--text">Technologies we work on</h1>
      </div>
      <div className="technologiesmain__two">
        <SingleTech />
        <SingleTech />
        <SingleTech />
        <Queries
          iconmail={<FiSend />}
          queryhead="Have a project in mind? Need help with an ongoing one?"
          querysub="We'll be happy to talk!"
          button="Send Message"
          mailpic={mail}
          mailname="Umair Ali"
          maildetail="Cheif Executive Officer, CbSol"
          mobile={mobil}
          mailpicf={fb}
          mailnamef="Fraz Khan"
          maildetailf="Project Manager, CbSol"
        />
      </div>
    </div>
  );
};
export default TechnologiesMain;
