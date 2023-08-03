import React from "react";
import insta from "../../../assets/instagram.png";
import linkedin from "../../../assets/linkedin.png";
import twitter from "../../../assets/twitter.png";
import whatsapp from "../../../assets/whatsapp.png";

export const Social = ({ className }) => {
  return (
    <>
      <div className={className}>
        <a href="https://www.linkedin.com/in/kadiri-o-emmanuel">
          <img className="btn" src={linkedin} alt="linkedin-icon" />
        </a>
        <a href=" https://instagram.com/kadiri___emmanuel?igshid=OGY3MTU3OGY1Mw==">
          <img className="btn" src={insta} alt="instagram-icon" />
        </a>{" "}
        <a href="https://twitter.com/emmykay26?t=d39-vq4gUlYRiBrAZCXiLw&s=09">
          <img className="btn" src={twitter} alt="twitter-icon" />
        </a>
        <a href="https://wa.me/+2348104064231?text=Hello,%20my%20name%20is_________%20and%20I%20would%20like%20to%20know%20more%20about%20%20AI%20web%20design">
          <img className="btn" src={whatsapp} alt="" />
        </a>
      </div>
    </>
  );
};
