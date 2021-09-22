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
import { useRef } from "react";
const Home = () => {
  const [header, setHeader] = useState("header");
  const myRef = useRef(null);
  const myRef1 = useRef(null);
  const myRef2 = useRef(null);

  // let offsetTop = myRef?.current?.node?.getBoundingClientRect();

  const listenScrollEvent = (event) => {
    let offsetTop = myRef?.current?.offsetTop;
    let offsetTop1 = myRef1?.current?.offsetTop;
    let offsetTop2 = myRef2?.current?.offsetTop;
    console.log(offsetTop);
    console.log(offsetTop1);
    console.log(offsetTop2);
    if (window.scrollY > offsetTop && window.scrollY < offsetTop1) {
      return setHeader("blue");
    }
    if (window.scrollY > offsetTop1 && window.scrollY < offsetTop2) {
      return setHeader("brown");
    }
    if (window.scrollY > offsetTop2) {
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
      <CaseOnMain
        ref1={myRef}
        ref2={myRef1}
        ref3={myRef2}
        stylee={{ backgroundColor: header }}
      />
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
