import React from "react";
import Individualcase from "./individualcase";
import companyLogo from "../assets/images/kg.svg";
import image from "../assets/images/img-2.png";

const CaseOnMain = () => {
  return (
    <div className="caseonmain">
      <Individualcase
        src={companyLogo}
        image={image}
        heading="Ruggengraat"
        text="Ruggengraat is an online fitness platform. We integrated features, that allow the trainer to create meal and workout plans, send them to the client's phone, and track the progress via text and graphs."
      />
      <Individualcase
        src={companyLogo}
        image={image}
        heading="Ruggengraat"
        text="Ruggengraat is an online fitness platform. We integrated features, that allow the trainer to create meal and workout plans, send them to the client's phone, and track the progress via text and graphs."
      />
      <Individualcase
        src={companyLogo}
        image={image}
        heading="Ruggengraat"
        text="Ruggengraat is an online fitness platform. We integrated features, that allow the trainer to create meal and workout plans, send them to the client's phone, and track the progress via text and graphs."
      />
    </div>
  );
};
export default CaseOnMain;
