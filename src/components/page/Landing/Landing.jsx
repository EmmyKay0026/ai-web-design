import React from "react";
import {
  Testimonial,
  Teaser,
  CourseCont,
  Countdown,
  Pricing,
  AboutMe,
  LastCta,
  Footer,
} from "../../organism/";
import { HeroSection } from "../../organism/HeroSection/HeroSection";
import { Contact } from "../../molecule/Contact/Contact";
import Popup from "../../molecule/PopUp/PopUp";

const Landing = () => {
  const targetDate = "2024-09-01T23:59:59"; // Replace with your desired target date

  return (
    <>
      <Countdown targetDate={targetDate} />
      <HeroSection />
      <Popup delay={10000} />
      <Testimonial />
      <Teaser />
      <CourseCont />
      <Pricing />
      <AboutMe />
      <LastCta />
      <Footer />
      <Contact />
    </>
  );
};

export default Landing;
