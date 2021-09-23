import React from "react";
import {useEffect} from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'

function Queries(props) {
  useEffect(() => {
    Aos.init({duration: 1300});
}, []);
  return (
    <>
    <div className='waves'>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 300"><path fill="#ffff" fill-opacity="1" d="M0,288L60,288C120,288,240,288,360,277.3C480,267,600,245,720,234.7C840,224,960,224,1080,234.7C1200,245,1320,267,1380,277.3L1440,288L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
       </div>
    <form className="queries" id="contactus">
      <div className="queries__query">
        <div className="queries__main">{props.queryhead}</div>
        <div className="queries__sub">{props.querysub}</div>
        {/* <div className="queries__icon">{props.iconmail}</div> */}
      </div>
      <div className="mail">
        <div className="mail__left" data-aos='fade-up'>
          <input
            type="text"
            placeholder="Your name"
            className="mail__email"
          ></input>
          <input
            type="email"
            placeholder="E-mail address"
            className="mail__email"
          ></input>
          <input
            type="text"
            placeholder="Phone number"
            className="mail__email"
          ></input>
          <input
            type="text"
            placeholder="Your message or query"
            className="mail__email"
          ></input>
          <button className="mail__button">
            {props.button}
            <span className="card__arrow"> &rarr;</span>
          </button>
        </div>
        <div className="mail__center"></div>
        <div className="mail__right" data-aos='fade-down'>
          <div className="mail__flex">
            <img src={props.mailpic} alt="Pic" className="mail__picture" />
            <div className="mail__data">
              <div className="mail__heading">{props.mailname}</div>
              <div className="mail__details">{props.maildetail}</div>
              <div className="mail__phone">
                <img src={props.mobile} alt="mobile" className="mail__mobile" />{" "}
                <span className="mail__num">887-999-777-666</span>
              </div>
              <div className="mail__emaile">umairali123@gmail.com</div>
            </div>
          </div>
          <div className="mail__flex">
            <img src={props.mailpicf} alt="Pic" className="mail__picture" />
            <div className="mail__data">
              <div className="mail__heading">{props.mailnamef}</div>
              <div className="mail__details">{props.maildetailf}</div>
              <div className="mail__phone">
                <img src={props.mobile} alt="mobile" className="mail__mobile" />{" "}
                <span className="mail__num">887-999-777-666</span>
              </div>
              <div className="mail__emaile">frazkhan123@gmail.com</div>
            </div>
          </div>
        </div>
      </div>
    </form>
    </>
  );
}

export default Queries;
