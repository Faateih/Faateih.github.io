import React from "react";
import Partner from "../Parnter/Partner";
import Queries from "../Queries/Queries";
import Questions from "../Questions/Questions";
import Headd from "../Services/Headd";
import mail from '../../assets/umairbhai.jpg';
import mobil from '../../assets/phone.svg';
import fb from '../../assets/frazbhai.jpg';
import { FiSend } from 'react-icons/fi';
const Home = () => {
  return (
    <div>
      <Headd />
      <Partner />
      <Questions />
      <Queries iconmail={<FiSend/>}
       queryhead='Have a project in mind? Need help with an ongoing one?' querysub="We'll be happy to talk!" button='Send Message' 
       mailpic={mail} mailname='Umair Ali' maildetail='Cheif Executive Officer, CbSol' mobile={mobil}
       mailpicf={fb} mailnamef='Fraz Khan' maildetailf='Project Manager, CbSol'
       />
    </div>
  );
};

export default Home;
