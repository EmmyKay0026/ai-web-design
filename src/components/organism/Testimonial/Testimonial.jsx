import React from "react";
import { TestionialCards } from "../../molecule/Testimonial Cards/TestionialCards";
import image from "../../../assets/imgg.jpg";
import { Button } from "../../atom/Button/Button";

export const Testimonial = () => {
  return (
    <section className="test-sec blacken">
      <h2>Testimonials</h2>
      <div className="testimonials">
        <TestionialCards
          imgg={image}
          h4Name="Testing Names"
          spanCont="CEO of Trives"
          pCont="With our years of experience in solar installation we focus more on extending battery performance to at"
        />
        <TestionialCards
          imgg={image}
          h4Name="Testing Names"
          spanCont="CEO of Trives"
          pCont="With our years of experience in solar installation we focus more on extending battery performance to at"
        />
        <TestionialCards
          imgg={image}
          h4Name="Testing Names"
          spanCont="CEO of Trives"
          pCont="With our years of experience in solar installation we focus more on extending battery performance to at"
        />
      </div>
      <Button className="testi-cta teaser-btn btn" children="Enroll Now" />
    </section>
  );
};
