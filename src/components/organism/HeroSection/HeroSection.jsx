import React, { useContext } from "react";
// import { CursorContext } from "../../molecule/Cursor/Cursor";
import ReactPlayer from "react-player";
import { Button } from "../../atom/Button/Button";
import Video from "../../../assets/myvideo.mp4";
import { Clients } from "../Clients/Clients";

export const HeroSection = () => {
  // const { isCursorBlack } = useContext(CursorContext);

  // const blackenStyle = {
  //   isCursorBlack,
  //   "box-shadow: 0 0 0 3px #000": "transition: all .5s;",
  // };
  return (
    <section className="hero-sec">
      {/* <div className="side-bar"></div> */}
      <div className="left-half">
        <span className="hero-pretxt">Learn how to</span>
        <h1>
          Design <br /> Bespoke <br />{" "}
          <span className="hero-web-txt hero-web-txt-after">Websites </span>
          <br />
          using <span className="hero-ai-txt">AI</span>
        </h1>
        <p className="hero-subtxt">
          Earn more in dollars from creating stunning websites for clients and
          your business
        </p>
        <Button className="hero-cta btn" children="Enroll Now" />
      </div>
      <div>
        <ReactPlayer url={Video} controls={true} className="hero-video" />
        <Clients />
      </div>
    </section>
  );
};
