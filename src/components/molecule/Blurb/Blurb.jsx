import React from "react";

export const Blurb = ({ imgg, blurbH2, blurbP }) => {
  return (
    <div className="blurb">
      <div className="blurb-icon-cont">{/* <img src={imgg} alt="" /> */}</div>
      <div className="blurb-txt">
        <h2>{blurbH2}</h2>
        <p>{blurbP}</p>
      </div>
    </div>
  );
};
