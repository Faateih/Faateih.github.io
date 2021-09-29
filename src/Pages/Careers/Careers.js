import React from "react";
import { HiPlus } from "react-icons/hi";
import { BiUser } from "react-icons/bi";
import { useEffect } from "react";
import { useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Select from "react-select";

import { storage } from "../../firebase.config";
import db from "../../firebase.config";
import Loader from "react-loader-spinner";

function Careers(props) {
  const [inputValue, setInputValue] = useState("");
  const [downloadurl, setDownLoadurl] = useState("");
  const [image, setImage] = useState();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [selectt, setSelectt] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };
  const handleChange1 = (event) => {
    setEmail(event.target.value);
  };
  const addItem = async ({ name, email, inputValue, selectt, downloadurl }) => {
    let arr = [];
    try {
      const response = db.collection("careers").doc(inputValue);
      const data = await response.get();

      arr = data.data()?.url || [];
      // console.log(data.data().url);
    } catch (err) {
      console.log(err);
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
    setIsLoading(true);
    e.preventDefault();
    console.log("I am call here");
    console.log(image);
    let strData;
    try {
      strData = await storage.ref(`${image.name}`).put(image);
      await addItem({
        name,
        email,
        inputValue,
        selectt,
        downloadurl: strData.downloadURL,
      });
    } catch (error) {
      console.log("hello");
    }
    setIsLoading(false);
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
      return `${phoneNumber.slice(0, 5)} ${phoneNumber.slice(5)}`;
    }
    return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(
      3,
      10
    )} ${phoneNumber.slice(10, 10)}`;
  }

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
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "something", label: "something" },
    { value: "saaqib", label: "Saaqb" },
    { value: "usman", label: "usman" },
  ];

  return (
    <form className="careers" id="aboutussectionfour" data-aos="fade-up">
      <div className="careers__tag">Join Our Team</div>
      <div className="middle">
        <div className="middle__left">
          <input
            type="text"
            placeholder="Your Name"
            className="middle__field"
            onChange={handleChange}
          />
          <input
            type="email"
            placeholder="example@gmail.com"
            className="middle__field"
            onChange={handleChange1}
          />
          <div className="middle__field">
            <span>
              {" "}
              +92-
              <input
                type="text"
                placeholder="XXX-XXXXXXX"
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
              {image === null ? "Upload Your CV Here" : "hello"}{" "}
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
            <button className="middle__btn " onClick={upload}>
              Submit Here
            </button>
          )}
        </div>

        <div className="middle__center"></div>
        <div className="middle__right">
          <div className="middle__vac"> JOIN OUR TEAM </div>
          <div className="middle__data">
            <div className="middle__icons">
              <BiUser />
            </div>
            <div className="middle__vacancy">Software Engineer</div>
            <div className="middle__line"></div>
            <div className="middle__opens">Fresh Graduate</div>
          </div>
          <div className="middle__data">
            <div className="middle__icons">
              <BiUser />
            </div>
            <div className="middle__vacancy">Business Developer</div>
            <div className="middle__line"></div>
            <div className="middle__opens">Fresh Graduates</div>
          </div>
          <div className="middle__data">
            <div className="middle__icons">
              <BiUser />
            </div>
            <div className="middle__vacancy">QA internee</div>
            <div className="middle__line"></div>
            <div className="middle__opens">Fresh Graduates</div>
          </div>
          <div className="middle__data">
            <div className="middle__icons">
              <BiUser />
            </div>
            <div className="middle__vacancy">HR Manager</div>
            <div className="middle__line"></div>
            <div className="middle__opens">Fresh Graduates</div>
          </div>
          <div className="middle__data">
            <div className="middle__icons">
              <BiUser />
            </div>
            <div className="middle__vacancy">Web Development</div>
            <div className="middle__line"></div>
            <div className="middle__opens"> 1 years of Experience</div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Careers;
