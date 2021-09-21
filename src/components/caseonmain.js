import React from "react";
import Individualcase from "./individualcase";
import companyLogo from "../assets/images/kg.svg";
import image from "../assets/images/img-2.png";
import { useState } from "react";
import { useEffect } from "react";

const CaseOnMain = () => {
  const [header, setHeader] = useState("header");

  const listenScrollEvent = (event) => {
    if (window.scrollY > 2000 && window.scrollY < 2500) {
      return setHeader("#007cba");
    }
    if (window.scrollY > 2500 && window.scrollY < 3000) {
      return setHeader("#414756");
    }
    if (window.scrollY > 3000 && window.scrollY < 3500) {
      return setHeader("green");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  return (
    <div className="caseonmain" style={{ backgroundColor: header }}>
      <Individualcase
        src={companyLogo}
        image={image}
        styless={{ backgroundColor: header }}
        heading="Ruggengraat"
        text="Ruggengraat is an online fitness platform. We integrated features, that allow the trainer to create meal and workout plans, send them to the client's phone, and track the progress via text and graphs."
      />
      <Individualcase
        src={companyLogo}
        styless={{ backgroundColor: header }}
        image={image}
        heading="Ruggengraat"
        text="Ruggengraat is an online fitness platform. We integrated features, that allow the trainer to create meal and workout plans, send them to the client's phone, and track the progress via text and graphs."
      />
      <Individualcase
        src={companyLogo}
        styless={{ backgroundColor: header }}
        image={image}
        heading="Ruggengraat"
        text="Ruggengraat is an online fitness platform. We integrated features, that allow the trainer to create meal and workout plans, send them to the client's phone, and track the progress via text and graphs."
      />
    </div>
  );
};
export default CaseOnMain;
