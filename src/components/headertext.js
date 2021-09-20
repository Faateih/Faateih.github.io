import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const HeaderText = (props) => {
  const [text, setText] = useState("text");
  console.log(props.to);

  const listenScrollEvent = (event) => {
    if (window.scrollY > 3200) {
      return setText("black");
    } else {
      return setText("white");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);
  return (
    <NavLink
      style={{ color: text }}
      to={`${props.to}`}
      className="header-text"
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
    >
      <h5 className="header-text__text" style={{ color: text }}>
        {props.text}
      </h5>
      <div className="header-text__border"></div>
    </NavLink>
    // <h1>hello</h1>
  );
};
export default HeaderText;
