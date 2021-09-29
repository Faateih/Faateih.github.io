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

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const handleChange = (event) => {
    setName(event.target.value);
  };
  const handleChange1 = (event) => {
    setEmail(event.target.value);
  };
  const handleChange2 = (event) => {
    setPhone(event.target.value);
  };
  const handleChange3 = (event) => {
    setMessage(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    addItem({ name, email, phone, message });
  };
  const addItem = ({ name, email, phone, message }) => {
    // db.collection("queries").doc(phone);
    // db.collection("queries").add({ name, email, phone, message });
    db.collection("queries").doc(phone).set({
      name: name,
      email: email,
      phone: phone,
      message: message,
    });
  };
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Header />
      <div className="contact">
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
          <form className="contact__right">
            <div className="contact__right-head">Send Us A Message</div>
            <input
              type="text"
              placeholder="Enter Your Name"
              className="contact__right-put"
              onChange={handleChange}
            />
            <input
              type="email"
              placeholder="Enter Your Email"
              className="contact__right-put"
              onChange={handleChange1}
            />
            <input
              type="text"
              placeholder="Enter Your Phone number"
              className="contact__right-put"
              onChange={handleChange2}
            />
            <textarea
              type="text"
              placeholder="Enter Your Message"
              className="contact__right-message"
              onChange={handleChange3}
            />
            <button className="contact__button" onClick={handleSubmit}>
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
