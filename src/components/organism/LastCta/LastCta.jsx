import React from "react";
import whatsapp from "../../../assets/whatsapp.png";
import { Button } from "../../atom/Button/Button";

export const LastCta = () => {
  return (
    <section className="cta-sec">
      <div className="cta-cont blacken bg-img">
        <div>
          <h2>Web design made easy with AI</h2>
          <span>Hurry now!! ENROLL today.</span>
        </div>
        <div className="cta-btn-cont">
          <Button children="Enroll Now" className="hero-cta last-cta btn" />
          {/* <img src={whatsapp} alt="whatsapp icon" /> */}
        </div>
      </div>
    </section>
  );
};
