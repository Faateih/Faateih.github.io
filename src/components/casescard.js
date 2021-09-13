import React from "react";
import imageone from "../assets/images/cov_me.png.webp";
import imagetwo from "../assets/images/sg_main_.png.webp";

const CasesCard = () => {
  return (
    <div className="casescard">
      <div className="casescard__left">
        <div className="casescard__left--image">
          <img
            src={imageone}
            alt="Blo"
            className="casescard__left--image-img"
          />
        </div>
        <div className="casescard__left--description">
          <span className="casescard__left--description-span">Melanence</span> -
          Unique e-learning platform for people of color
        </div>
      </div>
      <div className="casescard__right">
        <div className="casescard__right--image">
          <img
            src={imagetwo}
            alt="Bl"
            className="casescard__right--image-img"
          />
        </div>
        <div className="casescard__right--description">
          <span className="casescard__right--description-span">
            App for an EU-based fitness chain
          </span>{" "}
          - Digital transformation for offline gyms
        </div>
      </div>
    </div>
  );
};
export default CasesCard;
