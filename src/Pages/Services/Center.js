import React from "react";
import Description from "./Description";
import Cards from "./Cards";
import { VscDeviceMobile } from "react-icons/vsc";
import { IoIosDesktop } from "react-icons/io";
import { MdColorLens } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { BsShieldLock } from "react-icons/bs";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";

const Center = () => {
  return (
    <div className="center">
      <div className="center__left">
        <Description description="We build successful, long-lasting, profitable products for our clients and can help you with your projects" />
      </div>
      <div className="center__right">
        <Cards
          icons={<VscDeviceMobile />}
          title="Mobile Application"
          title2="We like to make life easier for ourselves and for others, so we application that will not only stand out from the crowd and give real profits, but will also be."
          button="Click Here"
          to={`services1#mobileapplication`}
        />
        <Cards
          icons={<IoIosDesktop />}
          title="Web Application"
          title2="We will give to your ideas thanks to our experience in comprehensive software development for medium and large enterprises."
          button="Click Here"
          to={`services1#webapplication`}
        />
        <Cards
          icons={<MdColorLens />}
          title="UI/UX Design"
          title2="We will optimize development costs and assess your capabilities thanks to our practical knowledge and experience in the IT industry."
          button="Click Here"
          to={`services1#productdesign`}
        />
        <Cards
          icons={<RiSettings4Line />}
          title="Software Testing"
          title2="Our experience in reducing testing costs and reducing the time to market of a ready-made application that has the highest level of code."
          button="Click Here"
          to={`services1#qaandtesting`}
        />
        <Cards
          icons={<BsShieldLock />}
          title="Data Security"
          title2="We will identify the scope of the application, the phase of its creation, industry or suitability. We will focus most on the capabilities."
          button="Click Here"
          to={`services1#datasecurity`}
        />
        <Cards
          icons={<AiOutlineFundProjectionScreen />}
          title="Project Management"
          title2="Discovery Product Workshops are a brilliant place to test your idea for an application and solve IT problems in your business."
          button="Click Here"
          to={`services1#discoveryworkshop`}
        />
      </div>
    </div>
  );
};

export default Center;
