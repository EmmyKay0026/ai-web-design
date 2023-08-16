import React from "react";
import ai from "../../../assets/ai.png";
import { Button } from "../../atom/Button/Button";

export const Teaser = () => {
  return (
    <div className="teaser-cont">
      <div>
        <h4>
          Learn how to build professional websites that can increase the revenue
          of your business and personal endeavors. Take advantage of AI tools to
          create bespoke website for your business and for clients.
        </h4>
        <Button className="teaser-btn btn" children="Enroll Now" />
      </div>
      <div className="teaser-img">
        <img src={ai} alt="Icon of ai" srcSet="" />
      </div>
    </div>
  );
};
