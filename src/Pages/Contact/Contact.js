import React from "react";
import { FiMapPin } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { FiFacebook } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Header from "../../components/header";
import { useState } from "react";
import db from "../../firebase.config";
import Loader from "react-loader-spinner";

function Contact() {

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
  const [isValid, setIsValid] = useState(false);
  const [isMessage, setIsMessage] = useState('');

  // The regular exprssion to validate the email pattern
  // It may not be 100% perfect but can catch most email pattern errors and assures that the form is mostly right
  const emailRegex = /\S+@\S+\.\S+/;

  const validateEmail = (event) => {
    const email = event.target.value;
    if (emailRegex.test(email)) {
      setIsValid(true);
      setIsMessage('Your email looks good!');
      setTimeout(()=>{setIsMessage('')},4500)
    } else {
      setIsValid(false);
      setIsMessage('Please enter a valid email!');
      setTimeout(()=>{setIsMessage('')}, 2000)
    }
  };
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event) => {
    setName(event.target.value);
    const val = event.target.value.replace(/[0-9]/g, '');
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
  // const addItem = async ({ name, email, phone, message }) => {
  //   const response = db.collection("queries").doc(phone);
  //   const data = await response.get();

  //   const arr = data.data().message;

  //   db.collection("queries").doc(phone).set({
  //     name: name,
  //     email: email,
  //     phone: phone,
  //   });
  //   db.collection("queries")
  //     .doc(phone)
  //     .update({ message: [...arr, message] });
  //   setIsLoading(false);
  // };
  const addItem = async ({ name, email, phone, message }) => {
    let arr = [];
    try {
      const response = db.collection("queries").doc(phone);
      const data = await response.get();
      console.log(data.data().message);
      arr = data.data()?.message || [];
    } catch (err) {
      console.log(err);
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

    // Atomically remove a region from the "regions" array field.
  };
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Header />
      <form className="contact">
        <div className="contact__middle" data-aos="fade-right">
          <div className="contact__left">
            <div className="contact__left-container">
              <div className="contact__heading">Contact Us</div>
              <div className="contact__location">
                <FiMapPin />
                <span className="contact__locspan"> DHA Rahbar</span>
              </div>
              <div className="contact__email">
                <AiOutlineMail />
                <span className="contact__mail">cbsolpro@gmail.com</span>
              </div>
              <div className="contact__call">
                <BiPhoneCall />{" "}
                <span className="contact__num">+92-090-078601</span>
              </div>
              <div className="contact__social">
                <div className="contact__fb">
                  <FiFacebook />
                </div>
                <div className="contact__fb">
                  <AiOutlineInstagram />
                </div>
                <div className="contact__fb">
                  <AiOutlineLinkedin />
                </div>
              </div>
            </div>
          </div>
          <div className="contact__right">
            <div className="contact__right-head">Send Us A Message</div>
            <input
              type="text"
              placeholder="Enter Your Name"
              value={name}
              className="contact__right-put"
              onChange={handleChange}
            />
            <input
              type="email"
              placeholder="Enter Your Email"
              className="contact__right-put"
              onChange={handleChange1}
            />
             <div className={`messagecontact ${isValid ? 'success' : 'error'}`}> {isMessage} </div> 

            <input
              type="text"
              placeholder="Enter Number (e.g, 0300-0000000)"
              className="contact__right-put"
              onChange={handleChange2}
              value={inputValue}

            />
            <textarea
              type="text"
              placeholder="Enter Your Message"
              className="contact__right-message"
              onChange={handleChange3}
            />
            {isLoading === false && (
              <button className="contact__button" onClick={handleSubmit}>
                Send
              </button>
            )}
            </div>
            {isLoading === true && (
              <div style={{ marginLeft: "20px" }}>
                <Loader
                  type="BallTriangle"
                  color="#00BFFF"
                  height={50}
                  width={50}
                  timeout={1000000} //3 secs
                />
              </div>
            )}
        </div>
      </form>
    </div>
  );
}

export default Contact;
