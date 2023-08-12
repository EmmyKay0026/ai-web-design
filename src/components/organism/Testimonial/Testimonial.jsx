import React from "react";
import { TestionialCards } from "../../molecule/Testimonial Cards/TestionialCards";
import shulammite from "../../../assets/shulammite.jpg";
import adetola from "../../../assets/adetola.jpg";
import ojovictor from "../../../assets/ojovictor.jpg";
import { Button } from "../../atom/Button/Button";

export const Testimonial = () => {
  return (
    <section className="test-sec blacken bg-img">
      <h2>Testimonials</h2>
      <div className="testimonials">
        <TestionialCards
          imgg={shulammite}
          h4Name="Shulammite Ughojo"
          spanCont="UI/UX and Web designer"
          pCont="I’ve had the privilege of knowing Mr Emmanuel for four months, and during that time, I’ve always been amazed his technical expertise. He is passionate about learning and sharing his knowledge with others."
        />
        <TestionialCards
          imgg={adetola}
          h4Name="Adetola Ayodele"
          spanCont="Accountability Coach"
          pCont="Emmanuel is an amazing guy. He delivers promptly and designs the best websites. If you ever need the service of a professional web designer, he's your go-to person."
        />

        <TestionialCards
          imgg={ojovictor}
          h4Name="Victor Ojo"
          spanCont="Visionary of Charisfolks"
          pCont="Mr Emmanuel's expertise is world-class. He is also very diligent and honest. He did a great job designing our website charisfolks.org and delivered on time."
        />
      </div>
      <Button className="testi-cta teaser-btn btn" children="Enroll Now" />
    </section>
  );
};
