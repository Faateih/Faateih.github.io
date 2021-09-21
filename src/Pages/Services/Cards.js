import React from "react";
import { FiDivide } from "react-icons/fi";
import { HashLink as Link } from "react-router-hash-link";

function Cards(props) {
  return (
    <div className="card">
      <div className="card__head">
        <img src={props.icons} alt="icon mobile" className="card__icon" />
        <span className="card__title">{props.title}</span>
      </div>
      <div className="card__title-2">{props.title2}</div>
      <div className="card__button">
        <Link to={props.to} className="card__button--link">
          {props.button}
          <span className="card__arrow"> &rarr;</span>
        </Link>
      </div>
    </div>
  );
}

export default Cards;
