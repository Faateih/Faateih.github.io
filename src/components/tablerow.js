import React from "react";
import companyLogo1 from "../assets/images/logo-klienta-18.png";

const TableRow = () => {
  return (
    <div className="tablerow">
      <div className="tablerow__item">
        <img src={companyLogo1} alt="logo1" className="tablerow__item--image" />
      </div>
      <div className="tablerow__item">
        <img src={companyLogo1} alt="logo1" className="tablerow__item--image" />
      </div>
      <div className="tablerow__item">
        <img src={companyLogo1} alt="logo1" className="tablerow__item--image" />
      </div>
      <div className="tablerow__item">
        <img src={companyLogo1} alt="logo1" className="tablerow__item--image" />
      </div>
      <div className="tablerow__item">
        <img src={companyLogo1} alt="logo1" className="tablerow__item--image" />
      </div>
    </div>
  );
};
export default TableRow;
