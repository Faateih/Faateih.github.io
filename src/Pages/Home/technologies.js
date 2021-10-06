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
        text="We use only proven and reliable technologies to ensure your app will perform seamlessly.
" page = '&nbsp;Technology'
      />

      <TechnologiesMain text="Technologies" />
      <Footer />
    </div>
  );
};
export default Technologies;
