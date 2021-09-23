import React from "react";
import Individualcase from "./individualcase";
import companyLogo from "../assets/images/kg.svg";
import image from "../assets/images/img-2.png";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

const CaseOnMain = (props) => {
  
  // const [header, setHeader] = useState("header");
  // const myRef = useRef(null);
  // const myRef1 = useRef(null);
  // const myRef2 = useRef(null);

  // // let offsetTop = myRef?.current?.node?.getBoundingClientRect();

  // const listenScrollEvent = (event) => {
  //   let offsetTop = myRef?.current?.offsetTop;
  //   let offsetTop1 = myRef1?.current?.offsetTop;
  //   let offsetTop2 = myRef2?.current?.offsetTop;
  //   console.log(offsetTop);
  //   console.log(offsetTop1);
  //   console.log(offsetTop2);
  //   if (window.scrollY > offsetTop && window.scrollY < offsetTop1) {
  //     return setHeader("blue");
  //   }
  //   if (window.scrollY > offsetTop1 && window.scrollY < offsetTop2) {
  //     return setHeader("brown");
  //   }
  //   if (window.scrollY > offsetTop2) {
  //     return setHeader("green");
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", listenScrollEvent);

  //   return () => window.removeEventListener("scroll", listenScrollEvent);
  // }, []);

  return (
    <div className="caseonmain" style={props.stylee}>
      <Individualcase
        ref={props.ref1}
        src={companyLogo}
        image={image}
        heading="Ruggengraat"
        text="Ruggengraat is an online fitness platform. We integrated features, that allow the trainer to create meal and workout plans, send them to the client's phone, and track the progress via text and graphs."
      />
      <Individualcase
        ref={props.ref2}
        src={companyLogo}
        image={image}
        heading="Ruggengraat"
        text="Ruggengraat is an online fitness platform. We integrated features, that allow the trainer to create meal and workout plans, send them to the client's phone, and track the progress via text and graphs."
      />
      <Individualcase
        ref={props.ref3}
        src={companyLogo}
        image={image}
        heading="Ruggengraat"
        text="Ruggengraat is an online fitness platform. We integrated features, that allow the trainer to create meal and workout plans, send them to the client's phone, and track the progress via text and graphs."
      />
    </div>
  );
};
export default CaseOnMain;
