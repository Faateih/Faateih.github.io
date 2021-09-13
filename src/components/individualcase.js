import React from "react";
import companyLogo from "../assets/images/kg.svg";
import image from "../assets/images/img-2.png";

const Individualcase = () => {
  return (
    <div className="individualcase">
      <div className="individualcase__left">
        <div className="individualcase__left--logo">
          <div className="individualcase__left--logo-logo">
            <img
              src={companyLogo}
              alt="Blogo"
              className="individualcase__left--logo-logo-img"
            />
          </div>
          <div className="individualcase__left--logo-description">
            Ruggengraat
          </div>
        </div>
        <div className="individualcase__left--technologies">
          <div className="individualcase__left--technologies-item">ios</div>
          <div className="individualcase__left--technologies-item">Andriod</div>
          <div className="individualcase__left--technologies-item">Web</div>
        </div>
        <div className="individualcase__left--description">
          Ruggengraat is an online fitness platform. We integrated features,
          that allow the trainer to create meal and workout plans, send them to
          the client's phone, and track the progress via text and graphs.
        </div>
        <button className="individualcase__left--button">View Case</button>
      </div>
      <div className="individualcase__right">
        <img
          src={image}
          alt="someimage"
          className="individualcase__right--image"
        />
      </div>
    </div>
  );
};
export default Individualcase;
