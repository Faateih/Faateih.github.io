import { PROPERTY_TYPES } from "@babel/types";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { BiPlus } from "react-icons/bi";
// import Aos from "aos";
// import "aos/dist/aos.css";

const SingleQuestion = (props) => {
  const [ansOpen, setAnsOpen] = useState(false);
  const rotateStyle = {
    transform: "rotate(-45deg)",
    transition: "all .3s",
  };


  // useEffect(() => {
  //   Aos.init({ duration: 50 });
  // }, []);
  return (
    <>
    <Accordion>
      <div className='questions__ques'>
      <AccordionSummary style = {{width: '100%'}}>
      <Typography>
        <div className="questions__ques--bold">
          {props.question}
          <span
            className="questions__ques--plus" style={{fontSize: '2.5rem'}}>
            <BiPlus />
          </span>
        </div>
        </Typography>
        </AccordionSummary>
      </div>
      <div className="questions__border-down"></div>
      <AccordionDetails>
      <Typography>
          <div className="questions__ques--ans">{props.answer}</div>
          {/* <div className="questions__border-down"></div> */}
          </Typography>
       </AccordionDetails>
    </Accordion>
    </>
  );
};
export default SingleQuestion;
