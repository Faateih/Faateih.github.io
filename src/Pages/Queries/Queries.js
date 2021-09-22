import React from "react";

function Queries(props) {
  return (
    <>
    <div className='waves'>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200"><path fill="#17217b  " fill-opacity="1" d="M0,128L48,138.7C96,149,192,171,288,165.3C384,160,480,128,576,122.7C672,117,768,139,864,160C960,181,1056,203,1152,192C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
    </div>
    <form className="queries" id="contactus">
      <div className="queries__query">
        <div className="queries__main">{props.queryhead}</div>
        <div className="queries__sub">{props.querysub}</div>
        {/* <div className="queries__icon">{props.iconmail}</div> */}
      </div>
      <div className="mail">
        <div className="mail__left">
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
        <div className="mail__right">
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
