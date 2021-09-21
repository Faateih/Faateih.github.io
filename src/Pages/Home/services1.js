import React from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import ServicesMain from "../../components/servicesmain";
import Mid from "../../components/mid";

const Services1 = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Header />
      <Mid
        heading="OUR SERVICES"
        text="We cover web app creation from the ground up for companies in any field
        and any size, offering both design and development services" page = 'Services'
      />
      <ServicesMain text="Services" />
      <Footer />
    </div>
  );
};
export default Services1;