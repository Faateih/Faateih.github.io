import React from "react";
import { HiPlus } from "react-icons/hi";
import { IoIosDesktop } from "react-icons/io";
import { useEffect } from "react";
import { useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Select from "react-select";
import { storage } from "../../firebase.config";
import db from "../../firebase.config";
import Loader from "react-loader-spinner";
import Card from "../Careers/card";
import { VscDeviceMobile } from "react-icons/vsc";

import { MdColorLens } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { BsShieldLock } from "react-icons/bs";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";

function Careers(props) {
  const [message, setMessage] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [downloadurl, setDownLoadurl] = useState("");
  const [image, setImage] = useState();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isValid, setIsValid] = useState("");
  const [selectt, setSelectt] = useState("");
  const emailRegex = /\S+@\S+\.\S+/;
  const [question, setQuestion] = useState([]);

  const fetchBlogs = async () => {
    const response = db.collection("jobposting").doc("owKtIMZT66l2HuwnvL3o");
    const data = await response.get();
    const newdata = data.data().jobs;
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

  const validateEmail = (event) => {
    const email = event.target.value;
    if (emailRegex.test(email)) {
      setIsValid(true);
      setMessage("");
      // setTimeout(()=>{setMessage('')},4500)
    } else {
      setIsValid(false);
      setMessage("Please enter a valid email!");
      setTimeout(() => {
        setMessage("");
      }, 3000);
    }
  };

  const handleChange = (event) => {
    const val = event.target.value.replace(/[0-9]/g, "");
    setName(val);
  };
  const handleChange1 = (event) => {
    setEmail(event.target.value);
    validateEmail(event);
  };
  const addItem = async ({ name, email, inputValue, selectt, downloadurl }) => {
    let arr = [];
    try {
      const response = db.collection("careers").doc(inputValue);
      const data = await response.get();

      arr = data.data()?.url || [];
      // console.log(data.data().url);
    } catch (err) {
      // console.log(err);
    }
    // data.data().forEach((item) => {
    //   // setServices((ser) => [...ser, item.data()]);
    //   arr.push(item.data());
    // });
    // console.log(arr);
    db.collection("careers").doc(inputValue).set({
      name: name,
      email: email,
      phone: inputValue,
      jobtype: selectt,
    });
    db.collection("careers")
      .doc(inputValue)
      .update({ url: [...arr, downloadurl] });
    setIsLoading(false);
    console.log("careers");
    // Atomically remove a region from the "regions" array field.
  };

  // const addItem = async ({ name, email, inputValue, selectt, downloadurl }) => {
  //   db.collection("careers").doc(inputValue).set({
  //     name: name,
  //     email: email,
  //     phone: inputValue,
  //     jobtype: selectt,
  //     url: downloadurl,
  //   });

  //   // Atomically remove a region from the "regions" array field.
  // };

  // console.log(image);
  const upload = async (e) => {
    console.log("hello");
    setIsLoading(true);
    e.preventDefault();
    // console.log("I am call here");
    // console.log(image);
    let strData;
    try {
      strData = await storage.ref(`${image.name}`).put(image);
      const url = await strData.ref.getDownloadURL();
      console.log(url);
      await addItem({
        name,
        email,
        inputValue,
        selectt,
        downloadurl: url,
      });
    } catch (error) {
      console.log("error file");
    }
    setIsLoading(false);
    console.log("career file upload");
  };

  const handleInput = (e) => {
    const formattedPhoneNumber = formatPhoneNumber(e.target.value);
    setInputValue(formattedPhoneNumber);
  };
  function formatPhoneNumber(value) {
    if (!value) return value;
    const phoneNumber = value.replace(/[^\d]/g, "");
    const phoneNumberLength = phoneNumber.length;
    if (phoneNumberLength < 4) return phoneNumber;
    if (phoneNumberLength < 10) {
      return `${phoneNumber.slice(0, 5)}${phoneNumber.slice(5)}`;
    }
    return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(
      3,
      10
    )}${phoneNumber.slice(10, 10)}`;
  }
  const [isUpload, setIsUpload] = useState("");

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  const customStyles = {
    control: (base, state) => ({
      ...base,
      background: "transparent",
      // match with the menu
      borderRadius: state.isFocused ? "5px 5px 0 0" : 3,
      // Overwrittes the different states of border
      borderColor: state.isFocused ? "white" : "white",
      borderRadius: "5px",
      // Removes weird border around container
      boxShadow: state.isFocused ? null : null,
      "&:hover": {
        // Overwrittes the different states of border
        borderColor: state.isFocused ? "white" : "white",
      },
    }),
    menu: (base) => ({
      ...base,
      // override border radius to match the box

      // kill the gap
      marginTop: "10px",
      background: "white",
      borderRadius: "5px",
      zIndex: 100,
    }),
    menuList: (base) => ({
      ...base,
      // kill the white space on first and last option
      padding: 0,
      color: "black",
      borderRadius: "5px",
    }),
  };

  const options = [
    {
      value: "Software Quality Assurance",
      label: "Software Quality Assurance",
    },
    { value: "Web Developer", label: "Web Developer" },
    { value: "Mobile Developer", label: "Mobile Developer" },
    { value: "HR Internee", label: "HR Internee" },
  ];

  return (
    <form className="careers" id="aboutussectionfour" data-aos="fade-up">
      <div className="careers__tag">Join Our Team</div>
      <div className="middle">
        <div className="middle__left">
          {isLoading === true && (
            <Loader
              type="BallTriangle"
              color="#00BFFF"
              height={50}
              width={50}
              timeout={1000000} //3 secs
            />
          )}
          {isLoading === false && (
            <>
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                className="middle__field"
                onChange={handleChange}
              />
              <div className="middle__field">
                <input
                  type="email"
                  placeholder="example@gmail.com"
                  className="middle__field"
                  onChange={handleChange1}
                />
                <div className={`message ${isValid ? "success" : "error"}`}>
                  {" "}
                  {message}{" "}
                </div>
              </div>
              <div className="middle__field">
                <span>
                  {" "}
                  +92-
                  <input
                    type="text"
                    placeholder="300-0000000"
                    onChange={(e) => handleInput(e)}
                    value={inputValue}
                    className="middle__field"
                  />{" "}
                </span>
              </div>
              <div className="middle__field">
                <div className="middle__field--select">
                  <Select
                    // defaultValue={[colourOptions[2], colourOptions[3]]}
                    name="colors"
                    options={options}
                    className="basic-multi-select middle__field--selec"
                    classNamePrefix="select"
                    styles={customStyles}
                    onChange={(e) => {
                      setSelectt(e.value);
                    }}
                  />
                </div>
              </div>
              <div className="middle__field--1">
                <div className="middle__field--2">
                  {" "}
                  {image === null ? "Upload Your CV Here" : `${image}`}{" "}
                  <span className="middle__span">
                    <HiPlus />
                  </span>{" "}
                </div>
              </div>
              <input
                type="file"
                onChange={(event) => {
                  // setIsUpload(e.target.files[0]);
                  setImage(event.target.files[0]);
                  console.log(event.target.files[0]);
                }}
                className="middle__inpfile"
              />
              <button className="middle__btn " onClick={upload}>
                Submit Here
              </button>
            </>
          )}
        </div>

        <div className="middle__center"></div>
        <div className="middle__right">
          <div className="middle__vac"> JOIN OUR TEAM </div>
          <div className="middle__data">
            <div className="response">
              {question.length > 0 &&
                question.map((item) => {
                  let Icon;
                  if (item.icon === "RiSettings4Line") {
                    Icon = <RiSettings4Line />;
                  }
                  if (item.icon === "VscDeviceMobile") {
                    Icon = <VscDeviceMobile />;
                  }
                  if (item.icon === "IoIosDesktop") {
                    Icon = <IoIosDesktop />;
                  }
                  if (item.icon === "MdColorLens") {
                    Icon = <MdColorLens />;
                  }
                  return (
                    <Card
                      icon={Icon}
                      title={item.title}
                      description={item.description}
                    />
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
export default Careers;
