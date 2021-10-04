import React from "react";
import Individualcase from "./individualcase";
import companyLogo from "../assets/images/kg.svg";
import image from "../assets/images/img-2.png";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import db from "../../src/firebase.config";

const CaseOnMain = (props) => {
  const [mainCases, setMainCases] = useState([]);
  const [isLoading, setIsLoading] = useState("true");
  const fetchMainCases = async () => {
    const response = db.collection("maincases");
    const data = await response.get();
    const arr = [];
    data.forEach((item) => {
      // setServices((ser) => [...ser, item.data()]);
      arr.push(item.data());
    });
    setMainCases([...arr]);
    setIsLoading(false);
    console.log("i am called from main cases");
  };

  useEffect(() => {
    fetchMainCases();
  }, []);

  return (
    <div className="caseonmain" style={props.stylee}>
      <Individualcase
        ref={props.ref1}
        src={mainCases[1]?.url}
        image={mainCases[1]?.image}
        heading={mainCases[1]?.name}
        text={mainCases[1]?.description}
        to={mainCases[1]?.to}
      />
      <Individualcase
        ref={props.ref2}
        src={mainCases[0]?.url}
        image={mainCases[0]?.image}
        heading={mainCases[0]?.name}
        text={mainCases[0]?.description}
        to={mainCases[0]?.to}
      />
      <Individualcase
        ref={props.ref3}
        src={mainCases[2]?.url}
        image={mainCases[2]?.image}
        heading={mainCases[2]?.name}
        text={mainCases[2]?.description}
        to={mainCases[2]?.to}
      />
    </div>
  );
};
export default CaseOnMain;
