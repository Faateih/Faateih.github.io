import React from "react";
import Header from "../../components/header";
import Background from "../../components/background";
import Cases from "../../components/cases";
import CaseOnMain from "../../components/caseonmain";
import { useState } from "react";
import { useEffect } from "react";
import Footer from "../../components/footer";
import Aos from 'aos';
import 'aos/dist/aos.css';

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
  useEffect(() => {
    Aos.init({duration: 1200});
}, []);
  const [header, setHeader] = useState("transparent");
  const[bg, setBg]=useState("blue");
  const [text, setText] = useState('black');
  const [border, setBorder] = useState("border");
  const myRef = useRef(null);
  const myRef1 = useRef(null);
  const myRef2 = useRef(null);
  const newRef=useRef(null);
  const lastRef=useRef(null);

  // let offsetTop = myRef?.current?.node?.getBoundingClientRect();

  const listenScrollEvent = (event) => {
    let offsetTop = myRef?.current?.offsetTop;
    let offsetTop1 = myRef1?.current?.offsetTop;
    let offsetTop2 = myRef2?.current?.offsetTop;
    let offsetTop3 = newRef?.current?.offsetTop;
    let offsetTop4 = lastRef?.current?.offsetTop;
    console.log(offsetTop);
    console.log(offsetTop1);
    console.log(offsetTop2);
    if (window.scrollY < offsetTop3 ){
      setHeader('transparent');
    }
    if(window.scrollY > offsetTop3 && window.scrollY < offsetTop) {
      setHeader('rgba(255,255,255,0.9)');
      setText('black');
    }
    if (window.scrollY > offsetTop && window.scrollY < offsetTop1) {
       setHeader("#55117f");
       setBg('#55117f');
       setText('white');
       return;
    }
    if (window.scrollY > offsetTop1 && window.scrollY < offsetTop2) {
       setHeader("#d4b20d");
      setBg('#d4b20d');
      setText('white');
       return;
    }
    if (window.scrollY > offsetTop2 && window.scrollY < offsetTop4) {
       setHeader("#078723");
      setBg('#078723');
      setText('white');
       return;
    }
    if(window.scrollY > offsetTop4){
      setHeader('white');
      setText('black');
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  return (
    <div>
      <div data-aos="fade-down">
      <Header style={{ backgroundColor: header }} styleee1={{color: text}} styleee2={{color: text}} styleee3={{color: text}} styleee4={{color: text}} styleee5={{color: text}}/>
      <Background />
      </div>
      <Headd />
      <CaseOnMain
        ref1={myRef}
        ref2={myRef1}
        ref3={myRef2}
        stylee={{ backgroundColor: bg }}
      />
      <Cases ref={lastRef} />

      <Partner />
      <Questions />
      <Queries
        iconmail={<FiSend />}
        queryhead="Have a project in mind? Need help with an ongoing one?"
        querysub="We'll be happy to talk!"
        button="Send&nbsp;"
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
