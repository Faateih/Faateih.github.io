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

  const listenScrollEvent = (event) => {
    if (window.scrollY < 599) {
      return setHeader("rgba(9, 13, 48, 0.3)");
    }
    if (window.scrollY > 600 && window.scrollY < 1600) {
      return setHeader("blue");
    } else if (window.scrollY > 1600) {
      return setHeader("green");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  return (
    <div>
      <Header style={{ backgroundColor: header }} />
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
