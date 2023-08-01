import React from "react";
import camera from "../../../assets/camera.png";
import wordpress from "../../../assets/wordpress.png";
import { Button } from "../../atom/Button/Button";
export const Pricing = () => {
  return (
    <section className="prici-sec">
      <div className="prici-row blacken">
        <div className="left-prici">
          <div className="prici-img-cont">
            <img src={camera} alt="" />
          </div>
          <h3>
            Web design with <span className="hero-ai-txt">AI</span>
          </h3>
          <span className="regular-price">N15,000</span>
          <span className="sale-price"> Early birds: N3,000</span>
          <p>Our web design with AI class will be featuring:</p>
          <ul>
            <li>Pre-recorded videos on web design using AI </li>
            <li>Question and answer session</li>
            <li>Bonus classes</li>
            <li>Assignments</li>
          </ul>
          <Button className="hero-cta prici-btn btn" children="Enroll Now" />
        </div>
        <div className="right-prici">
          <div className="prici-img-cont">
            <img src={wordpress} alt="" />
          </div>
          <h3>
            Become a <span className="hero-web-txt">Professional</span> Web
            Designer
          </h3>
          <h4>Coming Soon</h4>
          <span>
            In this course we are going to be diving deeper into the conscepts
            of web design using Wordpress. This class will be featuring:
          </span>
          <ul>
            <li>Live session with the tutor</li>
            <li>20+ of videos and resources</li>
            <li>Question and answer session</li>
            <li>Assignments and reviews</li>
          </ul>
          {/* <Button className="hero-cta prici-btn btn" children="Enroll Now" /> */}
          <button className="pre-order-btn btn">
            <a
              className="pre-order-cta btn"
              href="https://api.whatsapp.com/send/?phone=%2B2348104064231&text=Hello%2C+My+name+is+____.+I+would+like+to+pre-order+your+%22Become+a+Professional+Web+Designer%22+course.&type=phone_number&app_absent=0"
            >
              Pre-order now
            </a>{" "}
          </button>
        </div>
      </div>
    </section>
  );
};
