import React, { useEffect, useState } from "react";
import Careers from "../Careers/Careers";
import Header from "../../components/header";
import Footer from "../../components/footer";
import About from "../../components/About";
import Mid from "../../components/mid";
import Abut from "../../assets/images/opactech.jpg";
import db from "../../firebase.config";

const AboutUs = () => {
  const [data1, setData1] = useState("");
  const fetchdata = async () => {
    const response = db.collection("aboutus");
    const data = await response.get();
    const arr = [];
    data.forEach((item) => {
      item.data();
      arr.push(item.data());
      setData1(arr);
    });
    setData1(arr);
    console.log(data1);
  };
  useEffect(() => {
    fetchdata();
  }, [setData1]);
  console.log(data1);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Header />
      <Mid
        techno={Abut}
        heading="We Are CbSol"
        text={data1[0]?.description}
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
