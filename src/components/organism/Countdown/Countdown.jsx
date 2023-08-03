import React, { useEffect, useState } from "react";

export const Countdown = ({ targetDate }) => {
  const calculateCountdown = (targetDate) => {
    const currentTime = new Date().getTime();
    const targetTime = new Date(targetDate).getTime();
    const remainingTime = targetTime - currentTime;

    if (remainingTime <= 0) {
      setIsActive(false);
      return 0;
    }

    return Math.ceil(remainingTime / 1000);
  };

  const [countdown, setCountdown] = useState(calculateCountdown(targetDate));
  const [isActive, setIsActive] = useState(true);
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    let interval = null;
    if (isActive && countdown > 0) {
      interval = setInterval(() => {
        setCountdown((prevTime) => prevTime - 1);
      }, 1000);
    } else if (!isActive && countdown !== 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, countdown]);

  // Function to format the countdown in DD:HH:MM:SS
  const formatCountdown = () => {
    const days = Math.floor(countdown / (60 * 60 * 24));
    const hours = Math.floor((countdown % (60 * 60 * 24)) / (60 * 60));
    const minutes = Math.floor((countdown % (60 * 60)) / 60);
    const seconds = countdown % 60;

    return `${String(days).padStart(2, "0")}:${String(hours).padStart(
      2,
      "0"
    )}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  };

  return (
    <div className={`countdown ${isSticky ? "sticky" : ""}`}>
      {isActive && (
        <div>
          Early birds end in{" "}
          <span className="countdown-time">{formatCountdown()}. </span>
          <a
            target="__blank"
            href="https://selar.co/7076v9"
            className="countdown-cta btn"
          >
            Enroll Now
          </a>
        </div>
      )}
    </div>
  );
};
