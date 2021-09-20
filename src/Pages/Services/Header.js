import React from "react";
import { useState } from "react";
function Header(props) {
  return (
    <div className="header1">
      <ul className="header1__list">
        <li className="header1__item" onClick={props.click}>
          {props.header}
        </li>
      </ul>
    </div>
  );
}

export default Header;
