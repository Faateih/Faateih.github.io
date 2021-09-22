import React from "react";
import Careers from "../Careers/Careers";
import Header from '../../components/header';
import Footer from "../../components/footer";
import About from "../../components/About";
import Mid from "../../components/mid";
const AboutUs = () => {
  return (
      <div style={{ display: "flex", flexDirection: "column" }}>
      <Header />
      <Mid
        heading="We Are CbSol"
        text="We cover web app creation from the ground up for companies in any field
        and any size, offering both design and development services" page = 'Services'
      />
      <About />
      <Careers />
      <Footer />
    </div>
  );
};
export default AboutUs;
