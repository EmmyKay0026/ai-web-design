import React from "react";
import whatsapp from "../../../assets/whatsapp.png";

export const Contact = () => {
  return (
    <a
      className="cont-cont"
      href="https://wa.me/+2348104064231?text=Hello,%20my%20name%20is_________%20and%20I%20would%20like%20to%20know%20more%20about%20%20AI%20web%20design"
    >
      <img className="btn" src={whatsapp} alt="" />
    </a>
  );
};
