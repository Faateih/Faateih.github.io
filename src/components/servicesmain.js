import React from "react";
import Queries from "../Pages/Queries/Queries";
import SingleTech from "./singletech";

import mail from "../assets/umairbhai.jpg";
import mobil from "../assets/phone.svg";
import fb from "../assets/frazbhai.jpg";
import { FiSend } from "react-icons/fi";

const ServicesMain = (props) => {
  return (
    <div className="technologiesmain">
      <div className="technologiesmain__one">
        <h1 className="technologiesmain__one--text">{props.text}</h1>
      </div>
      <div className="technologiesmain__two">
        <SingleTech
          id="webdesignanddevelopment"
          description="Flutter is Google’s framework to streamline multi-platform
            development. Being backed and actively maintained by the tech giant,
            it is the only framework with mobile SDK, that doesn’t require
            Javascript bridge for reactive styles. This leads to less time to
            get the working app and returns on capital. Our company is offering
            Flutter app development services for you."
          heading="WEB DESIGN AND DEVELOPMENT"
        />
        <SingleTech
          id="mobiledevelopment"
          description="Flutter is Google’s framework to streamline multi-platform
            development. Being backed and actively maintained by the tech giant,
            it is the only framework with mobile SDK, that doesn’t require
            Javascript bridge for reactive styles. This leads to less time to
            get the working app and returns on capital. Our company is offering
            Flutter app development services for you."
          heading="MOBILE DEVELOPMENT"
        />
        <SingleTech
          id="ios"
          description="Flutter is Google’s framework to streamline multi-platform
            development. Being backed and actively maintained by the tech giant,
            it is the only framework with mobile SDK, that doesn’t require
            Javascript bridge for reactive styles. This leads to less time to
            get the working app and returns on capital. Our company is offering
            Flutter app development services for you."
          heading="IOS"
        />
        <SingleTech
          id="android"
          description="Flutter is Google’s framework to streamline multi-platform
            development. Being backed and actively maintained by the tech giant,
            it is the only framework with mobile SDK, that doesn’t require
            Javascript bridge for reactive styles. This leads to less time to
            get the working app and returns on capital. Our company is offering
            Flutter app development services for you."
          heading="ANDROID"
        />
        <SingleTech
          id="crossplatform"
          description="Flutter is Google’s framework to streamline multi-platform
            development. Being backed and actively maintained by the tech giant,
            it is the only framework with mobile SDK, that doesn’t require
            Javascript bridge for reactive styles. This leads to less time to
            get the working app and returns on capital. Our company is offering
            Flutter app development services for you."
          heading="CROSS_PLATFORM"
        />
        <SingleTech
          id="softwaretesting"
          description="Flutter is Google’s framework to streamline multi-platform
            development. Being backed and actively maintained by the tech giant,
            it is the only framework with mobile SDK, that doesn’t require
            Javascript bridge for reactive styles. This leads to less time to
            get the working app and returns on capital. Our company is offering
            Flutter app development services for you."
          heading="SOFTWARE TESTING"
        />
        <SingleTech
          id="uxuidesign"
          description="Flutter is Google’s framework to streamline multi-platform
            development. Being backed and actively maintained by the tech giant,
            it is the only framework with mobile SDK, that doesn’t require
            Javascript bridge for reactive styles. This leads to less time to
            get the working app and returns on capital. Our company is offering
            Flutter app development services for you."
          heading="UX/UI DESIGN"
        />

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
export default ServicesMain;
