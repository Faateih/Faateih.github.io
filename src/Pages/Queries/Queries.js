import React from "react";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useState } from "react";
import db from "../../firebase.config";
import { doc, setDoc } from "firebase/firestore";
import Loader from "react-loader-spinner";

function Queries(props) {
  //PHONE VALIDATION
  const [inputValue, setInputValue] = useState("");

  const handleInput = (e) => {
    const formattedPhoneNumber = formatPhoneNumber(e.target.value);
    setInputValue(formattedPhoneNumber);
  };
  function formatPhoneNumber(value) {
    if (!value) return value;
    const phoneNumber = value.replace(/[^\d]/g, "");
    const phoneNumberLength = phoneNumber.length;
    if (phoneNumberLength < 4) return phoneNumber;
    if (phoneNumberLength < 11) {
      return `${phoneNumber.slice(0, 5)}${phoneNumber.slice(5)}`;
    }
    return `${phoneNumber.slice(0, 4)}-${phoneNumber.slice(
      4,
      10
    )}${phoneNumber.slice(10, 11)}`;
  }
  //EMAIL VALIDATION
  const [isValid, setIsValid] = useState(false);
  const [isMessage, setIsMessage] = useState("");

  // The regular exprssion to validate the email pattern
  // It may not be 100% perfect but can catch most email pattern errors and assures that the form is mostly right
  const emailRegex = /\S+@\S+\.\S+/;

  const validateEmail = (event) => {
    const email = event.target.value;
    if (emailRegex.test(email)) {
      setIsValid(true);
      setIsMessage("");
      // setTimeout(()=>{setIsMessage('')},4500)
    } else {
      setIsValid(false);
      setIsMessage("Please enter a valid email!");
      setTimeout(() => {
        setIsMessage("");
      }, 3000);
    }
  };
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [senior, setSenior] = useState([]);
  const fetchBlogs = async () => {
    const response = db.collection("people").doc("n1IuxcTbWLxmXwwDxsz9");
    const data = await response.get();
    const newdata = data.data().people.CTO;
    const newdata1 = data.data().people.PM;
    console.log(newdata);
    const arr = [];
    arr.push(newdata);
    arr.push(newdata1);
    setSenior([...arr]);
    // data.forEach((item) => {
    //   // setServices((ser) => [...ser, item.data()]);
    //   arr.push(item.data());
    // });
    // setSenior([...arr]);
    // console.log("i am from quiries");
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleChange = (event) => {
    const val = event.target.value.replace(/[0-9]/g, "");
    setName(val);
  };
  const handleChange1 = (event) => {
    setEmail(event.target.value);
    validateEmail(event);
  };
  const handleChange2 = (event) => {
    setPhone(event.target.value);
    handleInput(event);
  };
  const handleChange3 = (event) => {
    setMessage(event.target.value);
  };
  const handleSubmit = (event) => {
    setIsLoading(true);
    event.preventDefault();
    addItem({ name, email, phone, message });
  };
  const addItem = async ({ name, email, phone, message }) => {
    let arr = [];
    try {
      const response = db.collection("queries").doc(phone);
      const data = await response.get();
      // console.log(data.data().message);
      arr = data.data()?.message || [];
    } catch (err) {
      // console.log(err);
    }
    // data.data().forEach((item) => {
    //   // setServices((ser) => [...ser, item.data()]);
    //   arr.push(item.data());
    // });
    // console.log(arr);
    db.collection("queries").doc(phone).set({
      name: name,
      email: email,
      phone: phone,
    });
    db.collection("queries")
      .doc(phone)
      .update({ message: [...arr, message] });
    setIsLoading(false);
    console.log("i am add item");

    // Atomically remove a region from the "regions" array field.
  };
  useEffect(() => {
    Aos.init({ duration: 1300 });
  }, []);
  return (
    <>
      <div className="waves">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 100 1440 300">
          <path
            fill="white"
            fill-opacity="1"
            d="M0,288L60,288C120,288,240,288,360,277.3C480,267,600,245,720,234.7C840,224,960,224,1080,234.7C1200,245,1320,267,1380,277.3L1440,288L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg>
      </div>
      <div className="queries" id="contactus">
        <div className="queries__query">
          <div className="queries__main">{props.queryhead}</div>
          <div className="queries__sub">{props.querysub}</div>
          {/* <div className="queries__icon">{props.iconmail}</div> */}
        </div>
        <div className="mail" >
          <div className="mail__left" data-aos="fade-up">
            {isLoading === true && (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <Loader
                  type="BallTriangle"
                  color="#00BFFF"
                  height={50}
                  width={50}
                  timeout={1000000} //3 secs
                />
              </div>
            )}
            {isLoading === false && (
              <form className='mail__form' onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  className="mail__email"
                  value={name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  placeholder="Enter Your E-mail"
                  className="mail__email"
                  onChange={handleChange1}
                />
                <div
                  className={`messagequery ${isValid ? "success" : "error"}`}
                >
                  {" "}
                  {isMessage}{" "}
                </div>
                <input
                  type="text"
                  placeholder="Enter Your Phone number"
                  className="mail__email"
                  onChange={handleChange2}
                  value={inputValue}
                />
                <input
                  type="text"
                  placeholder="Enter Your Message"
                  className="mail__email"
                  onChange={handleChange3}
                />

                <button className="mail__button" type='submit' >
                  {props.button}
                  <span className="card__arrow"> &rarr;</span>
                </button>
              </form>
            )}
          </div>
          <div className="mail__center"></div>
          <div className="mail__right" data-aos="fade-down">
            <div className="mail__flex">
              <img src={senior[0]?.image} alt="Pic" className="mail__picture" />
              <div className="mail__data">
                <div className="mail__heading">{senior[0]?.name}</div>
                <div className="mail__details">{senior[0]?.designation}</div>
                <div className="mail__phone">
                  <img
                    src={props.mobile}
                    alt="mobile"
                    className="mail__mobile"
                  />{" "}
                  <span className="mail__num">{senior[0]?.contact}</span>
                </div>
                <div className="mail__emaile">{senior[0]?.email}</div>
              </div>
            </div>
            <div className="mail__flex">
              <img src={senior[1]?.image} alt="Pic" className="mail__picture" />
              <div className="mail__data">
                <div className="mail__heading">{senior[1]?.name}</div>
                <div className="mail__details">{senior[1]?.designation}</div>
                <div className="mail__phone">
                  <img
                    src={props.mobile}
                    alt="mobile"
                    className="mail__mobile"
                  />{" "}
                  <span className="mail__num">{senior[1]?.contact}</span>
                </div>
                <div className="mail__emaile">{senior[1]?.email}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Queries;
