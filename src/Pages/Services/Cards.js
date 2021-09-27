import React from "react";
import { HashLink as Link } from "react-router-hash-link";

function Cards(props) {
  console.log(props.icon);
  return (
    <div className="card">
      <div className="card__head">
        <div className="card__icon">{props.icons}</div>
        <span className="card__title">{props.title}</span>
      </div>
      <div className="card__title-2">{props.title2}</div>
      <Link to={props.to} className="card__button">
        Click Here
        <span className="card__arrow"> &rarr;</span>
      </Link>
    </div>
  );
}

export default Cards;
