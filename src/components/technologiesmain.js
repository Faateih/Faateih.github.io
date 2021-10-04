import React from "react";
import Queries from "../Pages/Queries/Queries";
import SingleTech from "./singletech";

import mail from "../assets/umairbhai.jpg";
import mobil from "../assets/phone.svg";
import fb from "../assets/frazbhai.jpg";
import { FiSend } from "react-icons/fi";
import db from "../firebase.config";
import { useState } from "react";
import { useEffect } from "react";
const TechnologiesMain = (props) => {
  const [technologies, setTechnologies] = useState([]);

  const fetchBlogs = async () => {
    // console.log("im here");
    const response = db.collection("technologies");
    const data = await response.get();
    const arr = [];
    data.forEach((item) => {
      // setServices((ser) => [...ser, item.data()]);
      arr.push(item.data());
    });
    setTechnologies([...arr]);
    console.log("i am from tech");
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="technologiesmain">
      {/* <div className="technologiesmain__one">
        <h1 className="technologiesmain__one--text">{props.text}</h1>
      </div> */}
      <div className="technologiesmain__two">
        {technologies.length > 0 &&
          technologies.map((technology) => {
            return (
              <SingleTech
                id={technology.name}
                description={technology.description}
                heading={technology.name}
                src={technology.image}
              />
            );
          })}

        {/* <Queries
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
        /> */}
      </div>
    </div>
  );
};
export default TechnologiesMain;
