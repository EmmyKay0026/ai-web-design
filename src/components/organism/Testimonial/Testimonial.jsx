import React from "react";
import { TestionialCards } from "../../molecule/Testimonial Cards/TestionialCards";
// import image from "../../../assets/imgg.jpg";
import adetola from "../../../assets/adetola.jpg";
import ojovictor from "../../../assets/ojovictor.jpg";
import { Button } from "../../atom/Button/Button";

export const Testimonial = () => {
  return (
    <section className="test-sec blacken bg-img">
      <h2>Testimonials</h2>
      <div className="testimonials">
        {/* <TestionialCards
          imgg={image}
          h4Name="Testing Names"
          spanCont="CEO of Trives"
          pCont="With our years of experience in solar installation we focus more on extending battery performance to at"
        /> */}
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
