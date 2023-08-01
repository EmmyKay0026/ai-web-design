import React from "react";
import {
  Navbar,
  Testimonial,
  Teaser,
  CourseCont,
  Countdown,
  Pricing,
  AboutMe,
} from "../../organism/";
import { HeroSection } from "../../organism/HeroSection/HeroSection";

const Landing = () => {
  const targetDate = "2023-08-31T23:59:59"; // Replace with your desired target date

  return (
    <>
      <Navbar />
      <Countdown targetDate={targetDate} />
      <HeroSection />
      <Testimonial />
      <Teaser />
      <CourseCont />
      <Pricing />
      <AboutMe />
    </>
  );
};

export default Landing;
