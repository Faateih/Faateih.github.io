import React from "react";
import Queries from "../Pages/Queries/Queries";
import SingleTech from "./singletech";

import mail from "../assets/umairbhai.jpg";
import mobil from "../assets/phone.svg";
import fb from "../assets/frazbhai.jpg";
import { FiSend } from "react-icons/fi";
import { useEffect } from "react";
import db from "../firebase.config";
import { useState } from "react";

const ServicesMain = (props) => {
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState("true");
  const fetchBlogs = async () => {
    const response = db.collection("services");
    const data = await response.get();
    const arr = [];
    data.forEach((item) => {
      // setServices((ser) => [...ser, item.data()]);
      arr.push(item.data());
    });
    setServices([...arr]);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);
  // console.log(services);

  return (
    <div className="technologiesmain">
      {/* <div className="technologiesmain__one">
        <h1 className="technologiesmain__one--text">{props.text}</h1>
      </div> */}
      <div className="technologiesmain__two">
        {services.length > 0 &&
          services.map((service) => {
            return (
              <SingleTech
                id={service.name}
                description={service.description}
                heading={service.name}
                src={service.image}
              />
            );
          })}

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
