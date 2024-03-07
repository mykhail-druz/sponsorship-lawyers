"use client";
import { IoIosArrowUp } from "react-icons/io";
import React, { useState, useEffect } from "react";
import styles from "./ButtonUp.module.css";

export const ButtonUp = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 400) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToContact = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const contactSection = document.getElementById("contact");

    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={`${isVisible ? styles.button__container : "invisible"}`}>
      <button
        onClick={scrollToContact}
        className={styles.button}
        aria-label="Scroll to contact"
      >
        <IoIosArrowUp />
      </button>
    </div>
  );
};
