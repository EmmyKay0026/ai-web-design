import React from "react";
import { Button } from "../../atom/Button/Button";

export const Navbar = () => {
  return (
    <nav>
      <h2>Kadiri Emmanuel</h2>
      {/* <ul className="menu">
        <li>About me</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul> */}
      <Button className="nav-btn btn" children="Enroll Now" />
    </nav>
  );
};
