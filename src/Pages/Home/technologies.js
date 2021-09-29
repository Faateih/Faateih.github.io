import React from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import TechnologiesMain from "../../components/technologiesmain";
import Mid from "../../components/mid";
import Techno from '../../assets/images/opacabout.jpg';

const Technologies = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Header />
      <Mid
        techno = {Techno}
        heading="Technologies"
        text="We cover web app creation from the ground up for companies in any field
        and any size, offering both design and development services" page = '&nbsp;Technology'
      />

      <TechnologiesMain text="Technologies" />
      <Footer />
    </div>
  );
};
export default Technologies;
