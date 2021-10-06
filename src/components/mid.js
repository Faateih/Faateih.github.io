import React from "react";
import Techno from '../../src/assets/images/techno.jpg';

const Mid = (props) => {
  return (
    <div className="mid" id='aboutussecone'>
    <img src={props.techno} alt='Technology' className='mid__techno' />
      <div className="mid__one">
              {/* <div className="mid__one--text">
          HOMEPAGE /&nbsp;
          <span className="mid__one--text-span">{props.page}</span>
        </div> */}
      </div>
      <div className="mid__two">{props.heading}</div>
      <div className="mid__three" style={props.style}>
        {props.text}
      </div>
    </div>
  );
};
export default Mid;
