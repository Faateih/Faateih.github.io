import React from "react";

const HeaderText = (props) => {
  return (
    <div
      className="header-text"
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
    >
      <h5 className="header-text__text">{props.text}</h5>
      <div className="header-text__border"></div>
    </div>
  );
};
export default HeaderText;
