import React from "react";
import Header from "../../components/header";
import WelcomeCase from "../../components/welcomecase";
import CasesCard from "../../components/casescard";
import imageone from "../../assets/images/cov_me.png.webp";
import imagetwo from "../../assets/images/sg_main_.png.webp";
import imagethree from "../../assets/images/rg_home.png.webp";
import imagefour from "../../assets/images/probuddy_img_1.png.webp";

const NewPage = () => {
  return (
    <>
      <Header />
      <WelcomeCase />
      <CasesCard
        src={imageone}
        source2={imagetwo}
        span="Melanence"
        text="Unique e-learning platform for people of color"
        span2="App for an EU-based fitness chain"
        text2="Digital transformation for offline gyms"
      />
      <CasesCard
        src={imagethree}
        source2={imagefour}
        span="Melanence"
        text="Unique e-learning platform for people of color"
        span2="App for an EU-based fitness chain"
        text2="Digital transformation for offline gyms"
      />
      <CasesCard
        src={imageone}
        source2={imagetwo}
        span="Melanence"
        text="Unique e-learning platform for people of color"
        span2="App for an EU-based fitness chain"
        text2="Digital transformation for offline gyms"
      />
      <CasesCard
        src={imageone}
        source2={imagetwo}
        span="Melanence"
        text="Unique e-learning platform for people of color"
        span2="App for an EU-based fitness chain"
        text2="Digital transformation for offline gyms"
      />
    </>
  );
};
export default NewPage;
