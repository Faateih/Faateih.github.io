import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const HeaderText = (props) => {
  
  return (
    <NavLink
      
      to={`${props.to}`}
      className="header-text"
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
    >
      <h5 className="header-text__text" style={props.styleee}>
        {props.text}
      </h5>
      <div className="header-text__border"></div>
    </NavLink>
    // <h1>hello</h1>
  );
};
export default HeaderText;
