import React from "react";
import ai from "../../../assets/ai.png";
import { Button } from "../../atom/Button/Button";

export const Teaser = () => {
  return (
    <div className="teaser-cont">
      <h4>
        The evolution of AI has just begun, and if you don't stay updated, you
        will be left behind. Take advantage of this evolution to make more
        money, save more and stay ahead of your competitiors
      </h4>
      {/* <Button className="teaser-btn btn" children="Enroll Now" /> */}
      <div className="teaser-img">
        <img src={ai} alt="" srcSet="" />
      </div>
    </div>
  );
};
