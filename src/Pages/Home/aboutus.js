import React, { useEffect, useState } from "react";
import Careers from "../Careers/Careers";
import Header from "../../components/header";
import Footer from "../../components/footer";
import About from "../../components/About";
import Mid from "../../components/mid";
import Abut from "../../assets/images/AboutUs-CbSol.jpg";
import db from "../../firebase.config";

const AboutUs = () => {
  // console.log(data1);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Header />
      <Mid
        techno={Abut}
        heading="We Are CbSol"
        text="We exist to provide web and mobile application service with having a dedicated, talented and most qualified team of developers, highly talented designers, user experience professionals and unmatched experience to our clients. Being both creative and technical, we have extensive experience in creating unique products for our clients which not only stand out visually but are technically engineered to enterprise standards."
        page="&nbsp;About Us"
        style={{ width: "100%" }}
      />
      <About />
      <Careers />
      <Footer />
    </div>
  );
};
export default AboutUs;
