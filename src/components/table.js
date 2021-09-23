import React from "react";
import TableRow from "./tablerow";
import TableItem from "./tableitem";
import companyLogo1 from "../assets/images/logo-klienta-18.png";
import Aos from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from 'react';


const Table = React.forwardRef((props,ref) => {
  useEffect(() => {
    Aos.init({duration: 1500});
}, []);
  return (
    <div className="table" ref={ref} data-aos='fade-up'>
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
})
export default Table;
