import React from "react";
import Header from "../../components/header";
import TechnologiesMain from "../../components/technologiesmain";
import Mid from "../../components/mid";

const Technologies = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Header />
      <Mid
        heading="Technologies we are working on"
        text="We cover web app creation from the ground up for companies in any field
        and any size, offering both design and development services"
      />

      <TechnologiesMain text="Technologies We Are Working On" />
    </div>
  );
};
export default Technologies;
