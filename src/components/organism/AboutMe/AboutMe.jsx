import React from "react";
import emmanuel from "../../../assets/emmanuel.jpg";
import { Social } from "../../molecule/Socials/Social";
// import insta from "../../../assets/instagram.png";
// import linkedin from "../../../assets/linkedin.png";
// import twitter from "../../../assets/twitter.png";

export const AboutMe = () => {
  return (
    <section className="aboutme-sec">
      <div className="about-img-cont">
        <img src={emmanuel} alt="" />
      </div>
      <div className="aboutme">
        <h3 className="hero-web-txt-after">Kadiri Emmanuel</h3>
        <p>
          I'm Kadiri Emmanuel, a skillful full-stack developer and web designer
          with a passion for mentoring up-coming web designers. With my years of
          experience, I have come to understand the challenges and mistakes
          designers make when starting out.
        </p>
        <p>
          When I began my web design journey, I went all out in learning and
          practice. However, I got carried away learning concepts that were not
          necessary for my development, which eventually cost me time. This
          experience has inspired me to create a comprehensive course that
          guides both intermediate and aspiring web designer on the industry's
          intricacies.
        </p>
        <p>
          I aim at cultivating a new generation of exceptional web designers,
          capable of collaborating on with me big projects. In this course I
          would be showing you how to maximize your learning in a short period
          of time, empowering designers to hone their skills and reach their
          full potential. If you are going to succeed in the web design space,
          this course is where is begins for you. Enroll today.
        </p>

        <Social className="socials" />
      </div>
    </section>
  );
};
