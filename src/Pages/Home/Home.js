import React from "react";
import Header from "../../components/header";
import Background from "../../components/background";
import Table from "../../components/table";
import Cases from "../../components/cases";
import CaseOnMain from "../../components/caseonmain";
import { useState } from "react";
import { useEffect } from "react";
import Footer from "../../components/footer";

import Partner from "../Parnter/Partner";
import Queries from "../Queries/Queries";
import Questions from "../Questions/Questions";
import Headd from "../Services/Headd";
import mail from "../../assets/umairbhai.jpg";
import mobil from "../../assets/phone.svg";
import fb from "../../assets/frazbhai.jpg";
import { FiSend } from "react-icons/fi";
const Home = () => {
  const [header, setHeader] = useState("header");
  const [border, setBorder] = useState("border");

  const listenScrollEvent = (event) => {
    if (window.scrollY < 599) {
      setHeader("rgba(9, 13, 48, 0)");
      setBorder("none");
      return;
    }
    if (window.scrollY > 600 && window.scrollY < 2000) {
      setHeader("blue");
      setBorder("none");
      return;
    }
    if (window.scrollY > 2000 && window.scrollY < 2500) {
      setHeader("#007cba");
      setBorder("none");
      return;
    }
    if (window.scrollY > 2500 && window.scrollY < 3000) {
      setHeader("#414756");
      setBorder("none");
      return;
    }
    if (window.scrollY > 2500 && window.scrollY < 3200) {
      setHeader("#006ba1");
      setBorder("none");
      return;
    }
    if (window.scrollY > 3200) {
      setHeader("rgba(255, 255, 255, 0.9)");
      setBorder("0.1rem solid #dcdcdc");
      return;
    } else {
      setBorder("none");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  return (
    <div>
      <Header style={{ backgroundColor: header, borderBottom: border }} />
      <Background />
      <Table />
      <CaseOnMain />
      <Cases />

      <Headd />
      <Partner />
      <Questions />
      <Queries
        iconmail={<FiSend />}
        queryhead="Have a project in mind? Need help with an ongoing one?"
        querysub="We'll be happy to talk!"
        button="Send Message"
        mailpic={mail}
        mailname="Umair Ali"
        maildetail="Cheif Executive Officer, CbSol"
        mobile={mobil}
        mailpicf={fb}
        mailnamef="Fraz Khan"
        maildetailf="Project Manager, CbSol"
      />
      <Footer />
    </div>
  );
};

export default Home;
