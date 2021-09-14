import React from "react";
import Header from "../../components/header";
import Background from "../../components/background";
import Table from "../../components/table";
import Cases from "../../components/cases";
import CaseOnMain from "../../components/caseonmain";
import { useState } from "react";
import { useEffect } from "react";
import Footer from "../../components/footer";

const Home = () => {
  const [header, setHeader] = useState("header");

  const listenScrollEvent = (event) => {
    if (window.scrollY < 599) {
      return setHeader("rgba(76, 175, 80, 0.3)");
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
      <Footer />
    </div>
  );
};

export default Home;
