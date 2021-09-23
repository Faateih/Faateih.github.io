import React from "react";
import Careers from "../Careers/Careers";
import Header from "../../components/header";
import Footer from "../../components/footer";
import About from "../../components/About";
import Mid from "../../components/mid";
const AboutUs = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Header />
      <Mid
        heading="We Are CbSol"
        text="We exist to provide web and mobile application service with having a dedicated, talented and qualified team of developers, designers, user experience professionals and unmatched experience to our clients. Being both creative and technical, we have extensive experience in creating unique products for our clients which not only stand out visually but are technically engineered to enterprise standards.
        CbSol team has over 15 years of Man Experience in Mobile and Web Application Development. Our head office is based in Lahore, Pakistan. Also we have strategic presence in UK and USA as well."
        page="Services"
        style={{ width: "100%" }}
      />
      <About />
      <Careers />
      <Footer />
    </div>
  );
};
export default AboutUs;
