import React from "react";
import Person from "./person";
import FarazBhai from "../../src/assets/frazbhai.jpg";
import { useState } from "react";
import { AiOutlineDown } from "react-icons/ai";
import { AiOutlineUp } from "react-icons/ai";
import { useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";
import Aos from "aos";
import "aos/dist/aos.css";
import db from "../firebase.config";

function About() {
  const [isShow, setIsShow] = useState(false);
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  const [users, setUsers] = useState([]);
  const [senior, setSenior] = useState([]);

  const fetchUsers = async () => {
    const response = db.collection("users");
    const data = await response.get();
    const arr = [];
    data.forEach((item) => {
      // setServices((ser) => [...ser, item.data()]);
      arr.push(item.data());
    });
    setUsers([...arr]);
  };
  const fetchSeniors = async () => {
    const response = db.collection("companyheads");
    const data = await response.get();
    const arrr = [];
    data.forEach((item) => {
      // setServices((ser) => [...ser, item.data()]);
      arrr.push(item.data());
    });
    setSenior([...arrr]);
  };

  useEffect(() => {
    fetchSeniors();
    fetchUsers();
    console.log("i am error in about js");
  }, []);

  return (
    <div
      className="aboutus__sectionthree"
      id="aboutsectionthree"
      data-aos="fade-up"
    >
      <div className="aboutus__sectionthree--partone">
        <div className="aboutus__sectionthree--partone-text">Meet The Team</div>
      </div>
      <div className="aboutus__sectionthree--parttwo">
        <div className="aboutus__sectionthree--parttwo-one">
          <a
            className="aboutus__sectionthree--parttwo-one-p1"
            href="www.facebook.com"
          >
            <img
              src={senior[0]?.image}
              alt="hr"
              className="aboutus__sectionthree--parttwo-one-p1-image"
            />
            <div className="aboutus__sectionthree--parttwo-one-p1-text">
              {senior[0]?.name}
            </div>
            <div className="aboutus__sectionthree--parttwo-three-p1-text-2">
              {senior[0]?.designation}
            </div>
          </a>
          <a
            href="www.linkedin.com"
            className="aboutus__sectionthree--parttwo-one-p1"
          >
            <img
              src={senior[1]?.image}
              alt="hr"
              className="aboutus__sectionthree--parttwo-one-p1-image"
            />
            <div className="aboutus__sectionthree--parttwo-one-p1-text">
              {senior[1]?.name}
            </div>
            <div className="aboutus__sectionthree--parttwo-three-p1-text-2">
              {senior[1]?.designation}
            </div>
          </a>
        </div>
        <div className="aboutus__sectionthree--parttwo-two">
          {isShow === false && (
            <Link to="#person">
              <AiOutlineDown
                onClick={() => {
                  setIsShow(!isShow);
                }}
                className="aboutus__sectionthree--parttwo-two-icon"
              />
            </Link>
          )}
          {isShow === true && (
            <AiOutlineUp
              id="person"
              onClick={() => {
                setIsShow(!isShow);
              }}
              className="aboutus__sectionthree--parttwo-two-icon"
            />
          )}
        </div>
        {isShow === true && (
          <div
            data-aos="fade-up"
            className="aboutus__sectionthree--parttwo-three"
            onMouseLeave={() => setIsShow(true)}
          >
            {users.length > 0 &&
              users.map((user) => {
                return (
                  <Person
                    id="person"
                    src={user.image}
                    name={user.name}
                    designation={user.designation}
                  />
                );
              })}
          </div>
        )}
      </div>
    </div>
  );
}

export default About;
