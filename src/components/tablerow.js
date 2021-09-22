import React from "react";
import companyLogo1 from "../assets/images/logo-klienta-18.png";
import TableItem from "./tableitem";

const TableRow = () => {
  return (
    <div className="tablerow">
      <TableItem src={companyLogo1} alt="something" />
      <TableItem src={companyLogo1} alt="something" />
      <TableItem src={companyLogo1} alt="something" />
      <TableItem src={companyLogo1} alt="something" />
      <TableItem src={companyLogo1} alt="something" />
      <TableItem src={companyLogo1} alt="something" />
    </div>
  );
};
export default TableRow;
