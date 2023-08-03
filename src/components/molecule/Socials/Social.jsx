import React from "react";
import insta from "../../../assets/instagram.png";
import linkedin from "../../../assets/linkedin.png";
import twitter from "../../../assets/twitter.png";
import github from "../../../assets/github.png";

export const Social = ({ className }) => {
  return (
    <>
      <div className={className}>
        <a target="_blank" href="https://www.linkedin.com/in/kadiri-o-emmanuel">
          <img className="btn" src={linkedin} alt="linkedin-icon" />
        </a>
        <a
          target="_blank"
          href=" https://instagram.com/kadiri___emmanuel?igshid=OGY3MTU3OGY1Mw=="
        >
          <img className="btn" src={insta} alt="instagram-icon" />
        </a>{" "}
        <a
          target="_blank"
          href="https://twitter.com/emmykay26?t=d39-vq4gUlYRiBrAZCXiLw&s=09"
        >
          <img className="btn" src={twitter} alt="twitter-icon" />
        </a>
        <a target="_blank" href="https://github.com/EmmyKay0026">
          <img className="btn" src={github} alt="git hub icon" />
        </a>
      </div>
    </>
  );
};
