import React from "react";

const Mid = (props) => {
  return (
    <div className="mid">
      <div className="mid__one">
        <div className="mid__one--text">
          HOMEPAGE /&nbsp;
          <span className="mid__one--text-span">{props.page}</span>
        </div>
      </div>
      <div className="mid__two">{props.heading}</div>
      <div className="mid__three" style={props.style}>
        {props.text}
      </div>
    </div>
  );
};
export default Mid;
