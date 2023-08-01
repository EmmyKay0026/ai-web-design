import React from "react";

export const TestionialCards = ({ imgg, h4Name, spanCont, pCont }) => {
  return (
    <div className="test-card">
      <div className="card-top-part">
        <div className="card-img-cont">
          <img src={imgg} alt="" />
        </div>
        <div className="card-name">
          <h4>{h4Name}</h4>
          <span>{spanCont} </span>
        </div>
      </div>
      <div className="card-bott-part">
        <p>{pCont}</p>
      </div>
    </div>
  );
};
