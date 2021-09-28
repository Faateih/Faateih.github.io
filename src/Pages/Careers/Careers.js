import React from "react";
import { HiPlus } from "react-icons/hi";
import { BiUser } from "react-icons/bi";
import { useEffect } from "react";
import { useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Select from "react-select";

function Careers(props) {
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
    if (phoneNumberLength < 10) {
      return `${phoneNumber.slice(0, 5)} ${phoneNumber.slice(5)}`;
    }
    return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(
      3,
      10
    )} ${phoneNumber.slice(10, 10)}`;
  }
    const [isUpload, setIsUpload] = useState("");
    
    useEffect(() => {
           Aos.init({duration: 1500});
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
    { value: "something", label: "else" },
    { value: "faateih", label: "Saaqb" },
    { value: "usman", label: "someone" },
  ];

    return (
      <>
        <form className='careers' id='aboutussectionfour' data-aos='fade-up'>
            <div className='careers__tag'>Join Our Team</div>
            <div className='middle'> 
                <div className='middle__left'>
                <input type='text' placeholder='Your Name' className='middle__field'/>
                <input type='email' placeholder='example@gmail.com' className='middle__field'/>
                <div className='middle__field'>
                <span> +92-
                 <input type='text' placeholder='XXX-XXXXXXX' onChange={(e) => handleInput(e)} value={inputValue} className='middle__field'  /> </span> 
                 </div>
                 <div className='middle__field'>
                     <div className='middle__field--select'>
                     <Select
                // defaultValue={[colourOptions[2], colourOptions[3]]}
                name="colors"
                options={options}
                className="basic-multi-select middle__field--selec"
                classNamePrefix="select"
                styles={customStyles}
              />
                     </div>
                 </div>
                 <div className='middle__field--1'>
                 <div className='middle__field--2'> {isUpload === "" ? "Upload Your CV Here" : isUpload} <span className='middle__span'><HiPlus/></span> </div>
                    </div>
                    <input type='file' onChange={(e) => setIsUpload(e.target.files[0].name)} className='middle__inpfile'/>
                    <button className='middle__btn '>Submit Here</button>
                </div>
                <div className='middle__center'></div>
                <div className='middle__right'>
                <div className='middle__vac'> JOIN OUR TEAM </div>
                    <div className='middle__data'>
                        <div className='middle__icons'><BiUser/></div>
                        <div className='middle__vacancy'>Software Engineer</div>
                        <div className='middle__line'></div>
                        <div className='middle__opens'>Fresh Graduate</div>
                    </div>
                    <div className='middle__data'>
                        <div className='middle__icons'><BiUser/></div>
                        <div className='middle__vacancy'>Business Developer</div>
                        <div className='middle__line'></div>
                        <div className='middle__opens'>Fresh Graduates</div>
                    </div>
                    <div className='middle__data'>
                        <div className='middle__icons'><BiUser/></div>
                        <div className='middle__vacancy'>QA internee</div>
                        <div className='middle__line'></div>
                        <div className='middle__opens'>Fresh Graduates</div>
                    </div>
                    <div className='middle__data'>
                        <div className='middle__icons'><BiUser/></div>
                        <div className='middle__vacancy'>HR Manager</div>
                        <div className='middle__line'></div>
                        <div className='middle__opens'>Fresh Graduates</div>
                    </div>
                    <div className='middle__data'>
                        <div className='middle__icons'><BiUser/></div>
                        <div className='middle__vacancy'>Web Development</div>
                        <div className='middle__line'></div>
                        <div className='middle__opens'> 1 years of Experience</div>
                    </div>
                </div>
                </div>
            </form>
            {/* <div className='response'>
              <div className='response__card'>
                <div className='response__icon'><BiUser/></div>
                <div className='response__descrip'>Software Engineer</div>
                <div className='response__exp'>2 Years</div>
              </div>
              <div className='response__card'>
                <div className='response__icon'><BiUser/></div>
                <div className='response__descrip'>Software Engineer</div>
                <div className='response__exp'>2 Years</div>
              </div>
              <div className='response__card'>
                <div className='response__icon'><BiUser/></div>
                <div className='response__descrip'>Software Engineer</div>
                <div className='response__exp'>2 Years</div>
              </div>
            </div> */}
            
</>
    )}

    export default Careers;
