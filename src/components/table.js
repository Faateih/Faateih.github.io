import React from "react";
import TableRow from "./tablerow";

const Table = () => {
  return (
    <div className="table">
      <div className="table__heading">
        <h5 className="table__heading--text">Our Clients</h5>
      </div>
      <div className="table__content">
        <TableRow />
        <TableRow />
        <TableRow />
        <TableRow />
        <TableRow />
        <TableRow />
      </div>
    </div>
  );
};
export default Table;
