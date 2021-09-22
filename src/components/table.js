import React from "react";
import TableRow from "./tablerow";
import TableItem from "./tableitem";
import companyLogo1 from "../assets/images/logo-klienta-18.png";

const Table = () => {
  return (
    <div className="table">
      <div className="table__heading">
        <h5 className="table__heading--text">Our Clients</h5>
      </div>
      <div className="table__content">
        <TableItem src={companyLogo1} alt="something" />
        <TableItem src={companyLogo1} alt="something" />
        <TableItem src={companyLogo1} alt="something" />
        <TableItem src={companyLogo1} alt="something" />
        <TableItem src={companyLogo1} alt="something" />
        <TableItem src={companyLogo1} alt="something" />
        <TableItem src={companyLogo1} alt="something" />
        <TableItem src={companyLogo1} alt="something" />
        <TableItem src={companyLogo1} alt="something" />
        <TableItem src={companyLogo1} alt="something" />
        <TableItem src={companyLogo1} alt="something" />
        <TableItem src={companyLogo1} alt="something" />
        <TableItem src={companyLogo1} alt="something" />
        <TableItem src={companyLogo1} alt="something" />
        <TableItem src={companyLogo1} alt="something" />
        <TableItem src={companyLogo1} alt="something" />
        <TableItem src={companyLogo1} alt="something" />
        <TableItem src={companyLogo1} alt="something" />
        <TableItem src={companyLogo1} alt="something" />
        <TableItem src={companyLogo1} alt="something" />
        <TableItem src={companyLogo1} alt="something" />
      </div>
    </div>
  );
};
export default Table;
