import React from "react";
import { Social } from "../../molecule/Socials/Social";

export const Footer = () => {
  return (
    <section className="foot-sec bg-img blacken">
      <div className="left-foot">
        <span>Kadiri Emmanuel</span>
      </div>
      <div className="right-foot">
        <Social className="socials-foot" />
      </div>
    </section>
  );
};
