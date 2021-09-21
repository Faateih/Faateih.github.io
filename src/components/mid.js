import React from "react";

const Mid = (props) => {
  return (
    <div className="mid">
      <div className="mid__one">
        <div className="mid__one--text">
          HOMEPAGE/
          <span className="mid__one--text-span">
            WEB DESIGN AND DEVELOPMENT SERVICES
          </span>
        </div>
      </div>
      <div className="mid__two">{props.heading}</div>
      <div className="mid__three">{props.text}</div>
    </div>
  );
};
export default Mid;
