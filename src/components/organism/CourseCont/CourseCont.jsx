import React from "react";
import { Blurb } from "../../molecule/Blurb/Blurb";
import ideas from "../../../assets/ideas.png";
import { Button } from "../../atom/Button/Button";

export const CourseCont = () => {
  return (
    <section className="CC-section">
      <div className="CC-left">
        <h2>
          Your Enrollment For This <span className="hero-web-txt">Course</span>{" "}
          Will
          <span className="hero-web-txt-after"> Include</span>
        </h2>
        {/* <p>
          Vulputate egestas neque senectus morbi interdum eleifend cras vel
          aliquet mattis pretium amet, imperdiet purus elementum sagittis nisl
        </p> */}
      </div>
      <div className="CC-right">
        <Blurb
          blurbH2="Practical Experience"
          blurbP="Create your own website using AI tools."
        />
        <Blurb
          blurbH2="Free Website"
          blurbP="Generate and host your website without spending a dime."
        />
        <Blurb
          blurbH2="Professional Tips"
          blurbP="Get life-time access to professional web design strategies."
        />
        <Blurb
          blurbH2="Networking"
          blurbP="Become a part of a fast growing community"
        />
        <Button className="hero-cta course-btn btn" children="Enroll Now" />
        <div className="blurb-img-cont">
          <img src={ideas} alt="" />
        </div>
      </div>
    </section>
  );
};
