import React from "react";
import { BiPlus } from "react-icons/bi";
import { useState } from "react";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import SingleQuestion from "./singlequestion";
import db from "../../firebase.config";

function Questions() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const [question, setQuestion] = useState([]);
  const rotateStyle = {
    transform: "rotate(-45deg)",
    transition: "all .3s",
  };

  const fetchBlogs = async () => {
    const response = db
      .collection("questionanswers")
      .doc("bygIc09pstibe86gIm9U");
    const data = await response.get();
    const newdata = data.data().questions;
    const arr = [];
    Object.keys(newdata).forEach((key) => {
      // the name of the current key.

      // the value of the current key.
      arr.push(newdata[key]);
    });
    // const arr = [];
    // data.forEach((item) => {
    //   // setServices((ser) => [...ser, item.data()]);
    //   arr.push(item.data());
    // });
    setQuestion([...arr]);
    // console.log("i am from questions");
  };

  useEffect(() => {
    fetchBlogs();
  }, []);
  return (
    <div className="questions" data-aos="fade-up">
      <h1 className="questions__qhead-primary">
        See Frequently Asked Questions
      </h1>
      <h2 className="questions__qhead-secondary">
        We advise, answer questions, find solutions and create dedicated web
        applications. If you need more information, please call us!
      </h2>
      {/* <div className='questions__border-down'></div> */}
      {question.length > 0 &&
        question.map((element) => {
          return (
            <SingleQuestion
              answer={element.answer}
              question={element.question}
            />
          );
        })}
    </div>
  );
}

export default Questions;
