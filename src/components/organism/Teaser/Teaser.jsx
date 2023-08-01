import React from "react";
import ai from "../../../assets/ai.png";
import { Button } from "../../atom/Button/Button";

export const Teaser = () => {
  return (
    <div className="teaser-cont">
      <h4>
        Artificial intelligence is not here to take your jobs, it is here to
        make your job easier. Take advantage of AI to make money, save money and
        stay ahead of your competitors.
      </h4>
      {/* <Button className="teaser-btn btn" children="Enroll Now" /> */}
      <div className="teaser-img">
        <img src={ai} alt="" srcSet="" />
      </div>
    </div>
  );
};
