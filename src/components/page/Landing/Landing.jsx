import React from "react";
import {
  Navbar,
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

const Landing = () => {
  const targetDate = "2023-08-28T23:59:59"; // Replace with your desired target date

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
      <LastCta />
      <Footer />
      <Contact />
    </>
  );
};

export default Landing;
