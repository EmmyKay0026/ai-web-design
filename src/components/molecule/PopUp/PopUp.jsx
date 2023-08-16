import React, { useState, useEffect } from "react";
import whatsapp from "../../../assets/whatsapp.png";
import { Button } from "../../atom/Button/Button";

const Popup = ({ delay }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <div className={`popup ${isVisible ? "visible" : ""}`}>
      <div className="popup-content">
        <span onClick={handleClose} className="btn popup-close">
          &times;
        </span>
        <div className="popup-cont">
          <h2>Do you have a question?</h2>
          <p>
            If you have any inquiries as regards the classes or registration
            process, there is a WhatsApp button located at the bottom right
            corner of your screen. You can also send a message now.
          </p>
          <div className="d-flex popup-cta">
            {/* <Button children="Enroll Now" className="nav-btn" /> */}
            <a
              target="_blank"
              className="popup-whatsapp btn"
              href="https://wa.me/+2348104064231?text=Hello,%20my%20name%20is_________%20and%20I%20would%20like%20to%20know%20more%20about%20%20AI%20web%20design"
            >
              {/* <div className="popup-whatsapp-img-cont">
                <img src={whatsapp} alt="" />
              </div> */}
              <button>Send a message</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
